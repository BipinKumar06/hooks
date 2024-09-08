import axios from 'axios'
import React, {useState, useEffect} from 'react'

function DataFetchingOne() {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    const [post,setPost] = useState({})
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => {
            setLoading(false)
            setPost(response.data)
            setError('')
        }).catch(error =>{
            setLoading(false)
            setPost({})
            setError('something went wrong!')
        })
    },[])
  return (
    <div>
        {loading ? 'loading': <div>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
        </div>}
        {error ? error : null}
    </div>
  )
}

export default DataFetchingOne