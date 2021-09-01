// 6-todo.js 
// Todo 컴포넌트의 priority 상태값이 변경되면 Todo 컴포넌트 함수 호출
// 그 결과로 만들어지는 리액트 요소 트리
const elementTree = {
    type: 'div',
    props: {
        children: [
            {
                type: Title,
                props: { title: '리액트 공부하기' },
            },
            {
                type: 'p',
                props: { children: '실전 리액트 프로그래밍을 공부한다'}
            },
            {
                type: 'p',
                props: { children: '우선순위 낮음'},
            },
        ],
    },
};