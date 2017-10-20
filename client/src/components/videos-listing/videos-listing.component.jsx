import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

import { VideosList, ScrollDetector } from '../'

import styles from './videos-listing.component.scss';

class VideosListing extends React.Component {

  static propTypes = {
    videosList: PropTypes.array.isRequired
  }

  static defaultProps = {
    videosList: []
  }

  componentDidMount() {
    this.props.actions.loadVideosListAction('surffing');
  }

  render() {
    return <div className={styles['videos']}>
      <h1>List</h1>
      <ScrollDetector>
        <VideosList videos={this.props.videosList} />
      </ScrollDetector>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    videosList: state.appState.videosList
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideosListing)
