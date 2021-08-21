# Solar Connect TodoList

## Library

  * typescript  ^4.3.5
  * styled-components  ^5.3.0
  * antd  ^4.16.12  ( with moment )



## Install & Start

```bash
$ npm install
$ npm run start
```



## Deploy ( netlify)

[ssong10 TodoList](https://optimistic-gates-6ce6b7.netlify.app/)



## 요구사항

* 완성하기

  * moment 를 활용하여 현재 시간을 표시
  * 기본적인 동작 유연하게 작동

  

* 기능 추가

  * DatePicker 사용하여 날짜의 입력받기

  

* 예외 추가하기

  * 로그인 실패, 입력값이 없을때 modal info 활용하여 표시

  

* 버그 수정

  * autoIncrement 가 부자연스럽고 다루기 까다로워 제거
  * 고유 순번을 사용하기 위하여 Date.now() 로 id 설정

  

* 기타

  * 로그인 기능 -> 잠금화면처럼 패스워드만 사용하여 TodoList 접근 가능하게 이용
    * 로컬로 작용하는 현재 상황상 안전하지 않음 
    * password - a1
    * Promise 이용 일정시간 뒤에 로그인

  * 정렬기능 -> 생성순, 완료 시간순으로 정렬가능
  * 완료 항목 제거 -> filter 이용하여 완료항목 제거 기능

  * Todo 변경 -> text, 시간 표기창에 더블클릭을 이용하여 해당 값 변경 가능
    * 블러, esc, enter 이용하여 입력창 조작 가능

