import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function About() {
  const { id } = useParams();
  const url = `https://restcountries.com/v3.1/name/${id}`;
  const { data, error, isPending } = useFetch(url);
  console.log(data && data[0]);
  if(error) return <div><h1 className='error'>{error} !</h1></div>
  if(isPending) return <div className="loader-container"><div className='loader'></div></div>
  return (
    <div>
      {data && 
          <div className="container">
            <Link to="/" className="btn">
              ← Back
            </Link>
            <div className="about-context">
                <img src={data[0].flags.svg} alt="" className="country-img" />
                <div className="intro-content">
                    <h2 className="intro-title">{data[0].name.common}</h2>
                    <div className="text-wrapper">
                        <div className="text-wrapper-left">
                            <p><b>Native name: </b> <span>{data[0].name.common}</span></p>
                            <p><b>Population: </b> <span>{data[0].population}</span></p>
                            <p><b>Region: </b> <span>{data[0].region}</span></p>
                            <p><b>Subregion: </b> <span>{data[0].subregion}</span></p>
                            <p><b>Capital: </b> <span>{data[0].capital ? data[0].capital[0] : 'No Capital'}</span></p>
                        </div>
                        <div className="text-wrapper-right">
                            <p><b>Top level domain: </b> <span>{data[0].cca2}</span></p>
                            <p><b>Currencies: </b> <span>{data[0].continents[0]}</span></p>
                            <p><b>Language: </b> <span>{data[0].cca3}</span></p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      }
    </div>
  );
}

export default About;
