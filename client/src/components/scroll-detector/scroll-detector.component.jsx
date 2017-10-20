import React from 'react';
import PropTypes from 'prop-types';

export default class ScrollDetector extends React.Component {

  windowRef = window;

  scrollHandler = (event) => {
    console.log(event)
  }

  componentWillMount() {
    this.windowRef.addEventListener('scroll', this.scrollHandler)
  }

  componentWillUmount() {
    this.windowRef.removeEventListener('scroll', this.scrollHandler)
  }

  render() {
    return this.props.children;
  }
}
