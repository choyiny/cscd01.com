---
title: Architecture Arena Part 2 - Solution & Trade-offs
description: This assignment will occur in tutorial on the week of October 14th.
releaseDate: 2025-10-12
---
**Groups:** This assignment will be completed in your pre-assigned groups from the beginning of the semester.

During the tutorial, each group will be called to the front of the classroom. Each group will be asked a question that is related
to the following scenario.

## Chirper Analytics

As mentioned in the previous arena, the current statistics for Chirper are as follows:
- 1 Million Weekly Active Users.
- 5 Million Chirps posted daily.
- Average of 100 followers per Bird.
- The most popular Bird, @paco, has 2 million followers.

The analytics presented in Architecture Arena #1, though seemingly fabricated, are actual statistics derived by a data analyst. These figures were extracted directly from the operational database through manually crafted SQL queries. For instance, a specific SQL query was developed to determine the weekly active users.

```sql
SELECT
    COUNT(DISTINCT user_id)
FROM
    user_activity
WHERE
    activity_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 7 DAY)
    AND activity_date <= CURRENT_DATE();
```

Chirper found the weekly execution of SQL queries by a data analyst to be time-consuming. To address this, a developer suggested building a new application, Chirper Analytics, which would empower the marketing team to generate weekly reports based on the platform statistics previously created by the data analyst.

### Task

At a high level, you are tasked with creating a solution, and evaluate its trade-offs.

### Grading and Evaluation

Your answers will be graded by the Teaching Assistants (TAs) based on their comprehensiveness, accuracy, and demonstrated understanding of architectural principles.

To ensure fair and consistent marking, the question and answer session for each group will be audio-recorded. This will allow for later review and arbitration on marks if necessary.

