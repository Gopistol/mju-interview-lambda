const questions = `OSI 7계층에 대해서 설명해주세요.
TCP/IP 4계층에 대해서 설명해주세요.
DNS가 무엇인가요?
www.naver.com에 접속할때 일어나는 일에 대해 설명해주세요.
도메인 이름으로 실제 IP를 어떻게 찾을 수 있는지 흐름을 설명해 주세요.
유니캐스트, 멀티캐스트, 브로드캐스트란?
TCP와 UDP의 차이에 대해서 설명해 주세요.
TCP 헤더에 대해서 설명해 주세요.
MTU가 무엇인가요?
3-way hand shake, 4-way hand shake 흐름에 대해서 설명해주세요.
HTTP 프로토콜에 대해서 아는대로 말해주세요.
HTTP와 HTTPS 의 차이는 무엇인가요?
HTTPS가 동작하는 방식에 대해서 설명해 주세요.
HTTP Method 종류 및 역할
HTTP 1.0과 1.1의 차이는 무엇인가요?
HTTP2와 그 특징에 대해서 설명해 주세요.
HTTP 헤더의 구조에 대해서 설명해 주세요.
keep-alive 헤더에 대해서 설명해 주세요.
HTTP GET과 POST의 차이는 무엇인가요?
쿠키와 세션에 대해서 설명해 주세요.
www.google.com에 접속할때 일어나는 일
웹브라우저에서 서버로 요청했을 때, 흐름을 설명해주세요.
CORS란 무엇인가요?
웹 서버와 웹 어플리케이션 서버(WAS)의 차이는 무엇인가요?
REST API에 대해서 설명해 주세요.
REST ful
API Gateway란 무엇인가요?
API Gateway가 다운되면 모든 API를 사용 못할지도 모르는데, 어떤 방안을 마련해야 할까요`

const textArray = questions.split('\n').map((line, index) => ({ id: index + 1, text: line }));

console.log(textArray);