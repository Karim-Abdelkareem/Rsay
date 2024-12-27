import Image from "next/image";
import { motion } from "framer-motion";

const courses = [
  {
    id: "software-development-training",
    title: "Software Development and Database Management Training",
    description:
      "This training provides the necessary skills to develop efficient software applications and manage databases securely. It covers modern programming concepts and software development tools, including popular programming languages. Participants will also learn how to use database management tools and design secure databases. The program emphasizes strategies to ensure software quality and data security, offering practical examples on performance optimization and reliability improvement.",
    image: "/Services/TrainingCourses/softwareengineering.jpeg",
    popularCourses: [
      "Microsoft Certified: Azure Developer Associate",
      "AWS Certified Developer – Associate",
      "Google Professional Cloud Developer",
      "Oracle Certified Professional, Java SE",
      "Certified Kubernetes Application Developer (CKAD)",
    ],
  },
  {
    id: "ai-training",
    title: "Artificial Intelligence (AI) Training",
    description:
      "This training provides the necessary skills to develop efficient software applications and manage databases securely. It covers modern programming concepts and software development tools, including popular programming languages. Participants will also learn how to use database management tools and design secure databases. The program emphasizes strategies to ensure software quality and data security, offering practical examples on performance optimization and reliability improvement.",
    image: "/Services/TrainingCourses/ai-training.webp",
    popularCourses: [
      "NVIDIA Deep Learning Institute Certifications",
      "Certified Artificial Intelligence Practitioner (CAIP) CertNexus",
      "TensorFlow Developer Certificate",
      "Oracle Machine Learning using Autonomous Database Certified Specialist",
      "Microsoft Certified: Azure AI Engineer Associate",
    ],
  },
  {
    id: "cloud-computing-training",
    title: "Cloud Computing Training",
    description:
      "This course covers the fundamentals of AI and machine learning with practical applications in business. It explains the core concepts underpinning AI, how to analyze data, and apply predictive models. The training also explores how to integrate AI into business strategies to improve efficiency and foster innovation, with real-world examples of successful use cases across various sectors.",
    image: "/Services/TrainingCourses/cloud-computing.jpg",
    popularCourses: [
      "Google Cloud Associate Cloud Engineer",
      " AWS Certified Developer",
      "CompTIA Cloud+",
      "Cisco Certified Network Professional (CCNP) Cloud",
      " VMware Certified Professional - Cloud Management and Automation (VCP-CMA)",
    ],
  },
  {
    id: "quality-management-and-project-management-training",
    title: "Quality Management and Project Management Training",
    description:
      "This program aims to enhance the skills required to ensure service and product quality within projects. It covers essential project management tools, including planning, execution, and monitoring. Participants will learn about total quality management (TQM) concepts and how to apply them across various fields, along with techniques for performance improvement and problem-solving. The course strengthens participants' ability to meet quality objectives efficiently and effectively.",
    image: "/Services/TrainingCourses/quality-management.webp",
    popularCourses: [
      "Certified Quality Engineer (CQE) – ASQ",
      "Certified Quality Auditor (CQA) – ASQ",
      "Certified Manager of Quality/Organizational Excellence (CMQ/OE) – ASQ",
      "ISO 9001:2015 Lead Auditor – IRCA",
      "Project Management Professional (PMP) – PMI",
    ],
  },
  {
    id: "systems-and-network-management-training",
    title: "Systems and Network Management Training",
    description:
      "This training focuses on efficiently designing and managing systems and networks. It covers setting up wired and wireless networks, along with configuring the necessary hardware. Participants will learn how to troubleshoot and quickly resolve issues to ensure smooth and secure system performance. The course also reviews essential concepts of network management, including network optimization, performance enhancement, and regular updates. The goal is to equip participants with the skills needed to manage systems independently and effectively.",
    image: "/Services/TrainingCourses/Systems-Network-Management-Training.jpg",
    popularCourses: [
      "Cisco Certified Network Associate (CCNA)",
      "Red Hat Certified Engineer (RHCE)",
      "Cisco Certified Network Professional (CCNP)",
      "Google Cloud Professional Network Engineer",
      "Microsoft Certified: Azure Administrator Associate",
    ],
  },
  {
    id: "cybersecurity-and-information-security-training",
    title: "Cybersecurity and Information Security Training",
    description:
      "This training offers comprehensive knowledge on how to protect information and systems from cyber threats. It covers identifying various types of threats, such as viruses, malware, and cyberattacks. Participants will also learn effective strategies to mitigate these threats, including the use of encryption and firewalls. The course focuses on risk management by applying risk assessment tools and developing incident response plans. Additionally, it reviews relevant laws and legal standards to ensure compliance with data protection regulations.",
    image: "/Services/TrainingCourses/cybersecurity.jpg",
    popularCourses: [
      "(CISSP) - Certified Information Systems Security Professional",
      "(CEH) - Certified Ethical Hacker",
      "(CISM) - Certified Information Security Manager",
      "(GSEC) - GIAC Security Essentials Certification",
      " ISO/IEC 27001 Lead Auditor & Lead Implementer",
    ],
  },
  {
    id: "risk-management-training",
    title: "Risk Management Training",
    description:
      "This program aims to empower participants to identify and manage risks effectively in the workplace. It begins by explaining how to conduct thorough risk analysis to identify potential risks and assess their impact. Participants will develop strategies to mitigate risks, including emergency planning. The course introduces modern tools and techniques, such as scenario analysis and risk matrices, while promoting a culture of risk management through continuous process improvement within the organization.",
    image: "/Services/TrainingCourses/risk-management.jpg",
    popularCourses: [
      "Certified Risk Management Professional (CRMP)",
      "ISO 31000 Risk Management Certification",
      "Certificate in Operational Risk Management (ORM)",
      "Chartered Enterprise Risk Analyst (CERA)",
      "Project Management Institute - Risk Management",
    ],
  },
  {
    id: "digital-transformation-technologies-training",
    title: "Digital Transformation Technologies Training",
    description:
      "This training provides insights into adopting digital transformation in business. It focuses on strategies for using technology to optimize operations and deliver value to customers. The program highlights the importance of digital transformation and how to identify related opportunities and challenges. It also includes practical examples of successful transformations and guidance on managing cultural change within organizations to ensure the success of digital strategies.",
    image: "/Services/TrainingCourses/Digital-transformation.jpg",
    popularCourses: [
      "Digital Transformation Professional Certificate (Institute for Digital Transformation)",
      "Digital Transformation Certificate (Frost & Sullivan)",
      "Certified Digital Transformation Leader (Digital Transformation Institute)",
      "Digital Transformation Specialist Certification (International Institute of Business Analysis - IIBA)",
      "Digital Transformation Certification (Scrum Alliance)",
    ],
  },
];

const TrainingCourses = () => {
  return (
    <div className="my-20 mx-10">
      {courses.map((course, index) => (
        <div
          key={course.id}
          id={course.id}
          className="flex gap-20 mb-10 border-b-2 py-10"
        >
          {index % 2 === 0 ? (
            <>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-[50%]"
              >
                <Image
                  src={course.image}
                  width={500}
                  height={400}
                  alt="..."
                  className="rounded-lg h-[400px] w-500"
                />
              </motion.div>
              <Content course={course} />
            </>
          ) : (
            <>
              <Content course={course} />
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-[50%]"
              >
                <Image
                  src={course.image}
                  width={500}
                  height={400}
                  alt="..."
                  className="rounded-lg h-[400px] w-500"
                />
              </motion.div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

const Content = ({ course }) => (
  <motion.div
    className="mt-16 w-[50%]"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2 }}
  >
    <h2 className="uppercase text-black font-brush text-2xl max-w-[80%]">
      {course.title}
    </h2>
    <p className="mt-6 max-w-[90%] text-gray-600">{course.description}</p>
    <div className="mt-10">
      <h3 className="uppercase text-black font-semibold text-xl">
        Most Popular Courses
      </h3>
      <ul className="list-disc ml-10 mt-4 max-w-[60%]">
        {course.popularCourses.map((item, i) => (
          <li key={i}>
            <span className="hover:translate-x-2 cursor-pointer hover:text-brand duration-300 inline-flex">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default TrainingCourses;
