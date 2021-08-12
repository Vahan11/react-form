import styles from "./button.module.css";
import { Route } from "react-router-dom";

const Button = (props) => {
  return (
    <div>
      <Route
        render={({ history }) => (
          <button
            onClick={() => {
              history.push({ pathname: props.url });
            }}
            className={styles.btn}
          >
            {props.btnName}
          </button>
        )}
      ></Route>
    </div>
  );
};

export default Button;
