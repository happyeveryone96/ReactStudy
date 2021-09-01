import React from 'react';

function Title({ title }) { // 객체 비구조화 문법
    console.log('Title render')
    return <p>{title}</p>
}

export default React.memo(Title);
// 속성값이 변경될 때만 이 컴포넌트가 렌더링되게 하려면 React.memo를 사용할 수 있다.