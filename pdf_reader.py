import json
import boto3
import pdfplumber
from io import BytesIO

s3_client = boto3.client('s3')


def lambda_handler(event, context):
    bucket_name = 'mju-interview-bucket-for-lambda'
    file_name = 'opci.pdf'

    s3_response = s3_client.get_object(Bucket=bucket_name, Key=file_name)

    file_data = s3_response["Body"].read()

    text = ''

    pdf = pdfplumber.open(BytesIO(file_data))

    for page in pdf.pages:
        text = page.extract_text()

    return {
        'statusCode': 200,
        'body': json.dumps(text, ensure_ascii=False)
    }
