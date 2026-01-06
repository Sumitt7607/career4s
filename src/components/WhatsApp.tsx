import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsApp = () => {
  const phoneNumber = "919999999999"; // 🔁 replace with your WhatsApp number
  const message = encodeURIComponent(
    "Hi Career4S, I’m interested in admission counselling. Please guide me."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full 
                 bg-gradient-to-br from-green-500 to-green-600 shadow-2xl"
    >
      {/* Ping animation */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />

      {/* Icon */}
      <MessageCircle className="relative w-8 h-8 text-white" />
    </motion.a>
  );
};

export default WhatsApp;
