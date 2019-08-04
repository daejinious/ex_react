import React, { PureComponent } from 'react';
import Props from 'prop-types';

class Subject extends PureComponent {
  // 최신버전의 js 에서는 class 안에 있는 function 을 명시 하지 않아도 사용 가능하다.
  static propTypes = {
    title: Props.string.isRequired,
    subTitle: Props.string.isRequired
  };

  render() {
    const { title, subTitle } = this.props;
    // return 문 안에는 하나의 최상의 태그를 사용하여야 한다.
    return (
      <header>
        <h2><a href="/">{title}</a></h2>
        {subTitle}
      </header>
    );
  }
}

export default Subject;
