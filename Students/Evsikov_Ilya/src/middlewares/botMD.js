import {SEND_MSG, sendMessage} from "../store/actions/messages-actions";

export default store => next => action => {
    switch (action.type) {
        case SEND_MSG: {
            if (action.sender == "Me") {
                setTimeout(() => {
                    return store.dispatch(sendMessage('Hello', 'Darth Vader'))
                }, 1000)
            }
        }
    }
    return next(action)
}