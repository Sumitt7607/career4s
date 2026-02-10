import { motion } from "framer-motion";
import { Newspaper, Clock, ArrowRight, TrendingUp, Bell, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const newsItems = [
  {
    id: 1,
    title: "JEE Main 2026 Session 1 Registration Opens from November 2025",
    excerpt: "NTA announces the schedule for JEE Main 2026. Applications will be accepted from November 2025 with exams scheduled for January 2026.",
    category: "JEE Main",
    time: "2 hours ago",
    trending: true,
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=250&fit=crop",
  },
  
  {
    id: 2,
    title: "NEET UG 2026: Expected Changes in Exam Pattern",
    excerpt: "The National Testing Agency is considering major changes to the NEET UG exam pattern for 2026. New format may include more application-based questions.",
    category: "NEET",
    time: "5 hours ago",
    trending: true,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "IIT Bombay Tops NIRF Rankings 2025 Again",
    excerpt: "IIT Bombay retains its top position in NIRF Engineering Rankings 2025, followed by IIT Delhi and IIT Madras.",
    category: "Rankings",
    time: "1 day ago",
    trending: false,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: "CUET 2026: NTA Introduces New Features in Application Portal",
    excerpt: "NTA upgrades CUET portal with better UI, faster processing, and real-time application tracking features.",
    category: "CUET",
    time: "1 day ago",
    trending: false,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
  },
  {
    id: 5,
    title: "JoSAA 2025 Counseling Concludes: 98% Seats Filled",
    excerpt: "JoSAA 2025 successfully concludes with over 98% seats filled across IITs, NITs, and IIITs.",
    category: "Counseling",
    time: "2 days ago",
    trending: false,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop",
  },
  {
    id: 6,
    title: "CAT 2026 Registration Expected from August",
    excerpt: "IIM Bangalore to conduct CAT 2026. Registration window expected to open in August 2026.",
    category: "CAT",
    time: "3 days ago",
    trending: false,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
  },
  {
    id: 7,
    title: "GATE 2026: New Syllabus Introduced for Computer Science",
    excerpt: "IIT Kharagpur announces updated GATE 2026 syllabus for Computer Science, including new topics on AI and Machine Learning.",
    category: "GATE",
    time: "4 days ago",
    trending: false,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",


    
  },
];

const ticker = [
  "JEE Main 2026 Registration Opens Nov 2025",
  "NEET UG 2026 on May 4, 2026",
  "CUET 2026 Applications Expected Feb 2026",
  "GATE 2026 Results on Mar 15, 2026",
  "JoSAA 2026 Counseling from Jun 2026",
];

export function NewsSection() {
  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* News Ticker */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 bg-primary/10 rounded-xl overflow-hidden"
        >
          <div className="flex items-center">
            <div className="bg-primary text-primary-foreground px-4 py-3 font-semibold flex items-center gap-2 shrink-0">
              <TrendingUp className="w-4 h-4" /> LIVE
            </div>
            <div className="overflow-hidden flex-1">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap"
              >
                {[...ticker, ...ticker].map((item, idx) => (
                  <span key={idx} className="px-8 py-3 text-sm font-medium">
                    {item} •
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            <Newspaper className="w-3 h-3 mr-1" /> Latest Updates
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            News & <span className="text-gradient-saffron">Notifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, notifications, and announcements about 
            entrance exams, counseling, and admissions.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Featured News */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <div className="bg-card rounded-2xl border border-border overflow-hidden h-full group">
              <div className="relative overflow-hidden">
                <img 
                  src={newsItems[0].image} 
                  alt={newsItems[0].title}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="mb-2 bg-primary">{newsItems[0].category}</Badge>
                  {newsItems[0].trending && (
                    <Badge variant="secondary" className="ml-2 bg-red-500 text-white">
                      <TrendingUp className="w-3 h-3 mr-1" /> Trending
                    </Badge>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {newsItems[0].title}
                </h3>
                <p className="text-muted-foreground mb-4">{newsItems[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {newsItems[0].time}
                  </div>
                  <Button variant="ghost" className="text-primary">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side News */}
          {newsItems.slice(1, 3).map((news, idx) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card rounded-xl border border-border overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {news.trending && (
                  <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                    <TrendingUp className="w-3 h-3 mr-1" /> Trending
                  </Badge>
                )}
              </div>
              <div className="p-4">
                <Badge variant="secondary" className="mb-2 text-xs">{news.category}</Badge>
                <h4 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {news.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More News */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {newsItems.slice(3).map((news, idx) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card rounded-xl border border-border p-4 group hover:shadow-lg transition-all"
            >
              <div className="flex gap-4">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-24 h-24 object-cover rounded-lg shrink-0"
                />
                <div>
                  <Badge variant="secondary" className="mb-2 text-xs">{news.category}</Badge>
                  <h4 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {news.time}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-saffron-dark rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <Bell className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Never Miss an Update
            </h3>
            <p className="text-white/80 mb-6">
              Subscribe to our newsletter and get instant notifications about exam dates, 
              counseling updates, and admission news directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-primary hover:bg-white/90 shrink-0">
                Subscribe <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
