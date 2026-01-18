import { motion } from "framer-motion";

const WhatsApp = () => {
  const phoneNumber = "919910992965";
  const message = encodeURIComponent(
    "Hi Career4S, I’m interested in admission counselling. Please guide me."
  );

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      animate={{ y: [0, -12, 0] }}   // jumping effect
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src="/whtasppicon.jpg"
        alt="WhatsApp"
        className="w-20 h-20 object-contain"
      />
    </motion.a>
  );
};

export default WhatsApp;
