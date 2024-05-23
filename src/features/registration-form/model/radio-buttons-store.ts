import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Position, ReducerState } from '../../../shared';

import { registrationFormApi } from '../api/registration';

type State = {
    positions: Position[];
    state: ReducerState;
    error: string | null;
    currentSelectedPositionId: number;
};

type Action = {
    getPositions: () => Promise<void>;
    setCurrentSelectedPositionId: (id: number) => void;
};

const useRadioButtonStore = create<State & Action>()(
    immer((set) => ({
        positions: [],
        state: ReducerState.IDLE,
        error: null,
        currentSelectedPositionId: 0,
        setCurrentSelectedPositionId: (id: number) => {
            set({ currentSelectedPositionId: id });
        },
        getPositions: async () => {
            set({ state: ReducerState.PENDING });
            try {
                const response = await registrationFormApi.getPositions();
                const { positions } = response;
                set({
                    positions,
                    currentSelectedPositionId: positions[0].id,
                    state: ReducerState.SUCCESS,
                    error: null,
                });
            } catch (error) {
                set({
                    state: ReducerState.ERROR,
                    error: 'Error while fetching positions',
                });
            }
        },
    })),
);

export default useRadioButtonStore;
