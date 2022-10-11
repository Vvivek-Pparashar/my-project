import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

const Header = () => {

  const [{basket, user}] =  useStateValue();

  const login = ()=>{
    if(user){
      auth.signOut();
    }
  }
  
  return (
    <nav className="header">
      {/* LOGO FOR WEBSITE */}
      <Link to={"/"}>
        <img
          alt="website-logo"
          className="header__logo"
          src={require("../Resources/logo.png")}
        />
      </Link>

      {/* SEARCH BAR */}

      <div className="header__search">
        <input
          type={"text"}
          placeholder={"Search here"}
          className="header__searchInput"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links */}

      <div className="header__nav">
        {/* 1st link */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello, {user}</span>
            <span className="header__optionLineTwo">Sign{user ? 'Out' : 'In'}</span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to={"/"} className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to={"/"} className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th link */}
        <Link to={"/checkout"} className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
