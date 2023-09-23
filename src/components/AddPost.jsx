import React, { useState } from 'react'
import { addPost } from '../action/posts'
import { useDispatch } from 'react-redux'
const AddPost = () => {
    const dispatch = useDispatch()
    const [newPost, setNewPost] = useState({
        userId: '',
        title: '',
        body: ''
    })
    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const handleChange = (e) => {
        const key = e.target.name
        let value = e.target.value
        if (key === "userId")
            value = parseInt(value)
        setNewPost((prev) => {
            return { ...prev, [key]: value }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrorMessage('')
        setSuccessMessage('')
        if (newPost.userId !== "" && newPost.title !== "" && newPost.body !== "" &&
            !isNaN(newPost.userId)) {
            if (newPost.userId <= 0)
                setErrorMessage('User Id should be greater than 0')
            else {
                dispatch(addPost(newPost))
                setSuccessMessage('Post added Successfully')
                setNewPost({
                    userId: '',
                    title: '',
                    body: ''
                })
            }
        }
        else setErrorMessage('All fields are required');
    }
    return (
        <div className="mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
            {
                errorMessage && <h2 style={{ color: 'red' }}>{errorMessage}</h2>
            }
            {
                successMessage && <h2 style={{ color: 'green' }}>{successMessage}</h2>
            }
            <form onSubmit={handleSubmit}>
                <div className="flex mt-4" style={{ flexDirection: 'column' }}>
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" name='userId' value={newPost.userId} type="number" placeholder="User Id" /><br />
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" name='title' value={newPost.title} type="text" placeholder="Title" /><br />
                    <textarea onChange={handleChange} name='body' value={newPost.body} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" rows={6} cols={10} placeholder="Description"></textarea><br />
                    <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add</button>
                </div>

            </form>
        </div>
    )
}

export default AddPost
