import { HeaderText } from '../../shared/UI/header-text/header-text';
import { UserSignUpJoiDto } from '../../shared/constants/types/user-sign-up-joi-request-dto';
import { RegistrationForm } from '../registration-form/registration-form';

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
