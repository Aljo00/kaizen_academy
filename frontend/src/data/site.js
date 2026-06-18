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

const A = 'https://customer-assets.emergentagent.com/job_kaizen-premium/artifacts';

export const ASSETS = {
  logo: `${A}/sa8sjh89_image.png`,
  founder: `${A}/crf7e7v1_image.png`,
  campus: [
    `${A}/n1xwe6l9_image.png`,
    `${A}/yimmtaii_image.png`,
    `${A}/x86copis_image.png`,
  ],
  activities: [
    { src: `${A}/hrxc4kpi_Photo%201.jpeg`, caption: 'Classroom in session', tag: 'Classroom' },
    { src: `${A}/je7yd4xb_Photo%202.jpeg`, caption: 'Exam Topper celebration', tag: 'Achievement' },
    { src: `${A}/jydwj4i8_Photo%203.jpeg`, caption: 'Topper recognition ceremony', tag: 'Achievement' },
    { src: `${A}/qfhh2zyh_Photo%204.jpeg`, caption: 'Toppers with mentor', tag: 'Achievement' },
    { src: `${A}/95xq0ovu_p%20Image%202026-06-17%20at%209.39.29%20PM.jpeg`, caption: 'Award ceremony', tag: 'Achievement' },
    { src: `${A}/4uzozudu_Photo%205.jpeg`, caption: 'Students in traditional attire', tag: 'Events' },
    { src: `${A}/z7g5tn6l_Photo6.jpeg`, caption: 'Cultural celebration moment', tag: 'Events' },
    { src: `${A}/wy4l3nua_Photo%207.jpeg`, caption: 'Sports team with trophies', tag: 'Achievement' },
    { src: `${A}/l1cpa1tx_Photo%208.jpeg`, caption: 'Campus event gathering', tag: 'Events' },
    { src: `${A}/epzhik42_Photo%209.jpeg`, caption: 'Cultural festival celebration', tag: 'Events' },
  ],
};

// Full gallery: campus + activities combined
export const GALLERY = [
  { src: ASSETS.campus[0], caption: 'Our Campus — front view', tag: 'Campus' },
  ...ASSETS.activities,
  { src: ASSETS.campus[1], caption: 'Side view of the academy', tag: 'Campus' },
  { src: ASSETS.campus[2], caption: 'Corner view of the campus', tag: 'Campus' },
];

export const GALLERY_TAGS = ['All', 'Campus', 'Classroom', 'Achievement', 'Events'];

export const COURSE_CATEGORIES = [
  { id: 'school', label: 'School Coaching', accent: '#1D4ED8', icon: 'GraduationCap', blurb: 'Strong academic foundation for State Syllabus students from Class 8 to 12.', courses: ['State Syllabus', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'] },
  { id: 'commerce', label: 'Commerce Programs', accent: '#4F46E5', icon: 'BarChart3', blurb: 'Career-focused commerce tuition for undergrad and postgrad scholars.', courses: ['BCom', 'BBA', 'MCom', 'MBA'] },
  { id: 'professional', label: 'Professional Programs', accent: '#7C3AED', icon: 'Briefcase', blurb: 'Rigorous CA & CMA coaching for India\u2019s toughest professional exams.', courses: ['CA India', 'CMA India'] },
  { id: 'medical', label: 'Medical Coaching', accent: '#F43F5E', icon: 'Stethoscope', blurb: 'Focused mentorship for pharmacy entrance and B.Pharm aspirants.', courses: ['B.Pharm Coaching'] },
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
  { name: 'Anaswara R.', role: 'CA Foundation Student', text: 'The faculty at Kaizen broke down complex CA concepts so clearly. The personal attention made all the difference.' },
  { name: 'Mohammed Faiz', role: 'Class 12 Commerce', text: 'I joined Kaizen for board exam prep and my confidence shot up within weeks. The mentors believe in you.' },
  { name: 'Nivedya Krishnan', role: 'BCom Final Year', text: 'Small batches mean every doubt gets answered. My grades and clarity both improved drastically.' },
  { name: 'Arjun Pillai', role: 'CMA Aspirant', text: 'Best decision I made for my CMA journey. Structured, disciplined and genuinely warm faculty.' },
];

export const STATS = [
  { value: 500, suffix: '+', label: 'Active Students' },
  { value: 9, suffix: '', label: 'Courses Offered' },
  { value: 4, suffix: '', label: 'Academic Streams' },
  { value: 98, suffix: '%', label: 'Parent Trust Score' },
];

export const ALL_COURSE_OPTIONS = COURSE_CATEGORIES.flatMap(c => c.courses);
