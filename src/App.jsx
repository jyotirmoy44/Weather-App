import React, { useState } from 'react'
import { useStateContext } from './Context/index1'
import search from './assets/icons/search.svg'
import { BackgroundLayout, MiniCard, WeatherCard } from './Components'

const App = () => {

  const [input, setInput] = useState('')
  const {weather, thisLocation, values, place, setPlace} = useStateContext()
  
  const submitCity = () => {
    setPlace(input)
    setInput('')
  };

  console.log('values', values);
  console.log('type of values:', typeof values);

  if (values && !Array.isArray(values)) {
    console.error('Expected values to be an array, but got:', values);
    return <div>Error: Invalid data type</div>;
  }

  return (
    <div className='w-full h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>
      <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1>

      <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
      
      <img src={search} 
      className='w-[1.5rem] h-[1.5rem]'
      alt='search' />

      <input 
      onKeyUp={ (e) => {
          if (e.key === 'Enter') {
              submitCity()
          }}} 
      
      type="text" 
      placeholder='Search' 
      className='focus:outline-none w-full text-[#212121] text-lg'
      value={input} 
      onChange={ e => setInput(e.target.value)} />
      </div>
      </nav>

      <BackgroundLayout></BackgroundLayout>
      <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>

      <WeatherCard 
      place={thisLocation}
      windspeed={weather.windspeed}
      humidity={weather.humidity}
      temperature={weather.temp}
      heatIndex={weather.heatIndex}
      iconString={weather.conditions}
      conditions={weather.conditions}
      />

      <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
        { values?.slice(1, 7).map((curr) => {
          return (
            <MiniCard
            key={curr.datetime}
            time={curr.datetime}
            temp={curr.temp}
            iconString={curr.conditions} />
          )
        })}
      </div>
      </main>

    </div>
  )
}

export default App


