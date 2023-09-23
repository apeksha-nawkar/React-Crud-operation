import { FETCH_POSTS_REQUEST,FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILED,ADD_NEW_POST,
UPDATE_POST,DELETE_POST } from "../types"
export const postsReducer = (state = { posts: [],loading:false,error:null }, action) => {
    switch (action.type) {
       
            case FETCH_POSTS_REQUEST:
                return { ...state, loading: true }
            case FETCH_POSTS_SUCCESS:
                return { ...state, posts: action.payload,loading: false }
            case FETCH_POSTS_FAILED:
                return { ...state, error: action.payload, loading: false }
            case ADD_NEW_POST:
                const existingPosts=[...state.posts]
                let length=existingPosts.length
                let newPost=action.payload
                if(length===0) newPost.id=1
                else newPost.id=existingPosts[length-1].id+1
                const allPosts=[...existingPosts,newPost]
                localStorage.setItem('posts',JSON.stringify(allPosts))
                return { ...state, posts:allPosts}
            case UPDATE_POST:
                const updatedPost=state.posts.map((p)=>{
                    if(p.id===action.payload.id) return action.payload
                    else return p
                })
                localStorage.setItem('posts',JSON.stringify(updatedPost))
                return { ...state, posts:updatedPost}
            case DELETE_POST:
                const tempPosts=[...state.posts]
                const filterPosts=tempPosts.filter(p=>p.id!==action.payload)
                localStorage.setItem('posts',JSON.stringify(filterPosts))
                return { ...state, posts:filterPosts}
            default: return state
        }
    }
