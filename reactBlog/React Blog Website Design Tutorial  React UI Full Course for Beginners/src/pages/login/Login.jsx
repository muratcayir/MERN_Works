import React from 'react'

export default function Login() {
    return (
        <div>
            <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src=""
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              
            />
          </div>
        </div>
    )
}
