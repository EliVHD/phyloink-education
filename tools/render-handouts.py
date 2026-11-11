"""Generate the three printable handouts from activity.json and 300 dpi figure PNGs.

Requires reportlab. First render each referenced SVG to tmp/figures/<folder>-<page>.png
at 300 dpi with the same browser/font used for project preparation. No network use.
"""
from pathlib import Path
import json
from xml.sax.saxutils import escape
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, PageBreak

ROOT = Path(__file__).resolve().parent.parent
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="ActivityTitle", fontName="Helvetica-Bold", fontSize=18, leading=21, textColor=colors.HexColor("#20362e"), spaceAfter=7*mm))
styles.add(ParagraphStyle(name="ActivityText", fontName="Helvetica", fontSize=10, leading=14, spaceAfter=3*mm))
styles.add(ParagraphStyle(name="ActivityCaption", fontName="Helvetica", fontSize=8, leading=10, textColor=colors.HexColor("#41584b"), spaceAfter=4*mm))
styles.add(ParagraphStyle(name="ActivityQuestion", fontName="Helvetica", fontSize=10, leading=13, spaceAfter=2*mm))
styles.add(ParagraphStyle(name="ActivitySource", fontName="Helvetica", fontSize=7, leading=9, spaceBefore=3*mm))

def text(value):
    for old,new in [("—","-"),("–","-"),("‑","-"),("’","'"),("‘","'"),("“",'"'),("”",'"')]:
        value=value.replace(old,new)
    return escape(value)

def footer(canvas,doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#b5c8ba"))
    canvas.line(15*mm,13*mm,195*mm,13*mm)
    canvas.setFont("Helvetica",7)
    canvas.setFillColor(colors.HexColor("#41584b"))
    canvas.drawString(15*mm,9*mm,"PhyloInk education | Adaptable example activity")
    canvas.drawRightString(195*mm,9*mm,f"{doc.page}")
    canvas.restoreState()

for folder in sorted((ROOT/"examples").iterdir()):
    activity=json.loads((folder/"activity.json").read_text(encoding="utf-8"))
    flow=[]
    for index,page in enumerate(activity["pages"]):
        if index:
            flow.append(PageBreak())
        title=activity["title"] if index==0 else activity["title"]+" - continued"
        flow.append(Paragraph(text(title),styles["ActivityTitle"]))
        if index==0:
            flow.append(Paragraph(text(activity["purpose"]),styles["ActivityText"]))
            flow.append(Paragraph(text(activity["instructions"]),styles["ActivityText"]))
            flow.append(Paragraph("Name: __________________________  Date: ______________",styles["ActivityText"]))
        png=ROOT/"tmp"/"figures"/f"{folder.name}-{index+1}.png"
        flow.append(Image(str(png),width=180*mm,height=page["figureHeightMm"]*mm,kind="proportional"))
        flow.append(Paragraph(text(page["caption"]),styles["ActivityCaption"]))
        flow.append(Paragraph("<b>Text description:</b> "+text(activity["relationshipDescription"]),styles["ActivityCaption"]))
        for number,question in enumerate(page["questions"],1):
            flow.append(Paragraph(f"<b>{number}.</b> {text(question)}",styles["ActivityQuestion"]))
            flow.append(Spacer(1,(7 if page["figureHeightMm"]>100 else 17)*mm))
        flow.append(Paragraph(text(activity["sourceLine"]),styles["ActivitySource"]))
    document=SimpleDocTemplate(str(folder/"student-handout.pdf"),pagesize=A4,rightMargin=15*mm,leftMargin=15*mm,topMargin=17*mm,bottomMargin=18*mm,title=activity["title"],author="PhyloInk education",pageCompression=1)
    document.build(flow,onFirstPage=footer,onLaterPages=footer)
    print(folder.name, "PDF created")
