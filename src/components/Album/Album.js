import React from 'react'
import Card from '../Card/Card'


export default function Album() {
    let card_data = [{
        paragraph: "This is a wider additional content. This content is a little bit longer",
        time: 3,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: " lead-in to additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: " text below as a natural lead-in to This content is a little bit longer",
        time: 6,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "with supporting text below as a little bit longer",
        time: 4,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: " as a natural lead-in to additional content. This little bit longer",
        time: 3,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: " This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: " additional content. This content is a little bit longer",
        time: 7,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider card with . This content is a little bit longer",
        time: 19,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider card with  This content is a little bit longer",
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
