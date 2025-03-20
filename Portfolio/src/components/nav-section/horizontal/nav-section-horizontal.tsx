import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

import { Scrollbar } from '../../scrollbar';
import { navSectionClasses } from '../classes';
import { navSectionCssVars } from '../css-vars';

import type { NavSectionProps } from '../types';

// ----------------------------------------------------------------------

export function NavSectionHorizontal({
  sx,
  cssVars: overridesVars,
}: NavSectionProps) {
  const theme = useTheme();

  const cssVars = {
    ...navSectionCssVars.horizontal(theme),
    ...overridesVars,
  };

  return (
    <Scrollbar
      sx={{ height: 1 }}
      slotProps={{
        content: { height: 1, display: 'flex', alignItems: 'center' },
      }}
    >
      <Stack
        component="nav"
        direction="row"
        alignItems="center"
        className={navSectionClasses.horizontal.root}
        sx={{
          ...cssVars,
          mx: 'auto',
          height: 1,
          minHeight: 'var(--nav-height)',
          ...sx,
        }}
      >
      </Stack>
    </Scrollbar>
  );
}

// ---------------------------------------------------------------------