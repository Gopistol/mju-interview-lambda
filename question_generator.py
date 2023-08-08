import openai
import json

openai.api_key = 'MyAPIkey'

# /tmp에서 text로 변환된 pdf파일 이력서(자기소개서) 읽어오기
with open("./tmp/text.txt", "r") as f:
    text = f.read()

# 질문 생성
completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {
            "role": "system",
            "content": "너는 백엔드 개발자 면접관이야. 면접자의 자기소개서를 보고 관련된 질문 5개를 해줘. 반환 형식은 1. ~, 2. ~ 이렇게 해줘",
        },
        {
            "role": "user",
            "content": text,
        }
    ],
)

response = completion["choices"][0]["message"]["content"]

# GPT response 파싱
questions = response.strip().split('\n')
response_array = []
for question in questions:
    elements = question.strip().split('. ')
    id = elements[0]
    content = elements[1]
    response = """{"id":""", id, """"content": """, content, """}"""
    response_array += response

print(json.dumps(response_array, ensure_ascii=False))

