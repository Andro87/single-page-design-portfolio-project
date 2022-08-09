import React from "react";
import styles from "./Footer.module.scss";

//
import { Btn } from "components";
//

export const Footer: React.FunctionComponent = () => {
    return (
        <footer className={styles.footer_container}>
            <div className={styles.footer_wrap}>
                <img
                    src="./assets/logo.svg"
                    alt="logo"
                    className={styles.logo}
                />
                <Btn color="black_btn" />
            </div>
        </footer>
    );
};
