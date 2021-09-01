import React, { useState } from 'react';
import Counter from './Counter';

// let color = 'red';
// export default function App() {
//   function onClick() {
//     color = 'blue';
//   }
//   return (
//     <button style={{ backgroundColor: color}} onClick={onClick}>
//     좋아요
//     </button>
//   )
// }

// color 값이 변경되었지만 리액트가 이 값이 변경되었다는 사실을 모르기 때문에
// 버튼 색이 빨강이다.
// 값의 변경 사실을 알려면 상탯값으로 관리를 해야한다.


export default function App() {
  const [color, setColor] = useState('red');
  function onClick() {
    setColor('blue');
  }
  return (
    <div>
    <Counter />
    <Counter />
    <button style={{ backgroundColor: color}} onClick={onClick}>
    좋아요
    </button>
    </div>
  )
}