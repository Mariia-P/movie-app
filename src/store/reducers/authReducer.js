import * as types from '../types';

const initialState = {
    idToken: null,
    localId: null
};

export const authReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case types.AUTHENTICATE_USER:
            return {
                ...state,
                idToken: payload.idToken,
                localId: payload.localId
            };

        case types.LOGOUT_USER:
            return {
                ...state,
                idToken: null,
                localId: null
            };
        default:
            return state;
    }
};
