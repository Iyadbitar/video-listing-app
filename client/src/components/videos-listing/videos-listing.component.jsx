import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

import { Loader, VideosList, ScrollDetector } from '../'

import styles from './videos-listing.component.scss';

class VideosListing extends React.Component {

  static propTypes = {
    isDataLoading: PropTypes.bool.isRequired,
    videosList: PropTypes.array.isRequired,
    videoPagesLimit: PropTypes.number.isRequired,
    search: PropTypes.string.isRequired
  }

  static defaultProps = {
    isDataLoading: true,
    videosList: [],
    videoPagesLimit: 1000,
    search: 'javascript'
  }

  componentDidMount() {
    this.props.actions.loadVideosListAction(this.props.search);
  }

  onScrollToPageBottom = (event) => {
    if (this.props.isDataLoading || 0 === this.props.videoPagesLimit) {
      return;
    }
    this.props.actions.loadVideosListAction(this.props.search);
  }

  render() {
    return <div className={styles['videos']}>
      <h1>List</h1>
      <ScrollDetector isActive={this.props.videoPagesLimit > 0} onScrollToPageBottom={this.onScrollToPageBottom}>
        <VideosList videos={this.props.videosList} />
      </ScrollDetector>
      <Loader isVisible={this.props.isDataLoading}/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    isDataLoading: state.uiState.isDataLoading,
    videoPagesLimit: state.uiState.videoPagesLimit,
    videosList: state.appState.videosList
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideosListing)
