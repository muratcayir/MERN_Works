import "./sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="container">
        <div className="sidebar-content">
          <div className="sidebar-title">
            <h2>About Me</h2>
          </div>
          <div className="sidebar-img-p">
            <img
              src="https://images7.alphacoders.com/635/thumb-1920-635014.jpg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, sunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
