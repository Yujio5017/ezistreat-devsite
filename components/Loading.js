import React from "react";
import styles from "../styles/Loading.module.scss";
import LogoContainer from "./LogoContainer";
import Image from 'next/image';
function Loading(props) {
  return (
    <div className={props.loading ? styles.body_loading : styles.none}>      
      <div className={styles.straighten}>
          <LogoContainer>
              <Image src="/logo.png" layout="fill" objectFit="contain" alt="ezikitchen logo"/>
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