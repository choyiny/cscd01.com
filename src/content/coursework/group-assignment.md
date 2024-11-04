---
title: Group Assignment - Solution Architecture Document
releaseDate: 2024-11-04
dueDate: 2024-11-26T04:59:00.000Z
---

## **Overview**

Complex problems tend to require more complex solutions. Large systems are difficult for an individual to keep track of, even the individual who designed it.

This is why architects create various design and architecture artifacts, so that they serialize the solution in their head into a format that is accessible for others (and themselves\!)

This assignment is a group assignment. Your group will be the same one you've been working with in your tutorial all semester.

## **Scenario**

You are a software consulting company known as \<your team name\>. You have been approached by a startup called **Xtra-Health**\* based out of Ontario. They want to build an app that can track physical activity and use it in conjunction with a users’ medical records to provide a comprehensive health management platform. Your TA will play the role of project manager for Xtra-health.

*This is a fictional company and not representative of any real world organizations.*

- Users should be able to log physical activities, meals, and medical information (conditions and diagnoses).
- The system should be able to integrate with external systems like electronic health records (EHRs) and wearable devices.  
- Users should receive notifications of personalized health recommendations based on their data.  
- The app should provide analytical insights based on the user's activity.
- We expect a daily user count of between 50,000 - 100,000 users.
- We expect an average concurrent user count of 1000 users.

## **Scenario Mutations**

A mutation adds to or modifies the scenario. Your TA will assign your group two mutations. These will be handed out in your group slack channels.

## **Assignment: Solution Architecture Document**

Given the scenario above and the two mutations received by your TA. Create a **solution architecture document.** You may assume that your TA's and instructors in this course play the role of employees at Xtra-Health. In your document, list their names and assign them roles (ex. Project manager, executive sponsor, IT support, etc).

Below you will find a template for how this document should be structured.


**During lecture 10, we will discuss each section of the solution architecture document in detail.**
You do not need to wait for lecture 10 to begin this project. **By the end of lecture 9, you should be able to complete ~90% of this assignment.**


## **Grading**

### **Background (10%)**  
* What is the problem that justifies the existence of this project?  
* Who are the stakeholders?  
* Who are the users?
### **Requirements (20%)**  
* Functional requirements  
* Non-functional requirements  
### **Architecture (70%)**  
- Context Diagram + explanation
  - Make note of any architectural decisions
- Container Diagram + explanation
  - Make note of any architectural decisions
- Component Diagrams + explanation
  - Make note of any architectural decisions
- Deployment Diagram + explanation
  - Make note of any architectural decisions
- Cost estimation 
- Risk assessment
  - Identify areas of your system where risk is present.  
  - Explanation of risk mitigation strategies and associated tradeoffs.  
- Explain how the system satisfies functional and non-functional requirements.

## Submission

Create your solution archicecture documents in a google doc. Once you are finished and ready to hand in your assignment, share it with your TA on slack.

**The deadline for handing in your assignment is November 25th at 11:59 PM.**

## Important Notes

- You will not be rewarded for verbosity. This is not an essay. This type of document is meant to be digestible by many stakeholders within multiple companies. Clarity and conciseness are valued more by business folk who have busy jobs.
- You will be rewarded for providing justification for your decisions. Remember, there is no perfect architecture, but you must be able to make informed and defensible decisions.

### Tips
- You DO NOT have to make component diagrams for containers that would not be built by your team. For example, you do not need to create a component diagram for a PostgreSQL database that you have in your container diagram.

