


let store = {

    _rerenderEntireThree() {},

    _state: {

        profilePage: {
            posts: [
                {id: 1, post: 'How are you?', likeCount: 15},
                {id: 2, post: "I'm fine, thanks!", likeCount: 20}
            ],
            newPostText: ""
        },

        dialogsPage: {
            messages: [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'I am fine, thanks!'},
                {id: 4, message: 'Where are you from?'},
                {id: 5, message: 'I am from Moscow in Russian'},
                {id: 6, message: 'Nice to meet you!'}
            ],
            newMessageText: "",

            dialog: [
                {id: 1, name: 'July'},
                {id: 2, name: 'Robert'},
                {id: 3, name: 'John'},
                {id: 4, name: 'Thomas'},
                {id: 5, name: 'Nadin'},
                {id: 6, name: 'Raichel'}
            ],
        },
        sidebar: [
            {id: 1, name: 'Robert'},
            {id: 2, name: 'Juan'},
            {id: 3, name: 'Rebeca'},
        ]

    },

    getState() {
      return this._state;
    },


    addPost() {
        let newPost = {
            id: 3,
            post: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireThree(this._state);
    },

    updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this._rerenderEntireThree(this._state);
    },

    addNewMessage(newMessagePost) {
        let addMessage = {id: 6, message: newMessagePost};
        this._state.dialogsPage.messages.push(addMessage);
        this._state.dialogsPage.newMessageText = '';
        this._rerenderEntireThree(this._state);
    },

    updateNewMessageText(newTextMessage) {
        this._state.dialogsPage.newMessageText = newTextMessage;
        this._rerenderEntireThree(this._state);
    },

    subscribe(observer){
        this._rerenderEntireThree = observer
    }
}


export default store;