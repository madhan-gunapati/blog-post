import Post from "../Post"


const Home = ()=>{
    return <div>
            <h1>Welcome To My Blog</h1>

             <div>
                <h3>Name: Madhan</h3>
                <h3>Occupation:Developer</h3>
                <img src='https://images.app.goo.gl/RNV5vNxdHXQcBwzFA.pnghttps://images.photowall.com/products/46385/zen-in-black-sand.jpghttps://res.cloudinary.com/dujknj4ka/image/upload/v1719902945/WhatsApp_Image_2024-06-01_at_6.41.41_PM_feyrx8.jpg' alt='profile-picture' />
            </div>

            <div>
                <button type="button">Add New Post</button>
                
            </div>

            <div>
                <h2>My Posts</h2>
                <ul>
                   <Post />
                   <Post />
                   <Post />
                   <Post />
                   <Post />
                </ul>
            </div>
    </div>
}   

export default Home