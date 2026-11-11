"""Verify and package the bounded examples using Python's standard library only."""
from pathlib import Path
import hashlib,json,re,zipfile,xml.etree.ElementTree as ET

ROOT=Path(__file__).resolve().parent.parent
sha=lambda b:hashlib.sha256(b).hexdigest()
top={"README.md","activity.json","student-handout.pdf","student-handout.html","teacher-notes.md","project.treeproject.json","source.nwk","SOURCES.md","source-record.json","verification.json","application-build-manifest.json","LICENSE","manifest.json"}
artwork={"annotation_review.json","artifact_manifest.json","clade_mapping.csv","clade_members.json","display_graph.json","legend.html","omitted_tips.json","print-sheet.html","projection_recipe.json","qa_report.json","README.txt","reduced_tree.nwk","references.bib","references.txt","render_scene.json","software_build.json","source_manifest.json","source_paths.json","source_tree.nwk","sources-and-methods.html","tree_labeled.svg","tree_provenance.json","tree_unlabeled.svg","tree-caption.txt","tree.treeproject.json"}
results=[]
for folder in sorted((ROOT/"examples").iterdir()):
    (folder/"LICENSE").write_bytes((ROOT/"LICENSE").read_bytes())
    doc=json.loads((folder/"project.treeproject.json").read_text(encoding="utf-8"))
    record=json.loads((folder/"source-record.json").read_text(encoding="utf-8"))
    verification=json.loads((folder/"verification.json").read_text(encoding="utf-8"))
    source=(folder/"source.nwk").read_bytes()
    primary=doc["sources"][doc["scientific"]["primarySourceId"]]
    assert sha(source)==record["sourceSha256"]==primary["sha256"]
    assert source.decode("utf-8")==primary["content"]
    assert verification["browserOpenSave"].startswith("passed"),folder.name
    assert verification["browserExport"]["status"]=="passed"
    assert verification["printReview"].startswith("Four PDF pages")
    expected=sorted(t["id"] for t in record["selectedTips"])
    graphs=[]
    for view in doc["structuredViews"].values():
        assert sorted(view["graph"]["representedTips"])==expected
        assert view["qa"]["status"]=="checked" and view["scene"]["measurements"]["fontStatus"]=="available"
        graphs.append(view["graph"])
        directory=folder/"artwork"/view["scene"]["settings"]["kind"]
        groups=[]
        for file in ["tree_labeled.svg","tree_unlabeled.svg"]:
            group=ET.parse(directory/file).find(".//{http://www.w3.org/2000/svg}g[@id='tree-artwork']")
            assert group is not None
            groups.append(ET.tostring(group))
        assert groups[0]==groups[1],"Labeled/unlabeled artwork differs"
        assert (directory/"source_tree.nwk").read_bytes()==source
    assert all(g==graphs[0] for g in graphs),"Comparison views have different graphs"
    paths=[]
    for file in sorted(folder.rglob("*")):
        if file.is_dir():continue
        assert not file.is_symlink()
        relative=file.relative_to(folder)
        assert (len(relative.parts)==1 and file.name in top) or (len(relative.parts)==3 and relative.parts[0]=="artwork" and relative.parts[1] in {"rectangular","circular"} and file.name in artwork),relative
        if file.name!="manifest.json":paths.append(file)
    inventory={"format":"phyloink-education-example","version":1,"example":folder.name,"verifiedAt":"2026-11-11","sourceSha256":sha(source),"files":[{"path":p.relative_to(folder).as_posix(),"bytes":p.stat().st_size,"sha256":sha(p.read_bytes())} for p in paths]}
    (folder/"manifest.json").write_text(json.dumps(inventory,indent=2)+"\n",encoding="utf-8",newline="\n")
    paths.append(folder/"manifest.json")
    target=ROOT/"downloads"/(folder.name+".zip")
    with zipfile.ZipFile(target,"w",compression=zipfile.ZIP_DEFLATED,compresslevel=9) as archive:
        for file in sorted(paths):
            info=zipfile.ZipInfo(folder.name+"/"+file.relative_to(folder).as_posix(),date_time=(2026,11,11,0,0,0))
            info.compress_type=zipfile.ZIP_DEFLATED
            archive.writestr(info,file.read_bytes())
    with zipfile.ZipFile(target) as archive:
        assert archive.testzip() is None
        assert set(archive.namelist())=={folder.name+"/"+p.relative_to(folder).as_posix() for p in paths}
        for entry in inventory["files"]:
            assert sha(archive.read(folder.name+"/"+entry["path"]))==entry["sha256"]
    target.with_suffix(".zip.sha256").write_text(sha(target.read_bytes())+"  "+target.name+"\n",encoding="utf-8",newline="\n")
    results.append({"example":folder.name,"files":len(paths),"zipBytes":target.stat().st_size,"sha256":sha(target.read_bytes())})

# Check repository-relative Markdown and editable-handout links. Provider links
# remain dated references; no network or scheduled monitoring is performed.
for file in list(ROOT.rglob("*.md"))+list(ROOT.glob("examples/*/student-handout.html")):
    if "tmp" in file.relative_to(ROOT).parts or ".git" in file.relative_to(ROOT).parts:continue
    body=file.read_text(encoding="utf-8")
    links=re.findall(r"\[[^\]]*\]\(([^)]+)\)",body) if file.suffix==".md" else re.findall(r'(?:href|src)="([^"]+)"',body)
    for link in links:
        if re.match(r"^[a-z]+:",link) or link.startswith("#"):continue
        target=(file.parent/link.split("#")[0]).resolve()
        assert target.is_relative_to(ROOT) and target.exists(),(file,link)
(ROOT/"downloads"/"inventory.json").write_text(json.dumps({"verifiedAt":"2026-11-11","examples":results},indent=2)+"\n",encoding="utf-8",newline="\n")
print(json.dumps(results,indent=2))
