---
title: "Sourcegraph"
date: 2022-04-04T12:00:00+00:00
draft: false
summary: Universal code search for every developer.
metaTitle: Working at Sourcegraph - Console profile
metaDescription:
  What is it like to work at Sourcegraph? Console profile behind the scenes at
  Sourcegraph - universal code search for every developer.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/sourcegraph.com.png
  URL: https://about.sourcegraph.com
  jobsURL: https://about.sourcegraph.com/jobs/
  location: Global (remote)
  description: Universal code search for every developer.
  images:
    - url: /img/profiles/sourcegraph-profile-1.png
    - url: /img/profiles/sourcegraph-profile-2.jpg
    - url: /img/profiles/sourcegraph-profile-3.jpg
  product:
    name: "Sourcegraph"
    description:
      "Sourcegraph is building universal code search for every developer and
      company so they can innovate faster on the software we use every day.
      Sourcegraph lets you onboard to a new codebase quickly, make large-scale
      refactors, find and reuse code, increase dev efficiency, address security
      risks, root-cause incidents, and find and fix issues across all your code."
  techStack:
    - Go
    - JS
    - Typescript (React)
  meta:
    - label: "Founded"
      value: 2013
    - label: "CEO"
      value:
        links:
          - href: "https://twitter.com/sqs"
            text: "Quinn Slack"
            iconRight: "external-link"
    - label: "Employees"
      value: "280"
    - label: "Stage"
      value: "Late-stage startup"
    - label: "Customers"
      value:
        - "Dropbox, Uber, Lyft, Twitter, Amazon, Reddit, Workiva, Quantcast, GE,
          Plaid, Factset, F5, Segment, SoFi, Cloudflare "
        - links:
            - href: "https://about.sourcegraph.com/case-studies"
              text: "See all"
              iconRight: "external-link"
    - label: "Social"
      value:
        links:
          - href: "https://twitter.com/sourcegraph"
            text: "Twitter"
            iconLeft: "twitter"
          - href: "https://www.linkedin.com/company/sourcegraph/"
            text: "LinkedIn"
            iconLeft: "linkedin"
  customerCaseStudies:
    - client: "Cloudflare"
      text:
        "solve the big code problems they face every day with Sourcegraph. For
        example, engineers can quickly identify out-of-date code libraries by
        only searching certain repositories, while excluding specific file
        types. And it’s easier to search for error logs. As a result, the team
        can refactor and debug faster and feel confident they've addressed each
        issue."
    - client: "CERN's"
      text:
        "Large Hadron Collider (LHC) features five-year operational periods and
        the software must be stable during this time. Sourcegraph helps
        developers make small, backward-compatible changes and ensures that any
        change made by a given team to one part of the codebase doesn't break
        (or require adaptations of) dependent code written by other people. It’s
        essential that these changes are done correctly, as mistakes can stop
        the operation of the CERN accelerators and waste precious time for
        physics research."
  type: "On-prem / SaaS"
  category: "Developer Tools - Code search"
  topCategory: "Developer Tools"
  subCategory: "Code search"
  filterTaxonomy: "developer-tools, on-prem, saas, go, js, typescript, react"
interview: sourcegraph-beyang-liu
podcast: s01e07-sourcegraph-hoppscotch
---

{{< nav-wrapper--open id="wrapper-1" anchor-name="how-engineering-works" >}}

{{< rich-title-3 icon="checklist" id="how-engineering-works" >}} How engineering
works at Sourcegraph{{</ rich-title-3 >}}

#### How are the teams structured?

Teams are split into different groups, including Engineering, Product, Customer
Support, Customer Engineering, Tech Ops and others. The org chart is
[available on the Sourcegraph website](https://handbook.sourcegraph.com/team/org_chart/).

#### What tools do engineers use?

- **Design:** Figma
- **Source Control:** git & GitHub
- **Issue tracking:** GitHub + Jira
- **Docs:** Sourcegraph
- **Devops:** Sentry, Honeycomb, Datadog, Incident.io
- **Comms:** Slack, Twitter, Blog

#### Can developers pick their own tools?

Yes, we generally believe everyone and every team should be able to choose the
tools that enable them to best do their jobs. We have many different editors in
use and a lot of the monitoring and deployment tools we use across the company
now were spearheaded by individuals. That being said, there are some soft
constraints around the introduction of tools and technologies that affect
others' work. For example, we are open to using new languages if there is a
reason to favor them over existing languages in our stack, but have a status quo
bias toward our existing set of languages.

#### How does the development process work? What's the process for working through bugs, features and tech debt?

Fast-paced, but structured. Most teams are on a 2-week or monthly cycle. We do
quarterly planning for big projects/features. We have a lightweight process for
planning and getting approval from key stakeholders that typically involves
writing up an RFC and tagging the requisite stakeholders. We generally use
GitHub Issues and Projects as the roadmap source of truth. We have a monthly
product demo day for features and fixes that are shipping.

#### How does code get reviewed, merged, and deployed?

- Development happens in branches.
- Changes then are squash-merged into our main branch following code review from
  code owners.
- Deployment to sourcegraph.com is automatic after a change is merged into the
  main branch.
- We have a monthly release cycle for self-hosted customers, which is cut from
  the main branch.

#### What is the QA process?

Automated CI using Buildkite, with automated end-to-end tests.

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

- [sg](https://sourcegraph.com/github.com/sourcegraph/sg): internal tool for
  managing the Sourcegraph dev environment
- Sub-repository permissions: enforcing code permissions within repositories.
- Scaling up our infrastructure to support millions of open-source repositories
  and
  [private code on sourcegraph.com](https://about.sourcegraph.com/cloud-beta/).
- Both [Notebooks](https://docs.sourcegraph.com/notebooks) and
  [Code Insights](https://about.sourcegraph.com/code-insights/) were created as
  hack projects to help with onboarding, documenting code investigations and
  understanding high-level trends in our code, but they worked so well, we ended
  up productizing it and releasing them to our customers.

#### How does on-call work?

- OpsGenie for handling and routing alerts. Incident.io for collaboratively
  responding to incidents.
- We have an on-call rotation, but no one gets woken up in the middle of the
  night, because we distribute the rotation to our teammates around the world
  (fully remote).

{{< nav-wrapper--open id="wrapper-2" anchor-name="hiring-process" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}}Hiring process at Sourcegraph
{{</ rich-title-3 >}}

#### How does the application process work? What are the stages and what is the timeline?

Applications are received through our careers page and we have a standardized
engineering interview process plus a set of resources for candidates.

It is our goal to fill our openings as quickly as possible while maintaining a
high quality bar and a strong candidate experience. Once a candidate begins the
interview process with us, we aim to complete the interview process in 2-weeks
or less.

The process typically looks like this:

1. [Recruiter screen](https://handbook.sourcegraph.com/departments/talent/process/types_of_interviews/#recruiter-screen)
   (30m).
2. [Hiring Manager Screen](https://handbook.sourcegraph.com/departments/talent/process/types_of_interviews/#hiring-manager-screen)
   (30-60m).
3. Team interviews -
   [technical interview](https://handbook.sourcegraph.com/departments/talent/process/engineering_interview_process_candidates/#types-of-interviews)
   (60m) +
   [cross-functional team collaboration interview](https://handbook.sourcegraph.com/departments/talent/process/types_of_interviews/#cross-functional-team-collaboration-interview)
   (60m).
4. [Values interview](https://handbook.sourcegraph.com/departments/talent/process/types_of_interviews/#values-interview)
   (30m).
5. [Leadership interview](https://handbook.sourcegraph.com/departments/talent/process/types_of_interviews/#leadership-interview)
   (30m).

#### What is the career progression framework? How are promotions and performance reviews managed?

Our handbook documents
[our career development framework](https://handbook.sourcegraph.com/departments/product-engineering/engineering/career-development/framework/)
and
[how performance reviews are managed](https://handbook.sourcegraph.com/departments/product-engineering/engineering/career-development/talent-review-process/).

{{< div--close >}}
