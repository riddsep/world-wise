import { useNavigate } from "react-router";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
import Button from "../components/Button";
import { useAuth } from "../contexts/FakeAuthContext";

export default function Homepage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  function handleClick() {
    if (isAuthenticated) navigate("/app");
    else navigate("/login");
  }
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Button type="primary" className="cta" onClick={handleClick}>
          Start tracking now
        </Button>
      </section>
    </main>
  );
}
