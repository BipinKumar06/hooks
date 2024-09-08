import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Card, CardDescription, CardHeader, CardMeta } from 'semantic-ui-react'

function DataFetch() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                setPosts(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])
  return (
    <div>        
        {posts.map(post =>(
        <Card key={post.id}>
            <CardHeader>{post.id}</CardHeader>
            <CardMeta>{post.title}</CardMeta>
            <CardDescription>{post.body}</CardDescription>
        </Card>
    ))}
        {/* {JSON.stringify(posts)} */}
    </div>
  )
}

export default DataFetch