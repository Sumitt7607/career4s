import { ArrowRight, GraduationCap, Stethoscope, BookOpen } from 'lucide-react';
import heroImg from '@/assets/hero-medical.jpg';

const HeroSectionmedon = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={heroImg} alt="Medical Education" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/80 to-transparent" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
      <div className="animate-slide-up">
        <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Stethoscope className="w-4 h-4 text-primary" /> #1 Medical Admission Consultants
        </div>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Your Gateway to <span className="text-gradient-saffron">Medical Education</span> Excellence
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-lg">
          Expert guidance for MBBS, BDS, BAMS, BHMS & all medical admissions across India. 
          We make your dream of becoming a doctor a reality.
        </p>
        {/* <div className="flex flex-wrap gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-saffron text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-saffron hover:shadow-saffron-lg transition-all animate-pulse-saffron">
            Start Your Journey <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#courses" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all">
            Explore Courses
          </a>
        </div> */}
        <div className="flex gap-8 mt-10">
          {[
            { icon: GraduationCap, label: '10,000+ Students', sub: 'guided' },
            { icon: BookOpen, label: '5000+ Colleges', sub: 'Pan India Network' },
            { icon: Stethoscope, label: '30+ expert ', sub: 'Counsellors' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSectionmedon;
