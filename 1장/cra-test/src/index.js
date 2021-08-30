import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// process.env.{변수 이름}
// process.env.NODE_ENV
// npm start로 실행하면 development
// npm test로 실행하면 test
// npm run build로 실행하면 production
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL);
console.log('process.env.REACT_APP_TEMP1', process.env.REACT_APP_TEMP1);

// REACT_APP_*
// REACT_APP_API_URL=api.myapp.com npm start