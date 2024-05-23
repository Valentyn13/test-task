import { ChangeEventHandler, FC } from 'react';
import { Position, RadioButton } from '../../../../shared';

type RadioButtonProps = {
    posiions: Position[];
    selectedPositionId: number;
    onRadioButtonClick: ChangeEventHandler<HTMLInputElement>;
};

export const RadioButtonsList: FC<RadioButtonProps> = ({
    posiions,
    selectedPositionId,
    onRadioButtonClick,
}) => {
    return (
        <>
            {posiions.map((position) => {
                const { id, name } = position;
                return (
                    <RadioButton
                        key={id}
                        value={id}
                        onChange={onRadioButtonClick}
                        checked={selectedPositionId === id}
                        label={name}
                    />
                );
            })}
        </>
    );
};
