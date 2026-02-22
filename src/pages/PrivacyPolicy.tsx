import { motion } from "framer-motion";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `We may collect and process the following data:`,
    bullets: [
      {
        label: "Personal Information",
        text: "Information you provide by filling out forms on our website, such as your name, phone number, email address, and any other information you submit when you contact us or register for our services.",
      },
      {
        label: "Technical Data",
        text: "Information such as your IP address, browser type, time zone settings, operating system, and platform, which is automatically collected when you visit our website.",
      },
      {
        label: "Usage Data",
        text: "Details about your usage patterns on our website, including the pages you visit, how long you spend on the site, and other interaction data.",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: "We use your data to:",
    bullets: [
      {
        label: "Provide and Improve Services",
        text: "To respond to inquiries, process transactions, and deliver the services you request.",
      },
      {
        label: "Communication",
        text: "To send you notifications, updates, promotional material, or respond to inquiries.",
      },
      {
        label: "Analyze & Optimize",
        text: "To track usage trends, analyze website traffic, and improve our site's performance and user experience.",
      },
      {
        label: "Legal Compliance",
        text: "To comply with legal obligations and respond to any legal process or lawful requests.",
      },
    ],
  },
  {
    title: "3. How We Share Your Information",
    content:
      "We do not sell or trade your personal information. However, we may share your data with trusted third parties under the following conditions:",
    bullets: [
      {
        label: "Service Providers",
        text: "We may share your data with third-party vendors who assist us in website management, marketing efforts, and service delivery.",
      },
      {
        label: "Compliance with Law",
        text: "We may disclose your information if required to do so by law or in response to valid requests by public authorities.",
      },
      {
        label: "Business Transfers",
        text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owners.",
      },
    ],
  },
  {
    title: "4. Data Security",
    content:
      "We implement appropriate technical and organizational security measures to protect your personal data from unauthorized access, alteration, or disclosure. However, no online data transmission or storage system is completely secure. While we strive to protect your data, we cannot guarantee its absolute security.",
  },
  {
    title: "5. Cookies",
    content:
      "Our website uses cookies and similar technologies to improve your browsing experience. Cookies are small files stored on your device that help us recognize you and remember your preferences. You can manage or disable cookies through your browser settings, but please note that some features of our website may not function correctly without them.",
  },
  {
    title: "6. Third-Party Links",
    content:
      "Our website may contain links to external websites operated by third parties. These websites have their own privacy policies, and we do not accept any responsibility or liability for their practices. We encourage you to review their privacy policies before providing any personal information.",
  },
  {
    title: "7. Your Rights",
    content:
      "Depending on your location, you may have the following rights regarding your personal data:",
    bullets: [
      {
        label: "Access",
        text: "The right to request a copy of the personal data we hold about you.",
      },
      {
        label: "Correction",
        text: "The right to ask for corrections to any inaccuracies in your data.",
      },
      {
        label: "Erasure",
        text: "The right to request the deletion of your personal data under certain circumstances.",
      },
      {
        label: "Objection",
        text: "The right to object to the processing of your data for marketing purposes.",
      },
    ],
    footer: "To exercise these rights, please contact us",
  },
  {
    title: "8. Retention of Data",
    content:
      "We will retain your personal information only as long as it is necessary to fulfill the purposes for which it was collected or to comply with legal obligations. Once the data is no longer required, we will securely dispose of it.",
  },
  {
    title: "9. Changes to This Privacy Policy",
    content:
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Last Updated" date will be revised accordingly. We encourage you to review this policy periodically to stay informed about how we protect your information.',
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      {/* <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span
            className="text-2xl font-bold text-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Career4s
          </span>
          <a
            href="mailto:support@career4s.com"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </motion.nav> */}

      {/* Hero */}
      <header
        className="pb-12 pt-20 text-center"
        style={{ background: "var(--gradient-hero)" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg"
        >
          <Shield className="h-8 w-8" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 text-4xl font-bold text-foreground md:text-5xl"
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto max-w-2xl px-6 text-muted-foreground"
        >
          Career4s ("we," "us," or "our") is committed to protecting and
          respecting your privacy. This Privacy Policy outlines how we collect,
          use, disclose, and safeguard your personal data when you visit our
          website and engage with our services.
        </motion.p>
      </header>

      {/* Sections */}
      <main className="mx-auto max-w-4xl space-y-6 px-4 py-12 md:px-6">
        {sections.map((section, i) => (
          <motion.section
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="rounded-xl border-2 border-primary/30 p-6 transition-shadow duration-300 md:p-8"
            style={{
              background: "var(--gradient-card)",
              boxShadow: "var(--shadow-card)",
            }}
            whileHover={{ boxShadow: "var(--shadow-card-hover)" }}
          >
            <h2 className="mb-3 text-xl font-bold text-foreground md:text-2xl">
              {section.title}
            </h2>

            <p className="mb-4 leading-relaxed text-muted-foreground">
              {section.content}
            </p>

            {section.bullets && (
              <ul className="space-y-3 pl-1">
                {section.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">
                        {b.label}:
                      </strong>{" "}
                      {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {section.footer && (
              <p className="mt-4 text-sm text-muted-foreground">
                {section.footer}
              </p>
            )}
          </motion.section>
        ))}

        {/* Contact Section */}
        <motion.section
          custom={sections.length}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="rounded-xl border-2 border-primary/30 p-6 md:p-8"
          style={{
            background: "var(--gradient-card)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h2 className="mb-3 text-xl font-bold text-foreground md:text-2xl">
            10. Contact Us
          </h2>

          <p className="mb-5 leading-relaxed text-muted-foreground">
            If you have any questions about this Privacy Policy or our data
            practices, please contact us:
          </p>

          <div className="space-y-3">
            {/* <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-5 w-5 text-primary" />
              <span>support@career4s.com</span>
            </div> */}

            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="h-5 w-5 text-primary" />
              <span>+91 9650831008</span>
            </div>

            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>119, First Floor, DLF Tower A, Jasola,New Delhi - 110025</span>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Career4s. All rights reserved.
      </footer>
    </div>
  );
};

export default PrivacyPolicy;