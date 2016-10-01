import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router'

import styles from './styles/HeaderNav.styles'

export default class HeaderNav extends Component {

  constructor() {
    super()
    this.navigateHome = this.navigateHome.bind(this)
  }

  navigateHome() {
  }

  render() {
    return (
      <div>
          <AppBar 
            title={<Link to='/' style={styles.title}>Geocaching Hint</Link>}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onTitleTouchTap={this.handleTouchTap}
          />
      </div>
    )
  }
}
