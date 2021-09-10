import React, { useContext, createContext } from 'react';

function greeting() {
    const setUser = useContext(SetUserContext);
    const { username, helloCount } = useContext(UserContext);
    return (
        <React.Fragment>
            <p>{`${username}님 안녕하세요`}</p>
            <p>{`인사 횟수: ${helloCount}`}</p>
            <button onClick={() => setUser({ username, helloCount: helloCount + 1})}>
                인사하기
            </button>
        </React.Fragment>
    )
}