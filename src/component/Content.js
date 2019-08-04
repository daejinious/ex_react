import React, { PureComponent } from 'react';
import Props from 'prop-types';

class Content extends PureComponent {
  static propTypes = {
    title: Props.string.isRequired,
    desc: Props.string.isRequired
  };

  render() {
    const { title, desc } = this.props;
    return (
      <article>
        <h2>{title}</h2>
        {desc}
      </article>
    );
  }
}

export default Content;
