import React, { PropTypes } from 'react';
//import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './PostListItem.css';

function PostListItem(props) {
  if(props.filterPost && props.filterPost === props.post.singer || !props.filterPost) 
   return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
          {props.post.name}
      </h3>
      <p className={styles['instrument']}>{(props.post.instrument)}</p>	  	  
      <p className={styles['singer']}>{(props.post.singer) ? "singer" : "does not sing"}</p>	  
      <p className={styles['post-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deletePost" /></a></p>
      <hr className={styles.divider} />
    </div>
  );
  else return null;
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    instrument: PropTypes.string.isRequired,	
	singer: PropTypes.bool,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;


