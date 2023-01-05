import React from 'react'
import jeremy from '../assets/images/image-jeremy.png'
import ellipsis from '../assets/images/icon-ellipsis.svg'
import { useState } from 'react'
import datalist from '../Utills/data.json'
console.log(datalist[1].title)
export const Hompage = () => {
  const [state, setstate] = useState('weekly')

  const handleChange = (val) => {
    console.log(val)
    setstate(val)
  }

  return (
    <div className='parent'>
      <header className='header'>
        <div className='profile'>
          <img src={jeremy} alt='' className='profile-image' />
          <div className='content'>
            <p>Report For</p>
            <h1>
              jeremy <br className='jeremy' />
              Robson
            </h1>
          </div>
        </div>
        <div className='calender'>
          <ul className='calender-list'>
            <li className='purple'>
              <button
                className={state === 'daily' ? 'white' : 'purple-link'}
                onClick={() => handleChange('daily')}
              >
                Daily
              </button>
            </li>
            <li>
              <button
                className={state === 'weekly' ? 'white' : 'purple-link'}
                onClick={() => handleChange('weekly')}
              >
                Weekly
              </button>
            </li>
            <li className='purple'>
              <button
                className={state === 'monthly' ? 'white' : 'purple-link'}
                onClick={() => handleChange('monthly')}
              >
                Monthly
              </button>
            </li>
          </ul>
        </div>
      </header>
      {datalist.map((item) => (
        <div className={`card-wrapper  ${item.title}`} key={item.title}>
          <div className='card'>
            <div className='card-title'>
              <h3>{item.title}</h3>
              <img src={ellipsis} alt='' />
            </div>
            <div className='content'>
              <h1>{item.timeframes[state].current}hrs </h1>
              <p>
                {state === 'daily'
                  ? 'yesterday'
                  : state === 'weekly'
                  ? 'Last week'
                  : state === 'monthly'
                  ? 'Last month'
                  : ''}
                -{item.timeframes[state].previous}hrs
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
