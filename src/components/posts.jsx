import React, { useEffect } from 'react';
import Post from './post';
//import { Counter } from './features/counter/Counter';
import { fetchPosts } from '../action/posts';
import { useSelector, useDispatch } from 'react-redux';
import AddPost from './AddPost';
const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.postsReducer)
  useEffect(() => {
    if (!localStorage.getItem('posts') || posts.length === 0)
      dispatch(fetchPosts())
  }, [dispatch,posts.length])
  return (
    <>
      {
        loading ? <p>loading...</p> :
          error?
          <p style={{color:'red'}}>{error}</p>:
          <div className="h-100 flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4">
              <AddPost />
              <h2 className="text-4xl font-bold p-10 dark:text-white">All Posts</h2>
                {
                  posts.length > 0 &&
                  posts.map((post, index) => {
                    return (
                      <Post key={post.id} index={index} post={post} />
                    )
                  })
                }
            </div>
          </div>
      }
    </>
  );
}

export default Posts;
