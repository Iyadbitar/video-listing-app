import React from 'react';
import PropTypes from 'prop-types';

import styles from './videos-list-item.component.scss';

export default class VideosListItem extends React.Component {

  static propTypes = {
    channelTitle: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    thumbnails: PropTypes.object,
    title: PropTypes.string.isRequired
  }

  render() {
    return <div className={styles['video']}>
      <img className={styles['image']} src={this.props.thumbnails.medium.url} alt={this.props.title} />
      <div className={styles['content']}>
        <h4 className={styles['heading']}>{this.props.title}</h4>
        <p className={styles['text']}>{this.props.description}</p>
      </div>
    </div>
  }
}
