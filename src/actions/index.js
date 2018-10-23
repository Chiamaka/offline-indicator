import { CONNECTING, CONNECTED, CLOSE_WIDGET, CONNECTION_LOST } from '../reducers/online';
export function activeOnline(dispatcher) {
  setTimeout(() => {
    dispatcher({
      type: CONNECTED
    });
  }, 2000);
  return {
    type: CONNECTING
  };
}

export function closeWidget() {
  return {
    type: CLOSE_WIDGET
  };
}

export function deactiveOnline() {
  return {
    type: CONNECTION_LOST
  };
}
