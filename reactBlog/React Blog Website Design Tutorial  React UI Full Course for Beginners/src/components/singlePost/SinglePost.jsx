import "./singlepost.scss"

import React from 'react'

export default function SinglePost() {
    return (
        <div className="singlepost">
            <div className="singlepost-content">
                
                <img src="https://ae01.alicdn.com/kf/HTB15BU.HVXXXXaQXXXXq6xXFXXXy/Running-Horse-Blue-Light-Custom-Fashion-Home-Decoration-Poster-Print-Size-50x76-cm-Wall-Sticker.jpg" alt="" />

                <div className="singlepost-content-edit">
                    <h1 className="singlepost-content-edit-header">Lorem ipsum dolor sit amet.</h1>
                    <div className="singlepost-content-edit-icon">
                        <span><i className="singlepost-icon far fa-edit"></i></span>
                        <span><i className="singlepost-icon far fa-trash-alt"></i></span>
                    </div>
                </div>

                <div className="singlepost-content-info">
                    <span className="singlepost-info-author">Author</span>
                    <span className="singlepost-info-date">23.12.2023</span>
                </div>

                <p className="singlepost-content-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio at odit tempore dolore, 
                    adipisci ullam perspiciatis quidem quaerat aut quos consequuntur neque fuga aliquid culpa asperiores cupiditate. 
                    Quam possimus, molestias porro earum illo sit? Optio ut non ab, doloribus magnam, iste dolore expedita asperiores fuga quibusdam dignissimos vel adipisci.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio at odit tempore dolore, 
                    adipisci ullam perspiciatis quidem quaerat aut quos consequuntur neque fuga aliquid culpa asperiores cupiditate. 
                    Quam possimus, molestias porro earum illo sit? Optio ut non ab, doloribus magnam, iste dolore expedita asperiores fuga quibusdam dignissimos vel adipisci.
                </p>

            </div>
        </div>
    )
}
