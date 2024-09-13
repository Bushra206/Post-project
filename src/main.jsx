import React,{useEffect,useState} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes,Route,useParams,NavLink} from 'react-router-dom'
            //home
const Home=()=>{
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>data.json()).then((data)=>setPosts(data));
  },[])
  return(
    <div>
      <div className='post-cont'>
          { posts.map((post)=>(
          <NavLink style={{display:'block'}} to={`/post/${post.id}`}>{post.title}</NavLink>
          ))
          }
      </div>
       

        
    </div>
  )
}
                  //post
const PostPage=()=>{
  const [data,setData]=useState([]);
  const params=useParams();
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`).then((data)=>data.json()).then((data)=>setData(data));
  },[])

  if(data==null) return <p>loading...</p>
  return(
    <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
    </div>
  )
}
                     //about
const About=()=>{
  return(
    <div>
        <h1>About page</h1>
    </div>
  )
}
                //profile
const Profile=()=>{
  return(
    <div>
        <h1>profile page</h1>
    </div>
  )
}
                 //settings
const Settings=()=>{
  return(
    <div>
        <h1>settings page</h1>
    </div>
  )
}
                 //say users
const SayUser=()=>{
  const params=useParams();
  console.log("params",params);
  return(
    <div>
        <h1>my name is {params.userId}</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/user/:userId' element={<SayUser/>}/>
      <Route path='/post/:postId' element={<PostPage/>}/>
      <Route path='account'>
         <Route path='profile' element={<Profile/>}/>
         <Route path='settings' element={<Settings/>}/>
      </Route>
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
 
)
