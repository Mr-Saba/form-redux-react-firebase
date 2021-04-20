import {SIGN_UP_WITH_EMAIL_PASS, SIGN_IN_WITH_EMAIL_PASS, SIGN_OUT, UPDATE_PASSWORD, UPDATE_EMAIL} from "./constants"

const initialState = {
    user: null,
    isLoggedIn: false
}

const Reducer = (state=initialState, action) => {
    switch(action.type) {
        case SIGN_UP_WITH_EMAIL_PASS: return {
            ...state,
            user: action.payload,
            isLoggedIn: true
        }
        case SIGN_IN_WITH_EMAIL_PASS: return {
            ...state,
            user: action.payload,
            isLoggedIn: true
        }
        case SIGN_OUT: return {
            ...state,
            user: action.payload,
            isLoggedIn: false
        }
        case UPDATE_EMAIL: return {
            ...state,
            user: action.payload,
            isLoggedIn: true
        }
        case UPDATE_PASSWORD: return {
            ...state,
            user: action.payload,
            isLoggedIn: true
        }
        default: return state
    }
}

export default Reducer