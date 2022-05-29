import classes from './Header.module.css';
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../demo-redux";

const Header = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth.isauth);

  const handleClick = (e)=>{
    e.preventDefault();
    dispatch(authAction.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {auth && <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={handleClick}>Logout</button>
          </li>
        </ul>}
      </nav>
    </header>
  );
};

export default Header;
