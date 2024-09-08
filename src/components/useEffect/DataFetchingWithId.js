import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, CardDescription, CardHeader, CardMeta } from 'semantic-ui-react'

// using ButtonClick to getPost
function DataFetchingWithId() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res.data)
            setPost(res.data)
        })
        .catch(err => console.log(err))
    },[idFromButtonClick])
    const handleClick=()=>{
     setIdFromButtonClick(id)
    }
  return (
    <div>
        DataFetchingWithId
        <input type="text" value={id} onChange={e=>{setId(e.target.value)}} />
        <button type='button' onClick={handleClick}>Fetch Data</button>
        <Card key={post.id}>
            <CardHeader>{post.id}</CardHeader>
            <CardMeta>{post.title}</CardMeta>
            <CardDescription>{post.body}</CardDescription>
        </Card>
    </div>
  )
}

export default DataFetchingWithId