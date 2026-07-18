// Realistic sample data used to power the UI end-to-end.
// Swap this module for real API calls (see /backend) when wiring the live database.

export const companies = [
  { id: 'c1', name: 'Nimbus Cloud', logo: '☁️', industry: 'Cloud Infrastructure', website: 'https://nimbuscloud.example.com', openJobs: 12 },
  { id: 'c2', name: 'Pixelforge Studios', logo: '🎮', industry: 'Gaming', website: 'https://pixelforge.example.com', openJobs: 5 },
  { id: 'c3', name: 'Ledgerly', logo: '💳', industry: 'Fintech', website: 'https://ledgerly.example.com', openJobs: 8 },
  { id: 'c4', name: 'Verdant Health', logo: '🩺', industry: 'Healthtech', website: 'https://verdanthealth.example.com', openJobs: 4 },
  { id: 'c5', name: 'Routewise Logistics', logo: '📦', industry: 'Logistics', website: 'https://routewise.example.com', openJobs: 6 },
  { id: 'c6', name: 'Sundial Analytics', logo: '📊', industry: 'Data & AI', website: 'https://sundial.example.com', openJobs: 9 },
]

export const categories = [
  { id: 'cat1', name: 'Software Engineering', icon: 'Code2', count: 1240 },
  { id: 'cat2', name: 'Product & Design', icon: 'PenTool', count: 384 },
  { id: 'cat3', name: 'Data & AI', icon: 'BarChart3', count: 512 },
  { id: 'cat4', name: 'DevOps & Cloud', icon: 'Cloud', count: 276 },
  { id: 'cat5', name: 'Marketing', icon: 'Megaphone', count: 198 },
  { id: 'cat6', name: 'Customer Success', icon: 'Headphones', count: 143 },
]

export const jobs = [
  {
    id: 'j1',
    title: 'Senior Frontend Engineer',
    companyId: 'c1',
    company: 'Nimbus Cloud',
    logo: '☁️',
    location: 'Hyderabad, India',
    remote: 'Hybrid',
    type: 'Full-time',
    experience: '4-6 yrs',
    salary: '₹28L - ₹40L',
    postedAgo: '2 days ago',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
    description:
      'Nimbus Cloud is looking for a Senior Frontend Engineer to lead the development of our customer-facing dashboard used by over 40,000 infrastructure teams worldwide.',
    responsibilities: [
      'Own the architecture of shared UI components used across three product lines',
      'Partner with design to ship pixel-perfect, accessible interfaces',
      'Mentor two mid-level engineers and run frontend code reviews',
      'Improve Core Web Vitals and bundle performance quarter over quarter',
    ],
    requirements: [
      '4+ years building production React applications',
      'Strong grasp of TypeScript and component architecture',
      'Experience with design systems and accessibility standards',
      'Comfortable working in a fast-paced, cross-functional team',
    ],
    benefits: ['Health insurance for family', 'Annual learning stipend', 'Flexible working hours', 'ESOPs'],
  },
  {
    id: 'j2',
    title: 'Backend Engineer (Node.js)',
    companyId: 'c3',
    company: 'Ledgerly',
    logo: '💳',
    location: 'Hyderabad, India',
    remote: 'Onsite',
    type: 'Full-time',
    experience: '2-4 yrs',
    salary: '₹18L - ₹26L',
    postedAgo: '5 hours ago',
    skills: ['Node.js', 'MongoDB', 'Express', 'AWS'],
    description:
      'Ledgerly is building the payments backbone for small businesses across India. We need a backend engineer who cares deeply about correctness and reliability.',
    responsibilities: [
      'Design and maintain REST APIs powering transaction processing',
      'Write comprehensive tests for critical money-movement paths',
      'Work with the infra team on scaling database read/write paths',
      'Participate in on-call rotation for production systems',
    ],
    requirements: [
      '2+ years with Node.js in production',
      'Solid understanding of relational and document databases',
      'Experience with CI/CD pipelines and cloud deployments',
      'Bonus: experience in fintech or payments',
    ],
    benefits: ['Performance bonus', 'Health insurance', 'Free meals onsite', 'Relocation assistance'],
  },
  {
    id: 'j3',
    title: 'Full Stack Engineer',
    companyId: 'c6',
    company: 'Sundial Analytics',
    logo: '📊',
    location: 'Bengaluru, India',
    remote: 'Remote',
    type: 'Full-time',
    experience: '3-5 yrs',
    salary: '₹22L - ₹34L',
    postedAgo: '1 day ago',
    skills: ['React', 'Next.js', 'PostgreSQL', 'Docker'],
    description:
      'Sundial Analytics helps enterprises turn raw data into decisions. We are hiring a full stack engineer to build our self-serve reporting product.',
    responsibilities: [
      'Build full-stack features from database schema to UI',
      'Collaborate directly with founders on product direction',
      'Set up and maintain CI/CD pipelines for fast, safe releases',
      'Write clear technical documentation for internal tools',
    ],
    requirements: [
      '3+ years of full stack development experience',
      'Comfort with both SQL and NoSQL data modeling',
      'Experience shipping to production with automated pipelines',
      'Excellent written communication for a remote-first team',
    ],
    benefits: ['Fully remote', 'Home office stipend', 'Quarterly team offsites', 'Unlimited PTO'],
  },
  {
    id: 'j4',
    title: 'DevOps Engineer',
    companyId: 'c1',
    company: 'Nimbus Cloud',
    logo: '☁️',
    location: 'Hyderabad, India',
    remote: 'Onsite',
    type: 'Full-time',
    experience: '3-6 yrs',
    salary: '₹24L - ₹36L',
    postedAgo: '3 days ago',
    skills: ['Kubernetes', 'Terraform', 'AWS', 'GitHub Actions'],
    description:
      'Help us operate a multi-region Kubernetes platform serving mission-critical workloads for our enterprise customers.',
    responsibilities: [
      'Maintain and improve CI/CD pipelines across 20+ services',
      'Own infrastructure-as-code for staging and production',
      'Reduce deployment time and improve rollback safety',
      'Respond to incidents and drive blameless postmortems',
    ],
    requirements: [
      '3+ years managing cloud infrastructure at scale',
      'Deep knowledge of Kubernetes and Terraform',
      'Experience with GitHub Actions or similar CI/CD tooling',
      'Strong troubleshooting and communication skills',
    ],
    benefits: ['On-call compensation', 'Health insurance', 'Annual conference budget', 'ESOPs'],
  },
  {
    id: 'j5',
    title: 'Software Engineer (Rotational Shift)',
    companyId: 'c5',
    company: 'Routewise Logistics',
    logo: '📦',
    location: 'Hitech City, Hyderabad, India',
    remote: 'Onsite',
    type: 'Full-time',
    experience: '1-3 yrs',
    salary: '₹12L - ₹18L',
    postedAgo: '6 hours ago',
    skills: ['JavaScript', 'React', 'REST APIs', 'SQL'],
    description:
      'Routewise Logistics keeps delivery fleets running on time across India. This onsite, rotational-shift role supports our live dispatch platform around the clock.',
    responsibilities: [
      'Build and maintain features on the dispatch dashboard',
      'Support live operations during assigned shift rotations',
      'Fix production issues quickly with clear communication',
      'Write documentation for internal tooling',
    ],
    requirements: [
      '1+ years of professional software development experience',
      'Comfortable with rotational/onsite shift schedules',
      'Working knowledge of JavaScript and REST APIs',
      'Based in or willing to relocate to Hyderabad',
    ],
    benefits: ['Shift allowance', 'Cab facility for night shifts', 'Health insurance', 'Meal coupons'],
  },
  {
    id: 'j6',
    title: 'Product Designer',
    companyId: 'c2',
    company: 'Pixelforge Studios',
    logo: '🎮',
    location: 'Remote',
    remote: 'Remote',
    type: 'Contract',
    experience: '2-5 yrs',
    salary: '₹15L - ₹22L',
    postedAgo: '4 days ago',
    skills: ['Figma', 'Prototyping', 'User Research'],
    description:
      'Pixelforge Studios is looking for a product designer to shape the UX of our next mobile game companion app.',
    responsibilities: [
      'Lead end-to-end design for new app features',
      'Run lightweight user research and usability tests',
      'Maintain and extend our design system',
      'Collaborate closely with engineering on implementation details',
    ],
    requirements: [
      '2+ years of product design experience',
      'A strong portfolio showing shipped consumer products',
      'Fluency in Figma and prototyping tools',
      'Comfortable giving and receiving direct design feedback',
    ],
    benefits: ['Flexible contract terms', 'Creative freedom', 'Game credits', 'Remote-first culture'],
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Ananya Rao',
    role: 'Frontend Engineer, hired at Nimbus Cloud',
    quote: 'The application process was refreshingly transparent and I heard back within a week.',
    avatar: '👩‍💻',
  },
  {
    id: 't2',
    name: 'Karthik Iyer',
    role: 'Backend Engineer, hired at Ledgerly',
    quote: 'Found a role that actually matched my experience level instead of generic listings.',
    avatar: '👨‍💻',
  },
  {
    id: 't3',
    name: 'Fatima Sheikh',
    role: 'Product Designer, hired at Pixelforge Studios',
    quote: 'The filters saved me hours of scrolling through irrelevant postings.',
    avatar: '👩‍🎨',
  },
]

export const stats = [
  { label: 'Active Job Listings', value: '12,400+' },
  { label: 'Hiring Companies', value: '3,200+' },
  { label: 'Candidates Placed', value: '58,000+' },
  { label: 'Avg. Time to Hire', value: '9 days' },
]

export const adminStats = [
  { label: 'Total Jobs', value: 1284, change: '+4.2%' },
  { label: 'Total Companies', value: 312, change: '+1.8%' },
  { label: 'Registered Users', value: 9840, change: '+6.5%' },
  { label: 'Applications This Week', value: 742, change: '+12.1%' },
]

export const mockUsers = [
  { id: 'u1', name: 'Chandu Reddy', email: 'chandu@example.com', role: 'candidate', savedJobs: ['j1', 'j5'] },
  { id: 'u2', name: 'Priya Boyaguda', email: 'priya@globalco.com', role: 'admin', savedJobs: [] },
]
