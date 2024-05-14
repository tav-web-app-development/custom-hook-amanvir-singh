import useTime from "./UseTime";
const Clock=()=> {
    const time = useTime();
    const showTime = time.toLocaleTimeString();
    return (
      <div>
        <h1>
          {showTime}
        </h1>
      </div>
    );
  }
  export default Clock;