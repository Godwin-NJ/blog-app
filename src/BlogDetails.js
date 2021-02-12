import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
     const {id} = useParams();
    const{blogs:blog,isPending,error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
   

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method:'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
  
    return ( 
        <div>
            <div className="blog-details">
            {isPending && <div> Loading ...</div>}
            {error && <div>{error}</div> }
            {blog && (
                <article >
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>               
            )}           
            </div>
        </div>
     );
}
 
export default BlogDetails;