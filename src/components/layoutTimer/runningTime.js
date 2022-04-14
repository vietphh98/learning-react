import { useEffect, useState } from "react";
import { DurationTime } from "../durationTime";

export const RunningTimer = ({ requestStop,requestLap,startTimeMs }) => {
  let durationMs = useNow() - startTimeMs
  return (

    <section>
      <h4 style={{color:'green'}}>running .... </h4>
      <DurationTime durationMs={durationMs} />
      <button className="buttonCustom" onClick={()=>requestStop(durationMs)}>Stop</button>{" "}
      <button className="buttonCustom" onClick={()=>requestLap(durationMs)}>Lap</button>
    </section>
  );
};

const useNow = () => {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    let id;

    function repaint() {
      setNow(Date.now());
      id = requestAnimationFrame(repaint);
    }

    repaint();

    return () => {
      cancelAnimationFrame(id);
    };
  }, []);
  return now
} 