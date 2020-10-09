import axios from 'axios'

export const GET_CONTACTS_LIST = "GET_CONTACTS_LIST"
export const POST_CONTACTS_CREATE = "POST_CONTACTS_CREATE"

export const getContactsList = () => {
    return (dispatch) => {
        axios
          .get("https://simple-contact-crud.herokuapp.com/contact")
          .then(function (response) {
              dispatch({
                  type: GET_CONTACTS_LIST,
                  payload: {
                    data: response.data,
                    errorMessage: false
                  }
              })
          })
          .catch(function (error) {
              dispatch({
                  type: GET_CONTACTS_LIST,
                  payload: {
                      data: false,
                      errorMessage: error.message
                  }
              })
          })
    }
}

export const postContactsCreate = (data) => {
    return (dispatch) => {
        axios
          .post("https://simple-contact-crud.herokuapp.com/contact", data)
          .then(function (response) {
              dispatch({
                  type: POST_CONTACTS_CREATE,
                  payload: {
                    data: response.data,
                    errorMessage: false
                  }
              })
          })
          .catch(function (error) {
              dispatch({
                  type: POST_CONTACTS_CREATE,
                  payload: {
                      data: false,
                      errorMessage: error.message
                  }
              })
          })
    }
}
