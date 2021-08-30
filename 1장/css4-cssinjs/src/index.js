import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Box from './Box';

ReactDOM.render(
  <>
      <Button size="big"/>
      <Button size="small"/>
      <Box size="big"/>
      <Box size="small"/>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
