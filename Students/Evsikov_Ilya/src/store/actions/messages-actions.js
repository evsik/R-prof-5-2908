export let SEND_MSG = '@@messages/SEND_MESSAGE';

export let sendMessage = ( text, sender) => ({
    type: SEND_MSG, text, sender
})