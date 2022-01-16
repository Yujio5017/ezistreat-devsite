import React from "react";
import styles from "../styles/Loading.module.scss";

function Loading(props) {
  return (
    <div className={props.loading ? styles.body_loading : styles.none}>      
      <div className={styles.straighten}>
        <img className="logo" src="logo.png"/>
        <div className={styles.lds_ellipsis}>        
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;