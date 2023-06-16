"use client"
import React from 'react'

const Data = ({data}:any) => {
  return (
    <div>
      <div >
        {
          data.allFilms.films.map((d: any) => {
            console.log(d)
            return <h1 key={d.title}>Film Name: <b>{d.title}</b>, Release Year: <b>{(d.releaseDate.split('-')[0])}</b></h1>
          })
        }
      </div>
    </div>
  )
}

export default Data
