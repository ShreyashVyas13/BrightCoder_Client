import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed = 60,
  startDelay = 300,
  loop = false
}) {
  const [out, setOut] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    let t1;
    if (i === 0) {
      t1 = setTimeout(() => setI(1), startDelay);
      return () => clearTimeout(t1);
    }
    if (i <= text.length) {
      t1 = setTimeout(() => {
        setOut(text.slice(0, i));
        setI(i + 1);
      }, speed);
    } else if (loop) {
      t1 = setTimeout(() => {
        setOut("");
        setI(1);
      }, 1500);
    }
    return () => clearTimeout(t1);
  }, [i, text, speed, startDelay, loop]);

  // convert "\n" into <br />
  const formatted = out.split("\n").map((line, idx) => (
    <span key={idx}>
      {line}
      {idx < out.split("\n").length - 1 && <br />}
    </span>
  ));

  return (
    <span className="typewriter" aria-label={text}>
      {formatted}
      <span className="caret" />
    </span>
  );
}
