import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()


/*    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudary')
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    })
*/


    return (
        <div className='text-center m-4 bg-gray text-red-500 p-4 text-3xl'
        >Github Name: {data.name}
        <img src="https://tse4.mm.bing.net/th?id=OIP.xSb9pJlsxlbTXstHbUrrXQHaEK&pid=Api&P=0&h=180" alt=""/>
        </div>
    )
}

export default Github


export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/suneel8022')
    return response.json()
}