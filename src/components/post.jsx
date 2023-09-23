import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../action/posts'
import EditPost from './EditPost'
const Post = (props) => {
    const dispatch = useDispatch()
    const { post, index } = props
    const { userId, id, title, body } = post
    const [isEdit, setIsEdit] = useState(false)
    const handleDelete = () => {
        dispatch(deletePost(id))
    }
    return (
        <>
            <div className="overflow-hidden bg-white  shadow sm:rounded-lg border-2 border-stone-300  mb-10">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">{`Post-${index + 1}`}</h3>
                </div>
                {
                    !isEdit?
                    <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Post Id</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{id}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">User Id</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{userId}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Title</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{title}</dd>
                        </div>

                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Body</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {body}
                            </dd>
                        </div>
                        <div className="bg-white">

                            <ul >
                                <li className="py-3 pl-3 pr-4 text-sm">
                                    <button type="button" onClick={() => setIsEdit(true)}
                                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</button>
                                    <button type="button" onClick={handleDelete} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>

                                </li>
                            </ul>

                        </div>
                    </dl>
                </div>
                :<EditPost post={post} isEdit={isEdit} func={setIsEdit} />
                }
            </div>

        </>
    )


}

export default Post
