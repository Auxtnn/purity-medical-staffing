export type FAQ = {
  id: number;
  question: string;
  answer: string;
  category: "general" | "facilities" | "professionals";
};

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How does Purity Medical Staffing work?",
    answer:
      "Purity Medical Staffing connects qualified healthcare professionals with healthcare facilities that need staffing support. We handle the entire process from recruitment and credentialing to placement and ongoing support, ensuring both facilities and professionals have a positive experience.",
    category: "general",
  },
  {
    id: 2,
    question: "What types of healthcare professionals do you place?",
    answer:
      "We place a variety of healthcare professionals, including Registered Nurses (RNs), Licensed Practical Nurses (LPNs), Certified Nursing Assistants (CNAs), and Medication Aides. Our professionals work in diverse settings such as hospitals, long-term care facilities, rehabilitation centers, and home health agencies.",
    category: "general",
  },
  {
    id: 3,
    question: "What geographic areas do you serve?",
    answer:
      "Purity Medical Staffing currently serves healthcare facilities throughout the Pacific Northwest, including Oregon, Washington, and Idaho. We're continuously expanding our service area to meet the growing demand for quality healthcare staffing.",
    category: "general",
  },
  {
    id: 4,
    question: "How quickly can you fill our staffing needs?",
    answer:
      "Our response time varies depending on the specificity of your needs and current availability of professionals. For many positions, we can provide qualified candidates within 24-48 hours. For more specialized roles or during high-demand periods, it may take a few additional days, but we pride ourselves on our ability to respond quickly to urgent staffing needs.",
    category: "facilities",
  },
  {
    id: 5,
    question: "What is your credentialing process?",
    answer:
      "We maintain rigorous credentialing standards for all our healthcare professionals. This includes verification of licenses and certifications, skills assessments, background checks, drug screening, reference checks, and compliance with all state and federal requirements. We also ensure all professionals meet the specific requirements of each facility.",
    category: "facilities",
  },
  {
    id: 6,
    question: "Do you offer long-term staffing solutions?",
    answer:
      "Yes, we offer a range of staffing solutions from per diem coverage to long-term contracts and even temp-to-perm placements. We work closely with facilities to understand their specific needs and provide the most appropriate staffing solutions.",
    category: "facilities",
  },
  {
    id: 7,
    question: "How do I apply for jobs through Purity Medical Staffing?",
    answer:
      "You can apply through our website by browsing our job listings and submitting an application for positions that match your qualifications and preferences. After applying, our recruitment team will review your application and contact you to discuss your experience, preferences, and available opportunities.",
    category: "professionals",
  },
  {
    id: 8,
    question: "What benefits do you offer to healthcare professionals?",
    answer:
      "We offer competitive pay rates, flexible scheduling options, weekly pay, health insurance options (for eligible positions), continuing education support, personalized job matching, 24/7 clinical support, and career development opportunities. Our specific benefits package varies based on position type and assignment duration.",
    category: "professionals",
  },
  {
    id: 9,
    question: "How soon can I start working after applying?",
    answer:
      "Once your application is approved and your credentials are verified, we can typically begin matching you with positions immediately. The time from application to first assignment varies depending on your availability, the completeness of your credentials, and current job openings, but many professionals start working within 1-2 weeks of completing the application process.",
    category: "professionals",
  },
  {
    id: 10,
    question: "What if I have an issue during my assignment?",
    answer:
      "We provide 24/7 support for our healthcare professionals. If you encounter any issues during your assignment, you can contact your dedicated staffing coordinator at any time. We're committed to resolving concerns quickly and ensuring a positive experience for both you and the facility.",
    category: "professionals",
  },
];
