import { FETCH_POSTS_REQUEST,FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILED,
ADD_NEW_POST,DELETE_POST,UPDATE_POST} from "../types"
import axios from 'axios'
export const fetchPosts=()=>async(dispatch)=>
{
    try {
        dispatch({type:FETCH_POSTS_REQUEST})
        const response=await axios.get('https://jsonplaceholder.typicode.com/posts')
        localStorage.setItem("posts",JSON.stringify(response.data))
        dispatch({type:FETCH_POSTS_SUCCESS,payload:response.data})
    } catch (error) {
        dispatch({type:FETCH_POSTS_FAILED,payload:error.message})
    }
}

export const addPost=(data)=>async(dispatch)=>
{
    dispatch({type:ADD_NEW_POST,payload:data})
}
export const updatePost=(data)=>async(dispatch)=>
{
    dispatch({type:UPDATE_POST,payload:data})
}
export const deletePost=(id)=>async(dispatch)=>
{
    dispatch({type:DELETE_POST,payload:id})
}