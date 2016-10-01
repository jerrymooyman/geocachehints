import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import NoResults from './NoResults'

import styles from './styles/SearchResults.styles'

export default class SearchResults extends Component {
  renderResults() {
    return (
      <NoResults />
    )
  }

  render() {
    return (
      <div style={styles.main}>
        <Paper zDepth={2} >
          {this.renderResults()}
        </Paper>
      </div>
    );
  }
}
