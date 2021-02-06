import React, { useEffect, useRef, useState } from "react";
import "./css/style.css";


const Tempapp = () => {
   

const [city, setCity] = useState(null);
const [search, setSearch] = useState("Search");

useEffect( () => {
const fetchApi = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ef9314b7a313587fcfcf80da5ad175c7`
    const response = await fetch(url);
    const resJson = await response.json();
    //console.log(resJson);
    setCity(resJson.main);
    
};


    fetchApi();
}, [search] )
    

    return(
        <>
            <div className="box">
            <i className="fas fa-sun"></i>
                <div className="inputData">
                    <input 
                    type="Search"
                    className="inputFeild" 
                    onChange={ (event) => { setSearch(event.target.value) }} />
                </div>
                <div className = "wave -one"></div>
            <div className = "wave -two"></div>
            <div className = "wave -three"></div>
           
               
{!city ? (
    <p className="errorMsg"> No Data Found </p>
)  : (
    <div>
        
           <div className="info">

                <h2 className="location">
                <i className="fas fa-street-view"> {search} </i>
                </h2>
                <h1 className="temp">
                 {city.temp}°C
                </h1>
                <h6 className="temp_max_min">Max. Temp.: {city.temp_max}°C | Min. Temp.: {city.temp_min}°C | humidity: {city.humidity}% | pressure: {city.pressure}hPa</h6>

            
            </div>
           
     </div>
)}

 
        </div> 
           
        </>
        
    )
}

export default Tempapp ;