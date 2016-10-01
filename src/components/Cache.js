import React, { Component } from 'react';

export default class Cache extends Component {
  render() {
    return (
      <div>Cache {this.props.params.cacheId}</div>
    );
  }
}
