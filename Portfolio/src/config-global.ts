import { paths } from './routes/paths';
import * as packageJson from '../package.json';


export type ConfigValue = {
  appName: string;
  appVersion: string;
  baseUrl: string;
  assetsDir: string;
  portfolio: {
    skip: boolean;
    redirectPath: string;
  };
  mapboxApiKey: string;
};

export const CONFIG: ConfigValue = {
  appName: 'portfolio',
  appVersion: packageJson.version, // ✅ Now it should work
  baseUrl: import.meta.env.VITE_AUTH_BASE_URL ?? "",
  assetsDir: import.meta.env.VITE_AUTH_ASSETS_DIR ?? '',
  portfolio: {
    skip: false,
    redirectPath: paths.portfolio.root,
  },
  mapboxApiKey: import.meta.env.VITE_MAPBOX_API_KEY ?? '',
};
