import React, { useEffect, useState } from 'react'
function Github(){
    const [data, setData ]= useState([])
    useEffect(() =>{
        fetch('https://api.github.com/users/ManDy015')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])
    return(
        <div className='text-center m-4 bg-grey-600 text-white p-4 text-3xl'>
            <h1> Github Followers: {data.followers} </h1>
        <img src = {data.avatar_url} alt="git picture" width={300} />
         </div>

    )
}
export default Github