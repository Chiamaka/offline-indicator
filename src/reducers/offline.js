export const STATUS_CHANGED = 'Offline/STATUS_CHANGED';

const initialState = {};
const HANDLER = {
  // [STATUS_CHANGED]: (state, action) => {
  //   console.log('actionss-> :::', action);
  //   console.log('statess-> :::', state);
  //   return state;
  // }
};

const offline = (state = initialState, action) => {
  const handler = HANDLER[action.type];
  // console.log('state::>:::', state);
  // console.log('action::>:::', action);
  return handler ? handler(state, action) : state;
};

export default offline;
