import React, { useState } from 'react';
import Title from './Title';

export default function Counter() { 
    const [count, setCount] = useState({ value1: 0, value2: 0});
    const [count2, setCount2] = useState(0);
    function onClick() {
        // count.value += 1;
        // setCount(count); // count는 변경되지 않았다고 판단, setCount 무시됨
        setCount({...count, value: count.value + 1}); // 전개 연산자를 이용해서 불변 변수로 관리
    }
    function onClick2() {
        setCount2(count2 + 1);
    }
    return (
        <div>
            <Title title={`현재 카운드: ${count.value}`} />
            <button onClick={onClick}>증가</button>
            <button onClick={onClick2}>증가2</button>
        </div>
    )
}