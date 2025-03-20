import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { NotPage } from 'src/sections/404';


// ----------------------------------------------------------------------

const metadata = { title: `404 page not found! | Error - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      {<NotPage/>}
    </>
  );
}
