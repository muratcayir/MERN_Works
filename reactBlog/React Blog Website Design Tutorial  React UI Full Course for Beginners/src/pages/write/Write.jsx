import "./write.scss"

export default function Write() {

    return (
      <div className="write">
        <img className="writeImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCmsoH0cxlmR_TRXYjPky6CE0LvO_GlZynU8-t9AnI9k0nvM3K7kiA3VTkRTSAxCTuFo&usqp=CAU" alt="" />
        <form className="write-form">
          <div className="write-form-group">
            <label htmlFor="fileInput"> <i className="writeIcon fas fa-plus"></i></label>
            
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
             
            />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
            />
          </div>

          <div className="write-form-group">
            <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
          </div>

          <button className="writeSubmit" type="submit">Publish</button>
        </form>
      </div>
    );
  }
