import { Dispatch } from "redux";
import * as actionTypes from "../actions/actionTypes/IPostTypes";
import { ISinglePost } from "../entities/posts";

export const getPosts = (): Promise<ISinglePost[]> => ((dispatch: Dispatch) => {

    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then((postsList: ISinglePost[]) => {
           console.log(postsList) 
           dispatch({
                type: actionTypes.GET_POSTS,
                postsList,
            });
        });
}) as any;