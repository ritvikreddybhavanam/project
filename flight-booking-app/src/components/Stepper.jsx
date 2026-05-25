import "../assets/styles/Stepper.css";

export default function Stepper({ step = 1 }) {
    const steps = ["Search", "Details", "Seats", "Payment"];

    return (
        <div className="stepper">
            {steps.map((label, index) => {
                const current = index + 1;

                const completed = current < step;
                const active = current === step;

                return (
                    <div className="step-item" key={index}>

                        {/* LEFT LINE */}
                        {index !== 0 && (
                            <div className={`line ${current <= step ? "active-line" : ""}`} />
                        )}

                        {/* CIRCLE */}
                        <div
                            className={`circle ${
                                completed ? "done" : active ? "active" : ""
                            }`}
                        >
                            {completed ? "✔" : current}
                        </div>

                        {/* LABEL */}
                        <div className="label">{label}</div>

                        {/* RIGHT LINE */}
                        {index !== steps.length - 1 && (
                            <div className={`line ${current < step ? "active-line" : ""}`} />
                        )}

                    </div>
                );
            })}
        </div>
    );
}