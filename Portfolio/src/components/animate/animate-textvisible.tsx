import { m } from "framer-motion";
import Box from "@mui/material/Box";
import type { BoxProps } from "@mui/material/Box";

export type AnimatedTextProps = BoxProps & {
  children: React.ReactNode; // Accept children instead of text
  duration?: number;
  delay?: number;
};

export function AnimatedText({
  children,
  duration = 10,
  delay = 0,
  sx,
  ...other
}: AnimatedTextProps) {
  return (
    <Box
      component={m.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      sx={{
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "white",
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
