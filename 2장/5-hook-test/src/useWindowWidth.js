import { useState, useEffect } from 'react';

export default function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        console.log('useEffect 1');
        return () => {
            window.removeEventListener('resize', onResize);
            console.log('useEffect 2');
        }; // 부수 효과가 반환한 함수는 컴포넌트가 unmount 되기 전에 적어도 한 번 호출됨
    },[]); // []를 지우면 width가 변경될 때마다 컴포넌트가 렌더링, 그 때마다 부수 효과 함수 실행
           // 그리고 이전에 반환(return)된 함수가 실행되고 부수 효과 함수가 실행되는 것을 반복 
    return width;
}