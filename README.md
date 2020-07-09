# 댓글 프로젝트 구현하기

- 본 프로젝트는 Fast campus의 Byte React Degree 강의 수강생을 대상으로 한 과제입니다.

---

# ToDo
- [x] api로 부터 받아온 데이터를 redux의 state로 뿌린다
- [x] 페이지 네이션 처리를 한다
- [x] 첫 페이지 로딩시 댓글을 불러온다. (입력, 수정, 삭제시에도 작동)
- [ ] 댓글 입력이면 1페이지로 수정 후 현재 보고 있는 페이지를 유지한다
- [ ] 프론트앤드에서 api 호출을 이해한다 (GET POST PUT DELETE -> 모든 메서드 사용하기)
- [x] async / awiat 혹은 promise를 활용하여 전달받은 api 응답을 가공
- [x] redux thunk를 활용해 redux 작성하기
- [ ] 리펙토링 - 반복되는 구조 개선하기
- [x] reducer 데이터 깊이에 대한 이해
- [x] React hookuseSelector, useEffect의 사용

## 프로젝트 소개
- 프론트 앤드 개발자는 백엔드와 협업을 해서 페이지를 완성합니다. API 서버와 통신을 해서 작동하는 댓글 프로젝트를 Redux를 적용해서 완성해주세요.

## 프로젝트 목표
- 아래와 같이 댓글 불러오기, 작성 , 수정, 삭제가 작동하도록 기능을 완성해주세요

![complete](https://user-images.githubusercontent.com/12206933/83601436-8e15b780-a5ab-11ea-91ad-04a302579c90.gif)

## 구현시 요청 사항
- 페이지 클릭 : 현재 보고 있는 페이지 활성화
- 작성하고 난뒤 -> 다른페이지를 보고 있더라도 1페이지로 + 폼이 초기화
- 수정하고 난뒤 -> 현재 보고 있는 페이지 유지 + 폼이 초기화
- 삭제하고 난뒤 -> 1페이지로 돌아오기

## 개발 환경 설정하기
1. chrome 웹스토어에서 [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) 를 설치합니다.

2. 프로젝트를 클론한 뒤, 클론한 프로젝트의 폴더로 가서 의존성 패키지를 설치합니다.
```
$ git clone https://github.com/parkjunyoung/react-bytedegree-comment.git
$ cd react-bytedegree-comment
$ npm install
```
3. 해당 프로젝트로 이동 후 터미널에서 해당 npm run api 또는 yarn run api 입력하면 API 서버가 동작하고,
http://localhost:4000/comments 에서 확인 하실 수 있습니다.

4. 터미널을 하나 더 킨 후 npm start 입력하고 chrome 브라우저에서 http://localhost:3000를 주소창에 입력후 소스를 작성하면서 진행해주세요.


## API 요청하기
- [7-8주차] 7장 | 15. json-server 강좌를 참고해주세요.
- http://localhost:4000/comments 입력하면 data.json 에 적은 데이터를 확인 할 수 있습니다.
- API 를 통해 입력하거나 수정하면 data.json 파일내용도 변경됩니다.
- 총 댓글수를 불러 오는 API 가 없으므로 /comments 로 받아서 직접 계산합니다.
- 한페이지에 4개의 게시물이 보이고, 최근 게시물부터 정렬해서 3페이지를 보고 싶은 경우는 아래와 같습니다.
GET /comments?_page=3&_limit=4&_order=desc&_sort=id

| method | url |
|--|--|
| GET | /comments |
| GET | /comments/{commentId} |
| POST | /comments  |
| PUT | /comments/{commentId} |
| DELETE | /comments/{commentId} |

## 과제 제출 방식
[과제 제출 가이드](./submission_guide.md)를 참고해 주세요.

## 구현시 참고사항
- 리듀서를 다루기 번거롭게 느껴진다면 immer 패키지를 사용해보세요.


