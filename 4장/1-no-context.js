import React from 'react';

export default function App() {
    return (
        <div>
            <div>상단 메뉴</div>
            <Profile username="mike" />
            <div>하단 메뉴</div>
        </div>
    );
}

function Profile({username}) {
    return (
        <div>
            <Greeting username={username} />
            {/* 자신은 사용하지 않지만 밑을 기계적으로 내려주는 코드 필요 */}
        </div>
    );
}

function Greeting({ username }) {
    return <p>{`${username}님 안녕하세요`}</p>;
}