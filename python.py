import pdfplumber
pdf = pdfplumber.open(PDF_FILE_PATH)
pages = pdf.pages
text = ""
for page in pages:
    sub = page.extract_text()
    text += sub
# text + 질문 스크립트 합쳐서 GPT에게 입력
print(text)

# DB -> 이력서 text
# text + script => GPT3.5 => JSON형식으로 질문 받아서 프론트에 보내기
