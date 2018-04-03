// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_SINGERS = 'TOGGLE_SINGERS';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}
export function toggleSingers() {
  return {
    type: TOGGLE_SINGERS,
  };
}
