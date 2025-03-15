import { useState, useEffect } from "react"

export function DigitalClock() {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const id = timeUpdate();
        return () => clearInterval(id)
    }, [time])

    const timeFormatted = () => {
        const hours = time.getHours()
        const mins = time.getMinutes()
        const secs = time.getSeconds()

        const meridian = hours >= 12 ? "PM" : "AM"

        const zeroPadding = (num) => num < 10 ? "0" + num : num

        return (`${zeroPadding(hours)}:${zeroPadding(mins)}:${zeroPadding(secs)} ${meridian}`)
    }

    const timeUpdate = () => {
        return setInterval(() =>
            setTime(new Date())
            , 1000)
    }

    return (
        <>
            <h1>{timeFormatted()}</h1>
        </>
    )
}