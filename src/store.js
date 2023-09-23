import {createStore,applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { postsReducer } from './reducer/posts';

const rootReducer=combineReducers({
   postsReducer
})
const getPostsFromStorage=localStorage.getItem('posts')?JSON.parse(localStorage.getItem('posts')):[]
const initialState={
  postsReducer:{posts:getPostsFromStorage},
}
const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(thunk)))
export default store