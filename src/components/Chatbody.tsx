import React from 'react';

const Chatbody = ({chatBody,showBigOptions, optionRow, optionBtn, handleOption, options, msgEndRef, msgs}) => {
  return (
          <div style={chatBody}>
            {/* Show Big Option Buttons at the START ONLY */}
            {showBigOptions && (
              <div>
                <div style={optionRow}>
                  <button
                    style={optionBtn}
                    onClick={() => handleOption(options[0])}
                  >
                    Housing Loans
                  </button>
                  <button
                    style={optionBtn}
                    onClick={() => handleOption(options[1])}
                  >
                    Banking Services
                    {options[1].new && (
                      <span
                        style={{
                          background: "red",
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: 11,
                          borderRadius: 8,
                          padding: "2px 6px",
                          position: "absolute",
                          top: -14,
                          right: -18,
                        }}
                      >
                        NEW
                      </span>
                    )}
                  </button>
                </div>
                <div style={optionRow}>
                  <button
                    style={optionBtn}
                    onClick={() => handleOption(options[2])}
                  >
                    Existing Customer
                  </button>
                  <button
                    style={optionBtn}
                    onClick={() => handleOption(options[3])}
                  >
                    EMI Calculator
                  </button>
                </div>
                <div style={{ ...optionRow, justifyContent: "center" }}>
                  <button
                    style={optionBtn}
                    onClick={() => handleOption(options[4])}
                  >
                    Instant Call Back
                  </button>
                </div>
                <hr style={{ color: "grey", margin: "2rem auto" }} />
              </div>
            )}
            {/* Chat messages, user: right, bot: left */}
            {msgs.map((m, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: m.from === "user" ? "flex-end" : "flex-start",
                  width: "100%",
                  margin: "6px 0",
                }}
              >
                <div
                  style={{
                    background: m.from === "user" ? "#237be2" : "#f1f1f1",
                    color: m.from === "user" ? "#fff" : "#222",
                    borderRadius: "18px",
                    padding: "10px 16px",
                    maxWidth: "70%",
                    minWidth: 40,
                    fontSize: 15,
                    boxShadow:
                      m.from === "user"
                        ? "0 2px 10px 0 rgba(35,123,226,0.13)"
                        : "0 1.5px 5px 0 rgba(0,0,0,0.07)",
                    textAlign: "left",
                    wordBreak: "break-word",
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={msgEndRef}></div>
          </div>
  );
};

export default Chatbody;


{/* <Chatbody chatBody={chatBody} msgs={msgs} showBigOptions={showBigOptions} options={options} handleOption={handleOption} msgEndRef={msgEndRef} optionBtn={optionBtn} optionRow={optionRow} />   */}