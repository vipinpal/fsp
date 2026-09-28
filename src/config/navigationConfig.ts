export interface NavSubItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  children?: NavSubItem[];
}

export const navigationConfig: NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "about",
    label: "About Us",
    href: "/about",
    children: [
      { label: "Overview & Legacy", href: "/about", description: "Our heritage and milestones" },
      { label: "Vision & Mission", href: "/about/vision-mission", description: "Core philosophy and ethical foundations" },
      { label: "Campus History", href: "/about/campus", description: "From inception to a leading institution" },
    ],
  },
  {
    id: "administration",
    label: "Administration",
    href: "/administration",
    children: [
      { label: "Leadership Overview", href: "/administration", description: "Meet the executive governing body" },
      { label: "Director's Message", href: "/administration/director-message", description: "Guiding words from the school director" },
      { label: "Principal's Message", href: "/administration/principal-message", description: "Vision for academic and student life" },
      { label: "Faculty & Staff", href: "/administration/faculty", description: "Mentors shaping future leaders" },
    ],
  },
  {
    id: "admissions",
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admissions Overview", href: "/admissions", description: "Session 2026–27 Open" },
      { label: "Admission Process", href: "/admissions/process", description: "Step-by-step registration guide" },
      { label: "Eligibility Criteria", href: "/admissions/eligibility", description: "Age guidelines and requirements" },
      { label: "Required Documents", href: "/admissions/documents", description: "Checklist for successful application" },
      { label: "Fee Structure", href: "/admissions/fee-structure", description: "Transparent schedule and policy" },
      { label: "Online Enquiry", href: "/admissions/enquiry", badge: "Apply", description: "Instant application inquiry form" },
    ],
  },
  {
    id: "academics",
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Academic Curriculum", href: "/academics/curriculum", description: "CBSE & Experiential pedagogy" },
      { label: "Early Years (Kindergarten)", href: "/academics/kindergarten", description: "Playway foundational discovery" },
      { label: "Primary Wing (I–V)", href: "/academics/primary", description: "Inquiry and cognitive skill building" },
      { label: "Middle School (VI–VIII)", href: "/academics/middle-school", description: "Analytical growth and project labs" },
      { label: "Secondary (IX–X)", href: "/academics/secondary", description: "CBSE board readiness & rigor" },
      { label: "Senior Secondary (XI–XII)", href: "/academics/senior-secondary", description: "Science, Commerce & Humanities" },
      { label: "Academic Calendar", href: "/academics/calendar", description: "Terms, exams, and annual holidays" },
      { label: "Faculty Team", href: "/academics/faculty", description: "Our esteemed subject specialists" },
    ],
  },
  {
    id: "campus",
    label: "Campus",
    href: "/campus",
    children: [
      { label: "Campus & Infrastructure", href: "/campus/infrastructure", description: "15-acre green, modern premises" },
      { label: "Knowledge Library", href: "/campus/library", description: "Over 25,000 titles & digital reserves" },
      { label: "Science & Robotics Labs", href: "/campus/laboratories", description: "Physics, Chem, Bio, STEM & AI labs" },
      { label: "Smart Classrooms", href: "/campus/smart-classrooms", description: "Interactive 4K digital panels" },
      { label: "Sports Complex", href: "/campus/sports", description: "Olympic pool, turf, track & indoor arena" },
      { label: "Safe Transport", href: "/campus/transport", description: "GPS and CCTV enabled bus fleet" },
      { label: "Health & Safety", href: "/campus/health-safety", description: "Infirmary and emergency care" },
      { label: "Student Counselling", href: "/campus/counselling", description: "Emotional wellbeing and career advice" },
    ],
  },
  {
    id: "activities",
    label: "Activities",
    href: "/activities",
    children: [
      { label: "Co-Curricular Life", href: "/activities", description: "Beyond books & chalkboards" },
      { label: "Sports & Athletics", href: "/activities/sports", description: "Football, basketball, cricket, skating" },
      { label: "Visual Arts & Craft", href: "/activities/arts", description: "Pottery, painting, sculpturing" },
      { label: "Music & Performing Arts", href: "/activities/music", description: "Vocal, instrumental, classical & western" },
      { label: "Clubs & Societies", href: "/activities/clubs", description: "Robotics, MUN, Eco-warriors, Debate" },
      { label: "Creative Corner", href: "/activities/creative-corner", description: "Student publications and essays" },
    ],
  },
  {
    id: "achievements",
    label: "Achievements",
    href: "/achievements",
    children: [
      { label: "All Accolades", href: "/achievements", description: "Celebrating our student laureates" },
      { label: "Academic Excellence", href: "/achievements/academic", description: "CBSE toppers & Olympiad winners" },
      { label: "Sports Triumphs", href: "/achievements/sports", description: "National & state championships" },
      { label: "Inter-School Competitions", href: "/achievements/competitions", description: "Debate, hackathons, cultural wins" },
    ],
  },
  {
    id: "gallery",
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Gallery Overview", href: "/gallery", description: "Campus glimpses & memories" },
      { label: "Photo Gallery", href: "/gallery/photos", description: "High-resolution photo albums" },
      { label: "Video Showcase", href: "/gallery/videos", description: "School documentaries and events" },
    ],
  },
  {
    id: "community",
    label: "Community",
    href: "/community/parents",
    children: [
      { label: "Parents' Corner", href: "/community/parents", description: "PTA, feedback, and orientations" },
      { label: "House System", href: "/community/houses", description: "Emerald, Sapphire, Ruby, and Amber" },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    href: "/resources/downloads",
    children: [
      { label: "Document Downloads", href: "/resources/downloads", description: "Syllabi, circulars, handbooks" },
      { label: "School Prospectus", href: "/resources/prospectus", description: "Download our official guide" },
      { label: "Transfer Certificate (TC)", href: "/resources/transfer-certificate", description: "Mandatory public TC disclosure" },
      { label: "Frequently Asked Questions", href: "/resources/faq", description: "Common parent queries answered" },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
  },
];
