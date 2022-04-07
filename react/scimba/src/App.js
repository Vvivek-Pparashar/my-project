import './App.css';
import Card from './components/Card';
import Comp from './components/Comp';
import MainContent from './components/MainConent';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <>
      <NavBar/>
      <MainContent/>
      <Card heading = "vivek is goof man"/>
      <div className="div">
        <Comp name = "viek" mail = "vivek parashartkd@gmaiil.com" number="9999999999"/>
        <Comp name = "Parashar" mail = "vivek parashartkd@gmaiil.com" number="9999999999"/>
      </div>
      <div className="div">
        <Comp name = "Sharma" mail = "vivek parashartkd@gmaiil.com" number="9999999999"/>
        <Comp name = "skdjfhskjfh" mail = "vivek parashartkd@gmaiil.com" number="9999999999"/>
      </div>
    </>
  );
}
