import useUser from "../../hooks/useUser";
import moon from "./moon.svg";
import Container from "./style";
import sun from "./sun.svg";

export default function ChangeTheme() {
  const { theme, changeTheme } = useUser();

  return (
    <Container>
      <label htmlFor="check">
        <input
          type="checkbox"
          onChange={changeTheme}
          id="check"
          className="none"
        />

        <div className="boxChange">
          <div
            className={`boll ${
              theme === "light" ? "darkToLight" : "lightToDark"
            }`}
          >
            <img src={theme === "light" ? sun : moon} alt="sun or moon" />
          </div>
        </div>
      </label>
    </Container>
  );
}
