import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display:flex;
  margin:20px 0;
  align-items:center;
  padding:10px;
  justify-content:space-around;
`

const Counter = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [over, setOver] = useState(false);
  const [time, setTime] = useState({
    hours: parseInt(hours),
    minutes: parseInt(minutes),
    seconds: parseInt(seconds)
  });
  const tickCb = useCallback(() => {
    const tick = () => {
      if (time.hours === 0 && time.minutes === 0 && time.seconds === 0)
        setOver(true);
      else if (time.minutes === 0 && time.seconds === 0)
        setTime({
          hours: time.hours - 1,
          minutes: 59,
          seconds: 59
        });
      else if (time.seconds === 0)
        setTime({
          hours: time.hours,
          minutes: time.minutes - 1,
          seconds: 59
        });
      else
        setTime({
          hours: time.hours,
          minutes: time.minutes,
          seconds: time.seconds - 1
        });
    }
    tick()
  }, [time.hours, time.minutes, time.seconds])


  useEffect(() => {
    let timerId = setInterval(() => tickCb(), 1000)
    return () => clearInterval(timerId)
  })

  return (
    <Wrapper>
      <p>{`${time.hours
        .toString()
        .padStart(2, "0")}:${time.minutes
          .toString()
          .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`}</p>
      <div>{over ? "時間到囉!" : "把握機會！！快搶購"}</div>
    </Wrapper>
  )
}

export default Counter