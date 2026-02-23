import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, Code, Camera, Clapperboard } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { icon: Database, label: 'Data Analysis', color: 'bg-blue-500/10 text-blue-600' },
  { icon: Code, label: 'Programming', color: 'bg-purple-500/10 text-purple-600' },
  { icon: Camera, label: 'Photography', color: 'bg-amber-500/10 text-amber-600' },
  { icon: Clapperboard, label: 'Videography', color: 'bg-rose-500/10 text-rose-600' },
];

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image slide in from left
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content slide in from right
      gsap.fromTo(contentRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Skills stagger animation
      gsap.fromTo(skillsRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen w-full py-24 lg:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-offwhite via-white to-offwhite" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-px bg-charcoal/20" />
          <span className="text-caption uppercase tracking-widest text-charcoal/50">About Me</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div ref={imageRef} className="relative opacity-0 order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl -z-10" />
              <div className="absolute -inset-2 border border-charcoal/5 rounded-3xl -z-5" />
              
              {/* Profile Image Placeholder */}
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-apple-xl bg-gradient-to-br from-softgray to-offwhite flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <span className="text-5xl font-semibold text-charcoal/30">RSG</span>
                  </div>
                  <p className="text-caption text-charcoal/40 uppercase tracking-wider">Profile Photo</p>
                </div>
              </div>

              {/* Floating skill badges */}
              <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl p-4 shadow-apple-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">Data & Creative</p>
                    <p className="text-xs text-charcoal/50">Dual Expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div ref={contentRef} className="opacity-0 order-1 lg:order-2">
            <h2 className="text-headline text-charcoal mb-6">
              Bridging Data &{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Creativity
              </span>
            </h2>

            <div className="space-y-5 text-body text-charcoal/70 leading-relaxed">
              <p>
                I am an Information Systems and Technology student at ITB with a strong 
                focus on the <span className="text-charcoal font-medium">data ecosystem</span>. 
                I aspire to bridge the gap between complex data and actionable business insights 
                as a Data Analyst or Data Scientist.
              </p>
              <p>
                Beyond data (<span className="text-blue-600 font-medium">Python</span>,{' '}
                <span className="text-blue-600 font-medium">SQL</span>,{' '}
                <span className="text-blue-600 font-medium">Java</span>), I have a deep passion 
                for creative multimedia, holding extensive experience in{' '}
                <span className="text-purple-600 font-medium">photography</span>,{' '}
                <span className="text-purple-600 font-medium">videography</span>, and post-production 
                using <span className="text-amber-600 font-medium">Premiere Pro</span> and{' '}
                <span className="text-rose-600 font-medium">DaVinci Resolve</span>.
              </p>
              <p>
                I thrive in environments that challenge both my{' '}
                <span className="text-charcoal font-medium">analytical thinking</span> and{' '}
                <span className="text-charcoal font-medium">creative execution</span>.
              </p>
            </div>

            {/* Skill Pills */}
            <div ref={skillsRef} className="flex flex-wrap gap-3 mt-8">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.label}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl ${skill.color} opacity-0`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{skill.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-charcoal/10">
              <div>
                <p className="text-3xl font-bold text-charcoal">5+</p>
                <p className="text-caption text-charcoal/50 mt-1">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-charcoal">3</p>
                <p className="text-caption text-charcoal/50 mt-1">Competition Medals</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-charcoal">8+</p>
                <p className="text-caption text-charcoal/50 mt-1">Technical Skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
