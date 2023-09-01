import React from 'react'

export default function SelectInput(props) {
    return (
        <select
            className={props.select_data.classname?props.select_data.classname:""}
            id={props.select_data.id?props.select_data.id:""} 
        >
            {props.select_data.option_data.map((element)=>{
                return <option value={element.value}>{element.text}</option>
            })}
            
            <option>India</option>
        </select>
    )
}
