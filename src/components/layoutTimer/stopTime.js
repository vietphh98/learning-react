import { DurationTime } from "../durationTime";

export const StoppingTimer = ({ requestReset, requestResume, startTimeMs }) => {
  return (
    <section>
      <h4 style={{color:'red'}}>stopping ....</h4>
      <DurationTime durationMs={startTimeMs} />
      <button className="buttonCustom" onClick={requestReset}>Reset</button>{" "}
      <button className="buttonCustom" onClick={()=>requestResume(startTimeMs)}>Resume</button>
    </section>
  );
};
