function MyComponent() {
    const [value, setValue] = useState(0);
    if (value === 0) {
        const [v1, setV1] = useState(0);
    } else {
        const [v1, setv1] = useState(0);
        const [v2, setv2] = useState(0);
    }
    // ...
    for (let i = 0; i < value; i++) {
        const [num, setNum] = useState(0);
    }
    // ...
    function func1() {
        const [num, setNum] = useState(0);
    }
    // ...
}

// if 문이나 for 문에서 사용하면 안된다.
// 함수 안에서 훅을 호출해도 안된다.