import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {

    const deleteBtn = () => blogs.filter((blog,id) => {
      return  blog.id !== id;  
    })

    return ( 
        <div className="blog-list">
            {blogs.map((blog) => {
               const{title,body,author,id} = blog;
             return(
                 <div className="blog-preview" key={id} >
                     <Link to={`/blogs/${id}`}>
                       <h4>{title}</h4>
                        <p>{author}</p>
                        <button style={{background:'red', color:'white' }} onClick={deleteBtn}>delete</button>
                     </Link>
                 </div>
             )
           })}
            
        </div>
     );
}
 
export default BlogList;