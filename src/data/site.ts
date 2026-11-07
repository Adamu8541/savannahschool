export const school = {
  name: 'Savannah School', shortName: 'Savannah', motto: 'Learning. Character. Possibility.',
  description: 'A place to learn, a community to belong, and a world of possibilities to discover.',
  sampleNotice: 'Demonstration website · School information, programmes and updates are illustrative.',
}
export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about', children: [{ label: 'Our School', href: '/about' }, { label: 'School Administration', href: '/administration' }, { label: 'Our Vision & Values', href: '/about#values' }] },
  { label: 'Academics', href: '/academics', children: [{ label: 'Academic Structure', href: '/academics' }, { label: 'Programmes & Courses', href: '/programmes' }] },
  { label: 'Admissions', href: '/admissions' },
  { label: 'School Life', href: '/school-life', children: [{ label: 'Life at Savannah', href: '/school-life' }, { label: 'Photo Gallery', href: '/gallery' }] },
  { label: 'News & Events', href: '/news' },
  { label: 'Contact Us', href: '/contact' },
]
export const pathways = [
  { title: 'Primary Education', image: 'classroom', text: 'Building confident learners through curiosity, creativity and a strong foundation.', label: 'A strong beginning', subjects: ['Language & literacy', 'Mathematics', 'Creative arts', 'Science & discovery'] },
  { title: 'Secondary Education', image: 'science', text: 'Developing knowledge, independence and the skills to take the next step.', label: 'Discover your potential', subjects: ['Sciences', 'Arts & humanities', 'Business studies', 'Digital learning'] },
  { title: 'Further Learning', image: 'library', text: 'Exploring new interests and preparing for further study and lifelong learning.', label: 'A world of possibilities', subjects: ['Academic enrichment', 'Study skills', 'Career exploration', 'Community learning'] },
]
export const news = [
  { slug: 'learning-beyond-the-classroom', category: 'School Life', title: 'Learning beyond the classroom', text: 'How shared activities, practical experiences and time together bring learning to life.', image: 'students', body: 'Learning grows when students have the space to ask questions, work together and put ideas into practice. In this sample school story, a group project connects classroom learning with everyday experiences. A real school can replace this article with its own activities, photographs and verified publication date.' },
  { slug: 'a-space-for-discovery', category: 'Academics', title: 'A space for questions. A place for discovery.', text: 'A closer look at hands-on learning and the value of asking the next question.', image: 'science', body: 'Practical learning encourages students to observe carefully, discuss their findings and test their understanding. This illustrative article shows where a school can share classroom activities and learning resources. It does not describe a verified facility or event.' },
  { slug: 'reading-together', category: 'Our Community', title: 'Opening books, opening possibilities', text: 'Celebrating the small discoveries that begin with a good book and a curious mind.', image: 'library', body: 'Reading can introduce a new idea, broaden a perspective and start a conversation. This sample community story introduces a space for school reading initiatives, book recommendations and library news. Replace it with approved school content before institutional use.' },
]
export const gallery = [
  { image: 'campus', title: 'A place to grow', alt: 'Tree-lined grounds with a brick academic building' },
  { image: 'students', title: 'Learning together', alt: 'Students collaborating around a table outdoors' },
  { image: 'library', title: 'Ideas on every shelf', alt: 'Bookshelves and study spaces inside a library' },
  { image: 'science', title: 'Discover through doing', alt: 'Researcher working with equipment in a science laboratory' },
  { image: 'classroom', title: 'Everyday discoveries', alt: 'Students engaged in a classroom learning activity' },
]
