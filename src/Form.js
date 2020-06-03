import React from 'react';



const form =(props)=>{
    return(
        <div className="container">
            <div>{props.error ? errorOccured() :null}</div>
            <form onSubmit={props.loadWeather}>
                <div className="row">
                    <input  className="pa2 ma2 bg-light-blue" type="text" name="city" placeholder="Enter City" ></input>
                    <input  className="pa2 ma2 bg-light-blue" type="text" name="country" placeholder="Enter Country" ></input>
                    <button  className="f6 br3 link dim ph3 pv2 mb2 dib white bg-hot-pink" > Search Weather</button>
                </div>
            </form>
        </div>
    )
}

function errorOccured() {
    return(
        <div className="alert red b" role="alert">
            Please Enter Valid city and Country
        </div>
    )
}
export default form;