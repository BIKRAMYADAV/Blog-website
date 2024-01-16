import React from "react";
import '../styles.css'


const Add = () => {
    return (
      <>
      <div className="add-container">
       <form action="http://localhost:3000/api/post" method="post" target="_blank">
        <div>
          <label for="say">title</label>
          <input type="text" name="title" id="title" placeholder="title" />
        </div>
        <div>
          <label for="to">author</label>
          <input name="author" id="author" type="text" placeholder="author" />
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>    
      </div>  
      </>
    )
}

export default Add;