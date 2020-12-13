import { User } from "../domain/models/User";
import { AppState } from "../common/states/appState";

const updateUser = (state: AppState, payload: User) => ({
    ...state,
    userState: {
        ...state.userState,
        ...payload,
    },
});

export { updateUser };
