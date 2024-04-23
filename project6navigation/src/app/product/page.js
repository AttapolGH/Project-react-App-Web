"use client"
import Image from 'next/image';
import '@/App.css';
import { useState, useEffect } from "react"

function App() {
  const [countries, setCountries] = useState([])
  const [word, setWord] = useState("")
  const [dataFilter] = useState(["name", "capital"])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")//update link api
      .then(res => res.json())
      .then(data => {//เก็บข้อมูล res.json
        setCountries(data)//นำข้อมุลมาเก็บ
        console.log(data)
      })
  }, [])

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  const searchCountries = (countries) => {
    return countries.filter((item) => {
      return dataFilter.some((filter) => {
        if (filter === "name" && item.name && item.name.common) {
          // ค้นหาชื่อประเทศใน name.common
          return item.name.common.toString().toLowerCase().indexOf(word.toLowerCase()) > -1;
        } else if (filter === "capital" && item.capital) {
          // ค้นหาตามข้อมูล capital
          return item.capital.toString().toLowerCase().indexOf(word.toLowerCase()) > -1;
        }
        return false;
      })

    })
  }
  return (
    <div className="container">
      <div className="search-container">
        <label htmlFor="search-form">
          <input type="text"
            className="search-input"
            placeholder="ค้นหาข้อมูลประเทศที่คุณสนใจ (เมืองหลวง,ชื่อประเทศ)"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </label>
      </div>
      <ul className="row">
        {searchCountries(countries).map((item, index) => {
          return (
            <li key={index}>
              <div className="card">
                <div className="card-title">
                  <Image src={item.flags.svg} alt={item.name.common} width={50} height={50} />
                </div>
                <div className="card-body">
                  <div className="card-description">
                    <h2>{item.name.common}</h2>
                    <ol className="card-list">
                      <li>ประชากร : <span>{formatNumber(item.population)}</span> คน </li>
                      <li>ภูมิภาค : <span>{item.region}</span></li>
                      <li>เมืองหลวง : <span>{item.capital}</span></li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;