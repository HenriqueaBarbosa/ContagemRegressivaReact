import { useState } from "react";

const useCountdown = (date) => {

    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    const countdown = () => {
        
        const countDate = new Date(date).getTime();
        const now = new Date().getTime();
    
        const interval = countDate - now;
        
        const second = 1000;
        const minute = second *60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const dayNumber = Math.floor(interval / day);
        const hourNumber = Math.floor((interval % day) / hour);
        const minuteNumber = Math.floor((interval % hour) / minute);
        const secondNumber = Math.floor((interval % minute) / second);

        setDay(dayNumber);
        setHour(hourNumber);
        setMinutes(minuteNumber);
        setSeconds(secondNumber);
    }

    setInterval(countdown, 1000);

    return [day, hour, minutes, seconds];
}

export default useCountdown;