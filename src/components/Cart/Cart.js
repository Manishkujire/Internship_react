import React from 'react'
import Item from '../Item/Item'
import Input from '../Input/Input'
import Button from '../Button/Button'

export default function Cart() {
 let sum=0
   const items=[{
    prod_name:"A",
    discription:"aaa",
    price:23
  },{
    prod_name:"B",
    discription:"bb",
    price:3
  },{
    prod_name:"C",
    discription:"ccc",
    price:239
  }]
 sum=items.map((item)=>{
    sum+=item.price
    })
  return (
    <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            {items.map((elemet)=>{
              return <Item data={elemet}/>
            })}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>{sum}</strong>
            </li>
          </ul>

          <form className="card p-2">
            <div className="input-group">
              <Input type="text"
                classname="form-control"
                placeholder="Promo code"/>
              <div className="input-group-append">
                <Button type="submit" classname="btn btn-secondary" text='Redeem'/>
              </div>
            </div>
          </form>
        </div>
  )
}
