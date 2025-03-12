// ----------------------------------------------------------------------

const MOCK_ID: string = 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2';

// const MOCK_TITLE = _postTitles[2];

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
  ONBOARDING: '/onboarding',
};

// ----------------------------------------------------------------------

export const paths = {

  // DASHBOARD
  profile: {
    root: `${ROOTS.DASHBOARD}`,
    error: {
      root: `${ROOTS.DASHBOARD}/error`,
    },
  },
};
