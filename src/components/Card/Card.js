import React from 'react'
import CardButton from '../CardButton/CardButton'
import Styles from '../Card/Card.module.css'
export default function Card(props) {
  let classname = ""
  classname = props.data.time > 3 ? props.data.time > 10 ? Styles.largeTime : Styles.mediumTime : Styles.smallTime
  return (
    <div className="col-sm-12 col-lg-4 col-md-6 col-xl-3 col-xxl-2">
      <div className={`card ${classname} mb-4 shadow-sm`} >
        <img
          className="card-img-top"
          src={props.data.img_url}
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-text">
            {props.data.paragraph}
          </p>
          <div
            className="d-flex justify-content-between align-items-center"
          >
            <div className="btn-group">
              <CardButton text="View" />
              <CardButton text="Edit" />
            </div>
            <small className="text-muted">{props.data.time} min</small>
          </div>
        </div>
      </div>
    </div>
  )
}
