// import * as React from 'react';
import { render } from 'react-dom';

import App from './app';

const app = new App({
  renderer: el => {
    render(el, document.querySelector('#todoapp'));
  },
  initialState: {
    todos: [
      {
        title: 'initial todo',
        completed: false,
        id: 1,
      },
      {
        title: 'second todo',
        completed: false,
        id: 2,
      },
    ],
  },
  middlewares: [],
});

app.update(state => state);
