import json
import openai

openai.api_key = 'My API key'


def lambda_handler(event, context):
    # TODO implement
    body = event['body']
    json_body = json.loads(body)

    role = json_body['role']
    content = json_body['content']

    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": f"너는 {role} 면접관이야. 면접자의 자기소개서를 보고 관련 질문 5개를 해줘.",
            },
            {
                "role": "system",
                "content": "질문할 때, 서론을 포함하지 말고 질문만 해줘.",
            },
            {
                "role": "system",
                "content": "질문은 면접자에게 대답을 구하거나 궁금한 점을 물어보는 형식이어야 해. 응답 형식은 1. 질문 내용, 2. 질문 내용... 처럼 해줘.",
            },
            {
                "role": "user",
                "content": content,
            }
        ],
    )

    response = completion["choices"][0]["message"]["content"]

    response_array = []

    questions = response.strip().split('\n')

    if len(questions) != 5:  # GPT-3.5의 응답으로 받은 질문이 5개가 아닐 경우 재요청
        return {
            'statusCode': 502,
            'body': questions
        }

    for question in questions:
        elements = question.strip().split('. ')
        id = elements[0]
        content = elements[1]
        response = """{"id":""", id, """"content": """, content, """}"""
        response_array += response

    return {
        'statusCode': 200,
        'body': json.dumps(response_array, ensure_ascii=False),
        "headers": {
            "Content-Type": "application/json"
        }
    }
