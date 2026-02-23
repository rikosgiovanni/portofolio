import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, ArrowUpRight, Linkedin, Instagram, Music } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
  { icon: Music, url: 'https://tiktok.com', label: 'TikTok' },
];

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 60 },
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

      gsap.fromTo(statementRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-offwhite via-charcoal to-charcoal-dark" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div ref={contentRef} className="opacity-0">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-px bg-white/20" />
              <span className="text-caption uppercase tracking-widest text-white/50">Get in Touch</span>
              <div className="w-12 h-px bg-white/20" />
            </div>
          </div>

          {/* Closing Statement */}
          <p
            ref={statementRef}
            className="text-headline text-white mb-12 opacity-0"
          >
            Let's build something{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              data-driven
            </span>{' '}
            and{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              visually compelling
            </span>{' '}
            together.
          </p>

          {/* CTA Section */}
          <div ref={ctaRef} className="opacity-0">
            <a
              href="mailto:giovanniriko@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-charcoal font-semibold hover:bg-offwhite transition-all duration-300 btn-glow mb-8"
            >
              <Mail className="w-5 h-5" />
              <span>Get in Touch</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <p className="text-caption text-white/40 mb-8">
              giovanniriko@gmail.com
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white/70" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-caption text-white/40">
              © 2024 Riko Satriya Giovanni. All rights reserved.
            </p>
            <p className="text-caption text-white/30">
              Crafted with passion in Bandung, Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
