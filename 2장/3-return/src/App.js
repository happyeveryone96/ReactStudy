import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

export default function App() {
  // return [<p key={1}>안녕</p>, <p key={2}>하세요</p>] 
  return (
    <React.Fragment>
      <p>안녕</p>
      <p>하세요</p>
      <Counter/>
      {
        ReactDOM.createPortal(
          <div>
            <p>안녕</p>
          </div>,
          document.getElementById('something'),
        )
      }
    </React.Fragment>
  )
}