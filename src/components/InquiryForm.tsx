import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Send,
  User,
  Phone,
  Mail,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const InquiryForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    state: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.course ||
      !formData.state
    ) {
      toast({
        variant: "destructive",
        title: "All fields are required",
        description: "Please fill all details before submitting.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "62630d11-6b8f-4743-8d0f-9c3a3158b735", // 🔴 PUT KEY HERE
          subject: "New Free Counseling Inquiry",
          from_name: "Counseling Website",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          course: formData.course,
          state: formData.state,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast({
          title: "🎉 Inquiry Submitted Successfully!",
          description: "Our counselor will contact you within 24 hours.",
        });

        setFormData({
          name: "",
          phone: "",
          email: "",
          course: "",
          state: "",
        });
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "Something went wrong",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollReveal animation="slide-right" delay={200}>
      <div className="relative bg-card rounded-2xl p-8 shadow-lg border border-border overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-saffron" />
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative z-10">
          <h3 className="font-serif text-2xl font-bold mb-2">
            Get Free Counseling
          </h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Fill the form and our expert will call you within 24 hours
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="flex gap-2">
                <User className="w-4 h-4 text-primary" /> Full Name
              </Label>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <Label className="flex gap-2">
                <Phone className="w-4 h-4 text-primary" /> Phone Number
              </Label>
              <Input
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <Label className="flex gap-2">
                <Mail className="w-4 h-4 text-primary" /> Email Address
              </Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="your@email.com"
              />
            </div>

            <div>
              <Label className="flex gap-2">
                <GraduationCap className="w-4 h-4 text-primary" /> Course Interest
              </Label>
              <Select
                value={formData.course}
                onValueChange={(v) =>
                  setFormData({ ...formData, course: v })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mbbs">MBBS / Medical</SelectItem>
                  <SelectItem value="btech">B.Tech / Engineering</SelectItem>
                  <SelectItem value="mba">MBA / Management</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="flex gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Preferred State
              </Label>
              <Select
                value={formData.state}
                onValueChange={(v) =>
                  setFormData({ ...formData, state: v })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="delhi-ncr">Delhi NCR</SelectItem>
                  <SelectItem value="any">Any State</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-saffron py-6 rounded-xl font-semibold"
            >
              {isSubmitting ? "Submitting..." : "Get Free Counseling"}
              <Send className="w-4 h-4 ml-2" />
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
