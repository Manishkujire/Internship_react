import React from 'react'

export default function Item(props) {
  return (
    <li
              className="list-group-item d-flex justify-content-between lh-condensed"
            >
              <div>
                <h6 className="my-0">{props.data.prod_name}</h6>
                <small className="text-muted">{props.data.discription}</small>
              </div>
              <span className="text-muted">${props.data.price}</span>
            </li>
  )
}
