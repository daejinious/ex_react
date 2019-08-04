import React, { PureComponent } from 'react';
import Props from 'prop-types';

class TOC extends PureComponent {
  static propTypes = {
    datas: Props.array.isRequired
  };

  render() {
    const datas = this.props.datas;
    const list = [];
    for (const props in datas) {
      list.push(<li key={datas[props].id}><a href={'/content/' + datas[props].id}>{datas[props].title}</a></li>);
    }

    return (
      <nav>
        <ul>
          {list}
        </ul>
      </nav>
    );
  }
}

export default TOC;
