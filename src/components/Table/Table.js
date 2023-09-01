import React from 'react'
import Search from '../Search/Search'
import Button from '../Button/Button'

export default function Table() {
  return (
    <div id="table " class="">
            <Search/>

            <table class="table justify-content-center">
                <thead>
                    <tr>
                        <th>SL_No</th>
                        <th>Name <img class=" rounded " id="head_name"  src="up.png"
                                alt=""/></th>
                        <th>Reg <img class=" rounded "  id="head_reg" src="up.png"
                                alt=""/></th>
                        <th>Grade <img class=" rounded "  id="head_grade"
                                src="up.png" alt=""/></th>
                        <th colspan="2"></th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                </tbody>
            </table>
            <div><Button id="clearTable" classname="btn
                 btn-danger w-100" text='Clear Table' /></div>

        </div>
  )
}
