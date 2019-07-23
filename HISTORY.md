## 1. npm 설치   
   
## 2. `react package 설치`
   * #npm install -g create-react-app@2.1.8 <br>
   * #@오른쪽은 버전 <br>
   * #빈 폴더에서 실행해야 설치됨 <br>

## 3. `create react app`
   * #create-react-app 폴더경로


## 4. `server 실행`
   * #npm run start

## 5. `React app 배포 버전 만들기`
   * #npm run build

## 20190723 실습 내용
src/index.js
===
`import App from './App';`<br>
`ReactDOM.render(<App />, document.getElementById('root'));`<br>
-> App.js로 생성한 Component를 id 값이 root인 태그에 생성시켜준다.

src/App.js
===
return(); <- () 안에 html tag가 하나는 꼭 있어야 에러가 나지 않는다.
