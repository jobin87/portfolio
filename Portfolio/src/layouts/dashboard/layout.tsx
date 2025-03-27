import type { Theme, SxProps, Breakpoint } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { useTheme } from "@mui/material/styles";
import { iconButtonClasses } from "@mui/material/IconButton";

import { useBoolean } from "src/hooks/use-boolean";

// import { allLangs } from 'src/locales';
// import { _contacts, _notifications } from 'src/_mock';

import { SettingsDrawer, useSettingsContext } from "src/components/settings";

import { Main } from "./main";
import { NavMobile } from "./nav-mobile";
import { layoutClasses } from "../classes";
// import { NavVertical } from './nav-vertical';
// import { NavHorizontal } from './nav-horizontal';
import { _workspaces } from "../config-nav-workspace";
import { MenuButton } from "../components/menu-button";
import { LayoutSection } from "../core/layout-section";
import { HeaderSection } from "../core/header-section";
import { StyledDivider, useNavColorVars } from "./styles";
// import { LanguagePopover } from '../components/language-popover';
// import { ContactsPopover } from '../components/contacts-popover';
// import { WorkspacesPopover } from '../components/workspaces-popover';
import { NavHorizontal } from "./nav-horizontal";
import { ModeButton } from "../components/mode-button";
import { Button, Typography } from "@mui/material";
// import { NotificationsDrawer } from '../components/notifications-drawer';

// ----------------------------------------------------------------------

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

  return (
    <LayoutSection
      /** **************************************
       * Header
       *************************************** */
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
            topArea: (
              <Alert severity="info" sx={{ display: "none", borderRadius: 0 }}>
                This is an info Alert.
              </Alert>
            ),
            bottomArea: isNavHorizontal ? (
              <NavHorizontal
                layoutQuery={layoutQuery}
                cssVars={navColorVars.section}
              />
            ) : null,
            leftArea: (
              <>
                {/* -- Nav mobile -- */}

                {/* -- Logo -- */}
                {/* -- Divider -- */}
                {isNavHorizontal && (
                  <StyledDivider
                    sx={{
                      [theme.breakpoints.up(layoutQuery)]: { display: "flex" },
                    }}
                  />
                )}
                {/* -- Workspace popover -- */}
                <Typography>JOBIN JOSE</Typography>
              </>
            ),
            rightMostArea: <ModeButton />,
            rightArea: (
              <Box display="flex" alignItems="center" gap={{ xs: 0, sm: 0.75 }}>
                <SettingsDrawer />
                <MenuButton onClick={mobileNavOpen.onTrue} />
                <NavMobile
                  open={mobileNavOpen.value}
                  onClose={mobileNavOpen.onFalse}
                  cssVars={navColorVars.section}
                />
              </Box>
            ),
          }}
        />
      }
      /** **************************************
       * Sidebar
       *************************************** */
      /** **************************************
       * Footer
       *************************************** */
      footerSection={null}
      /** **************************************
       * Style
       *************************************** */
      cssVars={{
        ...navColorVars.layout,
        "--layout-transition-easing": "linear",
        "--layout-transition-duration": "120ms",
        "--layout-nav-mini-width": "88px",
        "--layout-nav-vertical-width": "300px",
        "--layout-nav-horizontal-height": "64px",
        "--layout-dashboard-content-pt": theme.spacing(1),
        "--layout-dashboard-content-pb": theme.spacing(8),
        "--layout-dashboard-content-px": theme.spacing(5),
      }}
      sx={{
        [`& .${layoutClasses.hasSidebar}`]: {
          [theme.breakpoints.up(layoutQuery)]: {
            transition: theme.transitions.create(["padding-left"], {
              easing: "var(--layout-transition-easing)",
              duration: "var(--layout-transition-duration)",
            }),
            pl: isNavMini
              ? "var(--layout-nav-mini-width)"
              : "var(--layout-nav-vertical-width)",
          },
        },
        ...sx,
      }}
    >
      <Main isNavHorizontal={isNavHorizontal}>{children}</Main>
    </LayoutSection>
  );
}
