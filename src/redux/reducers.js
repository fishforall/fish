export function reducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            state.isAuth = true;
            return state;
        default:
            return state;
    }
}