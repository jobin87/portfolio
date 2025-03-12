
import packageJson from '../package.json';
import { paths } from './routes/paths';

// ----------------------------------------------------------------------

export type ConfigValue = {
  appName: string;
  appVersion: string;
  baseUrl: string;
  assetsDir: string;
  profile: {
    skip: boolean;
    redirectPath: string;
  };
  mapboxApiKey: string;
};

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
  appName: 'portfolio',
  appVersion: packageJson.version,
  baseUrl: import.meta.env.VITE_AUTH_BASE_URL ?? "",
  assetsDir: import.meta.env.VITE_AUTH_ASSETS_DIR ?? '',
  profile: {
    skip: false,
    redirectPath: paths.profile.root,
  },
  mapboxApiKey: import.meta.env.VITE_MAPBOX_API_KEY ?? '',
};
