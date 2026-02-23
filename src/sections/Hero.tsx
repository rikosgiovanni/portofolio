import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial fade-in animation on load
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo(nameRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 }
      )
      .fromTo(titleRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.7'
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        '-=0.3'
      );

      // Scroll-triggered fade out/shrink - FIXED: using fromTo for bidirectional animation
      gsap.fromTo(contentWrapperRef.current,
        { opacity: 1, scale: 1, y: 0 },
        {
          opacity: 0,
          scale: 0.9,
          y: -60,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '50% top',
            scrub: 0.5,
          },
        }
      );

      // Scroll indicator fade out
      gsap.fromTo(scrollIndicatorRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '20% top',
            scrub: true,
          },
        }
      );

      gsap.to(".hero-bg", {
        background: "linear-gradient(to bottom, #ffffff 0%, #eef2ff 50%, #e0f2fe 100%)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-orb-blue", {
        y: -250,
        opacity: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-orb-purple", {
        y: 150,
        opacity: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-title", {
        textShadow: "0 0 40px rgba(59,130,246,0.4)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "50% top",
          scrub: true,
        },
      });


    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Subtle gradient background */}
      <div
        className="hero-bg absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(to bottom, #ffffff 0%, #ffffff 100%)",
        }}
      />      

      {/* Decorative gradient orbs */}
      <div className="hero-orb-blue absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-2xl" />
      <div className="hero-orb-purple absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-2xl" />

      {/* Content */}
      <div ref={contentWrapperRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          ref={nameRef}
          className="text-hero text-charcoal mb-6 opacity-0"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-charcoal via-blue-600 to-charcoal bg-clip-text text-transparent">
            Riko Satriya Giovanni
          </span>
        </h1>
        
        <p
          ref={titleRef}
          className="text-subhead text-charcoal/80 mb-4 opacity-0"
        >
          Information Systems and Technology Student at ITB
        </p>
        
        <p
          ref={subtitleRef}
          className="text-body text-charcoal/60 opacity-0"
        >
          Aspiring Data Analyst & Data Scientist
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-full bg-charcoal text-white font-medium hover:bg-charcoal-light transition-all duration-300 btn-glow"
          >
            View My Work
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToAbout();
            }}
            className="px-8 py-3.5 rounded-full bg-white text-charcoal font-medium border border-charcoal/10 hover:border-charcoal/20 hover:bg-offwhite transition-all duration-300 shadow-card"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer opacity-0"
        onClick={scrollToAbout}
      >
        <span className="text-caption text-charcoal/50">Scroll to explore</span>
        <div className="w-10 h-10 rounded-full bg-white shadow-apple flex items-center justify-center animate-bounce">
          <ChevronDown className="w-5 h-5 text-charcoal/60" />
        </div>
      </div>
    </section>
  );
}
