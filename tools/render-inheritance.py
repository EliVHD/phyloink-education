"""Render the two original inheritance walkthroughs. Authoring only; requires ReportLab."""
import html
import json
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak

root = Path(__file__).resolve().parents[1]
folder = root / 'labs' / 'inheritance'
data = json.loads((folder / 'activity.json').read_text(encoding='utf-8'))
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='LabTitle', fontName='Helvetica-Bold', fontSize=20, leading=25, textColor=colors.HexColor('#24372f'), spaceAfter=12))
styles.add(ParagraphStyle(name='LabBody', fontName='Helvetica', fontSize=10.5, leading=15, spaceAfter=10))
styles.add(ParagraphStyle(name='LabSmall', fontName='Helvetica', fontSize=9, leading=12, spaceAfter=9))
story, sections = [], []
for index, item in enumerate(data['walkthroughs']):
    setup, trial = item['setup'], item['sample']
    cross = f"{setup['parent1']} x {setup['parent2']}"
    locus_text = 'one locus' if setup['loci'] == 1 else 'two loci'
    controls = f"Learn > Inheritance lab. Choose {locus_text}; parents {cross}. Sample size {trial['size']}, seed {trial['seed']}."
    story.extend([Paragraph('PHYLOINK / ADAPTABLE WALKTHROUGH', styles['LabSmall']), Paragraph(html.escape(item['title']), styles['LabTitle']), Paragraph('Name: ________________________    Date: ______________', styles['LabBody']), Paragraph(html.escape(item['introduction']), styles['LabBody']), Paragraph(html.escape(controls), styles['LabBody']), Paragraph(html.escape(data['assumptions']), styles['LabSmall']), Paragraph(html.escape(data['notation']), styles['LabSmall'])])
    questions = []
    for number, question in enumerate(item['questions'], 1):
        story.extend([Paragraph(f'{number}. {html.escape(question)}', styles['LabBody']), Spacer(1, 21 * mm)])
        questions.append(f'<li><p>{html.escape(question)}</p><div class="answer"></div></li>')
    story.append(Paragraph('Record actual sampled counts. Expected ratios are probabilities, not guaranteed family counts. Lab state is temporary; use this page to keep your own notes.', styles['LabSmall']))
    if index == 0:
        story.append(PageBreak())
    sections.append(f'<section><p class="eyebrow">PHYLOINK / ADAPTABLE WALKTHROUGH</p><h1>{html.escape(item["title"])}</h1><p>Name: ________________________ &nbsp; Date: ______________</p><p>{html.escape(item["introduction"])}</p><p>{html.escape(controls)}</p><div class="assumptions"><p>{html.escape(data["assumptions"])}</p><p>{html.escape(data["notation"])}</p></div><ol>{"".join(questions)}</ol><footer>Record actual sampled counts. Expected ratios are probabilities, not guaranteed family counts. Lab state is temporary; keep your own notes. Original material: 0BSD. Background and limitations: SOURCES.md.</footer></section>')

def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont('Helvetica', 8)
    canvas.drawString(18 * mm, 12 * mm, 'PhyloInk education / Original material: 0BSD / See SOURCES.md for background')
    canvas.drawRightString(A4[0] - 18 * mm, 12 * mm, f'{doc.page} / 2')
    canvas.restoreState()

SimpleDocTemplate(str(folder / 'student-handout.pdf'), pagesize=A4, rightMargin=18 * mm, leftMargin=18 * mm, topMargin=17 * mm, bottomMargin=20 * mm, title='PhyloInk - two inheritance walkthroughs', author='PhyloInk contributors').build(story, onFirstPage=footer, onLaterPages=footer)
page = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>PhyloInk - inheritance walkthroughs</title><style>body{font:15px/1.5 sans-serif;color:#24372f;background:#edf1e9;margin:0}section{box-sizing:border-box;max-width:800px;margin:24px auto;background:white;padding:48px}h1{font-size:27px;margin:10px 0 20px}.eyebrow,footer{font-size:11px}.assumptions{font-size:12px;border:1px solid #bbc7b7;padding:8px 14px}.answer{height:80px;border-bottom:1px solid #bbc7b7}li{padding-left:8px}footer{margin-top:28px}@page{size:A4;margin:16mm}@media print{body{background:white;font-size:10.5pt}section{max-width:none;margin:0;padding:0;break-after:page}section:last-child{break-after:auto}.answer{height:20mm}.assumptions{font-size:9pt}h1{font-size:20pt}footer{font-size:8pt}}@media(max-width:600px){section{padding:24px;margin:0}}</style></head><body>' + ''.join(sections) + '</body></html>\n'
(folder / 'student-handout.html').write_text(page, encoding='utf-8', newline='\n')
print('Rendered two-page inheritance PDF and standalone HTML from activity.json.')
