import React, { useState } from 'react'
import './PostBlog.scss'
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

const PostBlog = () => {
   // const [image, setImage] = useState('');
   const [title, setTitle] = useState('');
   const [author, setAuthor] = useState('');
   const [speciality, setSpeciality] = useState('');
   const [html, setHtml] = useState('<p>Write your Blog</p>')

   var modules = {
      toolbar: [
         [{ size: ["small", false, "large", "huge"] }],
         ["bold", "italic", "underline", "strike", "blockquote"],
         [{ list: "ordered" }, { list: "bullet" }],
         ["link"],
         [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
      ]
   };

   var formats = [
      "header", "height", "bold", "italic",
      "underline", "strike", "blockquote",
      "list", "color", "bullet", "indent",
      "link", "align", "size",
   ];

   const handleProcedureContentChange = (content) => {
      setHtml(content)
   };


   // Submit or Upload post
   const submitFunc = async (e) => {
      e.preventDefault();
      const date = Date();
      const data = { title, author, speciality, date, html };
      const response = await fetch("http://localhost:3000/blogs", {  //post data to database url 
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            'content-Type': 'application/json'
         }
      })
         .then(res => {
            setAuthor('')
            // setImage('')
            setSpeciality('')
            setTitle('')
            setHtml('')
            console.log("sucessful")
            console.log(response)
            window.location.reload()
         })
         .catch(err => {
            console.log("error")
         })
   }


   return (
      <div className='postblog'>
         <h1 style={{textAlign: 'center', padding:'1.2rem 0 0 0'}}>Write Blog</h1>
         <div className="posts">
            <form>

               <div className="div_input">
                  <input type="text" name="" value={title} id="" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
               </div> 
               <div className="div_input">
                  <input type="text" name="" value={author} id="" placeholder='Author' onChange={(e) => setAuthor(e.target.value)} />
               </div>
               <div className="div_input">
                  <input type="text" name="" value={speciality} id="" placeholder='Speciality' onChange={(e) => setSpeciality(e.target.value)} />
               </div>
            </form>

            <div className='heading'> Preview  </div>
            <div className='preview' dangerouslySetInnerHTML={{ __html: html }}></div>

            <div className='text_editor'>
               <ReactQuill
                  theme="snow" modules={modules} formats={formats}
                  placeholder="write your content ...."
                  onChange={handleProcedureContentChange}
                  style={{ height: "220px", width:"95%", margin: "auto", marginBottom:"50px", color: "white", }}
               >
               </ReactQuill>
            </div>
            <div className="submit_btn">
               <button value="Post" onClick={submitFunc}>Post</button>
            </div>
         </div>

         <div className="search_div">
            <input type="search" name="" id="" placeholder='Search Title'/>
            <button value="Search">Search</button>
         </div>
      </div>
   )
}

export default PostBlog
