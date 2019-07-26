import React, { PureComponent } from 'react'; // PureComponent로 수정한 이유: https://wonism.github.io/react-pure-component/ 참조
import './App.css';

class Content extends PureComponent {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        HTML this HyperText Markup Language.
      </article>
    );
  }
}

class TOC extends PureComponent {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Subject extends PureComponent {
  // 최신버전의 js에서는 class 안에 있는 function을 명시 하지 않아도 사용 가능하다.
  render() {
    // return문 안에는 하나의 최상의 태그를 사용하여야 한다.
    return (
      <header>
        <h2>WEB</h2>
        world wide web!
      </header>
    );
  }
}

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Subject />
        <TOC />
        <Content />
      </div>
    );
  }
}

export default App;
