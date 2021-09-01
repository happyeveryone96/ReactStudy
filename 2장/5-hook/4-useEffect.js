import React, { useState, useEffect } from 'react';

export default function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `업데이트 횟수: ${count}`;
    });
    return <button onClick={() => setCount(count + 1)}>increase</button>
}

// 첫 번째 매개변수로 함수(부수효과 함수)를 입력하면, 이 함수는 컴포넌트가 렌더링된 후에 호출
// 렌더링 결과가 실제 돔에 반영되고 비동기로 호출