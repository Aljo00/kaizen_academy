export const SITE = {
  name: 'Kaizen Academy',
  location: 'Thrithala',
  tagline: 'The Builders of Next Generation',
  phones: ['9745610824', '9037620824'],
  email: 'Kaizenacademy5@gmail.com',
  address: {
    line1: 'Kaizen Academy Thrithala',
    line2: 'Thrithala PO, Canal Road',
    line3: 'Near ESAF Bank Thrithala',
    pin: '679534',
  },
  maps: 'https://maps.app.goo.gl/LNcFsB4vca9GZzuS7?g_st=ic',
  mapsEmbed: 'https://www.google.com/maps?q=Thrithala+Kerala+679534&output=embed',
  social: {
    instagram: 'https://www.instagram.com/kaizen.academy',
    youtube: 'https://www.youtube.com/@kaizenacademythrithala3166',
    facebook: 'https://www.facebook.com/people/Kaizen-Academy-Thrithala/61582768923441/',
  },
  whatsappMsg: 'Hello Kaizen Academy, I would like to know more about admissions.',
};

export const ASSETS = {
  logo: 'https://customer-assets.emergentagent.com/job_kaizen-premium/artifacts/sa8sjh89_image.png',
  founder: 'https://customer-assets.emergentagent.com/job_kaizen-premium/artifacts/crf7e7v1_image.png',
  campus: [
    'https://customer-assets.emergentagent.com/job_kaizen-premium/artifacts/n1xwe6l9_image.png',
    'https://customer-assets.emergentagent.com/job_kaizen-premium/artifacts/yimmtaii_image.png',
    'https://customer-assets.emergentagent.com/job_kaizen-premium/artifacts/x86copis_image.png',
    'https://images.unsplash.com/photo-1692269725911-87697c558be1?auto=format&fit=crop&w=1600&q=80',
    'https://images.pexels.com/photos/27907978/pexels-photo-27907978.jpeg?auto=compress&w=1600',
    'https://images.unsplash.com/photo-1655635643486-a17bc48771ff?auto=format&fit=crop&w=1600&q=80',
  ],
};

export const COURSE_CATEGORIES = [
  {
    id: 'school',
    label: 'School Coaching',
    accent: '#1D4ED8',
    icon: 'GraduationCap',
    blurb: 'Strong academic foundation for State Syllabus students from Class 8 to 12.',
    courses: ['State Syllabus', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'],
  },
  {
    id: 'commerce',
    label: 'Commerce Programs',
    accent: '#4F46E5',
    icon: 'BarChart3',
    blurb: 'Career-focused commerce tuition for undergrad and postgrad scholars.',
    courses: ['BCom', 'BBA', 'MCom', 'MBA'],
  },
  {
    id: 'professional',
    label: 'Professional Programs',
    accent: '#7C3AED',
    icon: 'Briefcase',
    blurb: 'Rigorous CA & CMA coaching for India\u2019s toughest professional exams.',
    courses: ['CA India', 'CMA India'],
  },
  {
    id: 'medical',
    label: 'Medical Coaching',
    accent: '#F43F5E',
    icon: 'Stethoscope',
    blurb: 'Focused mentorship for pharmacy entrance and B.Pharm aspirants.',
    courses: ['B.Pharm Coaching'],
  },
];

export const WHY_FEATURES = [
  { title: 'Experienced Faculty', desc: 'Seasoned mentors who care about every learner\u2019s growth journey.', icon: 'Users' },
  { title: 'Individual Attention', desc: 'Small batches with one-to-one doubt clearing and tailored study plans.', icon: 'UserCheck' },
  { title: 'Result-Oriented Training', desc: 'Outcome-first coaching with regular assessments and tight feedback loops.', icon: 'Target' },
  { title: 'Modern Environment', desc: 'A calm, well-lit, distraction-free campus engineered for deep learning.', icon: 'Building2' },
];

export const WHY_CHOOSE = [
  { title: 'Personal Mentoring', icon: 'Compass' },
  { title: 'Academic Excellence', icon: 'Award' },
  { title: 'Career Guidance', icon: 'Map' },
  { title: 'Exam Preparation', icon: 'BookOpenCheck' },
  { title: 'Small Batch Size', icon: 'Users2' },
  { title: 'Progress Tracking', icon: 'LineChart' },
];

export const TESTIMONIALS = [
  { name: 'Anaswara R.', role: 'CA Foundation Student', text: 'The faculty at Kaizen broke down complex CA concepts so clearly. The personal attention made all the difference.', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80' },
  { name: 'Mohammed Faiz', role: 'Class 12 Commerce', text: 'I joined Kaizen for board exam prep and my confidence shot up within weeks. The mentors believe in you.', avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=240&q=80' },
  { name: 'Nivedya Krishnan', role: 'BCom Final Year', text: 'Small batches mean every doubt gets answered. My grades and clarity both improved drastically.', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=240&q=80' },
  { name: 'Arjun Pillai', role: 'CMA Aspirant', text: 'Best decision I made for my CMA journey. Structured, disciplined and genuinely warm faculty.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80' },
];

export const STATS = [
  { value: 500, suffix: '+', label: 'Active Students' },
  { value: 15, suffix: '+', label: 'Courses Offered' },
  { value: 4, suffix: '', label: 'Academic Streams' },
  { value: 98, suffix: '%', label: 'Parent Trust Score' },
];

export const ALL_COURSE_OPTIONS = COURSE_CATEGORIES.flatMap(c => c.courses);
