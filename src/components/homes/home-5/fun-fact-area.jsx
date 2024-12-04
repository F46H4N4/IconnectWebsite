import CountArea from "@/src/common/count-area";
import React from "react";

const FunFactArea = () => {
  return (
    <>
      <div
        className="tp-fun-fact-area tp-fun-fact-2"
        style={{
          background: "white",
          paddingTop: "74px",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Centers content horizontally
            justifyContent: "center", // Centers content vertically
            textAlign: "center", // Aligns text to the center
          }}
        >
          <div className="row">
            <div className="col-12">
              <div className="tp-fun-fact-section-title text-center pb-60">
                <h4 className="tp-fun-fact-title">
                  Manufacturing software that goes beyondthe benchmark
                </h4>
              </div>
            </div>
          </div>
          <div className="row" style={{ width: "100%" }}>
            <CountArea />
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .tp-fun-fact-area .container {
            text-align: center; /* Ensures text is center-aligned */
          }
          .tp-fun-fact-area .row {
            justify-content: center; /* Aligns row items to the center */
          }
        }
      `}</style>
    </>
  );
};

export default FunFactArea;
