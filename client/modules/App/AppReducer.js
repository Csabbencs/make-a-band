// Import Actions
import { TOGGLE_ADD_POST } from './AppActions';
import { TOGGLE_SINGERS } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  filterPost: false,  
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };
    case TOGGLE_SINGERS:
      return {
        filterPost: !state.filterPost,
      };	  

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;
// Get filterPost (Show me the singers!)
export const getFilterPost = state => state.app.filterPost;

// Export Reducer
export default AppReducer;
