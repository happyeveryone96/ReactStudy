// // import React, { useState, useEffect } from 'react';
// // import ReactDOM from 'react-dom';

// // export default function App() {
// //     const [count, setCount] = useState(0);
// //     function onClick() {
// //         // 외부에서 처리될 때도 배치로 처리되길 원한다면
// //         ReactDOM.unstable_batchedUpdates(() => {
// //             setCount(v => v + 1);
// //             setCount(v => v + 1);
// //         })


// //         // setCount(count + 1);
// //         // setCount(count + 1);
// //         // 상태값 변경 함수는 비동기이면서 배치(batch)로 처리된다.
// //         // 만약에 리액트가 상태값 변경 함수를 동기로 처리하면 하나의 상태값 변경 함수가 호출될 때마다
// //         // 화면을 다시 그리기 때문에 성능 이슈가 생길 수 있다.

// //         // setCount(v => v + 1);
// //         // setCount(v => v + 1);
// //         // 상태값 변경 함수에 함수를 입력하면 처리되기 직전의 상태값을 매개변수로 받는다.

// //     }
// //     useEffect(() => {
// //         window.addEventListener('click', onClick);
// //         return () => window.removeEventListener('click', onClick);
// //     });
// //     // 이벤트 핸들러를 등록해서 사용하면 리액트 내부에서 관리되지 않기 때문에 배치로 처리X
// //     console.log('render called');
// //     return (
// //         <div>
// //             <h2>{count}</h2>
// //             <button onClick={onClick}>증가</button>
// //             {/* onClick 이벤트 핸들러는 리액트 내부에서 관리되는 리액트 요소에 입력이 되어 있기 때문에 배치로 처리 */}
// //         </div>
// //     );
// // }
// import React, { useState } from 'react';
// import Profile from './Profile';

// export default function App() {
//     const [userId, setUserId] = useState(0);
//     return (
//         <>
//             <Profile userId={userId} />
//             <button onClick={() => setUserId(userId + 1)}>userId 변경</button>
//         </>
//     )
// }
import React, { useState } from 'react';
import WidthPrinter from './WidthPrinter';

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            {count === 0 && <WidthPrinter/>}
            <button onClick={() => setCount(count + 1)}>증가</button>
        </>
    )
}