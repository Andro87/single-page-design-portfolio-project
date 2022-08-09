import React from "react";
import styles from "./MyWork.module.scss";

//
import { Carousel } from "components";
//

export const MyWork: React.FunctionComponent = () => {
    return (
        <section
            aria-label="My work"
            className={styles.section_mywork_container}
        >
            <h3> My Work </h3>
            <div className={styles.carousel_container}>
                <Carousel />
            </div>
        </section>
    );
};
