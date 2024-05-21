import clsx from 'clsx';

import { Button, HeaderText } from '../../shared';

import HeroImage from '../../assets/hero.jpeg';
import styles from './hero.module.scss';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <img className={clsx('ibg')} src={HeroImage} alt="hero-image" />
            <div className={clsx(styles.hero__content, 'container')}>
                <div className={styles.mask}></div>
                <HeaderText
                    className={clsx(
                        styles.textContainer,
                        styles.headerTextMargin,
                    )}
                >
                    Test assignment for front-end developer
                </HeaderText>
                <p
                    className={clsx(
                        styles.textContainer,
                        styles.paragraphMargin,
                    )}
                >
                    What defines a good front-end developer is one that has
                    skilled knowledge of HTML, CSS, JS with a vast understanding
                    of User design thinking as they'll be building web
                    interfaces with accessibility in mind. They should also be
                    excited to learn, as the world of Front-End Development
                    keeps evolving.
                </p>

                <Button onClick={() => {}}>Sign Up</Button>
            </div>
        </section>
    );
};
