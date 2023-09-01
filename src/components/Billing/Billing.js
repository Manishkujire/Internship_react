import React from 'react'
import SelectInput from '../SelectInput/SelectInput'
import Input from '../Input/Input'
import Button from '../Button/Button'

export default function Billing() {
   const select_data={
    classname:"khj",
    id:'j',
    option_data:{
        value:"khjv",
        text:"kjj"
    }
   }
  return (
    <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" novalidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <Input
                  type="text"
                  classname="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                />
                
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <Input
                  type="text"
                  classname="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                />
                
            </div>
            </div>

            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <Input
                  type="text"
                  classname="form-control"
                  id="username"
                  placeholder="Username"
                  
                />
                
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email"
                >Email <span className="text-muted">(Optional)</span></label
              >
              <Input
                type="email"
                classname="form-control"
                id="email"
                placeholder="you@example.com"
              />
              
            </div>

            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <Input
                type="text"
                classname="form-control"
                id="address"
                placeholder="1234 Main St"
              />
              
            </div>

            <div className="mb-3">
              <label htmlFor="address2"
                >Address 2 <span className="text-muted">(Optional)</span></label
              >
              <Input
                type="text"
                classname="form-control"
                id="address2"
                placeholder="Apartment or suite"
              />
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                {/* <SelectInput select_data={select_data}/> */}
                <select className="form-select d-block w-100" id="state" required>
                  <option value="">Choose...</option>
                  <option>India</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select className="form-select d-block w-100" id="state" required>
                  <option value="">Choose...</option>
                  <option>Karnataka</option>
                </select>
                
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <Input
                  type="text"
                  classname="form-control"
                  id="zip"
                  placeholder=""
                />
                
              </div>
            </div>
            <hr className="mb-4" />
            <div className="custom-control custom-checkbox">
              <Input
                type="checkbox"
                classname="custom-control-input"
                id="same-address"
              />
              <label className="custom-control-label" htmlFor="same-address"
                >Shipping address is the same as my billing address</label
              >
            </div>
            <div className="custom-control custom-checkbox">
              <Input
                type="checkbox"
                classname="custom-control-input"
                id="save-info"
              />
              <label className="custom-control-label" htmlFor="save-info"
                >Save this information for next time</label
              >
            </div>
            <hr className="my-4" />

            <h4 className="mb-3">Payment</h4>

            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <Input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  classname="custom-control-input"
                  
                />
                <label className="custom-control-label" htmlFor="credit"
                  >Credit card</label
                >
              </div>
              <div className="custom-control custom-radio">
                <Input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  classname="custom-control-input"
                />
                <label className="custom-control-label" htmlFor="debit"
                  >Debit card</label
                >
              </div>
              <div className="custom-control custom-radio">
                <Input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  classname="custom-control-input"
                />
                <label className="custom-control-label" htmlFor="paypal">PayPal</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-name">Name on card</label>
                <Input
                  type="text"
                  classname="form-control"
                  id="cc-name"
                  placeholder=""
                />
                <small className="text-muted">Full name as displayed on card</small>
                <div className="invalid-feedback">Name on card is required</div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-number">Credit card number</label>
                <Input
                  type="text"
                  classname="form-control"
                  id="cc-number"
                  placeholder=""
                />
                
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-expiration">Expiration</label>
                <Input
                  type="text"
                  classname="form-control"
                  id="cc-expiration"
                  placeholder=""
                />
                
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-cvv">CVV</label>
                <Input
                  type="text"
                  classname="form-control"
                  id="cc-cvv"
                  placeholder=""
                  
                />
                
              </div>
            </div>
            <hr className="mb-4" />
            <Button classname="btn btn-primary btn-lg btn-block" type="submit" text='Continue to checkout'/>
              
          </form>
        </div>
  )
}
