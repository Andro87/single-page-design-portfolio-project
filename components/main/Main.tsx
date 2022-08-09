import React from "react";
import styles from "./Main.module.scss";

//

import { Skill, Btn } from "components";

//
import { skills } from "data/skills";
//

export const Main: React.FunctionComponent = () => {
    return (
        <main className={styles.main_container}>
            <div className={styles.main_wrap}>
                <div className={styles.main_intro}>
                    <h1>Design solutions made easy</h1>
                    <p>
                        With over ten years of experience in various design
                        disciplines, I’m your one-stop shop for your design
                        needs.
                    </p>
                </div>

                <div className={styles.main_skills_container}>
                    {skills.map((skill, index) => (
                        <Skill
                            key={index}
                            colorPosition={skill.colorPosition}
                            icon={skill.icon}
                            skill={skill.skill}
                        />
                    ))}
                </div>

                <div className={styles.main_info_container}>
                    <div className={styles.main_info_picture}>
                        <img src="/assets/image-amy.webp" alt="" />
                    </div>

                    <div className={styles.main_info}>
                        <h2>
                            I’m Amy, and I’d love to work on your next project
                        </h2>
                        <p>
                            I love working with others to create beautiful
                            design solutions. I’ve designed everything from
                            brand illustrations to complete mobile apps. I’m
                            also handy with a camera!
                        </p>
                        <Btn color="red_btn" />
                    </div>
                </div>
            </div>
        </main>
    );
};
