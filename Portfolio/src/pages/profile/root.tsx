import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { Profile } from 'src/sections/overview/view';


// ----------------------------------------------------------------------

const metadata = { title: `Profile | ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Profile />
    </>
  );
}
