import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const StateContext = createContext()

export const StateContextProvider = ({children}) => {

const [weather, setWeather] = useState({})
const [values, setValues] = useState({})
const [place, setPlace] = useState('Guwahati')
const [thisLocation, setLocation] = useState('')

//fetching API

const fetchWeather = async () => {
console.log(import.meta.env)

    const options = {
        method: "GET",
        url: `${import.meta.env.WEATHER_BASE_API_ENDPOINT}/current.json`,
        params: {
            q: place,
            key: import.meta.env.WEATHER_API_KEY,
        }, 
        
    };
    try {
        const response = await axios.request(options);
        console.log(response.data)
        setLocation(response.data.name);
        setWeather(response.data.weather[0]);
        
    } catch (error) {
        console.error(error);
        alert('This place does not exist')
    }

}

useEffect(() => {
    fetchWeather()
}, [place])

useEffect(() => {
    console.log(values)
}, [values])

return (
    <StateContext.Provider value={{
        weather, setPlace, values, thisLocation, place
    }}>
        {children}
    </StateContext.Provider>
)
}

export const useStateContext = () => useContext(StateContext)