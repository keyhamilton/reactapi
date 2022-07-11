import {useEffect,useState} from 'react'
import './App.css'
const App=()=> {
  const [posts, setPosts]=useState([])
const getPosts = async () => {
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts")
                          .then(res => res.json())
                          .then(data => setPosts(data))
                          .catch(err => console.log(err))
  
  } catch (err) {
    console.error(err.message);
  }
};
useEffect(()=>{
    
    getPosts()
}, [])
return (
  <div>
   <h1>useEffect</h1>
   <ul>
     {posts.map(post=>(
       <li key={post.id}>{post.title}</li>
     ))}
   </ul>
  </div>
);
}
export default App;