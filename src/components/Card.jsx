export const Card =({curData , isActive , onToggle }) =>{
    const {question , answer} = curData;


    return (
        <li>
            <div className="accordion-grid">
            <h2>{question}</h2>
            <button  onClick={onToggle} className={isActive ? "active-btn" : ""}>{isActive ? "Close" : "Show" }</button>

            </div>
            <p>{isActive && answer}</p>
        </li>
    )
}
