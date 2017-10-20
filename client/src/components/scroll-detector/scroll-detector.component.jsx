import React from 'react';
import PropTypes from 'prop-types';

export default class ScrollDetector extends React.Component {

  windowRef = window;
  documentRef = document;
  isEventBinded = false;

  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    onWindowScroll: PropTypes.func,
    onScrollToPageBottom: PropTypes.func
  }

  static defaultProps = {
    isActive: true,
    onWindowScroll: () => {},
    onScrollToPageBottom: () => {}
  }

  scrollHandler = (event) => {
    if (this.props.onWindowScroll) {
      this.props.onWindowScroll(event);
    }

    if (
        (this.windowRef.innerHeight + this.windowRef.pageYOffset) >= this.documentRef.body.offsetHeight
        && this.props.onScrollToPageBottom
    ) {
        this.props.onScrollToPageBottom();
    }
  }

  bindScrollEvent() {
    if (true === this.isEventBinded ) {
      return;
    }
    this.windowRef.addEventListener('scroll', this.scrollHandler);
    this.isEventBinded = true;
  }

  unbindScrollEvent() {
    this.windowRef.removeEventListener('scroll', this.scrollHandler);
    this.isEventBinded = false;
  }

  componentWillMount() {
    this.bindScrollEvent();
  }

  componentWillUmount() {
    this.unbindScrollEvent();
  }

  componentWillUpdate(change) {
    if (true === change.isActive) {
      this.bindScrollEvent();
    }
    if (false === change.isActive) {
      this.unbindScrollEvent();
    }
  }

  render() {
    return this.props.children;
  }
}
