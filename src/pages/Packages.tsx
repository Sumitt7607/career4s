import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Standard",
    price: "₹30,000",
    slug: "standard",
    summary:
      "Essential counselling support for your college admission journey. Ideal for students who need guided assistance with applications.",
    highlights: [
      "College shortlisting",
      "Application guidance",
  
    ],
    featured: false,
  },
  {
    name: "Premium",
    price: "₹50,000-5,00000",
    slug: "premium",
    summary:
      "Comprehensive, personalised mentorship covering every step — from selection to scholarship. For students who want the best outcome.",
    highlights: [
      "Everything in Standard",
      "Unlimited Doubt sessions",

    ],
    featured: true,
  },
];  

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const Packages = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-background py-20">
      <main className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Our  Counselling Packages
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Choose the plan that aligns perfectly with your academic dreams.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.slug}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Card
                className={`relative overflow-hidden transition-all duration-500 ${
                  pkg.featured
                    ? "border-2 border-primary shadow-2xl"
                    : "border border-border shadow-lg"
                }`}
              >
                {pkg.featured && (
                  <Badge className="absolute top-4 right-4 bg-primary text-white text-sm px-4 py-1 shadow-lg">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center py-10">
                  <CardTitle className="text-3xl md:text-4xl font-bold">
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="text-4xl md:text-5xl font-extrabold text-primary mt-4">
                    {pkg.price}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-8 px-8">
                  <p className="text-lg text-muted-foreground text-center">
                    {pkg.summary}
                  </p>

                  <ul className="space-y-4">
                    {pkg.highlights.map((highlight) => (
                      <motion.li
                        key={highlight}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 text-lg"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="p-8">
                  <Button
                    asChild
                    className="w-full text-lg py-7"
                    variant={pkg.featured ? "default" : "outline"}
                  >
                    <Link to={`/packages/${pkg.slug}`}>
                      View Full Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Packages;