import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { name: 'LinkedIn', image: '/images/social-linkedin.jpg', url: 'https://linkedin.com', handle: '@rikosatriya' },
  { name: 'Instagram', image: '/images/social-instagram.jpg', url: 'https://instagram.com', handle: '@rikosatriya' },
  { name: 'TikTok', image: '/images/social-tiktok.jpg', url: 'https://tiktok.com', handle: '@rikosatriya' },
];

const skillCategories = [
  {
    name: 'Hard Skills',
    image: '/images/category-hard-skills.jpg',
    items: [
      'Data Science & Analytics (Python, Jupyter, SQL)',
      'System Programming (Java, C)',
      'Database Normalization',
      'Web Development (Basic HTML)',
      'Professional Video & Music Production',
      'Digital Branding',
    ],
  },
  {
    name: 'Soft Skills',
    image: '/images/category-soft-skills.jpg',
    items: [
      'Strategic Leadership',
      'Public Speaking & Performance',
      'Sustainable Mentoring & Coaching',
      'Financial Accountability',
      'Analytical Problem Solving',
      'High-Scale Community Collaboration',
      'Growth Mindset',
    ],
  },
  {
    name: 'Languages',
    image: '/images/category-languages.jpg',
    items: [
      'Indonesian (Native Proficiency)',
      'English (Professional Working Proficiency; IELTS 6.5)',
    ],
  },
  {
    name: 'Tools',
    image: '/images/category-tools.jpg',
    items: [
      'VS Code',
      'GitHub',
      'Google Workspace',
      'Microsoft Office',
      'Adobe Premiere Pro',
      'Final Cut Pro',
      'Logic Pro',
    ],
  },
];

export default function SocialsSkills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content fade in
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Socials slide in from left
      gsap.fromTo(socialsRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Skills slide in from right
      gsap.fromTo(skillsRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center py-24 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-offwhite to-white" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={contentRef} className="text-center mb-16 opacity-0">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-charcoal/20" />
            <span className="text-caption uppercase tracking-widest text-charcoal/50">Connect & Skills</span>
            <div className="w-12 h-px bg-charcoal/20" />
          </div>
          <h2 className="text-headline text-charcoal mb-4">
            Let's Connect &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Collaborate
            </span>
          </h2>
          <p className="text-body text-charcoal/60 max-w-xl mx-auto">
            Find me on social media and explore the skills I've developed through years of practice and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Social Links */}
          <div ref={socialsRef} className="opacity-0">
            <h3 className="text-xl font-semibold text-charcoal mb-6 flex items-center gap-3">
              <img 
                src="/images/find-me-icon.jpg" 
                alt="Find Me" 
                className="w-8 h-8 rounded-lg object-cover"
              />
              Find Me On
            </h3>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 rounded-2xl glass-card card-hover"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={social.image} 
                        alt={social.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal group-hover:text-blue-600 transition-colors">
                        {social.name}
                      </p>
                      <p className="text-sm text-charcoal/50">{social.handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-charcoal/30 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Skills Categories */}
          <div ref={skillsRef} className="opacity-0">
            <h3 className="text-xl font-semibold text-charcoal mb-6 flex items-center gap-3">
              <img 
                src="/images/skills-icon.jpg" 
                alt="Skills" 
                className="w-8 h-8 rounded-lg object-cover"
              />
              My Skills
            </h3>
            
            {/* Skill Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((category) => (
                <div 
                  key={category.name}
                  className="p-5 rounded-2xl glass-card hover:bg-white hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-semibold text-charcoal">{category.name}</p>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-charcoal/60 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
