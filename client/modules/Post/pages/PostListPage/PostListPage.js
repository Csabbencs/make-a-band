import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import PostList from '../../components/PostList';
import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';
import ShowSingersWidget from '../../components/ShowSingersWidget/ShowSingersWidget';

// Import Actions
import { addPostRequest, fetchPosts, deletePostRequest } from '../../PostActions';
import { toggleAddPost, toggleSingers } from '../../../App/AppActions';

// Import Selectors
import { getShowAddPost } from '../../../App/AppReducer';
import { getFilterPost } from '../../../App/AppReducer';
import { getPosts } from '../../PostReducer';

import Checkbox from '../../../App/Components/Checkbox';

class PostListPage extends Component {
	
  componentDidMount() {
    this.props.dispatch(fetchPosts());		
  }

  handleDeletePost = post => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deletePostRequest(post));
    }
  };

  handleAddPost = (name, instrument, singer) => {
    this.props.dispatch(toggleAddPost());
    this.props.dispatch(addPostRequest({ name, instrument, singer }));
  };
  
  handleShowSingers = (i) => {
    this.props.dispatch(toggleSingers());	  
  }

  render() { 
    return (
      <div>
        <PostCreateWidget addPost={this.handleAddPost} showAddPost={this.props.showAddPost} />
        <ShowSingersWidget showSingers={this.handleShowSingers} filterPost={this.props.filterPost} />
        <PostList handleDeletePost={this.handleDeletePost} posts={this.props.posts} filterPost={this.props.filterPost}/>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
PostListPage.need = [() => { return fetchPosts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    filterPost: getFilterPost(state),	
    posts: getPosts(state),
  };
}

PostListPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    instrument: PropTypes.string.isRequired,
	singer: PropTypes.bool
  })).isRequired,
  showAddPost: PropTypes.bool.isRequired, 
  filterPost: PropTypes.bool.isRequired,   
  dispatch: PropTypes.func.isRequired,
};

PostListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PostListPage);
