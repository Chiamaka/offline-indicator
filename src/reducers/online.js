export const RECONNECTING = 'RECONNECTING';
export const CONNECTED = 'CONNECTED';
export const CONNECTING = 'CONNECTING';
export const RESET_ONLINE_STATE = 'RESET_ONLINE_STATE';
export const CLOSE_WIDGET = 'CLOSE_WIDGET';
export const CONNECTION_LOST = 'CONNECTION_LOST';
export const STATUS_CHANGED = 'Offline/STATUS_CHANGED';
const HANDLER = {
  [RECONNECTING]: (state, action) => {
    return { ...state, message: 'Attempting to connect' };
  },
  [CONNECTING]: (state, action) => {
    return { ...state, connecting: true, connected: false, message: 'Attempting to connect...' };
  },
  [CONNECTED]: (state, action) => {
    return { ...state, connected: true, connecting: false, message: 'Connected' };
  },
  [RESET_ONLINE_STATE]: (state, action) => {
    return { ...initialState };
  },
  [CLOSE_WIDGET]: (state, action) => {
    return { ...state, message: '' };
  },
  [CONNECTION_LOST]: (state, action) => {
    return { ...state, connecting: false, connected: false, message: 'Connection lost' };
  },
  [STATUS_CHANGED]: (state, action) => {
    console.log('actionss-> :::', action);
    console.log('statess-> :::', state);
    return state;
  }
};

const initialState = {
  connected: false,
  connecting: false,
  message: ''
};

const online = (state = initialState, action) => {
  const handler = HANDLER[action.type];
  return handler ? handler(state, action) : state;
};
export default online;
