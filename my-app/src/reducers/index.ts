import {combineReducers} from 'redux'

import users, { IUsersReducer } from './usersReducers'
import photo, {IPhotoReducer} from './photoReducers'

import comments, {ICommentsReducer} from './commentsReducer';

import posts, {IPostsReducer} from './postReducer';

export default combineReducers({
    users,
    photo,
    comments,
    posts,
});

export interface IState {
    users: IUsersReducer;
    photos: IPhotoReducer;
    comments: ICommentsReducer;
    posts:IPostsReducer;
}