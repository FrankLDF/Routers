import React from 'react'
import { Link } from 'react-router-dom';


function Home() {
    const nombres = [
        "atanagildo",
        "ataulfo",
        "ervigio",
        "leovigildo",
        "recesvinto",
        "sisebuto",
      ],
      url = "https://www.html6.es/img/rey_";
  return (
    <>
          {
              nombres.map((rey, index) =>
                <Link to={`/rey/${rey}`} key={index}>
                  <img src={`${url}${rey}.png`} alt={rey} />
                </Link>)
      }
    </>
  )
}

export default Home
