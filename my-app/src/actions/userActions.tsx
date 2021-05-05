import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/IUserTypes';
import { ISingleUser } from '../entities/user';

export const getUsers = (): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((usersList: ISingleUser[]) => {
            dispatch({
                type: actionTypes.GET_USERS,
                usersList
            });
        });
}) as any;