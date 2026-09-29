import { useState } from "react";
import { SectionWrapper } from "./SectionWrapper";

export function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [edu, setEdu] = useState({
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
  });

  const handleChange = (e) => {
    setEdu({ ...edu, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <SectionWrapper
      title="Education"
      isEditing={isEditing}
      onEdit={() => setIsEditing(true)}
    >
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="schoolName">School / University</label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={edu.schoolName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="titleOfStudy">Title of Study / Degree</label>
            <input
              type="text"
              id="titleOfStudy"
              name="titleOfStudy"
              value={edu.titleOfStudy}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfStudy">Date of Study</label>
            <input
              type="text"
              id="dateOfStudy"
              name="dateOfStudy"
              placeholder="e.g. Sep 2018 - May 2022"
              value={edu.dateOfStudy}
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
            <span>School: </span>
            {edu.schoolName}
          </div>
          <div className="display-field">
            <span>Degree: </span>
            {edu.titleOfStudy}
          </div>
          <div className="display-field">
            <span>Date: </span>
            {edu.dateOfStudy}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
