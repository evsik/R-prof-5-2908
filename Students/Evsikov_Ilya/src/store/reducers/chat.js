import update from 'react-addons-update';

const storeChat = {
    chats: [
        {
            id: '1',
            title: 'Lorem'
        },
        {
            id: '2',
            title: 'Ipsum'
        },
        {
            id: '3',
            title: 'Dolor'
        }
    ]
}

export default (store = storeChat, action) => {
    switch(action.type) {

        default:
            return store;
    }
}