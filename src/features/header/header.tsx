import styles from './header.module.scss';
import clsx from 'clsx';
import { Button } from '../../shared';
import Logo from '../../assets/Logo.svg';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={clsx(styles.header__container, '_container')}>
                <div className={styles.header__logo}>
                    <img src={Logo} alt="logo" />
                </div>
                <div className={styles.header__buttons}>
                    <Button onClick={() => {}}>Users</Button>
                    <Button onClick={() => {}}>Sign up</Button>
                </div>
            </div>
        </header>
    );
};
