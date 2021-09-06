import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext({ username: 'unknown', age: 0}); 

export default function App() {
  console.log('App render');
  const [user, setUser] = useState({username:'mike',age: 23});
  const [count, setCount] = useState(0);
    return (
        <div>
            <UserContext.Provider value={user}>
                <Profile/>
                <button onClick={() => setCount(count+1)}>증가</button>
            </UserContext.Provider>
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
    console.log('Greeting render');
    // const theme = useContext(ThemeContext);
    const {username} = useContext(UserContext);
    return (
    <p
    // style={{ color: theme === 'dark' ? 'gray' : 'green'}}
    >{`${username}님 안녕하세요`}</p>);
}