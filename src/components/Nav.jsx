import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/mailboxes">Mailboxes</Link>
      <Link to="/new-mailbox">New Mailbox</Link>
      <Link to="/new-letter">New Letter</Link>
    </nav>
  );
};

export default Nav;