import React, { useEffect } from 'react'

const SearchPage = ({routeParams}) => {
    useEffect(()=>{
        document.title = routeParams.query

    },[])
  return (
    <h1>Has buscado: "{routeParams.query}"</h1>
  )
}

export default SearchPage