---
title: Open Source Project - "Implementation / Testing"
description: In this project, we will be working with a large codebase to test your implementation and testing skills from the SDLC. You will be contributing to a chosen open source project, and your professionalism, progress, communication, and implementation will be graded.
releaseDate: 2024-09-16
dueDate: 2024-11-30T16:59:59-04:00
---

## Introduction

In the past few years, the popularity of ChatGPT has surged and the hype of AI taking over the world has begun (again). One of the most used AI tools ChatGPT is powered by what we call a “large language model” (LLM). An LLM is a model that takes a string input and outputs a string.

You can watch more about the technical implementation of LLMs in a series of videos by 3blue1brown:

- [But what is a GPT? Visual intro to transformers | Chapter 5, Deep Learning](https://www.youtube.com/watch?v=wjZofJX0v4M&t=1s)
- [Attention in transformers, visually explained | Chapter 6, Deep Learning](https://www.youtube.com/watch?v=eMlx5fFNoYc&t=3s)
- [How might LLMs store facts | Chapter 7, Deep Learning](https://www.youtube.com/watch?v=9-Jl0dxWQs8&t=710s)

Simply put, you can think of the LLM exposing 1 function like this:

```
def invoke(prompt: str) -> str
```

ChatGPT is one of the most popular cloud hosted LLMs, but there are other cloud hosted LLMs like [Claude AI](https://claude.ai/), Google's [Gemini](https://gemini.google.com/) and more.

More recently, researchers have cleverly utilized this “string input” to empower the LLM to do more than simple Q&A. Some aim to increase the accuracy of the output, to decrease “hallucinations”, and some aim to grant these LLMs “internet access”. Here are some cool examples:

- [ReAct pattern](https://til.simonwillison.net/llms/python-react-pattern)
- [Multi-agent debate](https://arxiv.org/abs/2305.19118)
- [Building language agents as graphs](https://langchain-ai.github.io/langgraph/)

## Langchain

Langchain is an abstraction framework that wraps on top of `def invoke`. It provides helpers to format the input, and helpers to parse the output. It also provides helpers to run functions sequentially or even in parallel with a merge. We will be covering how to read large codebases
in lecture 2.

![Langchain](langchain.png)

This semester, you and your team will be contributing to Langchain. There are 3 repositories that you can contribute to depending on which language you favor more:

- https://github.com/langchain-ai/langchainjs (Javascript)
- https://github.com/langchain-ai/langchain (Python)
- https://github.com/langchain-ai/langgraph (Python)

## Identifying and Analyzing the Issue (40%)

> This part of the project is due on your tutorial in Week of October 16th.

Your team will identify 1-2 issues to work on. Although we will attempt to grade your work on both issues, we will only take the best one for your final grade. You can find outstanding issues here:

- https://github.com/langchain-ai/langchain/issues
- https://github.com/langchain-ai/langchainjs/issues
- https://github.com/langchain-ai/langgraph/issues

As a general rule of thumb, consider these issues ineligible for this project.

- [Documentation-only or non-code-related issues](https://github.com/langchain-ai/langchain/pull/5563)
- [Trivial quality-of-life enhancements that do not affect general functionality](https://github.com/langchain-ai/langchain/pull/5573)

**Task**: Verify with your TA that your issue satisfies course requirements.

You should take a look at the new [review process](https://python.langchain.com/v0.2/docs/contributing/review_process/) by langchain.

As reference, you can check out what [pull requests](/showcase) have been made by other students in the past.

After identifying an issue, you must come up with an intended solution with pseudo-code and outline the files that you may need to change or create. You must include enough detail to convince the TA that the approach is feasible and non-trivial. Furthermore, you should discuss your intended solution with the community to get feedback. Please include screenshots of your discussions in your submission.

**Task**: Submit an implementation plan to the TA on the Google Doc provided.

You will be graded on the following items:

- Your intended solution
- Your discussions with the community

You can refer to this [example](https://drive.google.com/file/d/1uk4eD2Q8SlWDFDWgrx1scuKQ2Kg8FRf1/view) for the expectations of analysis and proposal.

## Pull Request to langchain (40%)

> Note: This part of the project is due on November 30th.

It’s time to turn your plan into reality. One member of your team must fork the langchain repo and create a new branch to start working on the solution.

It is recommended that you start implementing as soon as possible and have a draft PR to leave time for the maintainers to leave their comments.

You will be graded on the following items:

- Pull request documentation
- Git best practices
- Implementation
- Testing methods
- Possibility of PR being merged

It may be possible that the maintainers will tell you that your PR is not mergeable due to various reasons. This is why you would want to choose multiple issues to work on at the beginning.

Note that you may attempt this part of the project multiple times.

## Professionalism and Progress (20%)

One major part of contributing to the open source is the interaction with the community and the repo contributors. In the sea of open pull requests, your team should campaign for your pull request to be looked at or commented, while maintaining professionalism.

Remember you are representing yourself, and the University of Toronto. Please keep your community interactions professional.

If your pull request is merged, either you are lucky, you finished early, or you spent effort in getting yourself noticed. Therefore, you will automatically get 20% for free. However, if we see that you have been unprofessional in your interactions, we may deduct marks. Unprofessional behavior includes but is not limited to:

- Spamming the maintainers with merge requests
- Being rude
- Not following the maintainers' instructions
- Not following the community guidelines

If your pull request is not merged, I mostly attribute it to unluckiness. However, you may still
be eligible to get full marks if you can demonstrate the following:

- Provide sufficient evidence to TA your professional and timely interaction with the community, such as but not limited to Github and the langchain Discord.
- Professionalism in the interaction

Last minute interactions with the community will not be considered as sufficient documentation.

For a good example, refer to https://github.com/langchain-ai/langchain/issues/11229.

## Bonus (up to 10% of final course grade)

Unless otherwise stated in the team agreement, all members will be given a bonus from 1%-10% (depending on effort required to develop the solution) given that your pull request is merged by the maintainers.

The percentage bonus is determined solely by the course instructors. If your pull request is merged after the course ends (up to a period of 1 year), we will retroactively modify your grade.

## Contribution Factor

Unless otherwise stated in the team agreement, all members will receive a contribution factor of 1, regardless of their actual contribution.
