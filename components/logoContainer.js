import React from "react";
import styles from "../styles/LogoContainer.module.scss";

function LogoContainer(props) {
  return (   
    <div className={styles.logocontainer} {...props}>
    </div>
  );
}

export default LogoContainer;