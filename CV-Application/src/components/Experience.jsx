import { useState } from "react";
import { SectionWrapper } from "./SectionWrapper";

export function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [exp, setExp] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    dateFrom: "",
    dateUntil: "",
  });

  const handleChange = (e) => {
    setExp({ ...exp, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <SectionWrapper
      title="Practical Experience"
      isEditing={isEditing}
      onEdit={() => setIsEditing(true)}
    >
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={exp.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="positionTitle">Position Title</label>
            <input
              type="text"
              id="positionTitle"
              name="positionTitle"
              value={exp.positionTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="responsibilities">Main Responsibilities</label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              rows="3"
              value={exp.responsibilities}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateFrom">Date From</label>
            <input
              type="date"
              id="dateFrom"
              name="dateFrom"
              value={exp.dateFrom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateUntil">Date Until</label>
            <input
              type="date"
              id="dateUntil"
              name="dateUntil"
              value={exp.dateUntil}
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
            <span>Company: </span>
            {exp.companyName}
          </div>
          <div className="display-field">
            <span>Position: </span>
            {exp.positionTitle}
          </div>
          <div className="display-field">
            <span>Responsibilities: </span>
            {exp.responsibilities}
          </div>
          <div className="display-field">
            <span>Period: </span>
            {exp.dateFrom} to {exp.dateUntil}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
