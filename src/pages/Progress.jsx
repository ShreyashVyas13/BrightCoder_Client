function Progress() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>My Progress</h1>
      <p>Yaha tum apna learning progress dekh sakte ho.</p>

      <div style={{ marginTop: "2rem" }}>
        <h3>JavaScript Basics</h3>
        <div style={{
          background: "#eee",
          borderRadius: "10px",
          overflow: "hidden",
          height: "20px",
          width: "300px"
        }}>
          <div style={{
            background: "#4caf50",
            width: "70%",
            height: "100%"
          }}></div>
        </div>
        <p>70% complete</p>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>React Fundamentals</h3>
        <div style={{
          background: "#eee",
          borderRadius: "10px",
          overflow: "hidden",
          height: "20px",
          width: "300px"
        }}>
          <div style={{
            background: "#2196f3",
            width: "40%",  // example progress
            height: "100%"
          }}></div>
        </div>
        <p>40% complete</p>
      </div>
    </div>
  );
}

export default Progress;
