import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import {Fragment} from 'react'
import {authAction} from './demo-redux';
import UserProfile from './components/UserProfile'
import { useSelector } from 'react-redux';


function App() {
  const auth = useSelector((state)=>state.auth.isauth)
  return (
    <Fragment>
      <Header/>
      {!auth && <Auth/>}
      {auth && <UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;
