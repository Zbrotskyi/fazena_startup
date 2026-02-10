import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAZENA | Contact Us",
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
