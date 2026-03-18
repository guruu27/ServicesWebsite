// Design tokens and constants for FinSight clone

export const COLORS = {
  backgrounds: {
    primary: '#010204',
    secondary: '#0e0b0e',
    card: 'rgba(255, 255, 255, 0.04)',
  },
  accents: {
    blue: '#007be3',
    purple: '#4f4ff1',
    cyan: '#0099ff',
  },
  text: {
    primary: '#ffffff',
    secondary: 'rgba(255, 255, 255, 0.6)',
    muted: 'rgba(255, 255, 255, 0.3)',
  },
  border: {
    card: 'rgba(255, 255, 255, 0.08)',
  },
} as const;

export const FEATURES = [
  {
    title: 'Smart Analytics',
    description: 'AI-powered insights that break down your spending patterns and suggest optimizations.',
  },
  {
    title: 'Real-time Tracking',
    description: 'Monitor your transactions as they happen with instant notifications and categorization.',
  },
  {
    title: 'Goal Planning',
    description: 'Set financial goals and get personalized recommendations to achieve them faster.',
  },
] as const;

export const BENEFITS = [
  {
    title: 'Bank-level Security',
    description: 'Your data is encrypted end-to-end with 256-bit AES encryption.',
  },
  {
    title: 'Seamless Integrations',
    description: 'Connect with 10,000+ banks and financial institutions worldwide.',
  },
] as const;

export const TESTIMONIALS = [
  {
    name: 'Alex Johnson',
    role: 'Freelance Designer',
    quote: 'FinSight changed how I manage my business expenses.',
  },
  {
    name: 'Sarah Chen',
    role: 'Startup Founder',
    quote: 'The analytics alone saved me hours every month.',
  },
  {
    name: 'Mike Torres',
    role: 'Software Engineer',
    quote: 'Finally an app that actually understands my spending.',
  },
] as const;

export const FOOTER_LINKS = {
  Product: ['Features', 'Pricing', 'Integrations', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy', 'Terms', 'Security'],
  Support: ['Help Center', 'Contact', 'Status'],
} as const;

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Product', href: '#product' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
] as const;
