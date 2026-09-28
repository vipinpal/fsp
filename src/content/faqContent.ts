export interface FAQItem {
  question: string;
  answer: string;
  category: "Admissions" | "Academics" | "Campus & Safety" | "Transport & Fees";
}

export const faqContent: { eyebrow: string; title: string; subtitle: string; items: FAQItem[] } = {
  eyebrow: "Frequently Asked Questions",
  title: "Clear Answers to Common Queries",
  subtitle: "Everything parents and prospective students need to know about admissions, academics, and school life at GVIS.",
  items: [
    {
      category: "Admissions",
      question: "What is the procedure for seeking admission to Green Valley International School?",
      answer: "Parents begin by completing the online inquiry form or visiting our admissions office. After a school tour and an informal interactive session with academic counselors (or an aptitude test for secondary classes), required documents and fees are submitted to confirm admission.",
    },
    {
      category: "Admissions",
      question: "What is the minimum age criterion for Nursery and Kindergarten?",
      answer: "As per CBSE guidelines, a child must be 3 years of age as of 31st March of the academic year for Nursery admission, and 4 years of age for Kindergarten (KG).",
    },
    {
      category: "Academics",
      question: "Which educational board is the school affiliated with?",
      answer: "Green Valley International School is proudly affiliated with the Central Board of Secondary Education (CBSE), New Delhi, following the national NCERT curriculum integrated with experiential STEM and the National Education Policy (NEP 2020).",
    },
    {
      category: "Academics",
      question: "What is the student-to-teacher ratio at GVIS?",
      answer: "We maintain a strict 1:18 student-to-teacher ratio. This small class size ensures that every individual student receives regular one-on-one diagnostic attention and pastoral support.",
    },
    {
      category: "Transport & Fees",
      question: "Does the school provide transport facilities across Delhi NCR?",
      answer: "Yes, our fleet of modern air-conditioned buses covers all major residential routes across New Delhi and neighboring sectors. Buses feature live GPS tracking accessible via the parent portal, onboard speed governors, CCTV cameras, and female attendants.",
    },
    {
      category: "Campus & Safety",
      question: "What safety and security measures are in place on campus?",
      answer: "The campus is secured with 24/7 manned security guards, perimeter infrared sensors, biometric visitor verification, and over 350 CCTV cameras covering all indoor and outdoor areas. We also operate a dedicated infirmary staffed by certified pediatric nurses.",
    },
    {
      category: "Transport & Fees",
      question: "Are there any hidden costs or capitation fees?",
      answer: "Absolutely not. We operate with complete transparency. All fee schedules are published in advance and collected quarterly. No donations, capitation fees, or unannounced charges are ever levied.",
    },
  ],
};
