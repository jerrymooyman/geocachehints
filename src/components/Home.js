import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import SearchIcon from 'react-icons/lib/md/search'

import styles from './styles/Home.styles'

import SearchComponent from './SearchComponent'
import SearchResults from './SearchResults'

class Home extends Component {
  render() {
    return (
      <div style={styles.main}>
          <SearchComponent />
          <br/>
          <SearchResults />
      </div>
    );
  }
}

export default Home
