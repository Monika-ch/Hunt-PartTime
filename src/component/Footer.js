import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>Copyright ⓒ {year} Hunt Part-Time, Inc. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
