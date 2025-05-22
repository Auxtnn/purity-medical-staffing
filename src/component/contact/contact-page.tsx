import ContactHero from "./HeroContact";
import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";
import Faq from "./faq";

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <div className="pt-12 pb-4 md:pt-16">
        <div className="container lg:w-11/12 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
      <Faq />
    </>
  );
};

export default ContactPage;
