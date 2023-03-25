'use client';

import './Navbar.css';

const NavbarToggle: React.FC = () => {
  // TODO: remove the document.body
  const toggle = () => {
    document.body.classList.toggle('menu-toggled');
  };

  setTimeout(toggle, 200);
  return (
    <>
      <button
        className="menu-toggled"
        type="button"
        id="menu-toggle"
        onClick={() => toggle()}
      >
        <span className="line" />
        <span className="line" />
        <span className="line" />
        <div id="menu-toggle-label">
          <span className="word">SPACE</span>
          <span className="word">TRAVEL</span>
        </div>
      </button>
      <div id="menu-gradient" />
      <div id="menu-gradient-blur" />
    </>
  );
};

export default NavbarToggle;
