import { Container } from "react-bootstrap";
import '../static/styles/Footer.css'

export default function Footer() {
  return (
    <Container className="Footer d-flex justify-content-center align-items-center" fluid>
        <span>@dg0mezm &copy; {new Date().getFullYear()}</span>
    </Container>
  );
}