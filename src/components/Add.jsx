import React, { useState } from 'react'
import NavBar from './NavBar'
import { unstable_useViewTransitionState } from 'react-router-dom'

const Add = () => {
    const [data,changeData]= useState(
        {
            "name" : "",
            "age" : "",
            "adharNo" : "",
            "district" : ""
        }
    )

    const inputHandler = (event)=> {
        changeData({...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
    }

  return (
    <div>
<NavBar/>
<div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">age</label>
                            <input type="text" className="form-control" name='age' value={data.age} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Adhaar no</label>
                            <input type="text" className="form-control" name='adharNo' value={data.adharNo} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">district</label>
                            <input type="text" className="form-control" name='district' value={data.district} onChange={inputHandler}/>
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Add