import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Send, User, Phone, Mail, GraduationCap, MapPin } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const InquiryForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    state: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "🎉 Inquiry Submitted Successfully!",
      description: "Our counselor will contact you within 24 hours.",
    });

    setFormData({ name: '', phone: '', email: '', course: '', state: '' });
    setIsSubmitting(false);
  };

  return (
    <ScrollReveal animation="slide-right" delay={200}>
      <div className="relative bg-card rounded-2xl p-8 shadow-lg border border-border overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-saffron" />
        
        {/* Floating decoration */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative z-10">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
            Get Free Counseling
          </h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Fill the form and our expert will call you within 24 hours
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
                <User className="w-4 h-4 text-primary" />
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
                <Phone className="w-4 h-4 text-primary" />
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                <Mail className="w-4 h-4 text-primary" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="course" className="flex items-center gap-2 text-sm font-medium">
                <GraduationCap className="w-4 h-4 text-primary" />
                Course Interest
              </Label>
              <Select
                value={formData.course}
                onValueChange={(value) => setFormData({ ...formData, course: value })}
              >
                <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary">
                  <SelectValue placeholder="Select your course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mbbs">MBBS / Medical</SelectItem>
                  <SelectItem value="btech">B.Tech / Engineering</SelectItem>
                  <SelectItem value="mba">MBA / Management</SelectItem>
                  <SelectItem value="pg-medical">PG Medical (MD/MS)</SelectItem>
                  <SelectItem value="pg-engineering">M.Tech / PG Engineering</SelectItem>
                  <SelectItem value="other">Other Courses</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="state" className="flex items-center gap-2 text-sm font-medium">
                <MapPin className="w-4 h-4 text-primary" />
                Preferred State
              </Label>
              <Select
                value={formData.state}
                onValueChange={(value) => setFormData({ ...formData, state: value })}
              >
                <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary">
                  <SelectValue placeholder="Select preferred state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                  <SelectItem value="delhi-ncr">Delhi NCR</SelectItem>
                  <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                  <SelectItem value="telangana">Telangana</SelectItem>
                  <SelectItem value="any">Any State</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-saffron hover:opacity-90 text-primary-foreground font-semibold py-6 rounded-xl transition-all duration-300 hover:shadow-saffron hover:scale-[1.02] active:scale-[0.98] group"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Get Free Counseling
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            🔒 Your information is 100% secure and confidential
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
};
