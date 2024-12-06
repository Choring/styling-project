import logo from "../../assets/logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
        <img src={logo} alt="logo" />
        <h1>ReactArt</h1>
        <p>A community of artist and art-lovers.</p>
    </header>
  )
}
