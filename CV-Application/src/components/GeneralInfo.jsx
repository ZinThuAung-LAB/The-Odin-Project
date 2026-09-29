import { useState } from "react";
import { SectionWrapper } from "./SectionWrapper";

export function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <SectionWrapper
      title="General Information"
      isEditing={isEditing}
      onEdit={() => setIsEditing(true)}
    >
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={info.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={info.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={info.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-submit">
            Submit
          </button>
        </form>
      ) : (
        <div className="display-container">
          <div className="display-field">
            <span>Name: </span>
            {info.fullName}
          </div>
          <div className="display-field">
            <span>Email: </span>
            {info.email}
          </div>
          <div className="display-field">
            <span>Phone: </span>
            {info.phone}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
