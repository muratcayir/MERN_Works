import "./post.scss";

export default function Post() {
  return (
    <div className="post">
      <img src="" alt="" className="post-img" />

      <div className="post-content">

          <div className="post-categories">
              <span className="post-cat">Categories 1</span>
              <span className="post-cat">Categories 2</span>
          </div>

          <div className="post-title">
              <h className="post-title-header">Lorem ipsum dolor sit amet.</h>
              <hr/>
              <span className="post-title-date">23 hours ago</span>
              <p className="post-title-p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
                nisi sapiente quaerat debitis facilis nulla veritatis totam, ipsam,
                vero, ea repudiandae iure quod ut assumenda consectetur eaque iusto.
                Ipsam, aspernatur?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
                nisi sapiente quaerat debitis facilis nulla veritatis totam, ipsam,
                vero, ea repudiandae iure quod ut assumenda consectetur eaque iusto.
                Ipsam, aspernatur?
              </p> 
          </div>

      </div>

    </div>
  );
}
