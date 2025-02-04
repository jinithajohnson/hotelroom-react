import React, { useState } from 'react'
import NavBar from './NavBar'

const Search = () => {
    const [data,setData] = useState(
        {
            "name" : "",
            
        }
    )
        const inputHandler = (event)=> {
            setData({...data, [event.target.name]:event.target.value})
        }
        const readValue=() => {
            console.log(data)
        }
  return (
    <div>
<NavBar/>
<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label" name="name" value={data.name} onChange={inputHandler}>Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Search