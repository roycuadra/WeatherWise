import React, { useRef } from 'react';

export default function Search(props) {
    const searchInput = useRef();
return (
  <div style={{marginRight: 'auto', marginLeft: 'auto'}} className='container d-flex col-sm-6 flex-column align-items-center shadow rounded-4'>
    <h1 style={{fontFamily: 'cursive'}} className='text-center'>WeatherWise</h1>
    <div className='d-flex justify-content-center'>
      <input style={{border: '1px solid blue'}}
        type="search"
        value={props.searchData}
        className='form-control border-0 rounded-start flex-grow-1 p-3'
        onChange={() => props.eventHandler(searchInput.current.value)}
        ref={searchInput}
        placeholder='Enter a location'
      />
      <button onClick={props.searchWeather} className='btn btn-primary rounded-end mx-3 p-2'>
        Search
      </button>
    </div>
  </div>
);

      
}
