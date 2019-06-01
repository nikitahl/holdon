import React, { useState, useEffect } from 'react'

const getDatesDiff = (distance) => {
  if (distance < 1000) {
    return '0 seconds'
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)
  let dataString = ''
  if (days > 0) {
    dataString = days + ' day' + (days > 1 ? 's ' : ' ')
  }
  if (hours > 0) {
    dataString += hours + ' hour' + (hours > 1 ? 's ' : ' ')
  }
  if (minutes > 0) {
    dataString += minutes + ' minute' + (minutes > 1 ? 's ' : ' ')
  }
  dataString += seconds + ' second' + (seconds > 1 ? 's ' : ' ')
  return dataString
}
let timer
export default function Counter ({ savedStart }) {
  const [start, setStart] = useState(savedStart)
  const [current, setCurrent] = useState(0)
  const startTimer = (startTime) => {
    setStart(startTime)
    clearInterval(timer)
    timer = setInterval(() => {
      setCurrent(Date.now())
    }, 500)
  }
  if (savedStart > 0 && !timer) {
    setCurrent(Date.now())
    startTimer(savedStart)
  }
  useEffect(() => {
    document.title = `You clicked ${getDatesDiff(current - start)} ago`
  }, [current])
  return (
    <div>
      <p>You clicked {getDatesDiff(current - start)} ago</p>
      <button onClick={() => startTimer(Date.now())}>{start ? 'Restart' : 'Start'}</button>
    </div>
  )
}
