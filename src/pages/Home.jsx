import React from 'react'
import {useFetch} from '../hooks/useFetch'
import Filter from '../components/Filter'
import { Link } from 'react-router-dom'

function Home() {
  const {data , error , isPending} = useFetch('https://restcountries.com/v3.1/all')
  console.log(data && data)
  if(error) return <div><h1 className='error'>{error} !</h1></div>
  if(isPending) return <div className="loader-container"><div className='loader'></div></div>
  return (
    <div className='container home-container'>
      <Filter/>
      <div className="cards-container">
        {data && data.map((country) => {
          const {flags , name, population , region, capital} = country
          return(
            <Link to={`/about/${name.common}`} className='card' key={name.common}>
              <img src={flags.png} alt="" className='card-img'/>
              <div className="card-body">
                <h5 className='card-title'>{name.common}</h5>
                <p>
                  <b>Population: </b>
                  {population}
                </p>
                <p>
                  <b>Region: </b>
                  {region}
                </p>
                <p>
                  <b>Capital: </b>
                  {capital ? capital[0] : 'No Capital' }
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Home