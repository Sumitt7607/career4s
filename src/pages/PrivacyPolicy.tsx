import LegalPageLayout from "@/components/LegalPageLayout";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p>Welcome to career4s. We are a college admission and counseling support company helping students in india and abroad find the right educational path. Your privacy is important to us, And this privacy policy explains how we collect  use, and protect your personal information when you visit our website or use our services.</p>
        <p>By Using Our Website, you Agree To The Practices Described In This Privacy Policy.</p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <p>We Collect Only The Information Necessary To Provide Our Counseling Services. This Includes:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li><strong>Personal Information:</strong> Name, Email Address, Phone Number, And Educational Background Submitted Through Our Contact Forms.</li>
          <li><strong>Inquiry Details:</strong> Information About Your Academic Interests, Preferred Colleges/Universities, And Counseling Requirements.</li>
          <li><strong>Technical Data:</strong> Browser Type, IP Address, Device Information, And Pages Visited On Our Website (Collected Automatically).</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: (
      <ul className="list-disc list-inside space-y-1 ml-2">
        <li>To Provide Personalized College Admission Counseling And Guidance.</li>
        <li>To Respond To Your Inquiries And Communicate About Our Services.</li>
        <li>To Send Relevant Updates About Admission Deadlines, Events, And Opportunities (With Your Consent).</li>
        <li>To Improve Our Website Experience And Service Quality.</li>
        <li>To Comply With Legal Obligations.</li>
      </ul>
    ),
  },
  {
    id: "data-sharing",
    title: "Data Sharing & Third Parties",
    content: (
      <>
        <p>We Do Not Sell Your Personal Information. We May Share Your Data In The Following Circumstances:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li><strong>Partner Institutions:</strong> With Colleges And Universities You Have Expressed Interest In, To Facilitate Your Admission Process (With Your Consent).</li>
          <li><strong>Service Providers:</strong> With Trusted Third-Party Services That Help Us Operate Our Website And Deliver Services (e.g., email providers, analytics tools).</li>
          <li><strong>Legal Requirements:</strong> When Required By Law, Regulation, Or Legal Process.</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    content: (
      <>
        <p>Our website Uses Cookies And Similar Technologies To Enhance Your Browsing Experience. These Include:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li><strong>Essential Cookies:</strong> Required For Basic Website Functionality.</li>
          <li><strong>Analytics Cookies:</strong> Help Us Understand How Visitors Use Our Website So we can Improve It.</li>
          <li><strong>Preference Cookies:</strong> Remember Your Settings And Preferences.</li>
        </ul>
        <p>You Can Manage Cookie Preferences Through Your Browser Settings. Disabling Certain Cookies May Affect Website Functionality.</p>
      </>
    ),
  },
  {
    id: "data-security",
    title: "Data Security",
    content: (
      <p>We implement Appropriate Technical And Organizational Measures To Protect Your Personal Information Against Unauthorized Access, Alteration, Disclosure, Or Destruction. These Include Encrypted Data Transmission (SSL/TLS), Secure Server Infrastructure, And Restricted Access To Personal Data. However, No Method Of Internet Transmission Is 100% Secure, And We Cannot Guarantee Absolute Security.</p>
    ),
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    content: (
      <p>Our Services Are Intended For Students, Some Of Whom May Be Minors. If You Are Under 18 Years Of Age, We Require Parental Or Guardian Consent Before Collecting Your Personal Information. If We Become Aware That We Have Collected Data From A Child Under 13 Without Parental Consent, We will Take Steps To Delete That Information Promptly. Parents Or Guardians May Contact Us To Review, Modify, Or Delete Their Child's Information.</p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: (
      <>
        <p>You Have The Following Rights Regarding Your Personal Data:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li><strong>Access:</strong> Request a Copy Of The Personal Data We Hold About You.</li>
          <li><strong>Correction:</strong> Request Correction Of Inaccurate Or Incomplete Data.</li>
          <li><strong>Deletion:</strong> Request Deletion Of Your Personal Data, Subject To Legal Obligations.</li>
          <li><strong>Objection:</strong> Object To Processing Of Your Data For Specific Purposes.</li>
          <li><strong>Withdrawal Of Consent:</strong> Withdraw Consent For Data Processing At Any Time.</li>
        </ul>
        <p>To Exercise Any Of These Rights, Please Contact Us Using The Details Provided Below.</p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Information",
    content: (
      <>
        <p>If You Have Any Questions, Concerns, Or Requests Regarding This Privacy Policy, Please Contact Us At:</p>
        <div className="bg-accent rounded-lg p-4 mt-2">
          <p><strong>Career4s</strong></p>
          {/* <p>Email: privacy@career4s.com</p> */}
          <p>Website: www.career4s.com</p>
        </div>
      </>
    ),
  },
  {
    id: "updates",
    title: "Updates to This Policy",
    content: (
      <p>We May Update This Privacy Policy From Time To Time To Reflect Changes In Our practices, Legal Requirements, Or Services. Any Changes Will Be Posted On This Page With An Updated "Last Updated" Date. We Encourage You To Review This Page Periodically. Continued Use Of Our Website After Changes Constitutes Acceptance Of The Updated Policy.</p>
    ),
  },
];

const PrivacyPolicy = () => (
  <LegalPageLayout
    title="Privacy Policy"
    lastUpdated="February 21, 2026"
    sections={sections}
  />
);

export default PrivacyPolicy;
