import clsx from 'clsx';
import { ChangeEventHandler, FC, useEffect, useState } from 'react';

import {
    Button,
    FileUploader,
    Input,
    Preloader,
    ReducerState,
    useAppForm,
    useFormFieldCreator,
    type UserSignUpJoiDto,
} from '../../../shared';
import { DEFAULT_SIGN_UP_PAYLOAD } from '../constants/default-sign-up-payload';
import { userSignUpValidationShema } from '../lib/user-sign-up-validation-shema';

import styles from './registration-form.module.scss';
import useRadioButtonStore from '../model/radio-buttons-store';
import { RadioButtonsList } from './radio-buttons-list/radio-buttonts-list';

type RegistrationFormProps = {
    onSubmit: (payload: UserSignUpJoiDto) => void;
    className?: string;
};
export const RegistrationForm: FC<RegistrationFormProps> = ({
    onSubmit,
    className = '',
}) => {
    const {
        positions,
        state,
        error,
        currentSelectedPositionId,
        setCurrentSelectedPositionId,
        getPositions,
    } = useRadioButtonStore();

    const { control, handleSubmit } = useAppForm<UserSignUpJoiDto>({
        defaultValues: DEFAULT_SIGN_UP_PAYLOAD,
        validationSchema: userSignUpValidationShema,
    });

    const [file, setFile] = useState<File | null>(null);

    const handlePositionChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.target;
        setCurrentSelectedPositionId(Number(value));
    };

    const handleFileLoad = (fileData: File) => {
        setFile(fileData);
        console.log(file);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        handleSubmit(onSubmit)(event);
    };

    useEffect(() => {
        void getPositions();
    }, [getPositions]);

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
                    {state === ReducerState.PENDING && (
                        <div className={styles.registration__preloaderLayout}>
                            <Preloader />
                        </div>
                    )}

                    {state === ReducerState.SUCCESS && (
                        <RadioButtonsList
                            onRadioButtonClick={handlePositionChange}
                            posiions={positions}
                            selectedPositionId={currentSelectedPositionId}
                        />
                    )}

                    {state === ReducerState.ERROR && (
                        <div className={styles.registration__preloaderLayout}>
                            <p className={styles.registration__errorText}>
                                Avaliable positons not found
                            </p>
                        </div>
                    )}
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
