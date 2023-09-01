import React from 'react'

export default function Input(props) {
  return (
    <input className={props.classname?props.classname:""} 
                  required
type={props.type?props.type:"text"} placeholder={props.placeholder?props.placeholder:""} id={props.id?props.id:""} value={props.value?props.value:""} />
  )
}
