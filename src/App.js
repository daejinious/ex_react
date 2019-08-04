import React, { PureComponent } from 'react'; // PureComponent로 수정한 이유: https://wonism.github.io/react-pure-component/ 참조
import TOC from './component/TOC';
import Content from './component/Content';
import Subject from './component/Subject';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" subTitle="World Wide Web!" />
        <TOC />
        <Content title="HTML" desc="HTML this HyperText Markup Language." />
      </div>
    );
  }
}

export default App;
