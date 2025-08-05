import React, { useRef, useState, useEffect } from "react";
import SbiLogo from './assets/sbiLogo.png';
import Offer1 from './assets/offer1.jpg';
import Offer2 from './assets/offer2.jpg';
import Offer3 from './assets/offer3.jpg';
import { CarouselCard } from "./components/Carousel";
import Chatbody from "./components/Chatbody";
import ButtonWithIllustration from "./components/ButtonWithIllustration";
import CarLoanSvg from './assets/car-loan.svg';
import HomeLoanSvg from './assets/home-loan.svg';
import PersonalLoanSvg from './assets/personal-loan.svg';
import MobileBankingSvg from './assets/mobile-banking.svg';

type Msg = {
  from: "user" | "bot";
  text: string;
};

type Option = {
  label: string;
  value: string;
  new?: boolean;
};

const carouselImages = [
  { src: Offer1, alt: 'Festive Home-Loan Offer' },
  { src: Offer2, alt: '0% Processing Fee' },
  { src: Offer3, alt: 'Instant Digital Account' },
];
const options: Option[] = [
  { label: "Housing Loans", value: "housing" },
  { label: "Banking Services", value: "banking", new: true },
  { label: "Existing Customer", value: "existing" },
  { label: "EMI Calculator", value: "emi" },
  { label: "Instant Call Back", value: "callback" },
];

const bgUrl =
  "https://res.cloudinary.com/deqx2dz3c/image/upload/v1717426792/botbg_opmdnd.png";

export const ChatbotWidget: React.FC = () => {
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      from: "bot",
      text: "Welcome to SIA - Your personal assistant to help you with your queries.",
    },
  ]);
  const [showBigOptions, setShowBigOptions] = useState(true);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const msgEndRef = useRef<HTMLDivElement>(null);

  const handleUser = (text: string) => {
    setMsgs((msgs) => [...msgs, { from: "user", text }]);
    setTimeout(() => {
      let reply = "I'm just a demo bot. ";
      switch (text) {
        case "housing":
        case "Housing Loans":
          reply = "Our Housing Loans offer great flexibility. Are you looking for a new loan or balance transfer?";
          break;
        case "banking":
        case "Banking Services":
          reply = "Please select the banking service you're interested in: Savings, Current Accounts, Credit Cards, or others.";
          break;
        case "existing":
        case "Existing Customer":
          reply = "Great! Please enter your customer ID or query below.";
          break;
        case "emi":
        case "EMI Calculator":
          reply = "Our EMI calculator helps you plan better. Kindly specify loan amount and tenure.";
          break;
        case "callback":
        case "Instant Call Back":
          reply = "Sure! Please share your phone number and our executive will call you back.";
          break;
        default:
          reply += "You said: " + text;
      }
      setMsgs((msgs) => [...msgs, { from: "bot", text: reply }]);
    }, 800);

    setShowBigOptions(false);
    setAccordionOpen(false);
  };

  const handleOption = (opt: Option) => {
    handleUser(opt.label);
    setAccordionOpen(false);
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    handleUser(input.trim());
    setInput("");
    setAccordionOpen(false);
  };

  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  // ---- Styles ----
  const container: React.CSSProperties = {
    backgroundColor: "rgb(240 251 255)",
    position: "fixed",
    bottom: 24,
    right: 24,
    zIndex: 1000,
    fontFamily: "Segoe UI, sans-serif",
  };

  const card: React.CSSProperties = {
    background: "rgb(240 251 255)",
    borderRadius: 16,
    width: 560,
    boxShadow: "0 2px 16px 0 rgba(0,0,0,0.16)",
    overflow: "hidden",
  };

  const header: React.CSSProperties = {
    color: "#003c83",
    padding: "10px 24px 8px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const avatar: React.CSSProperties = {
    width: 32,
    height: 32,
    borderRadius: "50%",
    marginRight: 10,
    border: "2px solid #003c83",
  };

  const helloBlock: React.CSSProperties = {
    textAlign: "left",
    padding: "0 24px",
    color: "#003c83",
  };

  const helloTitle: React.CSSProperties = {
    fontSize: 32,
    fontWeight: 600,
    margin: "8px 0 2px 0",
    letterSpacing: "-1.2px",
  };

  const chatBody: React.CSSProperties = {
    background: `url('${bgUrl}')`,
    backgroundSize: "cover",
    padding: "14px 12px 2px 12px",
    minHeight: 360,
    maxHeight: 400,
    overflowY: "auto",
    marginBottom: 2,
    width: "100%",
  };

  const optionRow: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    margin: "6px 2px",
    flexWrap: "wrap",
    gap: "10px",
  };

  const optionBtn: React.CSSProperties = {
    border: "2px solid #fff",
    borderRadius: 8,
    background: "#003c83",
    color: "#fff",
    padding: "8px 18px",
    fontSize: 16,
    fontWeight: 500,
    cursor: "pointer",
    position: "relative",
    outline: "none",
    marginBottom: 6,
  };

  const inputBlock: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    background: "#c5daf3ff",
    borderRadius: "1.5rem",
    boxShadow: "0 0 2px #eaeaea",
    margin: "16px 18px 18px 18px",
    padding: 6,
  };

  const userInput: React.CSSProperties = {
    border: "none",
    outline: "none",
    flex: 1,
    fontSize: 17,
    color: "#000",
    padding: "6px 12px",
    background: "transparent",
  };

  const sendBtn: React.CSSProperties = {
    border: "none",
    background: "#003c83",
    color: "#fff",
    borderRadius: "50%",
    width: 38,
    height: 38,
    fontSize: 18,
    marginLeft: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 0 2px #003c83aa",
    transition: "background 0.2s",
  };

  return (
    <div style={container}>
      {!minimized ? (
        <div style={card}>
          {/* Header */}
          <div style={header}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={SbiLogo}
                alt="Bot"
                style={avatar}
              />
              <div style={{ fontWeight: 600 }}>Ask SIA</div>
            </div>
            <button
              aria-label="Close"
              style={{
                background: "none",
                border: "none",
                color: "#003c83",
                fontSize: 28,
                fontWeight: 400,
                cursor: "pointer",
                lineHeight: 1,
              }}
              onClick={() => setMinimized(true)}
            >
              ×
            </button>
          </div>
          {/* Welcome */}
          <div style={helloBlock}>
            <div style={helloTitle}>Hello</div>
            <div style={{ fontSize: 16, marginBottom: 4 }}>
              <b>Welcome to <span style={{ color: "#003c83", textShadow: "0 1px 6px #eaeaea" }}>SIA</span></b>
              {" - Your personal assistant to help you with your queries"}
            </div>
          </div>

          {/* Carousel */}
          <CarouselCard images={carouselImages} width="92%" />

          {/* Quick Actions Accordion */}
          {!showBigOptions && (
            <div style={{ padding: "0 18px 0 18px", marginBottom: 6 }}>
              <button
                style={{
                  width: "100%",
                  background: "#003c83",
                  color: "#fff",
                  border: "2px solid #fff",
                  borderRadius: 8,
                  padding: "10px 14px",
                  fontSize: 17,
                  fontWeight: 550,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                onClick={() => setAccordionOpen((v) => !v)}
                aria-expanded={accordionOpen}
                type="button"
              >
                <span>Quick Options</span>
                <span
                  style={{
                    marginLeft: 6,
                    transition: "transform .2s",
                    transform: accordionOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ▼
                </span>
              </button>
              {accordionOpen && (
                <div
                  style={{
                    background: "#003c83",
                    border: "1.5px solid #fff",
                    boxShadow: "0 2px 10px #003c8316",
                    borderRadius: 10,
                    marginTop: 4,
                    position:"absolute",
                    width: "90%",
                  }}
                >
                  {options.map((opt, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        padding: "10px 18px",
                        fontSize: 16,
                        borderBottom: i !== options.length - 1 ? "1px solid #eee" : "none",
                        position: "relative",
                        color: "#fff",
                      }}
                      onClick={() => {
                        handleOption(opt);
                        setAccordionOpen(false);
                      }}
                    >
                      {opt.label}
                      {opt.new && (
                        <span
                          style={{
                            background: "red",
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: 11,
                            borderRadius: 8,
                            padding: "2px 6px",
                            marginLeft: 10,
                          }}
                        >
                          NEW
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Chat Body */}
          <div>
                <div style={optionRow}> 
                  <ButtonWithIllustration image={CarLoanSvg} title={"Car Loan"}/>
                  <ButtonWithIllustration image={HomeLoanSvg} title={"Home Loan"}/>
                  <ButtonWithIllustration image={PersonalLoanSvg} title={"Personal Loan"}/>
                </div>
</div>
          <div style={chatBody}>
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
                <div style={{ ...optionRow, justifyContent: "center" }}>
                  <button
                    style={optionBtn}
                    onClick={() => handleOption(options[4])}
                  >
                    Instant Call Back
                  </button>
                </div>
                </div>
                <hr style={{ color: "grey", margin: "2rem auto" }} />
              </div>
            )}
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
                    background: m.from === "user" ? "#003c83" : "#fffefeff",
                    color: m.from === "user" ? "#fff" : "#222",
                    borderRadius: "18px",
                    padding: "10px 16px",
                    maxWidth: "70%",
                    minWidth: 40,
                    fontSize: 15,
                    boxShadow:
                      m.from === "user"
                        ? "0 2px 10px 0 rgba(0,60,131,0.13)"
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

          {/* Input Bar */}
          <form style={inputBlock} onSubmit={handleSend} autoComplete="off">
            {/* <span
              style={{
                fontSize: 22,
                color: "#fff",
                marginLeft: 6,
                marginRight: 8,
              }}
            >
              💬
            </span> */}
            <input
              style={userInput}
              type="text"
              placeholder="Start a conversation"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button style={sendBtn} type="submit" title="Send">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      ) : (
        <button
          style={{
            ...sendBtn,
            width: 60,
            height: 60,
            position: "fixed",
            bottom: 24,
            right: 24,
            background: "#003c83",
            fontSize: 28,
            boxShadow: "0 2px 8px #003c8377",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 1000,
            transition: "background 0.2s",
          }}
          onClick={() => setMinimized(false)}
          title="Open chat"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </button>
      )}
    </div>
  );
};