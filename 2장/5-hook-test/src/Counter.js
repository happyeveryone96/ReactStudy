import React, { useState } from 'react';
import Title from './Title';

export default function Counter() { 
    const [count, setCount] = useState(0);
    function onClick() {
        setCount(count + 1); // 전개 연산자를 이용해서 불변 변수로 관리
    }
    return (
        <div>
            <Title title={`현재 카운드: ${count}`} />
            <button onClick={onClick}>증가</button>
        </div>
    )
}