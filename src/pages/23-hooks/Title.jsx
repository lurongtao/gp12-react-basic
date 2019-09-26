import React, { useState, useEffect } from "react"

let timer = null

function useUpdate (fn, times) {
  useEffect(() => {
    fn(times)
  }, [fn, times])
}

function Title () {
  let [ times, setTimes ] = useState(0)

  useUpdate(() => {
    console.log(0)
  }, times)

  useEffect(() => {
    timer = setInterval(() => {
      setTimes(times => times + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      Times: {times}
      <button onClick={() => clearInterval(timer)}>click</button>
    </div>
  );
}

export default Title