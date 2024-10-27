import React from 'react'
import './Carrer2.css'; 
export default function Core3() {
  return (
    <div>
       <div class="box-container">
        <div class="hover">
       
            <h1 class="hover3">COMPUTER NETWORKS </h1>
      
            <img id="img" src="image/core3b.png" alt="software-engg"/>
        </div>

    </div>
    <br/><br/><br/>
    <div class="boxpara">
        <h1> Computer Networks Interview Questions</h1>
    <ol>
        <li>
            <h2>What is a computer network?</h2>
            <p>A computer network is a collection of interconnected devices and systems that can communicate with each other to share resources and information.</p>
        </li>
        <li>
            <h2>What are the different types of networks?</h2>
            <p>Computer networks can be categorized into several types, including LAN (Local Area Network), WAN (Wide Area Network), MAN (Metropolitan Area Network), WLAN (Wireless Local Area Network), and PAN (Personal Area Network).</p>
        </li>
        <li>
            <h2>What is the OSI model, and what are its layers?</h2>
            <p>The OSI (Open Systems Interconnection) model is a conceptual framework that standardizes the functions of a telecommunication or computing system into seven abstract layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.</p>
        </li>
        <li>
            <h2>Explain the TCP/IP model.</h2>
            <p>The TCP/IP model is a protocol stack used to establish communication between devices over the Internet. It consists of four layers: Application, Transport, Internet, and Link layers.</p>
        </li>
        <li>
            <h2>What is the difference between TCP and UDP?</h2>
            <p>TCP (Transmission Control Protocol) is a connection-oriented protocol that provides reliable and ordered delivery of data, while UDP (User Datagram Protocol) is a connectionless protocol that provides faster but unreliable delivery.</p>
        </li>
        <li>
            <h2>What is an IP address?</h2>
            <p>An IP (Internet Protocol) address is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. It serves two main purposes: host or network interface identification and location addressing.</p>
        </li>
        <li>
            <h2>What is subnetting?</h2>
            <p>Subnetting is the process of dividing a single, large network into multiple smaller subnetworks (or subnets) to improve performance, security, and manageability.</p>
        </li>
        <li>
            <h2>What is a router, and how does it work?</h2>
            <p>A router is a networking device that forwards data packets between computer networks. It operates at the network layer of the OSI model and uses routing tables to determine the best path for forwarding packets to their destinations.</p>
        </li>
        <li>
            <h2>What is a switch, and how does it differ from a hub?</h2>
            <p>A switch is a networking device that connects multiple devices on a local area network (LAN) and forwards data only to the device it is intended for, improving network efficiency. A hub, on the other hand, broadcasts data to all devices connected to it.</p>
        </li>
        <li>
            <h2>What is DHCP, and how does it work?</h2>
            <p>DHCP (Dynamic Host Configuration Protocol) is a network protocol used to automatically assign IP addresses and other network configuration parameters to devices on a network. It simplifies the management of IP addresses and reduces the need for manual configuration.</p>
        </li>
        <li>
            <h2>What is DNS, and what is its role in networking?</h2>
            <p>DNS (Domain Name System) is a hierarchical decentralized naming system for computers, services, or other resources connected to the Internet or a private network. Its main role is to translate human-readable domain names into IP addresses, allowing users to access resources using easy-to-remember names.</p>
        </li>
        <li>
            <h2>What is ARP, and how does it work?</h2>
            <p>ARP (Address Resolution Protocol) is used to map an IP address to a physical MAC (Media Access Control) address on a local network. It helps devices identify each other on the same network segment.</p>
        </li>
        <li>
            <h2>What is a MAC address?</h2>
            <p>A MAC (Media Access Control) address is a unique identifier assigned to network interfaces for communications on the physical network segment.</p>
        </li>
        <li>
            <h2>What is NAT (Network Address Translation)?</h2>
            <p>NAT is a process used in routers to modify network address information in packet headers while in transit, typically for the purpose of remapping one IP address space into another.</p>
        </li>
        <li>
            <h2>What is ICMP, and what is its role in networking?</h2>
            <p>ICMP (Internet Control Message Protocol) is a network protocol used to send error messages and operational information between network devices. It is commonly used for diagnostic and troubleshooting purposes.</p>
        </li>
        <li>
            <h2>What is VLAN (Virtual Local Area Network)?</h2>
            <p>A VLAN is a logical grouping of devices within a local area network (LAN) that communicate with each other as if they are on the same physical network, regardless of their physical location. It enables network segmentation and improves network security and performance.</p>
        </li>
        <li>
            <h2>What is SSL/TLS, and what is its role in networking?</h2>
            <p>SSL (Secure Sockets Layer) and its successor TLS (Transport Layer Security) are cryptographic protocols used to provide secure communication over a computer network. They encrypt data transmitted between clients and servers to protect it from eavesdropping and tampering.</p>
        </li>
        <li>
            <h2>What is a firewall, and what is its role in networking?</h2>
            <p>A firewall is a network security device or software that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between a trusted internal network and untrusted external networks (such as the Internet) to prevent unauthorized access and protect against cyber threats.</p>
        </li>
        <li>
            <h2>What is a proxy server, and what is its role in networking?</h2>
            <p>A proxy server is an intermediary server that sits between clients and servers and acts on behalf of clients to fulfill requests. It can be used for various purposes, including caching, filtering content, improving performance, and enhancing security.</p>
        </li>
        <li>
            <h2>What is a subnet mask?</h2>
            <p>A subnet mask is a 32-bit number used in conjunction with an IP address to determine the network and host portions of the address. It separates the IP address into network and host bits, allowing devices to identify which part of the address corresponds to the network and which part corresponds to the host.</p>
        </li>
        <li>
            <h2>What is QoS (Quality of Service) in networking?</h2>
            <p>Quality of Service (QoS) refers to the ability of a network to prioritize and manage network traffic to ensure a certain level of performance, reliability, and availability for specific types of data or applications. QoS mechanisms include traffic prioritization, bandwidth allocation, and congestion control.</p>
        </li>
        <li>
            <h2>What is a broadcast domain?</h2>
            <p>A broadcast domain is a logical division of a computer network in which all devices can directly transmit broadcast messages to each other. Devices within the same broadcast domain receive and process broadcast messages, while devices in different broadcast domains do not.</p>
        </li>
        <li>
            <h2>What is a collision domain?</h2>
            <p>A collision domain is a network segment or physical medium in which collisions can occur between data packets transmitted by devices. In Ethernet networks, collisions occur when two or more devices attempt to transmit data simultaneously, resulting in data corruption and retransmissions.</p>
        </li>
        <li>
            <h2>What is a DNS server?</h2>
            <p>A DNS (Domain Name System) server is a specialized server that translates domain names (such as www.example.com) into IP addresses (such as 192.0.2.1) and vice versa. It helps clients locate and connect to resources on the Internet or a private network using human-readable domain names.</p>
        </li>
        <li>
            <h2>What is a proxy ARP?</h2>
            <p>Proxy ARP (Address Resolution Protocol) is a technique used by routers to respond to ARP requests on behalf of devices within the same subnet. It allows devices to communicate with each other even if they are not directly connected, by having the router act as a proxy for ARP requests and responses.</p>
        </li>
        <li>
            <h2>What is a VPN (Virtual Private Network)?</h2>
            <p>A VPN is a secure and encrypted connection established over a public network, such as the Internet, to provide users with secure access to a private network or resources. It enables users to send and receive data as if their devices were directly connected to the private network, ensuring privacy, security, and anonymity.</p>
        </li>
        <li>
            <h2>What is a MAC flooding attack?</h2>
            <p>MAC flooding is a network attack in which an attacker floods a switch with fake MAC addresses, causing the switch's MAC address table to become full and overflow. As a result, the switch enters into a fail-open mode, where it behaves like a hub and forwards traffic to all devices, allowing the attacker to intercept and eavesdrop on network traffic.</p>
        </li>
        <li>
            <h2>What is a Man-in-the-Middle (MitM) attack?</h2>
            <p>A Man-in-the-Middle (MitM) attack is a network attack in which an attacker intercepts and alters communication between two parties without their knowledge or consent. The attacker positions themselves between the communicating parties and relays messages back and forth, allowing them to eavesdrop on sensitive information, manipulate data, or impersonate one of the parties.</p>
        </li>
        <li>
            <h2>What is a Distributed Denial of Service (DDoS) attack?</h2>
            <p>A Distributed Denial of Service (DDoS) attack is a malicious attempt to disrupt the normal functioning of a targeted server, service, or network by overwhelming it with a flood of illegitimate traffic from multiple sources. The goal of a DDoS attack is to make the targeted resource unavailable to its intended users, causing downtime, financial loss, and reputational damage.</p>
        </li>
        <li>
            <h2>What is a gateway?</h2>
            <p>A gateway is a network node that serves as an entry or exit point for data packets between different networks. It typically operates at the boundary of a network and performs protocol translation, data format conversion, and routing functions to enable communication between networks using different protocols or technologies.</p>
        </li>
    </ol>


    </div>
    </div>
  )
}
