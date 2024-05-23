import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { ReducerState, START_PAGE, User } from '../../../shared';
import { userApi } from '../../../entities';

type State = {
    page: number;
    total_pages: number | null;
    users: User[];
    state: ReducerState;
    error: string | null;
};

type Action = {
    getUsers: ({
        page,
        count,
    }: {
        page: number;
        count: number;
    }) => Promise<void>;
};

const useUserStore = create<State & Action>()(
    immer((set, get) => ({
        page: START_PAGE,
        total_pages: null,
        users: [],
        state: ReducerState.IDLE,
        error: null,
        getUsers: async ({ page, count }: { page: number; count: number }) => {
            set({ state: ReducerState.PENDING });
            try {
                const response = await userApi.getUsers({ page, count });

                const { page: currentPage, total_pages, users } = response;
                set({
                    page: currentPage,
                    total_pages,
                    users: [...get().users, ...users],
                    state: ReducerState.SUCCESS,
                    error: null,
                });
            } catch (error: unknown) {
                const { message } = error as {
                    success: boolean;
                    message: string;
                };
                set({
                    state: ReducerState.ERROR,
                    error: message,
                });
            }
        },
    })),
);

export default useUserStore;
