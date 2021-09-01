// Todo 컴포넌트의 priority 상태값이 변경되면 Todo 컴포넌트 함수 호출
function Todo({ title, desc }) {
    const [priority, setPriority] = useState('high');
    function onClick() {
        setPriority(priority === 'high' ? 'low' : 'high');
    }
    return (
        <div>
            <Title title={title}/>
            <p>{desc}</p>
            <p>{priority === 'high' ? '우선순위 높음' : '우선순위 낮음'}</p>
            <button onClick={onClick}>우선순위 변경</button>
        </div>
    );
}

const Title = React.memo(({ title }) => {
    return <p style={{ color: 'blue' }}>{title}</p>;
});
// title 속성값이 변경될 때만 렌더링된다.

ReactDOM.render(
    <Todo title="리액트 공부하기" desc="실전 리액트 프로그래밍을 공부한다."/>,
    document.getElementById('root'),
)