import React from "react";
import ReactDOM from "react-dom";
import ControlPanel from './views/ControlPanel';

import Provider from './Provider';
import store from './Store';

ReactDOM.render(
  <Provider store={store}>
    <ControlPanel/>
  </Provider> ,
  document.getElementById('root')
);