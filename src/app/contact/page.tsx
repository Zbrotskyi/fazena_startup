import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | FAZENA",
  description: "Get in touch with FAZENA for inquiries about our drug discovery platform, research collaborations, or partnership opportunities.",
};

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
