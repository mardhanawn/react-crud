import { GET_CONTACTS_LIST, POST_CONTACTS_CREATE } from '../actions/contactAction'

let initialState = {
    getContactsList: false,
    errorContactsList: false,
    getResponseDataUser: false,
    errorResponseDataUser: false
}

const contacts = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS_LIST:
            return {
                ...state,
                getContactsList: action.payload.data,
                errorContactsList: action.payload.errorMessage
            }

        case POST_CONTACTS_CREATE:
            return {
                ...state,
                getResponseDataUser: action.payload.data,
                errorResponseDataUser: action.payload.errorMessage
            }
    
        default:
            return state
    }
}

export default contacts
