import { useEffect, useState } from 'react';
const useTime=()=> {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
      const intervalID= setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(intervalID);
      };
    }, []);
    return time;
  }

  export default useTime;