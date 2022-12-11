import React from 'react'

export default function Post({ post }){
  return (
    <tr id="posts_tr" key={post.id}>
        <td>{post.title}</td>
        <td>{post.body}</td>
    </tr>
  )
}