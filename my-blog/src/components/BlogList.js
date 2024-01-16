const BlogList = ({ blogs, handleDelete }) => {

return (
   <>
     {
      console.log(blogs)}{
    blogs.map( blog => (

        <div className="blog-content" key={blog._id}>
   <h1 className="title">title is : {blog.name}</h1>
    <h3 className="author">written by {blog.age}</h3>
    <button onClick={() => handleDelete(blog._id)} >Delete</button>
    </div>

    ) )

   }

   </>
)
}

export default BlogList;