import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import SearchIcon from 'react-icons/lib/md/search'

import styles from './styles/SearchComponent.styles'


class SearchComponent extends Component {

  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
    this.search = this.search.bind(this)
    this.updateSearchTerm = this.updateSearchTerm.bind(this)
  }

  search(e) {
    // console.log(cacheId);
    this.context.router.transitionTo(`/cache/${this.state.searchTerm}`)
  }

  updateSearchTerm(e) {
    const searchTerm = e.target.value;
    this.setState({
      searchTerm
    })
  }

  render() {
    return (
      <div style={styles.main}>
        <TextField
          hintText="ENTER GEOCACHE ID"
          style={styles.searchInput}
          value={this.state.searchTerm}
          onChange={this.updateSearchTerm}
          />
          <FlatButton style={styles.searchButton} onClick={this.search}>
            <SearchIcon style={styles.searchIcon} />
          </FlatButton>
      </div>
    )
  }
}

SearchComponent.contextTypes = {
  router: React.PropTypes.object
} 

export default SearchComponent
