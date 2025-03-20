import type { Transition } from "framer-motion";
import type { BoxProps } from "@mui/material/Box";
import { m } from "framer-motion";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export type AnimatedCardProps = BoxProps & {
  bgcolor?: string;
  duration?: number;
  delay?: number;
  slotProps?: {
    animate?: { transition?: Transition };
    overlay?: {
      color?: string;
      border?: number;
      spacing?: number;
    };
  };
};

export function AnimatedCard({
  sx,
  slotProps,
  children,
  height = 60,
  bgcolor = "primary.dark",
  duration = 0.7,
  delay = 0,
  ...other
}: AnimatedCardProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Checks if screen is XS or SM

  return (
    <Box
      component={m.div}
      initial={isSmallScreen ? { x: "-100vw" } : { y: "-100vh" }} // Left for small, Top for large
      animate={{ x: 0, y: 0 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
        ...slotProps?.animate?.transition,
      }}
      sx={{
        minWidth: "fit-content",
        maxWidth: "100%",
        height,
        flexShrink: 0,
        position: "relative",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        borderRadius: 2,
        bgcolor,
        color: "white",
        fontSize: "1.2rem",
        fontWeight: "bold",
        boxShadow: 3,
        p: 2,
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
