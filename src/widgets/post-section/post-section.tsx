import { RegistrationForm } from '../../features';
import { HeaderText, UserSignUpJoiDto } from '../../shared';

import styles from './post-section.module.scss';

export const PostSection = () => {
    const handleSignUpSubmit = (payload: UserSignUpJoiDto) => {
        console.log(payload);
    };

    return (
        <section className={styles.postSection}>
            <div className="container">
                <HeaderText className={styles.postSection__headerText}>
                    Working with POST request
                </HeaderText>
                <RegistrationForm onSubmit={handleSignUpSubmit} />
            </div>
        </section>
    );
};
