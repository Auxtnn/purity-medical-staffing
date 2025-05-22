export type Testimonial = {
  id: number;
  quote: string;
  author: string;
  title: string;
  facility: string;
  image: string;
  category: "facility" | "professional";
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Purity Medical Staffing has been an invaluable partner. Their professionals consistently deliver exceptional care, and their responsiveness to our urgent needs has been outstanding.",
    author: "Sarah Johnson",
    title: "Director of Nursing",
    facility: "Memorial Hospital",
    image: "/images/2.jpg",
    category: "facility",
  },
  {
    id: 2,
    quote:
      "Working with Purity has transformed my career. Their team truly understands my goals and preferences, finding me positions that align perfectly with my skills and schedule needs.",
    author: "Michael Rodriguez",
    title: "Registered Nurse",
    facility: "Multiple Facilities",
    image: "/images/2.jpg",
    category: "professional",
  },
  {
    id: 3,
    quote:
      "The quality of professionals that Purity provides is consistently excellent. They've become our first call whenever we need staffing support.",
    author: "Rebecca Chen",
    title: "HR Director",
    facility: "Sunshine Assisted Living",
    image: "/images/2.jpg",
    category: "facility",
  },
  {
    id: 4,
    quote:
      "As a travel nurse, I appreciate how Purity makes the entire process seamless - from credentialing to housing arrangements. They truly care about their nurses.",
    author: "David Wilson",
    title: "Travel RN",
    facility: "Various Hospitals",
    image: "/images/2.jpg",
    category: "professional",
  },
  {
    id: 5,
    quote:
      "During a critical staffing shortage, Purity came through with qualified professionals who integrated seamlessly with our team. Their commitment to quality care is evident in every placement.",
    author: "Jennifer Lee",
    title: "Chief Nursing Officer",
    facility: "Northwest Regional Hospital",
    image: "/images/2.jpg",
    category: "facility",
  },
  {
    id: 6,
    quote:
      "The flexible scheduling options through Purity have allowed me to balance my family life while still advancing my career. I've never worked with a more supportive staffing agency.",
    author: "Lisa Martinez",
    title: "Licensed Practical Nurse",
    facility: "Golden Years Retirement Community",
    image: "/images/2.jpg",
    category: "professional",
  },
];
