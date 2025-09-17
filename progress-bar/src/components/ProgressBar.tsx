import { useEffect, useState } from "react";

type ProgressBarType = {
  progress: number;
  width: string;
  completionColor?: string;
};

const ProgressBar = ({
  progress = 0,
  width = "800px",
  completionColor = "#72bf6a",
}: ProgressBarType) => {
  const [progressPerc, setProgressPerc] = useState(progress);
  useEffect(() => {
    setInterval(() => {
      setProgressPerc((prev) => {
        const progress = prev + 1;
        return progress > 100 ? 100 : progress;
      });
    }, 100);
  }, []);

  return (
    <div style={{ width: width }} className="progress-bar">
      <span style={{ color: progressPerc <= 51 ? "black" : "white" }}>
        {progressPerc > 100 ? 100 : progressPerc}%
      </span>
      <div
        className="completion-bar"
        style={{
          width: `${progressPerc}%`,
          backgroundColor: completionColor,
          height: "100%",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
