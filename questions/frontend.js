const questions = `Box model에 대해 설명해주세요.
content-box와 border-box는 어떤 점이 다른가요?
Block 요소와 Inline 요소는 어떤 점이 다른가요?
Flex 속성을 설명해주세요.
Element를 숨길 수 있는 방법을 설명해주세요.
HTML
CSS
ES5
ES6+
DOM & BOM
브라우저, 동작원리
웹 접근성과 모바일 웹 환경
React
NPM & JSON
HTTP & RestAPI
쿠키 & 세션 & 토큰
SSR & CSR
CORS & Proxy
정적웹사이트, 동적웹사이트
브라우저의 렌더링 동작과정을 짧게 설명해보세요.
Object.create의 역할은 무엇인가요?
자바스크립트에서 모듈내의 private한 속성을 만드는 방법을 아는대로 쓰세요.
JS에서 재귀호출로 인한 stack overflow를 막을 수 있는방법은?
closure 와 스코프관계를 설명해보세요.
본인이 경험한 OOP관점에서의 객체분리를 설명하고, 느낀 장점을 말해보세요.
== 보다, === 를 써야할때는?
DFS, BFS를 통한 트리탐색방법 중 본인이 경험(사용)했던 방식은 무엇이고, 동작원리를 짧게 설명해보세요.
ES6의 Class extends 내부 동작원리에 대해서 설명해보세요.
객체를 탐색하는 방법에 대해서 2가지를 작성해보세요.
NodeList 타입을, Array에 있는 reduce메서드를 사용하는 방법은?
arrow 함수의 this가 결정되는 방식을 설명해보세요.
immutable과 mutable은 무엇이 다른것인가요?
undefined와 null의 차이점을 설명하세요.
아래처럼 동작하는 flatten함수를 reduce를 활용해서 만들어보세요.
객체를 복사해서 새로운 객체를 만들고 싶습니다. 코드를 구현해보세요. (객체의 깊이는 1단계만 있다고 가
Array.from 이 모든 브라우저에서 동작하도록 polyfill코드를 만들어보세요.
프로그래밍 요구사항을 받았을때, 구현하기 전까지 어떤 과정을 거치시나요?
prototype 의 동작방식에 대해서 설명해보세요.`

const textArray = questions.split('\n').map((line, index) => ({ id: index + 1, text: line }));

console.log(textArray);