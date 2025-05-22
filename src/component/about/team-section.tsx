"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { Linkedin, Twitter } from "lucide-react";

// Mock team data
const teamMembers = [
  {
    name: "Dr. Emily Johnson",
    title: "Founder & CEO",
    bio: "With over 15 years of experience as a practicing physician and healthcare administrator, Dr. Johnson founded Purity Medical Staffing with a vision to transform how healthcare facilities and professionals connect.",
    image: "/images/team-1.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Marcus Rivera",
    title: "Chief Operations Officer",
    bio: "Marcus brings 12 years of healthcare management experience, overseeing our daily operations and ensuring our staffing solutions meet the highest standards of quality and efficiency.",
    image: "/images/team-2.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sophia Chen, RN",
    title: "Director of Nursing",
    bio: "As a former nurse manager and travel nurse, Sophia understands the needs of both healthcare facilities and professionals, making her instrumental in our recruitment and placement processes.",
    image: "/images/team-3.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Wilson",
    title: "Client Relations Manager",
    bio: "James works closely with our partnered healthcare facilities to understand their unique needs and ensure we deliver staffing solutions that enhance their quality of care.",
    image: "/images/team-4.jpg",
    linkedin: "#",
    twitter: "#",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section ref={ref}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary font-semibold text-lg mb-2 block">
          Our Leadership
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Team</h2>
        <p className="text-gray text-lg">
          Our experienced leadership team brings together diverse expertise in
          healthcare, staffing, and business management to deliver exceptional
          service to our clients and professionals.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {teamMembers.map((member, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full overflow-hidden group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.title}</p>
                <p className="text-gray text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a
                    href={member.linkedin}
                    className="text-gray hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={member.twitter}
                    className="text-gray hover:text-primary transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <p className="text-gray text-lg max-w-3xl mx-auto">
          Our leadership team is supported by dedicated professionals in
          recruitment, compliance, client relations, and support services.
          Together, we're committed to our mission of building healthier
          communities, one member at a time.
        </p>
      </div>
    </Section>
  );
};

export default TeamSection;
