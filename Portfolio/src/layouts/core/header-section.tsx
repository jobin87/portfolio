import type { Breakpoint } from "@mui/material/styles";
import type { AppBarProps } from "@mui/material/AppBar";
import type { ToolbarProps } from "@mui/material/Toolbar";
import type { ContainerProps } from "@mui/material/Container";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { styled, useTheme } from "@mui/material/styles";

import { useScrollOffSetTop } from "src/hooks/use-scroll-offset-top";

import { bgBlur, varAlpha } from "src/theme/styles";

import { layoutClasses } from "../classes";

// ----------------------------------------------------------------------

const StyledElevation = styled("span")(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  m: "auto",
  height: 24,
  zIndex: -1,
  opacity: 0.48,
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export type HeaderSectionProps = AppBarProps & {
  layoutQuery: Breakpoint;
  disableOffset?: boolean;
  disableElevation?: boolean;
  slots?: {
    leftArea?: React.ReactNode;
    rightMostArea?: React.ReactNode;
    rightArea?: React.ReactNode;
    topArea?: React.ReactNode;
    centerArea?: React.ReactNode;
    bottomArea?: React.ReactNode;
  };
  slotProps?: {
    toolbar?: ToolbarProps;
    container?: ContainerProps;
  };
};

export function HeaderSection({
  sx,
  slots,
  slotProps,
  disableOffset,
  disableElevation,
  layoutQuery = "md",
  ...other
}: HeaderSectionProps) {
  const theme = useTheme();

  const { offsetTop } = useScrollOffSetTop();

  const toolbarStyles = {
    default: {
      minHeight: "auto",
      height: "var(--layout-header-mobile-height)",
      transition: theme.transitions.create(["height", "background-color"], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
      }),
      [theme.breakpoints.up("sm")]: {
        minHeight: "auto",
      },
      [theme.breakpoints.up(layoutQuery)]: {
        height: "var(--layout-header-desktop-height)",
      },
    },
    offset: {
      ...bgBlur({
        color: varAlpha(theme.vars.palette.background.defaultChannel, 0.8),
      }),
    },
  };

  return (
    <AppBar
      position="relative"
      className={layoutClasses.header}
      sx={{
        zIndex: "var(--layout-header-zIndex)",
        ...sx,
      }}
      {...other}
    >
      {slots?.topArea}

      <Toolbar
        disableGutters
        {...slotProps?.toolbar}
        sx={{
          ...toolbarStyles.default,
          ...(!disableOffset && offsetTop && toolbarStyles.offset),
          ...slotProps?.toolbar?.sx,
        }}
      >
        <Container
          sx={{
            height: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", // ✅ Ensures spacing between left & right
            flexWrap: "wrap", // ✅ Prevents overflow on smaller screens
          }}
        >
          {/* Left Side */}
          <Box sx={{ display: "flex", flexShrink: 0,ml:0 }}>
            {slots?.leftArea}
          </Box>

          {/* Center Area - Takes Remaining Space */}
          <Box
            sx={{
              display: "flex",
              flexGrow: 1, // ✅ Allows centerArea to take available space
              justifyContent: "center",
              flexShrink: 1, // ✅ Prevents overflow
              minWidth: 0, // ✅ Ensures no extra space is forced
              mr:{
                xs:"none",lg:7
              }
            }}
          >
            {slots?.centerArea}
          </Box>

          {/* Right Side */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexShrink: 0, // ✅ Prevents right side from shrinking too much
              flexWrap: "wrap", // ✅ Ensures wrapping instead of overflow
            }}
          >
            {slots?.rightMostArea}
            {slots?.rightArea}
          </Box>
        </Container>
      </Toolbar>

      {slots?.bottomArea}

      {!disableElevation && offsetTop && <StyledElevation />}
    </AppBar>
  );
}
