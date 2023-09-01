import React from 'react'

export default function Search() {
  return (
    <div class="row my-3 ">
                <div class="col-2 mx-2">
                    <h1>Table</h1>
                </div>
                <div class="col-6  "><input placeholder="Type to search" type="text" class="form-control" id="searchinput"
                       /></div>
                <div class="col "><button onclick="clearSearchData()" class="btn w-100  btn-info ">Clear</button></div>
            </div>
  )
}
