import React from 'react';
import Navbar from '@theme-original/Navbar';
import { useLocation } from '@docusaurus/router';
export default function NavbarWrapper(props) {
  const location = useLocation(); 
  return (
    <div id={location.pathname === "/" && "homepage" } >
      <Navbar {...props} />
    </div>
  );
}
