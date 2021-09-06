import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext('unknown'); // createContext('초기값')
const ThemeContext = createContext('dark'); 

export default function App() {
  const [name, setName] = useState('mike')
    return (
        <div>
          <ThemeContext.Provider value="light">
            <UserContext.Provider value={name}>
            <div>상단 메뉴</div>
            <Profile />
            <div>하단 메뉴</div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </UserContext.Provider>
            </ThemeContext.Provider>
        </div>
    );
}

const Profile = React.memo(function () {
  console.log('profile render');
    return (
        <div>
            <Greeting />
        </div>
    );
});

// function Greeting({ username }) {
//   return (
//       <UserContext.Consumer>
//           <p>{`${username}님 안녕하세요`}</p>;
//       </UserContext.Consumer>
//   )
// }

// useContext 사용
function Greeting() {
    const theme = useContext(ThemeContext);
    const username = useContext(UserContext);
    return (
    <p
    style={{ color: theme === 'dark' ? 'gray' : 'green'}}
    >{`${username}님 안녕하세요`}</p>);
}