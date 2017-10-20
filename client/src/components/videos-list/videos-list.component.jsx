import React from 'react';
import PropTypes from 'prop-types';

import styles from './videos-list.component.scss';

import { VideosListItem } from '../'

export default class VideosList extends React.Component {

  static propTypes = {
    videos: PropTypes.array.isRequired
  }

  static defaultProps = {
    videos: []
  }

  render() {
    return <div className={styles['list']}>
      <div className={styles['videos-grid']}>
        {
          this.props.videos.map(
          (video) => <VideosListItem
            description={video.snippet.description}
            key={video.id.videoId || video.id.playlistId}
            id={video.id.videoId || video.id.playlistId || video.id.channelId}
            title={video.snippet.title}
            thumbnails={video.snippet.thumbnails}/>
          )
        }
      </div>
    </div>
  }
}
