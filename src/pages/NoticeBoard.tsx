import { useState } from "react";
import { ChevronDown, ChevronUp, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import NoticeCard from "./NoticeCard";
import { cn } from "@/lib/utils";

const notices = [
  {
    id: 1,
    title: "Extension of last date for [CUET (UG)] - 2026 Examination - reg",
    date: "January 30, 2026",
    category: "Circular",
    priority: "new" as const,
    description: "last date for submission of Online Application for Common University Entrance Test [CUET (UG)]",
    pdfUrl: "https://nta.ac.in/Download/Notice/Notice_20260130182928.pdf",
  },
    {
    id: 2,
    title: "Release of Admit Cards of JEE(Main)-2026 Session-1",
    date: "January 17, 2026",
    category: "Tender",
    priority: "important" as const,
    description: "JEE (Main)-2026 Session-1(January 2026) scheduled to appear on 21, 22, 23 and 24 January 2026- Reg. ",
    pdfUrl: "https://nta.ac.in/Download/Notice/Notice_20260117164926.pdf",
  },
    {
    id: 5,
    title: " Advisory and Instructions for the Candidates for JEE 2026",
    date: "January 18, 2026",
    category: "Urgent",
    priority: "urgent" as const,
    description: "Advisory and Instructions for the Candidates of Joint Entrance Examination (Main) - 2026 Session 1 (January 2026) - Reg.  ",
    pdfUrl: "https://nta.ac.in/Download/Notice/Notice_20260120102259.pdf    ",
  },
  
  {
    id: 3,
    title: "	 Advisory for completion of application process[CUET (PG)] ",
    date: "January 16, 2026",
    category: "Meeting",
    priority: "normal" as const,
    description: "The registration portal for Cuet 2026 examination shall be closing on 20 january 2026(up to 11:50 PM)",
    pdfUrl: "https://nta.ac.in/Download/Notice/Notice_20260116183516.pdf",
  },
  {
    id: 4,
    title: " Conduct of Practical Examination ",
    date: "January 01, 2026",
    category: "Announcement",
    priority: "important" as const,
    description: "Internal Assessment dates for Classes X & XII - 2025-26",
    pdfUrl: "https://www.cbse.gov.in/cbsenew/documents/Reminder_Practical_01012026.pdf",
  },


//   {
//     id: 6,
//     title: "Training Program on Digital Literacy",
//     date: "January 22, 2026",
//     category: "Announcement",
//     priority: "new" as const,
//     description: "A two-day training program on digital literacy will be conducted for all employees. Registration open now.",
//     pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
//   },
//   {
//     id: 7,
//     title: "Revised Leave Policy 2026",
//     date: "January 20, 2026",
//     category: "Circular",
//     priority: "important" as const,
//     description: "The revised leave policy for the year 2026 has been approved. Please review the changes in leave entitlements.",
//     pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
//   },
//   {
//     id: 8,
//     title: "Infrastructure Development Tender",
//     date: "January 18, 2026",
//     category: "Tender",
//     priority: "normal" as const,
//     description: "Invitation for bids for the construction and renovation of the east wing building. Pre-bid meeting on Feb 10, 2026.",
//     pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
//   },
];

const NoticeBoard = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleNotices = showAll ? notices : notices.slice(0, 5);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-primary text-primary-foreground animate-bounce-soft">
              <Bell className="h-6 w-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Notice Board
            </h2>
          </div>
          
          {/* Animated underline */}
          <div className="relative h-1 w-48 mx-auto overflow-hidden rounded-full bg-primary/20">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer"
              style={{ backgroundSize: "200% 100%" }}
            />
          </div>
          
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest official announcements, circulars, and important notices
          </p>
        </div>

        {/* Notice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visibleNotices.map((notice, index) => (
            <NoticeCard 
              key={notice.id} 
              notice={notice} 
              index={showAll && index >= 5 ? index - 5 : index} 
            />
          ))}
        </div>

        {/* View More/Less Button */}
        {notices.length > 5 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              className={cn(
                "group relative overflow-hidden px-8 py-6 text-lg font-semibold",
                "bg-gradient-to-r from-primary to-saffron-light",
                "hover:from-saffron-dark hover:to-primary",
                "transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-primary/30",
                "transform hover:-translate-y-1"
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                {showAll ? (
                  <>
                    View Less
                    <ChevronUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
                  </>
                ) : (
                  <>
                    View More ({notices.length - 5} more)
                    <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                  </>
                )}
              </span>
              
              {/* Button shimmer effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NoticeBoard;
