import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowLeft } from "lucide-react";

const packageData: Record<
  string,
  {
    name: string;
    price: string;
    badge?: string;
    description: string;
    features: string[];
    benefits: string[];
    cta: string;
  }
> = {
  standard: {
    name: "Standard Counselling Package",
    price: "₹30,000",
    description:
      "Designed for students who need structured guidance and expert direction throughout their admission journey.",
    features: [
      "Personalised college shortlisting based on academic profile",
      "Application form filling & submission support",
      "3 one-on-one counselling sessions",
      "Complete document checklist & verification",
      "Admission timeline planning",
      "Email support during the process",
    ],
    benefits: [
      "Reduce application mistakes",
      "Save time with expert guidance",
      "Improve admission chances strategically",
    ],
    cta: "Start Your Journey",
  },
  premium: {
    name: "Premium Mentorship Package",
    price: "₹50,000-₹5,00000",
    badge: "Most Popular",
    description:
      "An elite mentorship program offering end-to-end personalised support, strategy building, and scholarship assistance for top-tier admissions.",
    features: [
      "Everything included in Standard Package",
      "Unlimited one-on-one mentoring sessions",
      "Dedicated personal mentor",
      "Mock interviews with feedback",
      "Scholarship & financial aid strategy",
      "SOP / Essay drafting & review",
      "Priority phone & WhatsApp support",
      "Post-admission & orientation guidance",
    ],
    benefits: [
      "Maximum admission success rate",
      "Personalised long-term academic strategy",
      "Strong scholarship positioning",
    ],
    cta: "Apply for Premium",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const PackageDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !packageData[slug]) return <Navigate to="/packages" replace />;

  const pkg = packageData[slug];
  const isPremium = slug === "premium";

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-background py-16">
      <main className="container max-w-4xl mx-auto">

        {/* Back Button */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Button variant="ghost" asChild className="mb-8 text-lg">
            <Link to="/packages">
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to Packages
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Card
              className={`relative overflow-hidden transition-all duration-500 shadow-xl ${
                isPremium
                  ? "border-2 border-primary shadow-2xl"
                  : "border border-border"
              }`}
            >
              <CardHeader className="text-center py-10">
                {pkg.badge && (
                  <Badge className="bg-primary text-white px-4 py-1 mb-4 text-sm">
                    {pkg.badge}
                  </Badge>
                )}

                <CardTitle className="text-4xl md:text-5xl font-bold">
                  {pkg.name}
                </CardTitle>

                <p className="text-5xl font-extrabold text-primary mt-4">
                  {pkg.price}
                </p>

                <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                  {pkg.description}
                </p>
              </CardHeader>

              <CardContent className="px-10 pb-12">

                {/* Features */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-semibold mb-6">
                    What’s Included
                  </h3>

                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((feature) => (
                      <motion.li
                        key={feature}
                        whileHover={{ x: 6 }}
                        className="flex items-start gap-4 text-lg"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Benefits */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-semibold mb-6">
                    Why Choose This Package?
                  </h3>

                  <ul className="space-y-4 mb-12">
                    {pkg.benefits.map((benefit) => (
                      <motion.li
                        key={benefit}
                        whileHover={{ x: 6 }}
                        className="flex items-start gap-4 text-lg"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* CTA */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <Button
                    size="lg"
                    className="w-full text-lg py-7"
                    variant={isPremium ? "default" : "outline"}
                  >
                    {pkg.cta}
                  </Button>
                </motion.div>

              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default PackageDetail;