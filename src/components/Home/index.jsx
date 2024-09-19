import { useState } from "react"
import Post from "../Post"
import {v4 as uuidV4} from 'uuid'



const Home = ()=>{
    const [state, changeState] = useState({showInput:false , title:"" , content:''})
    const [posts, changePosts] = useState([{id:1, title:'title1' , content:'This is a content about post 1'}])

    const showInput = ()=>{
        changeState((p)=>({...p , showInput:true}))
    }

    const changeTitle = (e)=>{
        changeState((p)=>({...p , title:e.target.value}))
    }

    const changeContent = (e)=>{
        changeState((p)=>({...p , content:e.target.value}))
    }

    const postContent = ()=>{
        const postList = posts
        postList.push({id:uuidV4() , title:state.title , content:state.content})
        changePosts(postList)
        console.log(postList)
      
        changeState({showInput:false , title:"" , content:''})
    }
    const saveData = ()=>{
        const url = 'dummy.com'
        const options = {
            method:'POST',
            headers:{
                'Content-Type':'Application/json',
                'Accept':'Application/json',
                'Authentication':'Bearer 1234567890'
            },
            body:JSON.stringify(posts)
            
        }

        const result = fetch(url, options)
        console.log('Fetch Activated')
    }
    

    return <div>
            <h1>Welcome To My Blog</h1>

             <div>
                <h3>Name: Madhan</h3>
                <h3>Occupation:Developer</h3>
                <img src='https://images.app.goo.gl/RNV5vNxdHXQcBwzFA.pnghttps://images.photowall.com/products/46385/zen-in-black-sand.jpghttps://res.cloudinary.com/dujknj4ka/image/upload/v1719902945/WhatsApp_Image_2024-06-01_at_6.41.41_PM_feyrx8.jpg' alt='profile-picture' />
            </div>

            {!state.showInput ? <button type="button" onClick={showInput}>Add New Post</button>:''}
            <button type='button' onClick={saveData}>Save</button>
                
                
           
            {state.showInput?
             <div>
                <label htmlFor="title" >Title</label>
               <input id='title' onChange={changeTitle} type='text' value={state.title} />

               <label htmlFor="content" >Content</label>
               <textarea id='content' onChange={changeContent} type='text' value={state.content} />

               <button type='button' onClick={postContent}>POST</button>
                
                </div> 
             
             : ''}

            <div>
                <h2>My Posts</h2>
                <ul>
                   {posts.map((item)=><Post key={item.id} data={item} />)}
                </ul>
            </div>
    </div>
}   

export default Home