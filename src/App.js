import React, { PureComponent } from 'react'; // PureComponent로 수정한 이유: https://wonism.github.io/react-pure-component/ 참조
import TOC from './component/TOC';
import Content from './component/Content';
import Subject from './component/Subject';
import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'HTMl',
      subject: { title: 'Web', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!!' },
      contents: [
        { id: 1,  title: 'HTML', desc: 'HTML is for information' },
        { id: 2,  title: 'CSS', desc: 'CSS is for design' },
        { id: 3,  title: 'Javascript', desc: 'JavaScript is for interactive' }
      ]
    };
  }

  render() {
    let $title = null;
    let $desc = null;
    if (this.state.mode.toString() === 'welcome') {
      $title = this.state.welcome.title;
      $desc = this.state.welcome.desc;
    } else {
      $title = this.state.contents[0].title;
      $desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/*<Subject title={this.state.subject.title} subTitle={this.state.subject.sub} />*/}
        <header>
          <h2><a href="/" onClick={function (e) {
            console.log(e);
            e.preventDefault();
            // this.state.mode = 'welcome'; // 직접적으로 state 값은 변경 되지 않는다.
            // setState 함수를 이용하여 state의 값을 변경
            // 변경된 state 값은 .bind(this) 를 통해 브라우저에 적용된다.
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h2>
          {this.state.subject.sub}
        </header>
        <TOC datas={this.state.contents} />
        <Content title={$title} desc={$desc} />
      </div>
    );
  }
}

export default App;
