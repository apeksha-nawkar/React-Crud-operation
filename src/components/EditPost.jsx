import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updatePost } from '../action/posts'
const EditPost = ({ post, isEdit, func }) => {
    const dispatch = useDispatch()
    const [currentPost, setcurrentPost] = useState({
        id: post.id,
        userId: post.userId,
        title: post.title,
        body: post.body
    })
    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const handleChange = (e) => {
        const key = e.target.name
        let value = e.target.value
        if (key === "userId")
            value = parseInt(value)
        setcurrentPost((prev) => {
            return { ...prev, [key]: value }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('')
        setSuccessMessage('')
        if (currentPost.userId !== "" && currentPost.title !== "" && currentPost.body !== "" &&
            !isNaN(currentPost.userId)) {
            if (currentPost.userId <= 0)
                setErrorMessage('User Id should be greater than 0')
            else {
                dispatch(updatePost(currentPost))
                setSuccessMessage('Post Updated Successfully')
            }

        }
        else setErrorMessage('All fields are required');
    }
    return (

        <div className="mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>

            <form onSubmit={handleSubmit} style={{
                border: '2px solid #f3eded',
                padding: '10px', marginBottom: '10px', borderRadius: '10px'
            }}>
                {
                    errorMessage && <h2 style={{ color: 'red' }}>{errorMessage}</h2>
                }
                {
                    successMessage && <h2 style={{ color: 'green' }}>{successMessage}</h2>
                }
                <div className="flex mt-4" style={{ flexDirection: 'column' }}>
                    <label>User Id</label>
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" name='userId' value={currentPost.userId} type="number" placeholder="User Id" /><br />
                    <label>Title</label>
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" name='title' value={currentPost.title} type="text" placeholder="Title" /><br />
                    <label>Body</label>
                    <textarea onChange={handleChange} name='body' value={currentPost.body} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" rows={6} cols={10} placeholder="Description"></textarea><br />
                    <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Update</button>
                    <button type="button"
                        onClick={() => func(false)} className="text-white bg-gray-800 hover:bg-gray-900  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Cancel</button>
                </div>

            </form>
        </div>

    )
}

export default EditPost
