import React from "react";
import styles from "./Book.module.scss";

import { Btn } from "components";

export const Book: React.FunctionComponent = () => {
    return (
        <section
            aria-label="Book a call"
            className={styles.section_book_container}
        >
            <div className={styles.section_book_wrap}>
                <div className={styles.wrapper}>
                    <h4>Book a call with me</h4>
                    <p>
                        I’d love to have a chat to see how I can help you. The
                        best first step is for us to discuss your project during
                        a free consultation. Then we can move forward from
                        there.
                    </p>
                </div>
                <Btn color="red_btn" />
            </div>
        </section>
    );
};
