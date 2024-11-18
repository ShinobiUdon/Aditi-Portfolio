import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/aditi-narania",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/aditi-narania",
      label: "GitHub"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/aditi-narania",
      label: "Twitter"
    }
  ];

  return (
    <section id="contact" className="bg-charcoal text-white">
      <div className="section-container">
        <h2 className="section-title text-white">Get in Touch</h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8 text-ash-gray">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <a
            href="mailto:hello@aditinarania.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cambridge-blue hover:bg-hookers-green transition-colors rounded-lg mb-12"
          >
            <Mail className="w-5 h-5" />
            hello@aditinarania.com
          </a>

          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-slate-gray hover:bg-hookers-green transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;