import clsx from 'clsx';
import { ChangeEventHandler, FC, useEffect, useState } from 'react';

import {
    Button,
    FileUploader,
    Input,
    Positions,
    RadioButton,
    useAppForm,
    useFormFieldCreator,
    type UserSignUpJoiDto,
} from '../../../shared';
import { DEFAULT_SIGN_UP_PAYLOAD } from '../constants/default-sign-up-payload';
import { userSignUpValidationShema } from '../lib/user-sign-up-validation-shema';

import styles from './registration-form.module.scss';

type RegistrationFormProps = {
    onSubmit: (payload: UserSignUpJoiDto) => void;
    className?: string;
};
export const RegistrationForm: FC<RegistrationFormProps> = ({
    onSubmit,
    className = '',
}) => {
    const { control, handleSubmit } = useAppForm<UserSignUpJoiDto>({
        defaultValues: DEFAULT_SIGN_UP_PAYLOAD,
        validationSchema: userSignUpValidationShema,
    });

    const [selectedPosition, setSelectedPosition] = useState<Positions>(
        Positions.FRONTEND_DEVELOPER,
    );
    const [file, setFile] = useState<File | null>(null);

    const handlePositionChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setSelectedPosition(e.target.value as Positions);
    };

    const handleFileLoad = (fileData: File) => {
        setFile(fileData);
        console.log(file);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        handleSubmit(onSubmit)(event);
    };

    useEffect(() => {

    }, []);

    return (
        <div className={clsx(styles.wrapper, className)}>
            <form onSubmit={handleFormSubmit} className={styles.registration}>
                <Input
                    type="text"
                    placeholder="Your name"
                    helperText="sdfsdfs"
                    label="aaaa"
                    {...useFormFieldCreator({ name: 'name', control })}
                    className={styles.registration__name}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    {...useFormFieldCreator({ name: 'email', control })}
                    className={styles.registration__email}
                />
                <Input
                    helperText="+38 (XXX) XXX - XX - XX"
                    type="tel"
                    placeholder="Phone"
                    {...useFormFieldCreator({ name: 'phone', control })}
                    className={styles.registration__phone}
                />

                <div className={styles.registration__radio}>
                    <p className={styles.registration__radio_topic}>
                        Select your position
                    </p>
                    <RadioButton
                        value={Positions.FRONTEND_DEVELOPER}
                        onChange={handlePositionChange}
                        checked={
                            selectedPosition === Positions.FRONTEND_DEVELOPER
                        }
                        label={Positions.FRONTEND_DEVELOPER}
                    />
                    <RadioButton
                        value={Positions.BACKEND_DEVELOPER}
                        onChange={handlePositionChange}
                        checked={
                            selectedPosition === Positions.BACKEND_DEVELOPER
                        }
                        label={Positions.BACKEND_DEVELOPER}
                    />
                    <RadioButton
                        value={Positions.DESIGNER}
                        onChange={handlePositionChange}
                        checked={selectedPosition === Positions.DESIGNER}
                        label={Positions.DESIGNER}
                    />
                    <RadioButton
                        value={Positions.QA}
                        onChange={handlePositionChange}
                        checked={selectedPosition === Positions.QA}
                        label={Positions.QA}
                    />
                </div>

                <FileUploader
                    onFileLoad={handleFileLoad}
                    name="photo"
                    className={styles.registration__file}
                />
                <Button type="submit" className={styles.registration__submit}>
                    Submit
                </Button>
            </form>
        </div>
    );
};
