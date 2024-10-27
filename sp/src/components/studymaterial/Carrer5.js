import React from 'react'
import './Carrer2.css'; 
export default function Carrer5() {
  return (
    <div>
      <div class="box-container">
        <div class="hover">
            <h1 class="hover1">SDE 1 Interview Preparation</h1>
            <h1 class="hover2">Roadmap for Product-Based</h1>
            <h1 class="hover3">  Companies</h1>
            <img id="img" src="image/carrer5b.png" alt="software-engg"/>
        </div>

    </div>
    <br/><br/><br/>

    <div class="boxpara">
        
        <p>
            "SDE 1 Interview Preparation Roadmap for Product-Based Companies" aims to assist students, freshers, and professionals in preparing for entry-level software engineering positions at top tech product-based companies and startups.
        </p>
        
        <p>
            This guide provides a roadmap for generic SDE, full-stack, and backend developer roles. For frontend roles, a stronger foundation in frontend-related concepts and relevant project building may be necessary.
        </p>
        
        <h2>Abbreviations</h2>
        <ul>
            <li>CS: Computer Science</li>
            <li>DSA: Data Structures and Algorithms</li>
            <li>DBMS: Database Management System</li>
            <li>OS: Operating System</li>
            <li>OOP: Object-Oriented Programming</li>
            <li>SD: System Design</li>
            <li>LR: Low-Level Design</li>
            <li>HR: Human Resource</li>
            <li>PS/DS round: Problem Solving, Data Structures & Algorithms Round</li>
        </ul>
        
        <h3>General Advice</h3>
        <ul>
            <li>Do not fall into the tutorial hell</li>
            <ol>
                <li>Supplement good tutorials with practical implementation.</li>
                <li>The number of tutorials you go through is not directly correlated to your learning.</li>
            </ol>
            <li>Avoid skimming through solutions to past interview questions</li>
            <ol>
                <li>Focus on utilizing your problem-solving skills to solve and code problems related to DSA.</li>
                <li>Relying solely on past interview problems without a strong foundation and good problem-solving skills is a common reason for interview failures.</li>
            </ol>
            <li>Don’t look at solutions before putting much effort</li>
            <ol>
                <li>Avoid reviewing solutions before investing significant time in solving the problem yourself.</li>
                <li>If encountering a new topic, study it first before revisiting the problem.</li>
            </ol>
            <li>Write readable code</li>
            <ol>
                <li>Use meaningful variable names and aim for modular code whenever possible.</li>
                <li>Clear and readable code is advantageous during both PS/DS interviews and machine coding rounds.</li>
                <li>Refer to resources on "How to prepare for Machine Coding Round?" for guidance on writing readable code.</li>
            </ol>
            <li>Know your projects well</li>
            <ol>
                <li>Be prepared to explain every aspect of your projects (self-projects/jobs/internships/college projects).</li>
                <li>Associate stories from each project with various types of behavioral questions.</li>
                <p>Situational questions from "Cracking the Coding Interview":</p>
                <ol>
                    <li>Most Challenging Thing</li>
                    <li>Biggest Learnings</li>
                    <li>Most Interesting Thing</li>
                    <li>Hardest Bug</li>
                    <li>Enjoyed Most</li>
                    <li>Conflicts with Teammates</li>
                </ol>
            </ol>
            <li>Create a resume</li>
            <ol>
                <li>Adhere to resume best practices.</li>
                <li>Utilize a professional resume format.</li>
                <li>Regularly update your resume based on performance in competitive programming, addition of new projects/internships, open-source contributions, etc.</li>
            </ol>
        </ul>
        
        <h2>Build Foundation (~First 6 months)</h2>
        <ul>
            <li>Learn to code in any language with a strong emphasis on fundamentals</li>
            <ol>
                <li>Strive to become proficient enough in coding to translate high-level solutions into code without much difficulty.</li>
                <li>Learn how to calculate the time and space complexity of solutions, as this is crucial for optimization.</li>
                <li>Consider starting with C and then transitioning to a high-level language of choice (C++, Java, Python, JavaScript, etc.).</li>
            </ol>
            <li>Develop a strong grasp of Data Structures and Algorithms (DSA)</li>
            <ol>
                <li>Master common data structures such as Array, Linked List, Stack, Queue, HashMap, Tree, Graph, and Heap.</li>
                <li>Be proficient in coding major algorithms including String Manipulation, Two Pointers, Searching, Sorting, Backtracking, Bit Manipulation, and Dynamic Programming.</li>
                <li>Confidently code major data structures and algorithms and be able to determine their time and space complexity on the spot.</li>
            </ol>
            <li>Learn Object-Oriented Programming (OOP)</li>
            <ol>
                <li>Practice coding in a language of choice using the OOP paradigm.</li>
                <li>Gain familiarity with common OOP features such as Abstraction, Encapsulation, Inheritance, and Polymorphism.</li>
            </ol>
        </ul>
        
        <ul>
            <li>Establish strong foundations in other CS subjects (DBMS, OS, Networking, etc.)</li>
            <ol>
                <li>Focus on understanding the concepts rather than rote memorization.</li>
                <li>Create comprehensive notes covering all important concepts in each subject, which will be invaluable during interviews.</li>
            </ol>
        </ul>
        <h2>Practice for Interviews (~Last 6 months)</h2>
        <ul>
            <li>Engage in Problem-Solving, Data Structures & Algorithms problems</li>
            <ol>
                <li>Dedicate time to solving problems related to data structures, algorithms, and problem-solving.</li>
                <li>Strive for 100% coverage of all topics.</li>
            </ol>
        </ul>
        <ul>
            <li>Learn Good Coding Practices</li>
            <ol>
                <li>Explore Design Principles to ensure your code adheres to best coding practices.</li>
                <li>Notice a refinement in your coding style after this step.</li>
                <li>At this stage, prioritize following these design principles:
                    <ul>
                        <li>DRY (Don’t repeat yourself)</li>
                        <li>KISS (Keep it simple, stupid)</li>
                        <li>YAGNI (You aren’t gonna need it)</li>
                        <li>SOLID Principles</li>
                        <li>Separation of Concerns</li>
                    </ul>
                </li>
            </ol>
        </ul>
        <h2>Prepare for Interviews (~Last 2 months)</h2>
        <ul>
            <li>Develop Confidence in Problem-Solving, Data Structures & Algorithms (PS/DS)</li>
            <ol>
                <li>Focus on areas where you encounter difficulties.</li>
                <li>Strengthen your understanding of those topics.</li>
                <li>Subsequently, tackle problems related to those topics.</li>
                <li>Ensure utmost confidence in all topics by the start of the last month.</li>
            </ol>
        </ul>
        <ul>
            <li>Practice Several Machine Coding Problems</li>
            <ol>
                <li>Aim to solve each machine coding problem within 1.5 hours.</li>
                <li>Review solutions from others and integrate their learnings into your next problem-solving attempt.</li>
                <li>Attain confidence in solving machine coding problems within 1.5 hours while maintaining readable code and a solid design.</li>
            </ol>
        </ul>
        <ul>
            <li>Refine CS Foundations Notes</li>
            <ol>
                <li>Review the notes you compiled for CS subjects.</li>
                <li>Ensure you can recall all essential concepts.</li>
                <li>Practice solving problems related to those concepts.</li>
            </ol>
        </ul>
        <h2>Commence Revision (Last 1 month)</h2>
        <ul>
            <li>Solve problems from each DSA topic</li>
            <ol>
                <li>Begin with common questions and those you previously found challenging.</li>
            </ol>
            <li>Thoroughly review the notes for all CS subjects.</li>
            <li>Delve into the details of your projects</li>
            <ol>
                <li>Ensure you can easily link situational questions to real stories from your projects.</li>
            </ol>
        </ul>
        <ul>
        <li>Mock interviews
        </li>
        <ol>
            <li>Conduct around 10-15 mock interview sessions to assess your preparation.</li>
            <li>Identify your strengths and weaknesses during these mock interviews and focus on improving weaknesses and common interview mistakes.</li>
        </ol>
    </ul>
    <h2>Transitioning from Foundation to Practice</h2>
    <p>If you have more than 1 year, consider incorporating several of these activities based on your available time, but prioritize at least one. These endeavors will enhance your programming skills and significantly bolster your resume.
    </p>
    <ul>
        <li>Competitive Programming (CP)
        </li>
        <ol>
            <li>Engage in competitive programming contests.</li>
            <li>CP enhances problem-solving abilities and contributes to overall programming proficiency.</li>
            <li>Strive for success in competitions like ACM ICPC and similar contests.</li>
        </ol>
        <li>Open Source Contributions
        </li>
        <ol>
            <li>Participate in open-source projects and contribute actively.</li>
            <li>Open-source involvement fosters teamwork skills and promotes writing high-quality code.</li>
            <li>It also provides insights into writing maintainable and scalable code.</li>
        </ol>
    </ul>
    <ul>
        <li>Self-directed Projects
        </li>
        <ol>
            <li>Undertake self-directed projects to deepen your understanding of software development.</li>
            <li>These projects serve as valuable learning experiences and enhance your resume.</li>
        </ol>
        <li>Internship Opportunities
        </li>
        <ol>
            <li>Pursue internship opportunities whenever possible.</li>
            <li>Even unpaid work-from-home internships offer invaluable learning opportunities.</li>
            <li>Avoid paid training programs as they often lack value. On-the-job learning is typically self-driven, so prepare yourself for independent learning.</li>
        </ol>
        <li>Academic Projects
        </li>
        <ol>
            <li>Collaborate with professors from your college or other institutions on academic projects.</li>
            <li>Engaging in research and development projects with academia provides valuable experience.</li>
        </ol>
    </ul>
    <p>Consider overlapping these activities with the foundational and practice phases to maximize your learning experience.
    </p>
    


    </div>
    </div>
  )
}
