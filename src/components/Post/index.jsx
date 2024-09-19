const Post = ({data})=>{
    return <div>
        <img src='' alt='post-image' />
        <h2>{data.title}</h2>
        <p>{data.content}</p>
        <button type='button'>Edit Post</button>
        <button type="button">Delete Post</button>
        <hr />
    </div>
}

export default Post