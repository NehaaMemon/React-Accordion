export const Card = ({ curData, isActive, onToggle }) => {
  const { question, answer } = curData;

  return (
    <li className={`accordion-item ${isActive ? "active" : ""}`}>
      <div className="accordion-header" onClick={onToggle}>
        <h2 className="accordion-question">{question}</h2>
        <span className={`icon ${isActive ? "rotate" : ""}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </span>
      </div>

      {/* Modern Height Animation Wrapper */}
      <div className={`answer-wrapper ${isActive ? "open" : ""}`}>
        <div className="answer-content">
          <p>{answer}</p>
        </div>
      </div>
    </li>
  );
};
