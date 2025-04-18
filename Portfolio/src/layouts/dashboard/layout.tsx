import { useState, useEffect } from "react";
import type { Theme, SxProps, Breakpoint } from "@mui/material/styles";

import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

import { useTheme } from "@mui/material/styles";
import { iconButtonClasses } from "@mui/material/IconButton";
import { useBoolean } from "src/hooks/use-boolean";

import { SettingsDrawer, useSettingsContext } from "src/components/settings";
import { Main } from "./main";
import { NavMobile } from "./nav-mobile";
import { layoutClasses } from "../classes";
import { MenuButton } from "../components/menu-button";
import { LayoutSection } from "../core/layout-section";
import { HeaderSection } from "../core/header-section";
import { StyledDivider, useNavColorVars } from "./styles";
import { NavHorizontal } from "./nav-horizontal";
import { ModeButton } from "../components/mode-button";
import { NavVertical } from "./nav-vertical";

const resume = "/resume/jobin_jose_resume(1).pdf";

export type DashboardLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  header?: {
    sx?: SxProps<Theme>;
  };
};

export function DashboardLayout({
  sx,
  children,
  header,
}: DashboardLayoutProps) {
  const theme = useTheme();
  const mobileNavOpen = useBoolean();
  const settings = useSettingsContext();
  const navColorVars = useNavColorVars(theme, settings);

  const layoutQuery: Breakpoint = "lg";
  const isNavMini = settings.navLayout === "mini";
  const isNavHorizontal = settings.navLayout === "horizontal";
  const isNavVertical = isNavMini || settings.navLayout === "vertical";

  const [openDialog, setOpenDialog] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (openDialog) {
      setTimeout(() => setFadeIn(true), 100);
    } else {
      setFadeIn(false);
    }
  }, [openDialog]);

  return (
    <LayoutSection
      headerSection={
        <HeaderSection
          layoutQuery={layoutQuery}
          disableElevation={isNavVertical}
          slotProps={{
            toolbar: {
              sx: {
                ...(isNavHorizontal && {
                  bgcolor: "var(--layout-nav-bg)",
                  [`& .${iconButtonClasses.root}`]: {
                    color: "var(--layout-nav-text-secondary-color)",
                  },
                  [theme.breakpoints.up(layoutQuery)]: {
                    height: "var(--layout-nav-horizontal-height)",
                  },
                }),
              },
            },
            container: {
              maxWidth: false,
              sx: {
                ...(isNavVertical && { px: { [layoutQuery]: 5 } }),
              },
            },
          }}
          sx={header?.sx}
          slots={{
            leftArea: (
              <>
                {isNavHorizontal && (
                  <StyledDivider
                    sx={{
                      [theme.breakpoints.up(layoutQuery)]: { display: "flex" },
                    }}
                  />
                )}
                <Typography variant="h4">JOBIN JOSE</Typography>
              </>
            ),
            centerArea: (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 1,
                  gap: 2,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    fontSize: "1rem",
                    padding: "5px 16px",
                    borderRadius: "8px",
                    background:
                      "linear-gradient(90deg, #87CEEB, #1E90FF, #87CEEB)",
                    animation: "gradientMove 3s infinite linear",
                  }}
                  onClick={() => setOpenDialog(true)}
                >
                  Connect
                </Button>

                <Dialog
                  open={openDialog}
                  onClose={() => setOpenDialog(false)}
                  fullWidth
                  maxWidth="xs"
                  sx={{
                    backdropFilter: fadeIn ? "blur(10px)" : "none",
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    transition:
                      "backdrop-filter 0.3s ease-in-out, background 0.3s ease-in-out",
                  }}
                  PaperProps={{
                    sx: {
                      width: "90%",
                      maxWidth: "300px",
                      background: fadeIn
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(255, 255, 255, 0)",
                      backdropFilter: fadeIn ? "blur(20px)" : "none",
                      borderRadius: "15px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.2)",
                      transition:
                        "background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out",
                    },
                  }}
                >
                  <DialogTitle>
                    Connect With Me
                    <IconButton
                      aria-label="close"
                      onClick={() => setOpenDialog(false)}
                      sx={{ position: "absolute", right: 8, top: 8 }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </DialogTitle>

                  <DialogContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      p: 3,
                      opacity: fadeIn ? 1 : 0,
                      transition: "opacity 0.3s ease-in-out",
                      mt: 0, // ✅ Remove extra spacing
                    }}
                  >
                    <Button
                      startIcon={<SiGmail size={24} color="red" />}
                      variant="contained"
                      color="secondary"
                      href="mailto:jose.jobiin@gmail.com"
                      target="_blank"
                      sx={{ justifyContent: "flex-start" }}
                    >
                      Gmail
                    </Button>
                    <Button
                      startIcon={<SiLinkedin size={24} color="#0A66C2" />}
                      variant="contained"
                      color="primary"
                      href="https://www.linkedin.com/in/jobin-jose-1aa5b8316"
                      target="_blank"
                      sx={{ justifyContent: "flex-start" }}
                    >
                      LinkedIn
                    </Button>
                    <Button
                      startIcon={<SiGithub size={24} color="black" />}
                      variant="contained"
                      color="inherit"
                      href="https://github.com/jobin87"
                      target="_blank"
                      sx={{ justifyContent: "flex-start" }}
                    >
                      GitHub
                    </Button>
                    <Button
                      startIcon={<PhoneIcon />}
                      variant="contained"
                      color="success"
                      href="tel:7034760724"
                      sx={{ justifyContent: "flex-start" }}
                    >
                      Phone
                    </Button>
                  </DialogContent>
                </Dialog>
              </Box>
            ),
            rightMostArea: <ModeButton />,
            rightArea: (
              <Box display="flex" alignItems="center" gap={{ xs: 0, sm: 0.75 }}>
                <SettingsDrawer />
                <MenuButton onClick={mobileNavOpen.onTrue} />
                <NavMobile
                  open={mobileNavOpen.value}
                  onClose={mobileNavOpen.onFalse}
                />
              </Box>
            ),
          }}
        />
      }
    >
      <Main isNavHorizontal={isNavHorizontal}>{children}</Main>
    </LayoutSection>
  );
}
