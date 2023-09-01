import React from 'react'

export default function Button(props) {
    return (
        <button type={props.type?props.type:""} className={props.classname?props.classname:""}>{props.text}</button>

    )
}