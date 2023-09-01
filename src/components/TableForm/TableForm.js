import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

export default function TableForm() {
  return (
    <form className="w-100 " id="myForm" onsubmit="">
                <div className="col-12 ">
                    <label htmlFor="userName" className="form-label">Name <span className="text-danger">*</span> </label>
                    <Input type="text"  autocomplete="off" classname="form-control" id="username"
                       />
                </div>
                <div className="mb-3 ">
                    <span className="text-danger" id="userNameWarning" >The Name field cannot be blank</span>

                </div>

                <div className="col-12">
                    <label htmlFor="regNo" className="form-label">Registration Number <span className="text-danger">*</span>
                    </label>
                    <Input type="text" autocomplete="off" classname="form-control" id="reg"
                    />
                </div>
                <div className="mb-3 ">
                    <span className="text-danger" id="regNoWarning" >The Reg field cannot be blank</span>
                </div>
                <div className="col-12">
                    <label htmlFor="grade" className="form-label">Grade <span className="text-danger">*</span> </label>
                    <Input type="text" autocomplete="off" classname="form-control" id="grade"
                   />
                </div>
                <div className="mb-3 ">
                    <span className="text-danger" id="gradeWarning" >The Grade field cannot be blank</span>
                </div>
                <div className="buttons">
                    <Button type="button" classname="btn btn-success" id="submit" text='Submit'/>
                    <Button type="button" classname="btn btn-secondary m-2"
                        id="reset_btn" text='Reset'/>
                </div>
            </form>
  )
}
