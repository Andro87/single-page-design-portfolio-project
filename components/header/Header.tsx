import React from "react";
import styles from "./Header.module.scss";

//
import { Btn } from "components";
//

export const Header: React.FunctionComponent = () => {
    return (
        <header className={styles.header_container}>
            <div className={styles.header_wrap}>
                <img
                    src="./assets/logo.svg"
                    alt="logo"
                    className={styles.logo}
                />
                <Btn color="black_btn" />
            </div>
        </header>
    );
};
