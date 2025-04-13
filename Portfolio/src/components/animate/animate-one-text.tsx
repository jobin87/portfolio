import { m } from "framer-motion";
import { Typography, Box } from "@mui/material";
import { ReactNode, useState, useEffect } from "react";

const letterVariants = {
  hidden: { opacity: 0, x: -10 }, // Start slightly to the left
  visible: (i: number) => ({
    opacity: 1,
    x: 0, // Move to normal position
    transition: { delay: i * 0.05, duration: 0.3 }, // Faster delay per letter
  }),
};

type AnimatedOneTextProps = {
  children: ReactNode;
  sx?: any; // Optional sx prop for styling
};

export default function AnimatedOneText({ children, sx }: AnimatedOneTextProps) {
  const text = typeof children === "string" ? children : "";
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 50); // Delays animation by 50ms

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: "bold",
          display: "flex",
          ...sx, // Merge optional sx styles
        }}
      >
        {text.split("").map((char, index) => (
          <m.span
            key={index}
            custom={index}
            variants={letterVariants}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"} // Only animate after delay
            style={{
              display: "inline-block",
              marginRight: char === " " ? "0.8em" : "0px",
            }}
          >
            {char}
          </m.span>
        ))}
      </Typography>
    </Box>
  );
}
