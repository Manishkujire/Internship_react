import React from 'react'
import Card from '../Card/Card'


export default function Album() {
    let card_data = [{
        paragraph: "This is a wider additional content. This content is a little bit longer",
        time: 2,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider additional content. This content is a little bit longer",
        time: 19,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider additional content. This content is a little bit longer",
        time: 6,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider additional content. This content is a little bit longer",
        time: 14,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider additional content. This content is a little bit longer",
        time: 3,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider additional content. This content is a little bit longer",
        time: 7,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider additional content. This content is a little bit longer",
        time: 19,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }
    ]
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">

                    {
                        card_data.map((element) => {
                            return (<Card data={element} />)
                        })
                    }

                </div>
            </div>
        </div>
    )
}
