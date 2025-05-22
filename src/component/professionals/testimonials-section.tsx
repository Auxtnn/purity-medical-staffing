// "use client";

// import { useState, useRef } from "react";
// import Image from "next/image";
// import { motion, useInView } from "framer-motion";
// import { Badge } from "../ui/badge";
// import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
// import { Select } from "../ui/select";
// import { Button } from "../ui/button";
// import { Section } from "../ui/section";
// import { Card } from "../ui/card";
// import { Quote } from "lucide-react";
// import { testimonials } from "@/data/testimonial";

// const professionalTestimonials = testimonials.filter(
//   (t) => t.category === "professional"
// );

// const TestimonialsSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   return (
//     <Section bgColor="light" ref={ref}>
//       <div className="text-center max-w-3xl mx-auto mb-16">
//         <span className="text-primary font-semibold text-lg mb-2 block">
//           Success Stories
//         </span>
//         <h2 className="text-3xl md:text-4xl font-bold mb-6">
//           Hear from Our Healthcare Professionals
//         </h2>
//         <p className="text-gray text-lg">
//           Discover how Purity Medical Staffing has helped healthcare
//           professionals advance their careers while maintaining work-life
//           balance and job satisfaction.
//         </p>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-4xl mx-auto"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {professionalTestimonials.map((testimonial, index) => (
//             <Card key={index} className="p-6 relative">
//               <div className="absolute top-4 right-4 text-primary opacity-20">
//                 <Quote size={24} />
//               </div>

//               <div className="flex items-center mb-4">
//                 <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
//                   <Image
//                     src={testimonial.image}
//                     alt={testimonial.author}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">{testimonial.author}</h4>
//                   <p className="text-sm text-primary">{testimonial.title}</p>
//                 </div>
//               </div>

//               <p className="text-gray italic mb-4">"{testimonial.quote}"</p>

//               <p className="text-sm text-gray">{testimonial.facility}</p>
//             </Card>
//           ))}
//         </div>
//       </motion.div>
//     </Section>
//   );
// };

// export default TestimonialsSection;
