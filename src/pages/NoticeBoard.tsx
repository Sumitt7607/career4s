import { useState } from "react";
import { Bell, ChevronDown } from "lucide-react";
import NoticeCard from "./NoticeCard";

/* ================= TYPES ================= */
export type Notice = {
  id: number;
  title: string;
  date: string;
  category: string;
  priority: "new" | "urgent" | "important" | "normal";
  description: string;
  pdfUrl: string;
};

/* ================= DATA ================= */
const notices: Notice[] = [
    {
    id: 1,
    title: "Correction Notice for CUET (UG) 2026",
    date: "February 09, 2026",
    category: "Circular",
    priority: "new",
    description: "Correction in the particulars of the  offline Application Form of common University Entrance Test[CUET(UG)]-2026-Reg.",
    pdfUrl: "https://nta.ac.in/Download/Notice/Notice_20260209153540.pdf",
  },
  {
    id: 2,
    title: "Extension of last date for CUET (UG) 2026",
    date: "January 30, 2026",
    category: "Circular",
    priority: "new",
    description: "Last date extended for CUET (UG) 2026.",
    pdfUrl: "https://nta.ac.in/Download/Notice/Notice_20260130182928.pdf",
  },
  {
    id: 3,
    title: "JEE 2026 Advisory",
    date: "January 18, 2026",
    category: "Urgent",
    priority: "urgent",
    description: "Important instructions for JEE 2026.",
    pdfUrl: "https://nta.ac.in/Download/Notice/Notice_20260120102259.pdf",
  },
  {
    id: 4,
    title: "JEE Admit Card Released",
    date: "January 17, 2026",
    category: "Notice",
    priority: "important",
    description: "Admit cards available for download.",
    pdfUrl: "https://nta.ac.in/Download/Notice/Notice_20260117164926.pdf",
  },
  {
    id: 5,
    title: "CUET PG Application Advisory",
    date: "January 16, 2026",
    category: "Notice",
    priority: "normal",
    description: "Complete CUET PG application before deadline.",
    pdfUrl: "https://nta.ac.in/Download/Notice/Notice_20260116183516.pdf",
  },
  {
    id: 6,
    title: "Practical Exam Notice",
    date: "January 01, 2026",
    category: "Announcement",
    priority: "important",
    description: "Class X & XII practical exams schedule.",
    pdfUrl: "https://www.cbse.gov.in/cbsenew/documents/Reminder_Practical_01012026.pdf",
  },


];

/* ================= COMPONENT ================= */
const NoticeBoard = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-primary text-primary-foreground">
              <Bell className="h-6 w-6" />
            </div>
            <h2 className="text-4xl font-bold">Notice Board</h2>
          </div>
          <p className="text-muted-foreground">
            Latest official announcements
          </p>
        </div>

        {/* NOTICE CONTAINER */}
        <div
          className={`
            border rounded-xl bg-background p-4 transition-all duration-300
            ${expanded ? "max-h-[720px] overflow-y-auto" : "overflow-hidden"}
          `}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(expanded ? notices : notices.slice(0, 8)).map(
              (notice, index) => (
                <NoticeCard
                  key={notice.id}
                  notice={notice}
                  index={index}
                />
              )
            )}
          </div>
        </div>

        {/* VIEW MORE BUTTON */}
        {!expanded && notices.length > 8 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setExpanded(true)}
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-full
                bg-primary text-primary-foreground
                hover:opacity-90 transition
              "
            >
              View More
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default NoticeBoard;
