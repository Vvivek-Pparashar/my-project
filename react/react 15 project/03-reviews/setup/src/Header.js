import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="left_header">
        <i class="fst fa fa-bars" aria-hidden="true"></i>
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <i class="fa fa-comments-o" aria-hidden="true"></i>

        <i class="fa fa-check-circle-o" aria-hidden="true"></i>
        <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
      </div>
      <div className="right_header">
        <div className="fa_class">
          <i class="fa fa-bell" aria-hidden="true"></i>
        </div>
        <div className="login_box">
          <div className="login_box_text">
            <p>Vivek & Namit</p>
            <p className="brogrammer">Brogrammer's</p>
          </div>
          <div className="login_box_image">
          <img src={require(`./faces/logo.JPG`)}/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
