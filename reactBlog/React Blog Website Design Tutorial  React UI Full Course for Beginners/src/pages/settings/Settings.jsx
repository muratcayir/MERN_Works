import "./settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settings-content">
        <div className="settings-content-title">
          <span className="settings-content-title-update">
            Update Your Account
          </span>
          <span className="settings-content-title-delete">Delete Account</span>
        </div>

        <form className="settings-content-form">
          <label>Profile Picture</label>
          <div className="settings-content-form-profile">
            <img
              src="https://images7.alphacoders.com/635/thumb-1920-635014.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="profile-icon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>

          <label>Username</label>
          <input type="text" placeholder="Murat ÇAYIR" />
          <label>Email</label>
          <input type="email" placeholder="mrtcayir@hotmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settings-content-form-button" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
