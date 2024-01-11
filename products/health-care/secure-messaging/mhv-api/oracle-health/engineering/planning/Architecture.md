# Architecture Analysis and Decisions

## North Stars

- Ship a unified SM message inbox
- Create a system focused on resiliency, performance and monitorability 
- Deliver a seamless experience no matter what underlying system the Veteran is using

## Current Approach

Check out [the README](../README.md)

![current diagram](../assets/MHV%20Oracle%20Health%20Integrations%20-%20Messaging%20(1).png)

### TL;DR; Summary of Design

- MHV first approach
- MHV knows a bunch about OH
  - such as Storing data and adding columns that are *just* for OH
- Two sources of truth

### Risks

- Two sources of truth
- Maintaining system data and feature parity is going to be a big challenge. 
- OH has a limited features sets
- Big Data synchronization is going to be a Problem
  - The ATOM *only* does new message, not deleted or any other status updates (such as if the message is read or deleted)
- MHV is embodying quite a bit of knowledge of OH and becoming tightly coupled
- MHV has 2 decades of technical debt
  - including performance issues, downtown, sub-par monitoring, and slow release and planning cycles

### Gains

- Allows the reuse the functionality and data structures of MHV
- Provide a single inbox for the Veteran
- Leans on existing resources to help aid in development
- Allows for solving the integrations problems first while being able to deliver *something*.
- Leadership has bought-in

## The Big Idea

### What

- Create a VA SM Messaging Service that acts the source of truth for all things Message Data 
- The VAMS becomes the SoT for all things. Messages, meta-data (such as status, folders, tags, threading) is stored here and we provide interfaces that client systems (such as OH and MHV) can send messages

-> Insert new diagram


### TL;DR; Summary of Design

### Why

After implementing a prototype in PI13 we are uncovering a bunch of risks and warning flags.

Ideally, MHV knows nothing about OH, but as we are digging into the problem, we are slowly becoming more tightly coupled with OH. 

**Why this is bad:** When looking at this on a `years` level, its going to be hard to maintain. In the presumed future state of **OH being the only EHR for VA**, the SM API will end up having un-used functionality and code that has to be either maintained or pulled out.

### Risks

- Building a new system is very risky; 
- Not enough resources to drive this approach until contracts cycle in/out

### Gains
