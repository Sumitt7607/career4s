import React from "react";

export const AdmissionTicker = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#000",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "8px 0",
          color: "#fff",
          fontSize: "14px",
          fontWeight: 500,
          animation: "scroll-left 15s linear infinite",
        }}
      >
        <span style={{ margin: "0 40px" }}>
          🎓 Admission India
        </span>
        <span style={{ margin: "0 40px" }}>
          🎓 Admission Abroad
        </span>
        <span style={{ margin: "0 40px" }}>
          🎓 Admission Online
        </span>
        <span style={{ margin: "0 40px" }}>
          🎓 Admissions Distance
        </span>
          <span style={{ margin: "0 40px" }}>
         ☎️ +91 9650831008
        </span>
      </div>

      {/* CSS KEYFRAMES */}
      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};
