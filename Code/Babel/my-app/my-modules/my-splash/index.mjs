import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { withStyles } from '@material-ui/core/styles';
// import { withTranslation } from 'react-i18next';

import page_image from './pitt.jpg'

class Splash extends Component {
  render () {
    return (
      <div>
        <img
          width='40%'
          opacity='50%'
          src={page_image}
          alt='Pittsburgh After Snow'
        />
      </div>
    )
  }
}

export default Splash

// vim: set expandtab shiftwidth=2:
