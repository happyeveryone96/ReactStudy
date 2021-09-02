import React from 'react';
import useUser from './useUser';

export default function Profile({ userId }) {
    const user = useUser(userId);
    // const [user, setUser] = useState(null);
    // const [value, setValue] = useState(0);
    // // const value = userId + 10; // 지역 변수도 반드시 의존성 배열에 입력해줘야 함
    // function func1() {
    //     console.log(userId);
    // }
    // useEffect(() => {
    //     func1(); // 지역 함수를 부수 효과 함수 내부에서 사용했다면 의존성 배열에 입력해줘야 함
    //     getUserApi(userId).then(data => setUser(data));
    // }, [userId, value, func1]); // 의존성 배열... 이 배열에 있는 값이 변경될 때만 부수 효과 함수가 실행
    //               // userId가 변경될 때만 부수 효과 함수가 실행
    //               // 만약 빈 배열을 입력하면, 부수 효과 함수는 마운트된 이후에 한 번만 호출
    //               // 컴포넌트의 상태값이나 속성값 또는 컴포넌트 내부에서 정의된 지역 변수나 지역 함수 같은
    //               // 것들은 모두 의존성 배열에 작성해야 함
    //               // 상태값 변경 함수는 의존성 배열에 입력하지 않아도 괜찮다
    return (
        <div>
            {!user && <p>사용자 정보를 가져오는 중...</p>}
            {user && (
                <>
                    <p>{`name is ${user.name}`}</p>
                    <p>{`age is ${user.age}`}</p>
                </>
            )}
        </div>
    );
}
