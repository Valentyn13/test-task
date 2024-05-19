import clsx from "clsx";
import styles from "./registration-form.module.scss";
import { Button, FileUploader, Input, RadioButton } from "../../shared";
import { UserSignUpJoiDto } from "../../shared/constants/types/user-sign-up-joi-request-dto";
import { Positions } from "../../shared/constants/enums/positions-enum";
import { useAppForm } from "../../shared/lib/use-app-form/use-app-form-hook";
import { DEFAULT_SIGN_UP_PAYLOAD } from "./constants/default-sign-up-payload";
import { userSignUpValidationShema } from "./lib/user-sign-up-validation-shema";
import { ChangeEventHandler, FC, useState } from "react";
import { useFormFieldCreator } from "../../shared/lib/use-form-field/use-form-field-hook";

type RegistrationFormProps = {
  onSubmit: (payload: UserSignUpJoiDto) => void;
};
export const RegistrationForm: FC<RegistrationFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useAppForm<UserSignUpJoiDto>({
    defaultValues: DEFAULT_SIGN_UP_PAYLOAD,
    validationSchema: userSignUpValidationShema,
  });

  const [selectedPosition, setSelectedPosition] = useState<Positions>(Positions.FRONTEND_DEVELOPER)
  const [file, setFile] = useState<File | null>(null);

  const handlePositionChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    setSelectedPosition(e.target.value as Positions)
  }

  const handleFileLoad = (file: File) => {
    setFile(file);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!file) {
      return;
    }
    handleSubmit(onSubmit)(event);
  };

  return (
    <div className={clsx(styles.wrapper, "_container")}>
      Registration Form
      <form onSubmit={handleFormSubmit} className={styles.registration}>
        <Input
          type="text"
          placeholder="Your name"
          {...useFormFieldCreator({ name: "name", control })}
          className={styles.registration__name}
        />
        <Input
          type="email"
          placeholder="Email"
          {...useFormFieldCreator({ name: "email", control })}
          className={styles.registration__email}
        />
        <Input
          helperText="+38 (XXX) XXX - XX - XX"
          type="tel"
          placeholder="Phone"
          {...useFormFieldCreator({ name: "phone", control })}
          className={styles.registration__phone}
        />

        <div className={styles.registration__radio}>
          <p className={styles.registration__radio_topic}>
            Select your position
          </p>
          <RadioButton
          value={Positions.FRONTEND_DEVELOPER}
            onChange={handlePositionChange}
            checked={selectedPosition === Positions.FRONTEND_DEVELOPER}
            label={Positions.FRONTEND_DEVELOPER}
          />
          <RadioButton
          value={Positions.BACKEND_DEVELOPER}
            onChange={handlePositionChange}
            checked={selectedPosition === Positions.BACKEND_DEVELOPER}
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
          onFileLoad={
            handleFileLoad
          }
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
