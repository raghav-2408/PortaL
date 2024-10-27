import React from 'react'
import './Carrer2.css'; 
export default function System1() {
  return (
    <div>
      <div class="box-container">
        <div class="hover">
           
            <h1 class="hover2">System Design - Introduction |</h1>
            <h1 class="hover3">--Beginners--</h1>
        
            <img id="img" src="image/system1b.png" alt="software-engg"/>
        </div>

    </div>
    <br/><br/><br/>
    <div class="boxpara">

        <h2>Introduction to System Design:</h2>
        <p>System design is a crucial aspect of software engineering, focusing on creating architectures that meet specific requirements and constraints.</p>
        <p>For example, when building a social media platform like Facebook, system design would involve defining the database schema to store user profiles, posts, and comments, selecting technologies for real-time messaging, and ensuring scalability to handle millions of users concurrently.</p>
    
        <h2>Key Concepts:</h2>
        <ul>
            <li><strong>Scalability:</strong> The ability of a system to handle increasing loads.</li>
            <li>For instance, a scalable e-commerce platform like Amazon should be able to accommodate spikes in traffic during holiday seasons without affecting performance.</li>
            <li><strong>Availability:</strong> Ensuring uninterrupted access to the system.</li>
            <li>For example, a banking application needs high availability to allow customers to perform transactions at any time without downtime.</li>
            <li><strong>Performance:</strong> Optimizing system response times and throughput.</li>
            <li>For instance, a video streaming service like Netflix must deliver content with minimal buffering to provide a seamless viewing experience.</li>
            <li><strong>Maintainability:</strong> Designing systems that are easy to manage and update.</li>
            <li>For example, an enterprise resource planning (ERP) system should allow administrators to add new features or fix bugs without disrupting ongoing operations.</li>
        </ul>
        <h2>Important Topics for System Design</h2>

        <ul>
            <li>Why learn System Design?</li>
            <li>Objectives of System Design</li>
            <li>Components of System Design</li>
            <li>System Design Life Cycle (SDLC)</li>
            <li>System Architecture</li>
            <li>Modularity and Interfaces In System Design</li>
            <li>Evolution/Upgrade/Scale of an Existing System</li>
            <li>How Data Flows Between Systems</li>
            <li>System Design Example: Airline Reservation System</li>
            <li>Advantages of System Design</li>
        </ul>
    
        <h2>Why learn System Design?</h2>
        <p>In any development process, the most important stage is Design. System Design not only is a vital step in the development of the system but also provides the backbone to handle exceptional scenarios because it represents the business logic of software.</p>
    
        <h3>Objectives of System Design</h3>
        <ul>
            <li>Practicality</li>
            <li>Accuracy</li>
            <li>Completeness</li>
            <li>Efficiency</li>
            <li>Reliability</li>
            <li>Optimization</li>
            <li>Scalability (flexibility)</li>
        </ul>
    
        <h3>Components of System Design</h3>
        <ul>
            <li>Load balancers</li>
            <li>Key Value Stores</li>
            <li>Blob Storage</li>
            <li>Databases</li>
            <li>Rate Limiters</li>
            <li>Monitoring System</li>
            <li>Distributed System Messaging Queue</li>
            <li>Distributed Unique ID generator</li>
            <li>Distributed Search</li>
            <li>Distributed Logging Services</li>
            <li>Distributed Task Scheduler</li>
        </ul>
    
        <h3>System Design Life Cycle (SDLC)</h3>
        <p>The System Design Life Cycle (SDLC) outlines the steps involved in designing and developing a system, ensuring that the end product is reliable, scalable, and maintainable.</p>
    
        <h3>System Architecture</h3>
        <p>Software architecture defines how components of a design are depicted and deployed, providing the skeleton design of a software system.</p>
    
        <h3>Modularity and Interfaces In System Design</h3>
        <p>Modular design involves integrating smaller, independent elements to create a finished product, while interfaces facilitate user interaction.</p>
    
        <h3>Evolution/Upgrade/Scale of an Existing System</h3>
        <p>Scaling up existing systems involves upgrading specifications or creating a distributed system by connecting multiple systems together.</p>
    
        <h3>How Data Flows Between Systems</h3>
        <p>Data flows between systems through Data Flow Diagrams (DFDs), representing the flow of data through information.</p>
    
        <h3>System Design Example: Airline Reservation System</h3>
        <p>Let's understand System Design through an example like an Airline Reservation System, which involves booking flights, handling preferences, and managing reservations.</p>
    
        <h3>Advantages of System Design</h3>
        <p>System Design reduces product design costs, speeds up development processes, increases efficiency, consistency, and saves resources.</p>
    
    
        <h2>Methodologies:</h2>
        <p>System design follows several methodologies to ensure effective implementation:</p>
        <ul>
            <li><strong>Understand Requirements:</strong> Gather and analyze requirements.</li>
            <li>For example, building a ride-sharing app like Uber requires understanding user needs, driver workflows, and payment processing.</li>
            <li><strong>Define Use Cases:</strong> Identify different user interactions and scenarios.</li>
            <li>For instance, in a messaging application like WhatsApp, use cases include sending messages, creating groups, and sharing media files.</li>
            <li><strong>Design Components:</strong> Break down the system into smaller, modular components.</li>
            <li>For example, in an e-commerce platform, components may include user authentication, product catalog, shopping cart, and payment processing.</li>
            <li><strong>Choose Technologies:</strong> Select technologies based on requirements and trade-offs.</li>
            <li>For example, for real-time communication in a chat application, you might choose WebSocket for bidirectional communication.</li>
            <li><strong>Test and Iterate:</strong> Continuously test and refine system designs.</li>
            <li>For example, during development, you might conduct load testing to ensure the system can handle anticipated traffic.</li>
        </ul>
    
        <h2>Best Practices:</h2>
        <p>To design robust and scalable systems, adhere to best practices:</p>
        <ul>
            <li><strong>Design for Failure:</strong> Assume components will fail and implement redundancy.</li>
            <li>For example, in a cloud-based application, use multiple availability zones to ensure resilience.</li>
            <li><strong>Horizontal Scaling:</strong> Add more instances or resources to distribute workload.</li>
            <li>For instance, in a web application, use load balancers to distribute incoming requests across multiple servers.</li>
            <li><strong>Vertical Scaling:</strong> Upgrade existing resources to handle increased demand.</li>
            <li>For example, in a database system, increase RAM or CPU to improve performance.</li>
            <li><strong>Data Partitioning:</strong> Distribute data across multiple storage nodes.</li>
            <li>For example, in a social networking site, partition user data based on geographical location to reduce latency.</li>
            <li><strong>Caching:</strong> Store frequently accessed data in memory.</li>
            <li>For example, in a content delivery network (CDN), cache static assets like images and videos to reduce server load.</li>
            <li><strong>Asynchronous Processing:</strong> Handle long-running tasks asynchronously.</li>
            <li>For instance, in a job scheduling application, use message queues to process background jobs without blocking the main application.</li>
        </ul>
    
        <h2>Conclusion:</h2>
        <p>System design is essential for building scalable, reliable, and maintainable software systems.</p>
        <p>By understanding key concepts, methodologies, and best practices, beginners can develop robust architectures that meet user requirements and adapt to changing needs.</p>
    
    </div>
    </div>
  )
}
