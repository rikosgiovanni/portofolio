import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, Calendar, MapPin, Trophy, CheckCircle2, ExternalLink } from 'lucide-react';
import type { ExperienceCard } from '../sections/Experience';

interface ExperienceModalProps {
  experience: ExperienceCard | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ExperienceModal({ experience, isOpen, onClose }: ExperienceModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Animate in
      gsap.fromTo(overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out', delay: 0.1 }
      );
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(contentRef.current, {
      opacity: 0,
      y: 30,
      scale: 0.98,
      duration: 0.25,
      ease: 'power2.in',
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.2,
      delay: 0.1,
      onComplete: onClose,
    });
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  if (!experience || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 modal-overlay"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 pointer-events-none">
        <div
          ref={contentRef}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden pointer-events-auto opacity-0"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
          >
            <X className="w-5 h-5 text-charcoal" />
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto max-h-[90vh]">
            {/* Hero Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-3">
                  {experience.category}
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  {experience.title}
                </h2>
                <p className="text-lg text-white/80">{experience.role}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-charcoal/10">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-offwhite">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-charcoal">{experience.date}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-offwhite">
                  <MapPin className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-charcoal">{experience.location}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-charcoal mb-3">Overview</h3>
                <p className="text-body text-charcoal/70 leading-relaxed">
                  {experience.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  What I Did
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {experience.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-offwhite/50 hover:bg-offwhite transition-colors duration-200"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-xs font-semibold text-blue-600">
                        {idx + 1}
                      </span>
                      <span className="text-sm text-charcoal/80">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-500" />
                  Results & Impact
                </h3>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
                  <p className="text-body text-charcoal/80">{experience.results}</p>
                </div>
              </div>

              {/* Documentation Gallery */}
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-4">Documentation</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl bg-offwhite flex items-center justify-center group cursor-pointer hover:bg-softgray transition-colors duration-300"
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-charcoal/5 flex items-center justify-center group-hover:bg-charcoal/10 transition-colors">
                          <ExternalLink className="w-5 h-5 text-charcoal/30" />
                        </div>
                        <span className="text-xs text-charcoal/40">Photo {i}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
