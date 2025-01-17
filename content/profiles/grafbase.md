---
title: "Grafbase"
date: 2022-04-27T12:00:00+00:00
draft: false
summary: Deploy fast GraphQL APIs globally.
metaTitle: Working at Grafbase - Console profile
metaDescription:
  What is it like to work at Grafbase?  Console profile behind the scenes at
  Grafbase - deploy fast GraphQL APIs globally.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/grafbase.com.jpeg
  URL: https://grafbase.com
  jobsURL:  https://grafbase.com/careers
  location: Remote
  description: "Deploy fast GraphQL APIs globally."
  images:
    - url: /img/profiles/grafbase-profile-1.png
    - url: /img/profiles/grafbase-profile-2.png
    - url: /img/profiles/grafbase-profile-3.png
  product:
    name: "Grafbase"
    description:
      "At Grafbase, we aim to accelerate back-end development with next 
      generation tooling. We want developers to be able to deploy APIs globally 
      and have a great DX while doing so. There are a lot of tools out there 
      for frontend and tracking web vitals but not much for APIs - we plan to 
      change that."
  techStack:
    - GraphQL
    - Rust
    - WebAssembly
  meta:
    - label: "Founded"
      value: 2021
    - label: "CEO"
      value:
        links:
          - href: "https://www.linkedin.com/in/fbjork/"
            text: "Fredrik Björk"
            iconRight: "external-link"
    - label: "Employees"
      value: "11"
    - label: "Stage"
      value: "Early stage startup"
    - label: "Social"
      value:
        links:
          - href: "https://twitter.com/grafbase"
            text: "Twitter"
            iconLeft: "twitter"
          - href: "https://www.linkedin.com/company/grafbase/"
            text: "LinkedIn"
            iconLeft: "linkedin"
  type: "SaaS"
  category: "Developer Tools - GraphQL"
  topCategory: "Developer Tools"
  subCategory: "GraphQL"
  filterTaxonomy: "saas, api, graphql, rust, webassembly"
---

{{< nav-wrapper--open id="wrapper-1" anchor-name="how-engineering-works" >}}

{{< rich-title-3 icon="checklist" id="how-engineering-works" >}}How engineering
works at Grafbase{{</ rich-title-3 >}}

#### How are the teams structured?

Our team is distributed throughout Europe and North America. We have two people
working on the frontend and six working on the backend roles, we also have a
product designer and a technical writer.

#### Tech stack

GraphQL, Rust, WebAssembly, Serverless, TypeScript, React.

#### What tools do engineers use?

- **Source control:** GitHub
- **Diagrams:** Whimsical
- **Issue tracking:** Linear
- **Knowledge Base:** Notion 
- **Infrastructure:** AWS, Vercel, Cloudflare Workers, Terraform
- **Monitoring:** Datadog
- **Communication:** Slack, Zoom

#### Can developers pick their own tools?

People can pick their own IDEs, some use Visual Studio Code, some use Vim or
Emacs. 

When it comes to picking a new tool that will be shared by the entire team, we
create a Notion page stating the problem that we want to solve. And then we list
out things that we care about - costs, API, developer friendliness, scalability,
performance, etc. We have a discussion, people pitch their ideas and then we
pick one.

#### How does the development process work? What's the process for working through bugs, features and tech debt?

We work in two-week cycles. On the first Monday of a new cycle, we have a longer
meeting where we talk about what's carried over from the previous cycle, and
then we align on the priorities, and that's it. Currently, we are at the
pre-launch stage so we allow our engineers to self-organize and they pick the
task that they want to work on, anyone can pick up anything from the to-do list.

#### How does code get reviewed, merged, and deployed?

We use GitHub, when you open a pull request, it gets auto-assigned to a team,
and then, relevant people get notified and then they review, but we also see
people pasting and Slack, "Hey, this is ready for review." 

We try to do smaller pull requests so that we can have a fast cycle. Most of the
pull requests are closed within two to three days, and sometimes same day
depending on the size.

#### What is the QA process?

Engineers write their own end-to-end tests, integration tests, and unit tests.
Tests run on GitHub actions in a dedicated preview environment or CI
environment, and then it goes to production after everything passes.

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

We are deploying the whole back-end to the edge, so, there's a lot of unknowns
and a lot of things you have to fix and do on your own. For example, the AWS SDK
is not WebAssembly ready. It has been challenging to make that work with our
tech stack.

Most people think of the edge as lightweight, redirect feature flagging,
routing. But we're actually deploying the whole back-end to the edge. We're
dogfooding that approach. We are betting that for a lot of use cases, it makes a
lot of sense to be close to users - there's no cold start, it's serverless, and
it's also regionless, so it's fast for everyone. But it's a fairly new piece of
technology, so things are not perfect. It's like EC2 in 2006, that's where we
are.

#### How does on-call work?

We're pre-launch so we don't have that problem yet, but we have uptime checks,
status checks and heartbeats ready for going to production. And the way on-call
is going to work is in a weekly rotation, where there's an on-call policy, and
then everyone who is able to troubleshoot and fix will be on-call and we will
rotate weekly.

{{< nav-wrapper--open id="wrapper-2" anchor-name="hiring-process" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}}Hiring process at Grafbase
{{</ rich-title-3 >}}

#### How does the application process work? What are the stages and what is the timeline?

We take two rounds of interviews, first one with Fredrik, our CEO, and then
another, with two or three people from our team. Depending on past experience
and profile of the applicant, they might be asked to complete a take home
exercise. The entire process should take one to two weeks.

#### What is the career progression framework? How are promotions and performance reviews managed?

We have bi-weekly meetings with everyone, but I think of annual performance
reviews as a necessary evil. We pay market rates, we try to be competitive even
in the early days. So, our engineers should not worry about their base
compensation. We are a small team at the moment, but promotions will happen as
we grow.

{{< div--close >}}
