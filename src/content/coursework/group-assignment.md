---
title: Group Assignment - Writing a Solution Architecture Document
releaseDate: 2023-11-13
dueDate: 2023-11-30T23:59:00.000Z
---

---

Complex problems tend to require more complex solutions. Large systems are difficult for an individual to keep track of, even the individual who architected it.

This is why architects create various design and architecture artifacts, so that they serialize the solution in their head into a format that is accessible for others (and themselves!)

This assignment is a group assignment. Your group will be the same one you've been working with in your tutorial all semester.

## Scenario

---

You are a software consulting company known as {your cscd01 team name}. You have been approached by a startup called Xtra-Health\* based out of Ontario. They want to build an app that can track physical activity and use it in conjunction with a users’ medical records to provide a comprehensive health management platform. Your TA will play the role of project manager for Xtra-health.

\*This is a fictional company and not representative of any real world organizations.

- Users should be able to log physical activities, meals, and medical information.
- The system must comply with health data privacy regulations as defined in PHIPA.
- The system should be able to integrate with external systems like electronic health records (EHRs) and wearable devices.
- Users should receive notifications of personalized health recommendations based on their data.
- The app should provide analytical insights based on the user's activity.
- We expect a daily user count of between 50,000 - 100,000 users.
- We expect an average concurrent user count of 5000.

## Mutation

---

Your TA will assign your group two mutations. A mutation adds or modifies an existing requirement for the scenario. These will be handed out in your group slack channels. If you have not recieved a mutation, reach out to your TA on slack.

## Your Task

---

Given the Kata above and the two mutations received by your TA. Create a solution architecture document. You may assume that your TA's and instructors in this course play the role of employees at Xtra-Health. In your document, list their names and assign them roles (ex. Project manager, executive sponsor, IT support, etc).

Below you will find a template for how this document should be structured. 

## Grading

---

### 1. **Background (5%)**

- What is the problem that justifies the existence of this project?
- Who are the stakeholders?
- Who are the users?

### 2. **Requirements (15%)**

- Functional requirements
- Non-functional requirements

### 3. **Architecture (Revision 1) (20%)**

- Context Diagram + Description
  - Make note of any architectural decisions
- Container Diagram + Description
  - Make note of any architectural decisions
- Component Diagrams + Descriptions
  - Make note of any architectural decisions

### 4. **Risk Assessment (30%)**

- Risk storming

  - 1\. Individual Assessments
  - 2\. Consensus discussion
    - Focus on areas of disagreement that arose from the individual assessments.
  - 3\. Mitigation Strategies
    - Decide with your team how you will contain the identified risks. Make sure you justify all decisions and highlight any tradeoffs.

- For an example risk storming framework you can refer to the one used in class. However, remember that the spirit of a practice is more important than the implementation. You need not follow the framework strictly, but you _will_ be marked for how well you assess risk, come to a consensus with your team, and decide on mitigating strategies.

### 5. **Revised Architecture (30%)**

Here you will apply the mitigation strategies from your risk assessment to your revision 1 architecture. For each revision you make to your archiecture in this section, make sure you highlight the corresponding identified risk that prompted it.

- Context Diagram + Description
  - Make note of any revised architectural decisions
- Container Diagram + Description
  - Make note of any revised architectural decisions
- Component Diagrams + Descriptions
  - Make note of any revised architectural decisions

See booklit.app example from lecture (week 11).

## Submission

---

Create your solution archicecture documents in a google doc. Once you are finished and ready to hand in your assignment, share it with your TA on slack.

**The deadline for handing in your assignment is November 30th at 11:59 PM.**

## Important Notes

---

- You will not be rewarded for verbosity. This is not an essay. This type of document is meant to be digestible by many stakeholders within multiple companies. Clarity and conciseness are valued more by business folk who have busy jobs.
- You will be rewarded for providing justification for your decisions. Remember, there is no perfect architecture, but you must be able to make informed and defensible decisions.

### Tips for steps 3-5

- Start with a basic architecture that meets your functional requirements
  - Risk assess that architecture with your team in the context of the non-functional requirements that you’ve identified.
  - Apply mitigation strategies to the basic architecture to mitigate all the risks you’ve identified. Then update your diagrams.
- You DO NOT have to make component diagrams for containers that would not be built by your team. For example, you do not need to create a component diagram for a PostgreSQL database that you have in your container diagram.
