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
        title: '卵を買う',
        completed: false,
        id: 1,
      },
      {
        title: 'お金を引き出す',
        completed: false,
        id: 2,
      },
    ],
  },
  middlewares: [
    (state) => {
      console.log(state);
      return state;
    },
  ],
});

app.update(state => state);
