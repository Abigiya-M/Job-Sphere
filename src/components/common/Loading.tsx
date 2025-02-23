import React from "react";

interface LoadingProps {
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ text }) => {
  return (
    <div className="d-flex align-items-center gap-2 text-secondary fw-bold">
      {text && <span className="fs-5">{text}</span>}
      <img
        src="/spinner.svg"
        alt="Loading spinner"
        style={{ width: "32px", height: "32px" }}
      />
    </div>
  );
};

export default Loading;
