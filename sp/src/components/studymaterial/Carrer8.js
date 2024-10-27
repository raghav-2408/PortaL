import React from 'react'
import './Carrer2.css'; 
export default function Carrer8() {
  return (
    <div>
       <div class="box-container">
        <div class="hover">
            <h1 class="hover1">Which programming languages </h1>
            <h1 class="hover2">/technologies should I learn in</h1>
            <h1 class="hover3">2024?</h1>
            <img id="img" src="image/carrer8b.png" alt="software-engg">
        </div>

    </div>
    <br/><br/><br/>

    <div class="boxpara">
        <h1>Programming Languages & Technologies to Learn are: </h1>
        <ul>
            <li><strong>Python:</strong> Python's versatility and readability make it highly desirable for a wide range of applications including web development, data science, machine learning, artificial intelligence, automation, and more.</li>
            <li><strong>JavaScript (including frameworks like React, Angular, Vue.js):</strong> JavaScript remains essential for frontend web development. Frameworks like React, Angular, and Vue.js are widely used for building dynamic and interactive user interfaces.</li>
            <li><strong>Java:</strong> Java continues to be a cornerstone of enterprise development, especially for building scalable and secure backend systems, Android app development, and large-scale distributed systems.</li>
            <li><strong>Kotlin:</strong> Kotlin has gained popularity for Android app development due to its modern syntax, interoperability with Java, and support from Google as an official language for Android development.</li>
            <li><strong>Swift:</strong> If you're interested in iOS app development, Swift is a must-learn language. It offers safety, performance, and modern features for building iOS, macOS, watchOS, and tvOS applications.</li>
            <li><strong>Go (Golang):</strong> Known for its simplicity, concurrency support, and performance, Go is increasingly used for building scalable backend services, cloud-native applications, and microservices.</li>
            <li><strong>TypeScript:</strong> TypeScript, a superset of JavaScript, adds static typing and other features to JavaScript, making it more robust for large-scale applications. It's commonly used in frontend and backend development.</li>
            <li><strong>Rust:</strong> Rust is gaining traction for systems programming, especially for its focus on safety, performance, and concurrency. It's used in areas like game development, embedded systems, web assembly, and more.</li>
            <li><strong>GraphQL:</strong> GraphQL simplifies data fetching and manipulation by providing a more efficient and flexible alternative to traditional REST APIs. It's becoming increasingly popular for building modern APIs.</li>
            <li><strong>Docker and Kubernetes:</strong> Containerization and orchestration technologies like Docker and Kubernetes are essential for deploying and managing applications at scale in cloud-native environments.</li>
            <li><strong>Serverless Computing:</strong> Serverless architectures, facilitated by platforms like AWS Lambda, Azure Functions, and Google Cloud Functions, are becoming mainstream for building and deploying applications without managing infrastructure.</li>
            <li><strong>Artificial Intelligence and Machine Learning:</strong> Skills in AI and ML, including frameworks like TensorFlow, PyTorch, and scikit-learn, are in high demand for developing intelligent applications, predictive analytics, natural language processing, computer vision, and more.</li>
        </ul>
        <p>Remember that the choice of languages and technologies should align with your career goals, interests, and the specific demands of the industry or domain you're targeting. Keeping up with emerging trends and technologies through continuous learning and experimentation is also crucial in the fast-paced tech industry.</p>

        <br/>
        <h1>Building an Online Compiler</h1>
        <ol>
            <li>
                <h2>Start with a simple command-line app:</h2>
                <p>Begin by creating a basic command-line application that takes code as input from the user and needs to be executed.</p>
            </li>
            <li>
                <h2>Research for language-specific execution in Java (or language of choice):</h2>
                <p>Search for ways to run shell commands in Java. Create functions like "compile" and "execute" and handle logic for different languages using if/switch conditions.</p>
            </li>
            <li>
                <h2>Determine the status code for execution:</h2>
                <p>Find out how to determine the status code to understand if the compilation was successful or not. You can find resources online to guide you through this process.</p>
            </li>
            <li>
                <h2>Build a web app around the command-line app:</h2>
                <p>Transition to building a web app around the existing functionality. If using Java, initialize a Spring Boot app; if using JavaScript, generate an Express app. Create endpoints to handle code compilation and execution.</p>
            </li>
            <li>
                <h2>Create a basic frontend for the web app:</h2>
                <p>Design a simple user interface with a textbox for inputting code, a button to run the code, and a section to display the output. Utilize HTML, CSS, and JavaScript to build the frontend.</p>
            </li>
            <li>
                <h2>Enhance the web app for advanced features:</h2>
                <p>To create an advanced online IDE and compiler:</p>
                <ul>
                    <li>Integrate open-source code editors instead of a basic textbox.</li>
                    <li>Estimate traffic and consider implementing a submission queue if necessary.</li>
                    <li>Study existing similar platforms and adopt best practices.</li>
                    <li>Continuously learn and improve by leveraging online resources and community feedback.</li>
                </ul>
            </li>
        </ol>

    </div>
    </div>
  )
}
