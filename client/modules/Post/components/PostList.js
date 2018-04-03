import React, { PropTypes } from 'react';

// Import Components
import PostListItem from './PostListItem/PostListItem';

function PostList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <PostListItem
            post={post}
            key={post.cuid}
            onDelete={() => props.handleDeletePost(post.cuid)}
			filterPost={props.filterPost}
          />
        ))
      }
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    instrument: PropTypes.string.isRequired,
	singer: PropTypes.bool,
    //cuid: PropTypes.string.isRequired,
  })).isRequired,
  filterPost: PropTypes.bool.isRequired,  
  handleDeletePost: PropTypes.func.isRequired,
};

export default PostList;
