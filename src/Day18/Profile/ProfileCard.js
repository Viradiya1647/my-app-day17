import { useState, useRef, useEffect } from "react";
import "./Profile.css";

export default function ProfileCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [avtar, setAvtar] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/;

  const [emailError, setEmailError] = useState("");
  const [urlError, setUrlError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [showProfiles, setShowProfiles] = useState(false);
  const [indexOpen, setIndexOpen] = useState(null);

  const profileRef = useRef();

  const [profiles, setProfiles] = useState(() => {
    const storing = localStorage.getItem("user_profiles");
    return storing ? JSON.parse(storing) : [];
  });

  const LOCAL_KEY = "user-profiles";

  useEffect(() => {
    const storing = localStorage.getItem(LOCAL_KEY);
    if (storing) {
      try {
        setProfiles(JSON.parse(storing));
      } catch (error) {
        console.error("invalid data to store.");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(profiles));
  }, [profiles]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      return;
    } else if (!emailRegex.test(email)) {
      setEmailError("invalid email");
      return;
    } else if (name.trim() === "") {
      return;
    } else if (avtar && !urlRegex.test(avtar)) {
      setUrlError("invalid URL");
      return;
    } else {
      const newProfile = { name, email, role, avtar };
      setProfiles([...profiles, newProfile]);
      setName("");
      setAvtar("");
      setRole("");
      setEmail("");
    }
  };
  const toggleDetails = (index) => {
    setIndexOpen((prev) => (prev === index ? null : index));
  };

  return (
    <div className="profile-card-root">
      <div className="profile-main-component">
        <h2 className="profile-title" onClick={() => setShowForm(!showForm)}>
          Create New Profile
        </h2>
        {showForm && (
          <form className="profile-form" onSubmit={handleSubmit}>
            <label>
              Enter your full name:{" "}
              <input
                required
                type="text"
                className="profile-input"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Enter your Email:{" "}
              <input
                required
                type="email"
                className="profile-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p>{emailError}</p>}
            </label>
            <br />
            <label>
              Enter your Role:{" "}
              <input
                required
                type="text"
                className="profile-input"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </label>
            <br />
            <label>
              Enter your avtar URL:{" "}
              <input
                className="profile-input"
                placeholder="Avtar url"
                value={avtar}
                onChange={(e) => setAvtar(e.target.value)}
              />
              {urlError && <p>{urlError}</p>}
            </label>
            <br />
            <button className="profile-submit-btn" type="submit">
              Create
            </button>
          </form>
        )}
        <h3
          className="profiles-list-title"
          onClick={() => setShowProfiles(!showProfiles)}
        >
          Profiles
        </h3>
        <div className="profiles-list">
          {profiles.map((p, index) => (
            <div className="profile-item" key={index} ref={profileRef}>
              <div className="profile-avtar-div">
                <img
                  className="profile-avtar"
                  src={
                    p.avtar ||
                    "https://imgs.search.brave.com/UbskygJXJP_X4v2arv0viTp1Pjxysy9KvOPwNc-FTsw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Ymx1ZS1jaXJjbGUt/d2l0aC13aGl0ZS11/c2VyXzc4MzcwLTQ3/MDcuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA"
                  }
                  alt="avtar"
                  width="50"
                  onClick={() => toggleDetails(index)}
                />
              </div>
              {indexOpen === index && (
                <div>
                  <div className="profile-name-div">
                    <h3
                      className={p.name ? "profile-name" : "profile-name empty"}
                    >
                      {p.name || "No Name"}
                    </h3>
                  </div>
                  <div className="profile-email-div">
                    <p
                      className={
                        p.email ? "profile-email" : "profile-email empty"
                      }
                    >
                      {p.email || "No Email"}
                    </p>
                  </div>
                  <div className="profile-role-div">
                    <p
                      className={p.role ? "profile-role" : "profile-role empty"}
                    >
                      {p.role || "No Role"}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
