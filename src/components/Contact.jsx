import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, GmailIcon } from './TechIcons';

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Location',
    value: 'Hosur, Tamil Nadu',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '7397527337',
    href: 'tel:7397527337',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'rakchanaar9@gmail.com',
    href: 'mailto:rakchanaar9@gmail.com',
  },
];

const socialLinks = [
  {
    icon: <LinkedInIcon className="w-5 h-5" />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rakchanaa-ravikumar-5485a2259/',
  },
  {
    icon: <GitHubIcon className="w-5 h-5" />,
    label: 'GitHub',
    href: 'https://github.com/Rakchanaa',
  },
  {
    icon: <GmailIcon className="w-5 h-5" />,
    label: 'Gmail',
    href: 'mailto:rakchanaar9@gmail.com',
  },
];

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-120px' });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
    >
      {/* BLACK BACKGROUND with 20% opacity */}
      <div className="absolute inset-0 -z-10 " />

      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Get in touch
          </span>
          <h2 className="heading-lg mt-4 gradient-text">
            Contact Me
          </h2>
        </motion.div>

        {/* LET’S CONNECT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          whileHover={{ y: -6 }}
          className="max-w-2xl mx-auto"
        >
          <div
            className="rounded-3xl p-10
                       bg-black/30 backdrop-blur-xl
                       border
                       shadow-2xl"
          >
            <h3 className="heading-md text-foreground mb-6">
              Let's Connect
            </h3>

            <p className="text-muted-foreground mb-10 leading-relaxed">
              Feel free to reach out for collaborations, opportunities,
              or just a friendly chat about technology and design.
            </p>

            {/* Contact Info */}
            <div className="space-y-5">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl
                               bg-white/10
                               flex items-center justify-center
                               text-primary"
                  >
                    {info.icon}
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">
                      {info.label}
                    </span>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="block text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <h4 className="text-sm text-muted-foreground mb-4">
                Find me on
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-11 h-11 rounded-xl
                               bg-white/10
                               backdrop-blur
                               flex items-center justify-center
                               text-muted-foreground
                               hover:text-primary
                               hover:shadow-lg
                               transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
