export interface NavSubItem {
  label: string;
  path: string;
  external?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
  external?: boolean;
  children?: NavSubItem[];
}

export interface TopNavItem {
  label: string;
  path: string;
  external?: boolean;
}

export const topNavItems: TopNavItem[] = [
  { label: 'NIT Raipur', path: 'http://nitrr.ac.in/', external: true },
  { label: 'Career Development Centre', path: 'https://cdc.nitrr.ac.in/', external: true },
  { label: 'Alumni Association', path: 'https://gecnitrralumni.org/', external: true },
  { label: 'NITRRFIE', path: '/' },
];

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '#',
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'Administration', path: '/about/administration' },
      { label: 'Policy & Procedures', path: '/about/policy-procedures' },
    ],
  },
  {
    label: 'Mentorship',
    path: '#',
    children: [
      { label: 'Mentorship by Faculty', path: '/mentorship/faculty' },
    ],
  },
  {
    label: 'Startup-Portfolio',
    path: '/startup-portfolio',
  },
  { label: 'Ecosystem Partners', path: '/ecosystem-partners' },
  { label: 'Gallery', path: '/gallery' },
  {
    label: 'Centre of Excellence',
    path: '#',
    children: [
      { label: 'MACIEET', path: '/coe/macieet' },
      { label: 'AI-CoE', path: '/coe/aicoe' },
    ],
  },
  {
    label: 'More',
    path: '#',
    children: [
      { label: 'Notice', path: '/announcements' },
      {
        label: 'Apply for Internship',
        path: 'https://docs.google.com/forms/d/e/1FAIpQLSdxsTL_dAOkdw2d-boXCrk3B513FtuM_kIJhSQJdv3HhOcfFA/viewform?usp=dialog',
        external: true,
      },
      {
        label: 'Apply for Mentorship',
        path: 'https://forms.gle/pWsqwDh8bKt8xPGR9',
        external: true,
      },
      { label: 'Contact Us', path: '/contact' },
      // {
      //   label: 'List of Holidays 2025',
      //   path: '/uploads/2025/06/NITRRFIE-HOLIDAY.jpg',
      //   external: true,
      // },
    ],
  },
];
