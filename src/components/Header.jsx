import Button from "../UI/Button";
import logo from "../assets/logo.jpg";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="A restaurant" />
        <h1>Dream Food</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}
