function Profile({ userId }) {
  // 커스텀 훅으로 분리하는 것이 가독성을 높여준다.
  const user = useUser(userId); 
  const width = useWindowWidth();

  // user
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   getUserApi(userId).then(data => setUser(data));
  // }, [userId]);

  // width
  // const [width, setWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   const onResize = () => setWidth(window.innerWidth);
  //   window.addEventListener('resize', onResize);
  //   return () => {
  //     window.removeEventListener('resize', onResize);
  //   }
  // }, []);
  // ...
}