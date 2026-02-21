import LegalPageLayout from "@/components/LegalPageLayout";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <p>by accessing and using the Career4s website and services, You acknowledge that you have read, Understood, and Agree to be bound by these terms and conditions. if you do not agree with any part of these terms, you must not use our website or services. These terms apply to all visitors, users, and others who access or use our services.</p>
    ),
  },
  {
    id: "services",
    title: "Services Description",
    content: (
      <>
        <p>Career4s Provides College Admission Counseling And Guidance Services, Including But Not Limited To:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Personalized College And University Admission Counseling.</li>
          <li>Guidance On Course Selection, Career Planning, And Academic Pathways.</li>
          <li>Assistance With Application Processes For Institutions In India And Abroad.</li>
          <li>Information About Scholarships, Entrance Exams, And Admission Deadlines.</li>
          <li>General Educational Support And Mentoring.</li>
        </ul>
      </>
    ),
  },
  {
    id: "user-responsibilities",
    title: "User Responsibilities",
    content: (
      <>
        <p>As a User Of Career4s Services, You Agree To:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Provide Accurate, Current, And Complete Information When Using Our Contact Forms Or Services.</li>
          <li>Use Our Website And Services Only For Lawful Purposes Related To Educational Guidance.</li>
          <li>Not Misrepresent Your Identity, Qualifications, Or Academic Records.</li>
          <li>Not Use Our Website To Transmit Harmful, Offensive, Or In appropriate Content.</li>
          <li>Not Attempt To Gain Unauthorized Access To Our Systems Or Data.</li>
          <li>Respect The Intellectual Property Rights Of Career4s And Third Parties.</li>
        </ul>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: (
      <>
        <p><strong>Important:</strong> Career4s Provides Advisory And Counseling Services Only. Please Note The Following:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>We Do Not Guarantee Admission To Any College, University, Or Educational Institution.</li>
          <li>Our Services Are Advisory In Nature And Final Admission Decisions Rest Solely With The Respective Institutions.</li>
          <li>Information Provided Is Based On Our Best Knowledge And May Be Subject To Changes By Educational Institutions.</li>
          <li>We Are Not Responsible For Decisions Made By Users Based On Our Guidance.</li>
          <li>Results May Vary Depending On Individual Circumstances, Qualifications, And Institutional Policies.</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <p>All Content On The Career4s Website — Including But Not Limited To Text, Graphics, Logos, Images, Videos, And Software — Is The Property Of Career4s Or Its Content Suppliers And Is Protected By Applicable Intellectual Property Laws. You May Not Reproduce, Distribute, Modify, Create Derivative Works From, Publicly Display, Or Exploit Any Content From Our Website Without Prior Written Permission From Career4s.</p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <>
        <p>To The Maximum Extent Permitted By Applicable Law:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Career4s Shall Not Be Liable For Any Indirect, Incidental, Special, Consequential, Or Punitive Damages Arising From Your Use Of Our Services.</li>
          <li>Our Total Liability For Any Claim Arising From These Terms Or Our Services Shall Not Exceed The Amount Paid By You For The Specific Service In Question.</li>
          <li>We Are Not Liable For Any Loss Arising From Reliance On Information Provided Through Our Counseling Services.</li>
        </ul>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law & Jurisdiction",
    content: (
      <p>These Terms And Conditions Shall Be Governed By And Construed In Accordance With The Laws Of India. Any Disputes Arising From Or In Connection With These Terms Shall Be Subject To The Exclusive Jurisdiction Of The Courts In India. If Any Provision Of These Terms Is Found To Be Invalid Or Unenforceable, The Remaining Provisions Shall Continue In Full Force And Effect.</p>
    ),
  },
  {
    id: "refund-policy",
    title: "Refund & Cancellation Policy",
    content: (
      <>
        <p>If Applicable To Paid Counseling Services:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Refund Requests Must Be Made Within 7 Days Of Service Purchase.</li>
          <li>Refunds Are Subject To Review And May Be Prorated Based On Services Already Rendered.</li>
          <li>Cancellation Of Ongoing Counseling Sessions Must Be Communicated At Least 24 Hours In Advance.</li>
          <li>No Refunds Will Be Issued For Services Already Fully Delivered.</li>
          <li>All Refund Requests Should Be Directed To Our Support Team Via Email.</li>
        </ul>
      </>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    content: (
      <p>Career4s Reserves The Right To Terminate Or Suspend Access To Our Services At Any Time, Without Prior Notice Or Liability, For Any Reason, Including But Not Limited To a Breach Of These Terms And Conditions. Upon Termination, your Right To Use Our Services Will Immediately Cease. All Provisions Of These Terms That By Their Nature Should Survive Termination Shall Survive, Including Ownership Provisions, Warranty Disclaimers, And Limitations Of Liability.</p>
    ),
  },
  {
    id: "contact",
    title: "Contact Information",
    content: (
      <>
        <p>If You Have Any Questions About These Terms And Conditions, Please Contact Us:</p>
        <div className="bg-accent rounded-lg p-4 mt-2">
          <p><strong>Career4s</strong></p>
          {/* <p>Email: support@career4s.com</p> */}
          <p>Website: www.career4s.com</p>
        </div>
      </>
    ),
  },
];

const TermsAndConditions = () => (
  <LegalPageLayout
    title="Terms & Conditions"
    lastUpdated="February 21, 2026"
    sections={sections}
  />
);

export default TermsAndConditions;
