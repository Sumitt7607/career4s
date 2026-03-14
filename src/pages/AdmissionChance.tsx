import React, { useState } from "react";

const AdmissionChance: React.FC = () => {
  const [marks, setMarks] = useState("");
  const [course, setCourse] = useState("");
  const [location, setLocation] = useState("");
  const [showResults, setShowResults] = useState(false);

  const whatsappLink = "https://wa.me/919217651008?text=Hi";

  const handleCheck = () => {
    if (!marks || !course || !location) {
      alert("Please fill all fields");
      return;
    }
    setShowResults(true);
  };

  const getColleges = () => {
    if (course === "B.Tech") {
      return [
        {
          name: "Top Engineering Institute",
          img: "https://images.unsplash.com/photo-1562774053-701939374585",
        },
        {
          name: "National Tech University",
          img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232",
        },
        {
          name: "Premier Engineering College",
          img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a",
        },
      ];
    }

    if (course === "MBBS") {
      return [
        {
          name: "Top Medical College",
          img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
        },
        {
          name: "National Medical University",
          img: "https://images.unsplash.com/photo-1581595219315-a187dd40c322",
        },
        {
          name: "Medical Sciences Institute",
          img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
        },
      ];
    }

    return [
      {
        name: "Global Business School",
        img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      },
      {
        name: "Premier Management Institute",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      },
      {
        name: "International Business University",
        img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      },
    ];
  };

  const colleges = getColleges();

  return (
    <section className="admission-section">
      <div className="container">

        <h2 className="title">Check Your Admission Chances</h2>
        <p className="subtitle">
          Enter your academic details to see colleges matching your profile
        </p>

        <div className="form">

          <input
            type="number"
            placeholder="12th marks for UG / Graduation marks for PG"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />

          <select value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">Select Course</option>
            <option>B.Tech</option>
            <option>MBBS</option>
            <option>BBA</option>
            <option>BCA</option>
            <option>MBA</option>
          </select>

          <input
            type="text"
            placeholder="Preferred Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <button onClick={handleCheck}>Check My Chances</button>

        </div>

        {showResults && (
          <>
            <h3 className="results-title">
              We found colleges matching your profile
            </h3>

            <div className="results">

              {colleges.map((college, i) => (
                <div className="college-card" key={i}>

                  <img src={college.img} alt={college.name} />

                  <div className="overlay">

                    <h4>{college.name}</h4>
                    <p>Unlock full admission details</p>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      className="unlock-btn"
                    >
                      Talk to Counsellor
                    </a>

                  </div>

                </div>
              ))}

            </div>
          </>
        )}

      </div>

<style>{`

.admission-section{
padding:110px 20px;
background:linear-gradient(135deg,#fff7ed,#ffedd5,#fed7aa);
font-family:Inter,sans-serif;
text-align:center;
}

.container{
max-width:1100px;
margin:auto;
animation:fadeUp 1s ease;
}

.title{
font-size:44px;
font-weight:700;
color:#9a3412;
margin-bottom:10px;
}

.subtitle{
color:#555;
margin-bottom:40px;
}

.form{
display:flex;
flex-wrap:wrap;
gap:15px;
justify-content:center;
margin-bottom:50px;
}

.form input,
.form select{
padding:14px;
border-radius:10px;
border:1px solid #ddd;
width:220px;
font-size:14px;
transition:0.3s;
}

.form input:focus,
.form select:focus{
outline:none;
border-color:#ea580c;
box-shadow:0 0 10px rgba(234,88,12,0.2);
}

.form button{
padding:14px 28px;
border:none;
border-radius:10px;
background:linear-gradient(135deg,#ea580c,#fb923c);
color:white;
font-weight:600;
cursor:pointer;
transition:0.3s;
}

.form button:hover{
transform:translateY(-2px);
box-shadow:0 10px 25px rgba(234,88,12,0.4);
}

.results-title{
font-size:22px;
margin-bottom:25px;
color:#c2410c;
}

.results{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:25px;
}

.college-card{
position:relative;
border-radius:16px;
overflow:hidden;
box-shadow:0 15px 40px rgba(0,0,0,0.12);
transition:0.4s;
}

.college-card img{
width:100%;
height:200px;
object-fit:cover;
filter:blur(4px);
transform:scale(1.1);
}

.overlay{
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.45);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:white;
padding:20px;
}

.unlock-btn{
margin-top:12px;
padding:10px 22px;
background:#25D366;
border-radius:8px;
text-decoration:none;
color:white;
font-weight:600;
transition:0.3s;
}

.unlock-btn:hover{
background:#1ebe5d;
transform:scale(1.05);
}

@keyframes fadeUp{
from{
opacity:0;
transform:translateY(40px);
}
to{
opacity:1;
transform:translateY(0);
}
}

`}</style>

    </section>
  );
};

export default AdmissionChance;