import { useState, useEffect, useRef } from "react";

export default function Timer() {
  // clock
  const [time, setTime] = useState(new Date());

  // Timer
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [running, setRunning] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const intervalRef = useRef(null);

  //clock
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Timer
  useEffect(() => {
    if (running && remaining > 0) {
      intervalRef.current = setInterval(() => {
        setRemaining((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      if (remaining === 0 && running) {
        setRunning(false);
        setShowPopup(true);
      }
    }
    return () => clearInterval(intervalRef.current);
  }, [running, remaining]);

  const startTimer = () => {
    if (remaining === 0) {
      const totalSeconds =
        Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
      if (totalSeconds > 0) {
        setRemaining(totalSeconds);
        setRunning(true);
      }
    } else {
      setRunning(true);
    }
  };

  const pauseTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setRunning(false);
    setRemaining(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setShowPopup(false);
  };

  const displayTime = () => {
    const h = Math.floor(remaining / 3600);
    const m = Math.floor((remaining % 3600) / 60);
    const s = remaining % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const handleInput = (setter) => (e) => {
    const val = Math.max(0, parseInt(e.target.value) || 0);
    setter(val);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="timer-container">
      {/* Digital clock */}
      <div className="digital-clock">

        <h3 className="clock-title">Current Time</h3>
        <p className="clock-time">{time.toLocaleTimeString()}</p>

        <h3 className="clock-title">Current Date</h3>
        <p className="clock-time">{time.toLocaleDateString()}</p>
        
        <h3 className="clock-title">Current Date & Time</h3>
        <p className="clock-time">{time.toLocaleString()}</p>
      </div>

      {/* Timer */}
      <div className="timer-section">
        {!running && (
          <>
            <div className="input-group">
              <label className="input-label">
                Hours:{" "}
                <input
                  className="input-field"
                  type="number"
                  min="0"
                  value={hours}
                  onChange={handleInput(setHours)}
                />
              </label>
            </div>
            <div className="input-group">
              <label className="input-label">
                Minutes:{" "}
                <input
                  className="input-field"
                  type="number"
                  min="0"
                  value={minutes}
                  onChange={handleInput(setMinutes)}
                />
              </label>
            </div>
            <div className="input-group">
              <label className="input-label">
                Seconds:{" "}
                <input
                  className="input-field"
                  type="number"
                  min="0"
                  value={seconds}
                  onChange={handleInput(setSeconds)}
                />
              </label>
            </div>
          </>
        )}

        <div className="timer-controls">
          <p className="timer-display">Timer: {displayTime()}</p>
          {!running ? (
            <button
              className="btn btn-start"
              onClick={startTimer}
              disabled={
                remaining === 0 && hours === 0 && minutes === 0 && seconds === 0
              }
            >
              Start
            </button>
          ) : (
            <button className="btn btn-pause" onClick={pauseTimer}>
              Pause
            </button>
          )}
          <button className="btn btn-reset" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2 className="popup-title">Time's up!!!!</h2>
            <button className="btn btn-popup-ok" onClick={closePopup}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
