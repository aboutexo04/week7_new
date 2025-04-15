import { useState } from "react";

const steps = [
  { 
    title: "Week 7 - Pingpong Star Catch Game",
    description: "Today, we'll make a pingpong star catch game!",
    images: ["/images/first.png"]
  },
  {
    title: "Seating Chart",
    description: "Please check your seat and make sure you're in the right place.",
    images: ["/images/week7_seating_chart.png"]
  },
  {
    title: "Let's learn on pseudocode",
    description: "What is pseudocode? Pseudocode is a way to plan out your code using plain language. It helps you think through the logic before you start coding.",
    images: ["/images/pseudocode.jpg"]
  },
  {
    title: "Step 1: Pseudocode for the paddle sprite",
    description: "Let's code the Paddle sprite.",
    images: ["/images/paddle.png"]
  },
  {
    title: "Step 2: Pseudocode for the game rule(ball sprite)",
    description: "Let's code for the rule of the game.",
    images: ["/images/game_rule.png"]
  },
  {
    title: "Step 3: Pseudocode for the ball sprite",
    description: "Let's code for the movement of the ball.",
    images: ["/images/ball_movement.png"]
  },
  {
    title: "Step 4: Test your game and share it to the studio week7",
    description: "We will finish the rest of the game next week.",
    images: ["/images/step5.png"]
  },
  {
    title: "Step 5: Check all the code",
    images: ["/images/paddle_block.png","/images/rule_block.png","/images/ball_block.png","/images/star_block.png"]
  },
];

export default function ScratchGameTutorial() {
  const [stepIndex, setStepIndex] = useState(0);
  const step = steps[stepIndex];

  return (
    <div style={styles.container}>
      <div style={styles.progressBarWrapper}>
        <div style={{ ...styles.progressBar, width: `${((stepIndex + 1) / steps.length) * 100}%` }} />
      </div>
      <div style={styles.card}>
        <h2 style={styles.title}>{step.title}</h2>
        <p style={styles.description}>{step.description}</p>
        {step.images && step.images.map((image, index) => (
          <div key={index} style={{ marginBottom: "1.5rem" }}>
            <img
              src={`${import.meta.env.BASE_URL}${image}`}
              alt={`${step.title} - Image ${index + 1}`}
              style={{
                width: "100%",
                borderRadius: "16px",
                border: "2px solid #90caf9"
              }}
            />
          </div>
        ))}
        <div style={styles.buttonRow}>
          <button
            onClick={() => setStepIndex(stepIndex - 1)}
            disabled={stepIndex === 0}
            style={{ ...styles.button, ...(stepIndex === 0 ? styles.disabledButton : {}) }}
          >
            ◀ Previous
          </button>
          <button
            onClick={() => setStepIndex(stepIndex + 1)}
            disabled={stepIndex === steps.length - 1}
            style={{ ...styles.button, ...(stepIndex === steps.length - 1 ? styles.disabledButton : {}) }}
          >
            Next ▶
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  progressBarWrapper: {
    height: "10px",
    width: "100%",
    backgroundColor: "#e3f2fd",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "1rem"
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#1e88e5",
    transition: "width 0.3s ease"
  },
  container: {
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    padding: "1rem",
    marginTop: "2rem",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#f0f8ff",
    borderRadius: "24px",
    border: "2px solid #90caf9",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
  },
  card: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "2rem",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)"
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1e88e5",
    marginBottom: "1rem"
  },
  description: {
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
    color: "#333"
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: "#64b5f6",
    color: "white",
    border: "none",
    padding: "0.5rem 1.5rem",
    borderRadius: "9999px",
    fontSize: "1rem",
    cursor: "pointer"
  },
  disabledButton: {
    backgroundColor: "#bbdefb",
    cursor: "not-allowed"
  }
};