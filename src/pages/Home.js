
import { useState } from 'react';
import BlogList from '../Components/BlogList';
import useFetch from '../Components/UseFetch';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
const Home = () => {
    const {data:blogs , isPending, error } = useFetch('http://localhost:6969/blogs')
    return ( 
        <div className="home">            
            { error && <div>{error}</div>}
            { isPending && <div className='loader-container'></div>}
            {blogs && <BlogList blogs={blogs.sort((a, b) => b.stars - a.stars)}  title={'Populer di Maritory'} />}
            {blogs && <BlogList blogs={blogs.filter((blogs) => (blogs.location.toUpperCase().includes("Jakarta".toUpperCase()) ))} title={'Sekitar Saya'}  />}
            {blogs && <BlogList blogs={blogs.filter((blogs) => (blogs.location.toUpperCase().includes("Jakarta".toUpperCase()) ))} title={'Spesial Offer'}  />}
        </div>
     );
     
}

export default Home;