import React, { useEffect, useState } from "react";
import { ClipboardCopy, Check } from "lucide-react"; // icon library

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  const fetchquotes = async () => {
    setLoading(true);
    setErrorMsg("");
    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        console.log("vcbhbxvbcxhcvzxhc")
        console.log("vcbhbxvbcxhcvzxhc")
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setQuote(data);
      setCopied(false); // reset copied state
    } catch (error) {
      console.log("error fetching data...");
      setErrorMsg("Failed to fetch quote.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (quote?.content) {
      navigator.clipboard.writeText(`"${quote.content}" - ${quote.author}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // feedback for 2s
    }
  };

  useEffect(() => {
    fetchquotes();
  }, []);

  return (
    <div className="quote-generator-container">
      <h3 className="quote-generator-title">Random Quote Generator</h3>
      <button className="quote-generator-button" onClick={fetchquotes}>
        Show Random Quote
      </button>
      {loading ? (
        <p className="quote-generator-loading">Loading....</p>
      ) : quote ? (
        <div className="quote-generator-quote">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <p className="quote-generator-content">"{quote.content}"</p>
            <button
              onClick={copyToClipboard}
              title="Copy to clipboard"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "2px",
              }}
            >
              {copied ? (
                <Check size={18} color="green" />
              ) : (
                <ClipboardCopy size={18} />
              )}
            </button>
          </div>
          <p className="quote-generator-author">
            -{" "}
            {quote.author ? (
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(
                  quote.author
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                {quote.author}
              </a>
            ) : (
              "unknown"
            )}
          </p>
        </div>
      ) : (
        <p className="quote-generator-no-quote">No quote available.</p>
      )}
      {errorMsg && <p className="quote-generator-error">{errorMsg}</p>}
    </div>
  );
}
