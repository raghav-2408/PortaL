import React from 'react'
import './Carrer2.css'; 
export default function Backend1() {
  return (
    <div>
        <div class="box-container">
        <div class="hover">
            <h1 class="hover1">What happens when you open  </h1> 
            <h1 class="hover2"> a website on your browser? |</h1>
            <h1 class="hover3">Web 101</h1>
            <img id="img" src="image/backend1b.png" alt="software-engg"/>
        </div>

    </div>
    <br/><br/><br/>
    <div class="boxpara">

        <h1>Client-Server Architecture</h1>
        <p>Every website is associated with one or more IP addresses. When you access a website, your browser (the client) first needs to determine the IP address of the domain by querying a Domain Name Server (DNS). The DNS acts like an address book, mapping domain names to IP addresses.</p>
        <p>Once the IP address is obtained, your browser establishes a TCP (Transmission Control Protocol) connection with the server hosting the website through a process known as a three-way handshake.</p>
        <p>Next, the browser sends an HTTP (Hypertext Transfer Protocol) request to the server, typically for the index.html file, which represents the homepage of the website.</p>
        <p>The server responds by sending back the index.html file. The browser then parses this HTML file and identifies additional resources referenced in it, such as CSS files, JavaScript files, images, etc.</p>
        <p>Subsequently, the browser sends additional HTTP requests to the server for each of these resources. The server responds by sending the requested resources back to the browser.</p>
        <p>Once all the required resources are obtained, the browser renders the page on your screen, displaying the content along with any styles and interactivity provided by CSS and JavaScript.</p>
        <p>Additionally, the browser may need to request further data, such as user information, to fully render the page.</p>
        <p>This interaction between the client (browser) and the server is facilitated by the HTTP protocol, which governs how messages are exchanged between them. HTTP requests are made by the client, and the server responds with HTTP responses, containing the requested data or resources.</p>
        <p>This communication over the internet occurs via a unique combination of an IP address and a port. The default port for web servers is 80, and you can connect to a specific IP address, such as 1.2.163.444, on port 80.</p>
        <p>In more complex web applications, static files alone may not suffice. In such cases, dynamic data may need to be fetched and stored across devices. This is where APIs (Application Programming Interfaces) come into play. APIs allow applications to interact programmatically, enabling the exchange of dynamic data between different systems.</p>
        <p>As an example, the translator tool showcased utilizes Fun Translations' API to convert text into Yoda's speech. This API allows developers to programmatically interact with the translation service. You can try using this API by appending text to the URL provided.</p>
        <p>This client-server interaction forms the backbone of the modern web, enabling the delivery of dynamic and interactive content to users across the globe.</p>
        <p>Source: <a href="https://developer.mozilla.org">Mozilla Developer Network</a></p>

        <br/>
        <h1>HTTP Request Overview</h1>
        <p>An HTTP request consists of four primary elements:</p>
        <ol>
            <li>Uniform Resource Locator (URL)</li>
            <li>HTTP Method</li>
            <li>HTTP Request Body</li>
            <li>HTTP Headers</li>
        </ol>
        <h2>URL</h2>
        <p>The Uniform Resource Locator (URL) indicates the specific resource you wish to interact with. It is composed of a Protocol, Hostname/Domain, and Path.</p>
        <h3>Example URL:</h3>
        <p>Protocol: HTTPS<br/>
           Hostname: student-portal<br/>
           Path: /programs/sde-bootcamp</p>
        <p>URLs may also include query parameters, which allow for applying specific filters or sorts to the resource.</p>
        <h2>HTTP Method</h2>
        <p>HTTP methods define the type of interaction with the server:</p>
        <ul>
            <li>GET: Retrieve a resource</li>
            <li>POST: Create a new resource</li>
            <li>PUT: Update an existing resource entirely</li>
            <li>PATCH: Update an existing resource partially</li>
            <li>DELETE: Delete a resource</li>
        </ul>
        <h3>Examples:</h3>
        <ul>
            <li><code>GET /tweets/1234</code>: Retrieve tweet with ID 1234</li>
            <li><code>POST /tweets</code>: Create a new tweet</li>
            <li><code>PUT /tweets/1234</code>: Update tweet with ID 1234</li>
            <li><code>DELETE /tweets/1234</code>: Delete tweet with ID 1234</li>
        </ul>
        <h2>HTTP Request Body</h2>
        <p>When query parameters are insufficient, the request body contains additional data sent to the server. Complex data structures like JSON or XML are used for hierarchical data.</p>
        <h2>HTTP Request Headers</h2>
        <p>HTTP request headers provide further context about the request, such as content-type and user information like access tokens and cookies.</p>
        <h2>HTTP Response</h2>
        <p>Upon receiving the request, the server responds with an HTTP response, consisting of:</p>
        <ul>
            <li>HTTP Status Code</li>
            <li>Response Body</li>
            <li>HTTP Response Headers</li>
        </ul>
    
    </div>
    </div>
  )
}
