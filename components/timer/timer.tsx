import { useEffect, useMemo, useState } from "react";
import { TimerContainer, TimeUnit } from "./styled";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Timer = () => {
  const deadline = "Sun Nov 20 2022 13:00:00";

  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );

    return () => clearInterval(interval);
  }, [parsedDeadline]);

  return (
    <TimerContainer>
      {/* Faltan */}
      {Object.entries({
        Días: time / DAY,
        Horas: (time / HOUR) % 24,
        Minutos: (time / MINUTE) % 60,
        Segundos: (time / SECOND) % 60,
      }).map(([label, value]) => (
        <div key={label}>
          <TimeUnit>
            {Math.floor(value) < 1 ? (
              <p>0</p>
            ) : (
              <p>{`${Math.floor(value)}`.padStart(2, "0")}</p>
            )}
            <span className="text">{label}</span>
          </TimeUnit>
        </div>
      ))}
    </TimerContainer>
  );
};

export default Timer;
