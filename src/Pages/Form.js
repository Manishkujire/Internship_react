import React from 'react'
import Cart from '../components/Cart/Cart'
import Billing from '../components/Billing/Billing'
import Footer from '../components/Footer/Footer'

export default function Form() {
  return (
    <div className="container">
      <div className="py-5 text-center">
        
        <h2>Checkout form</h2>
      </div>

      <div className="row">
        <Cart/>
        <Billing/>
      </div>

      <Footer/>
    </div>
  )
}
