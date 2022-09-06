import logosmall from "../images/react-icon-small.png";
export default function Navbar() {
  return (
    <navbar>
      <div className="navbar">
        <img className="logo" src={logosmall} alt="react-logo" />
        <h2>ReactFacts</h2>
        <h3>React Course - Project 1</h3>
      </div>
    </navbar>
  );
}
