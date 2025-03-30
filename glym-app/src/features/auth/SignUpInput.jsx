function SignUpInput({ value, type, required = true, onChange, showCheckButton = false, buttonValue, onCheck }) {
    return (
        <div>
            <p>{value}{required && (<span>*</span>)}</p>
            <input type={type} onChange={onChange} />

            {showCheckButton && (
                <button onClick={onCheck}>{buttonValue}</button>
            )}
        </div>
    )
};
