import { DurationTime } from "../durationTime";

export const InitTimer = ({ requestStart }) => {
  return (
    <section>
      <h4>start ....</h4>
      <DurationTime durationMs={0} />
      <button className="buttonCustom" onClick={requestStart}>Start</button>
    </section>
  );
};
