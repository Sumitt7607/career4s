import React from "react";

const exams = [
  {
    name: "VITEEE",
    university: "Vellore Institute of Technology",
    description: "Engineering entrance exam for admission to VIT campuses.",
    link: "https://viteee.vit.ac.in/",
  },
  {
    name: "AEEE",
    university: "Amrita Vishwa Vidyapeetham",
    description: "Entrance exam for engineering programs at Amrita University.",
    link: "https://www.amrita.edu/admissions/btech/",
  },
  {
    name: "BITSAT",
    university: "BITS Pilani",
    description: "Computer-based entrance test for BITS Pilani campuses.",
    link: "https://www.bitsadmission.com/",
  },
  {
    name: "SRMJEEE",
    university: "SRM Institute of Science & Technology",
    description: "Entrance exam for B.Tech programs at SRM University.",
    link: "https://applications.srmist.edu.in/",
  },
  {
    name: "LPUNEST",
    university: "Lovely Professional University",
    description: "Entrance & scholarship test for admission at LPU.",
    link: "https://www.lpu.in/admission/",
  },
];

const EntranceExams = () => {
  return (
    <section style={{ padding: "60px 20px", background: "#fff8f0" }}>
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        
        <h2
          style={{
            textAlign: "center",
            color: "#FF9933",
            fontSize: "32px",
            marginBottom: "40px",
          }}
        >
          Popular University Entrance Exams
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {exams.map((exam, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "10px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#FF9933", marginBottom: "10px" }}>
                {exam.name}
              </h3>

              <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                {exam.university}
              </p>

              <p style={{ fontSize: "14px", color: "#555", marginBottom: "20px" }}>
                {exam.description}
              </p>

              <a
                href={exam.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#FF9933",
                  color: "#fff",
                  padding: "10px 18px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                Visit Official Website
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntranceExams; 