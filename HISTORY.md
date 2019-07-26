## 1. npm 설치   
   
## 2. `react package 설치`
   * $npm install -g create-react-app@2.1.8 <br>
   * @오른쪽은 버전 <br>
   * 빈 폴더에서 실행해야 설치됨 <br>

## 3. `create react app`
   * $create-react-app 폴더경로


## 4. `server 실행`
   * $npm run start

## 5. `React app 배포 버전 만들기`
   * $npm run build

## 20190726 실습 내용
ESLint를 이용하여 코드 최적화 작업
Airbnb 코드형식 적용

`pure.html을 Component를 사용하여 변경`
- src/App.js



## 20190725 실습 내용
`component를 이용하여 HTML 코딩`
src/App.js
Pure Component를 사용하여 react 성능 향상 시키기. <br>
[react성능 향상 시키기](https://wonism.github.io/react-pure-component/) 참조
<br>

`react를 사용하지 않고 HTML 코딩`
public/pure.html

## 20190723 실습 내용
`nginx 배포 관련 내용: https://codechacha.com/ko/deploy-react-with-nginx/`

src/index.js
===
`import App from './App';`<br>
`ReactDOM.render(<App />, document.getElementById('root'));`<br>
-> App.js로 생성한 Component를 id 값이 root인 태그에 생성시켜준다.

src/App.js
===
return(); <- () 안에 html tag가 하나는 꼭 있어야 에러가 나지 않는다.
