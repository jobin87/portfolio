import 'src/global.css';

// ----------------------------------------------------------------------



import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import { MotionLazy } from 'src/components/animate/motion-lazy';
import { ProgressBar } from 'src/components/progress-bar';

import { Toaster } from 'react-hot-toast';
import { LocalizationProvider } from './locales';
import { ThemeProvider } from './theme/theme-provider';
import { defaultSettings, SettingsProvider } from './components/settings';
import { Router } from './routes/sections';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <LocalizationProvider>
      <Toaster />
      <SettingsProvider  settings={defaultSettings}>
            <ThemeProvider>
              <MotionLazy>
                <ProgressBar />
                <Router/>
              </MotionLazy>
            </ThemeProvider>
            </SettingsProvider>
    </LocalizationProvider>
  );
}
