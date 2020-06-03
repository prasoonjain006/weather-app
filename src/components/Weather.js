import React from 'react';
import 'tachyons'

const weather =(props) =>{
    return(
        <div className="container ">
            <div className="cards">
                
                <h2 className= "f2 gold">{props.city} </h2>
                {props.weatherIcon ?(
                    <h1 > 
                    <i className= {`wi ba br4 black bg-light-yellow b--red bw2 fw5 f1 pa3 ${props.weatherIcon} `}  ></i>
                    </h1>
                ): null}
                
                {props.celcius ?(
                    <h2 className="tc ">{props.celcius}&deg;</h2>
                ) : null}
                
                {minmaxTemp(props.tempMIN , props.tempMAX)}
                <p className=" f2 yellow  b tc">{props.description}</p>
            </div>
        </div>
    );
};

const minmaxTemp=((min,max)=>{
    if(min && max){
        return(
            <h3>
                <span className="pa2 f3 ">{min}&deg;</span>
                <span className="pa2 f3">{max}&deg;</span>
            </h3>
        )
    }
    
    
});

export default weather;