import "../styles/SectionWrapper.css";

export function SectionWrapper({ title, isEditing, onEdit, children }) {
  return (
    <div className="section-card">
      <div className="section-header">
        <h2>{title}</h2>
        {!isEditing && onEdit && (
          <button type="button" className="btn btn-edit" onClick={onEdit}>
            Edit
          </button>
        )}
      </div>
      {children}
    </div>
  );
}
