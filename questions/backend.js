const questions = `배열과 링크드 리스트의 차이점에 대해서 설명해 주세요.
스택과 큐에 대해서 설명해 주세요.
우선순위 큐에 대해서 설명해 주세요.
해시테이블에 대해서 설명해 주세요.
그래프와 트리의 차이점에 대해서 설명해 주세요.
최소 신장 트리에 대해서 설명해 주세요.
힙 자료구조에 대해 설명해 주세요.
힙의 삽입과 삭제는 어떻게 이루어지나요?
이진 탐색 트리에 대해 설명해 주세요.
포화(Perfect) 이진트리, 완전(Complete) 이진트리, 정(Full) 이진트리의 차이점에 대해 각각 설명해주세요.
레드 블랙 트리에 대해 설명해주세요.
레드 블랙 트리의 삽입과 삭제 과정에 대해서 말해보세요.
AVL에 대해 설명해주세요.
String Comparison Complexity에서 시간 복잡도가 최악인 경우는? 발생할 확률은?
String Comparison Complexity를 개선할 수 있는 방법은? (길이비교, 해시)
substr(), length(), indexOf() 를 직접 구현해보자
비교기반 자료구조/탐색알고리즘에 적용하면 생기는 문제점과 해결책 (hash / graph)
String Literal과 언어에서 String의 구현방법
Substring Problem의 종류와 원리를 설명하시오
JOIN에 대해서 설명해 주세요.
내부 조인, 외부 조인, 셀프 조인
SQL Injection이란
파티셔닝과 샤딩에 대해서 설명해 주세요.
ORM이란 무엇인가요?
NoSQL이란 무엇인가요?
스키마란 무엇인가요?
View란 무엇인가요?
정규화에 대해서 설명해 주세요.
반정규화란?
정규화의 종류에 대해서 말해보세요.
함수적 종속성이란 무엇인가요?
인덱스란 무엇인가요? 어떻게 동작 하나요?
인덱스의 알고리즘에는 어떤 것들이 있나요?
Table Full Scan과 Index Range Scan 을 설명해주세요.
클러스터드 인덱스와 비클러스터드 인덱스란 무엇인가요?`

const textArray = questions.split('\n').map((line, index) => ({ id: index + 1, text: line }));

console.log(textArray);