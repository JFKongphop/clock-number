import { useEffect, useState } from "react";

const index = () => {
  const [time, setTime] = useState({ hh: 0, mm: 0, ss: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      const [hh, mm, ss] = currentTime.split(':').map(num => parseInt(num, 10));

      setTime({ hh, mm, ss });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-black">
      <div className="w-full flex justify-center">
        <div className="flex">{time.hh}:{time.mm}:{time.ss}</div>
      </div>
      <div 
        className="absolute h-[400px] w-[400px] rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div 
          className="h-1 w-1 absolute rounded-full bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <div 
          className="h-1/2 w-[2px] origin-bottom absolute left-1/2 flex flex-col items-center gap-2"
          style={{ transform: `rotate(${time.ss * 6}deg)` }}
        >
          <p style={{ transform: `rotate(${-(time.ss * 6)}deg)` }}>{time.ss}</p>
          <p style={{ transform: `rotate(${-(time.ss * 6)}deg)` }}>{time.ss}</p>
          <p style={{ transform: `rotate(${-(time.ss * 6)}deg)` }}>{time.ss}</p>
          <p style={{ transform: `rotate(${-(time.ss * 6)}deg)` }}>{time.ss}</p>
          <p style={{ transform: `rotate(${-(time.ss * 6)}deg)` }}>{time.ss}</p>
          <p style={{ transform: `rotate(${-(time.ss * 6)}deg)` }}>{time.ss}</p>
        </div>
        <div 
          className="h-1/2 w-[2px] origin-bottom absolute left-1/2 flex flex-col items-center gap-2"
          style={{ transform: `rotate(${time.mm * 6}deg)` }}
        >
          <p style={{ transform: `rotate(${-(time.mm * 6)}deg)` }}>{time.mm}</p>
          <p style={{ transform: `rotate(${-(time.mm * 6)}deg)` }}>{time.mm}</p>
          <p style={{ transform: `rotate(${-(time.mm * 6)}deg)` }}>{time.mm}</p>
          <p style={{ transform: `rotate(${-(time.mm * 6)}deg)` }}>{time.mm}</p>
          <p style={{ transform: `rotate(${-(time.mm * 6)}deg)` }}>{time.mm}</p>
          <p style={{ transform: `rotate(${-(time.mm * 6)}deg)` }}>{time.mm}</p>
        </div>
        <div 
          className="h-1/2 w-[2px] origin-bottom absolute left-1/2 flex flex-col items-center gap-2"
          style={{
            transform: `rotate(${(time.hh % 12) * 30 + (time.mm / 60) * 30}deg)`
          }}
        >
          <p 
            style={{
              transform: `rotate(${-( (time.hh % 12) * 30 + (time.mm / 60) * 30)}deg)`
            }}
          >
            {time.hh}
          </p>
          <p 
            style={{
              transform: `rotate(${-( (time.hh % 12) * 30 + (time.mm / 60) * 30)}deg)`
            }}
          >
            {time.hh}
          </p>
          <p 
            style={{
              transform: `rotate(${-( (time.hh % 12) * 30 + (time.mm / 60) * 30)}deg)`
            }}
          >
            {time.hh}
          </p>
          <p 
            style={{
              transform: `rotate(${-( (time.hh % 12) * 30 + (time.mm / 60) * 30)}deg)`
            }}
          >
            {time.hh}
          </p>
          <p 
            style={{
              transform: `rotate(${-( (time.hh % 12) * 30 + (time.mm / 60) * 30)}deg)`
            }}
          >
            {time.hh}
          </p>
          <p 
            style={{
              transform: `rotate(${-( (time.hh % 12) * 30 + (time.mm / 60) * 30)}deg)`
            }}
          >
            {time.hh}
          </p>
        </div>
        {/* <div 
          className="h-1/2 w-[2px] origin-bottom absolute left-1/2 flex flex-col items-center gap-2"
          style={{
            transform: `rotate(${(time.hh * 30) + (time.mm / 60) * 30}deg)`
          }}
        >
          <p style={{ transform: `rotate(${-(time.hh * 30) + (time.mm / 60) * 30}deg)` }}>
            {time.hh}
          </p>
          <p style={{ transform: `rotate(${-(time.hh * 30) + (time.mm / 60) * 30}deg)` }}>
            {time.hh}
          </p>
          <p style={{ transform: `rotate(${-(time.hh * 30) + (time.mm / 60) * 30}deg)` }}>
            {time.hh}
          </p>
          <p style={{ transform: `rotate(${-(time.hh * 30) + (time.mm / 60) * 30}deg)` }}>
            {time.hh}
          </p>
          <p style={{ transform: `rotate(${-(time.hh * 30) + (time.mm / 60) * 30}deg)` }}>
            {time.hh}
          </p>
          <p style={{ transform: `rotate(${-(time.hh * 30) + (time.mm / 60) * 30}deg)` }}>
            {time.hh}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default index;
