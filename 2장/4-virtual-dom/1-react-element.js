const element = <a href="http://google.com">click here</a>; // jsx 문법
const element = React.createElement(
    'a',
    { href: 'http://google.com'},
    'click here',
); // jsx 문법은 babel이 createElement를 호출하는 코드로 변환해 준다.