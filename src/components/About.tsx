import React from 'react';
import { TrendingUp, Target, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Marketing Strategy",
      icon: <Target className="w-6 h-6" />,
      items: ["Brand Development", "Market Research", "Campaign Planning", "Digital Strategy", "Content Marketing"]
    },
    {
      category: "Analytics & Tools",
      icon: <TrendingUp className="w-6 h-6" />,
      items: ["Google Analytics", "SEO/SEM", "Marketing Automation", "CRM Systems", "Social Media Analytics"]
    },
    {
      category: "Leadership",
      icon: <Users className="w-6 h-6" />,
      items: ["Team Management", "Stakeholder Relations", "Project Management", "Budget Planning", "Cross-functional Collaboration"]
    }
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-white to-ash-gray/10">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-dark-slate-gray mb-6">
              I'm a results-driven Marketing Executive with 8+ years of experience in developing
              and executing comprehensive marketing strategies. My expertise lies in digital
              transformation, brand development, and data-driven marketing campaigns.
            </p>
            <p className="text-lg text-dark-slate-gray">
              Throughout my career, I've successfully led teams in launching global campaigns,
              implementing marketing automation solutions, and achieving measurable business growth
              through strategic marketing initiatives.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=600&h=600"
              alt="Aditi Narania"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-hookers-green/10 rounded-lg"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-3 mb-4 text-hookers-green">
                {skillSet.icon}
                <h3 className="text-xl font-semibold">{skillSet.category}</h3>
              </div>
              <ul className="space-y-2">
                {skillSet.items.map((skill, i) => (
                  <li
                    key={i}
                    className="text-dark-slate-gray"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;