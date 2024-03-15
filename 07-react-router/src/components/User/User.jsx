import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <div className='bg-red-500 text-black 5-xl text-center py-5'
        >User: {userid}</div>
    )
}

export default User