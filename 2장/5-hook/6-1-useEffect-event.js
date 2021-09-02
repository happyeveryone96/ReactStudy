import React, { useState, useEffect } from 'react';

export default function WidthPrinter() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }; // 부수 효과가 반환한 함수는 컴포넌트가 unmount 되기 전에 적어도 한 번 호출됨
    },[]);
    return <div>{`width is ${width}`}</div>;
}