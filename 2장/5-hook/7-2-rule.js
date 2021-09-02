function Profile() {
    if (!value) {
        const [name, setName] = useState('mike');
    }
    const [country, setCountry] = useState('korea');
    // ...
}

// 조건문에 따라서 호출을 하지 않게 되면 
// useState가 name을 말하는 건지 country를 말하는 건지 알 수 없다.