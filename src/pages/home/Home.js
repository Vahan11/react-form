import React from "react";
import styles from "./home.module.css";
import Button from "../../components/button/Button";

const Home = (props) => {
  return (
    <div className={styles.bg}>
      <Button btnName="Sign up" url="/signup" />
      <Button btnName="Sign in" url="" />
    </div>
  );
};

export default Home;
