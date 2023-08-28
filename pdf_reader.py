import json
import boto3
import pdfplumber
from io import BytesIO

s3_client = boto3.client('s3')
bucket_name = 'MY_BUCKET_NAME'
file_name = 'PDF_FILE_NAME'

def lambda_handler(event, context):
    s3 = boto3.resource('s3')
    # 버킷 내 파일이 존재하는지 검사
    try:
        s3.Object(bucket_name, file_name).load()
    except Exception as e:  # 존재하지 않을 때
        return {
            'statusCode': 500,
            'body': '버킷 내 파일이 없습니다.'
        }
    else:
        # test.pdf 파일이 있을 때
        s3_response = s3_client.get_object(Bucket=bucket_name, Key=file_name)

        file_data = s3_response["Body"].read()

        text = ''

        pdf = pdfplumber.open(BytesIO(file_data))

        for page in pdf.pages:
            text += page.extract_text()

        # 변환 후 파일 삭제
        s3_client.delete_object(Bucket=bucket_name, Key=file_name)

        return {
            'statusCode': 200,
            'body': text
        }
