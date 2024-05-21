import clsx from 'clsx';
import styles from './hero.module.scss';
import { HeaderText } from '../../shared/UI/header-text/header-text';
import HeroImage from '../../assets/hero.jpeg';
import { Button } from '../../shared';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <img className={clsx('_ibg')} src={HeroImage} alt="hero-image" />
            <div className={clsx(styles.hero__content, '_container')}>
                <div className={styles.mask}></div>
                <HeaderText
                    className={clsx(
                        styles.text_container,
                        styles.header_margin,
                    )}
                >
                    Test assignment for front-end developer
                </HeaderText>
                <p
                    className={clsx(
                        styles.text_container,
                        styles.paragraph_margin,
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
