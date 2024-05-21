import { joiResolver } from '@hookform/resolvers/joi';
import type { Schema as ValidationSchema } from 'joi';
import {
    DefaultValues,
    UseFormRegister,
    type Control,
    type DeepPartial,
    type FieldErrors,
    type FieldValues,
    type UseFormHandleSubmit,
    type UseFormReset,
    type UseFormSetError,
    type UseFormTrigger,
    type UseFormWatch,
    type ValidationMode,
} from 'react-hook-form';
import { useForm } from 'react-hook-form';

type Parameters<T extends FieldValues = FieldValues> = {
    defaultValues: DeepPartial<T>;
    validationSchema?: ValidationSchema;
    mode?: keyof ValidationMode;
};

type ReturnValue<T extends FieldValues = FieldValues> = {
    control: Control<T, null>;
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    isValid: boolean;
    handleSubmit: UseFormHandleSubmit<T>;
    reset?: UseFormReset<T>;
    watch: UseFormWatch<T>;
    setError: UseFormSetError<T>;
    trigger: UseFormTrigger<T>;
};

const useAppForm = <T extends FieldValues = FieldValues>({
    validationSchema,
    defaultValues,
    mode,
}: Parameters<T>): ReturnValue<T> => {
    const {
        control,
        register,
        handleSubmit,
        reset,
        watch,
        setError,
        trigger,
        formState: { errors, isValid },
    } = useForm<T>({
        mode,
        defaultValues: defaultValues as DefaultValues<T>,
        resolver: validationSchema ? joiResolver(validationSchema) : undefined,
    });

    return {
        control,
        register,
        isValid,
        errors,
        handleSubmit,
        reset,
        watch,
        setError,
        trigger,
    };
};

export { useAppForm };
