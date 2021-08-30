import "./write.scss"

export default function Write() {

    return (
      <div className="write">
        <img className="writeImg" src="https://p4.wallpaperbetter.com/wallpaper/856/891/732/windows-backgrounds-nature-for-pc-1920x1200-wallpaper-preview.jpg" alt="" />
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
