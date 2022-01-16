import React from "react";
import styles from "../styles/Loading.module.scss";
import LogoContainer from "./logoContainer";
function Loading(props) {
  return (
    <div className={props.loading ? styles.body_loading : styles.none}>      
      <div className={styles.straighten}>
          <LogoContainer>
              <Image className="logo" src="logo.png"/>
          </LogoContainer>
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