---
title: "Airplane"
date: 2022-06-16T12:00:00+00:00
draft: false
summary: Platform for internal tools.
metaTitle: Working at Airplane - Console profile
metaDescription:
  What is it like to work at Airplane?  Console profile behind the scenes at
  Airplane - platform for internal tools.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/www.airplane.dev.svg
  URL: https://www.airplane.dev
  jobsURL: https://www.airplane.dev/careers
  location: Remote
  description: "Platform for internal tools."
  # images:
  #   - url: /img/profiles/airplane-profile-1.png
  #   - url: /img/profiles/airplane-profile-2.jpeg
  #   - url: /img/profiles/airplane-profile-3.jpeg
  product:
    name: "Airplane"
    description:
      "Airplane is a platform for engineers to quickly build internal tools that
      power recurring workflows within their organization. Our mission is to
      streamline internal workflows that support, operations, engineering,
      customer success, sales, and other teams need to do on a recurring basis."
  techStack:
    - Go
    - TypeScript
    - React
    - Postgres
  meta:
    - label: "Founded"
      value: 2021
    - label: "CTO"
      value:
        links:
          - href: "https://www.linkedin.com/in/joshmaa/"
            text: "Josh Ma"
            iconRight: "external-link"
    - label: "Employees"
      value: "20"
    - label: "Stage"
      value: "Early-stage startup"
    - label: "Social"
      value:
        links:
          - href: "https://twitter.com/airplanedev"
            text: "Twitter"
            iconLeft: "twitter"
          - href: "https://www.linkedin.com/company/airplanedev/"
            text: "LinkedIn"
            iconLeft: "linkedin"
  customerCaseStudies:
    - client: "The Delta"
      text:
        "uses Airplane schedules for a number of use cases including updating
        candidate statuses, removing unlinked client data, and generating a
        monthly static code quality report."
    - client: "Panther"
      text:
        "started using Airplane to automate some of the more manual tasks that
        customer-facing teams like sales and customer success would ping
        developers on. It created a consistent, reliable experience that saves
        time across entire company."
  type: "SaaS"
  category: "DevOps - platform"
  topCategory: "DevOps"
  subCategory: "Platform"
  filterTaxonomy: "devops, saas, typescript, go, postgres"
interview: airplane-josh-ma
---

{{< nav-wrapper--open id="wrapper-1" anchor-name="how-engineering-works" >}}

{{< rich-title-3 icon="checklist" id="how-engineering-works" >}}How engineering
works at Airplane{{</ rich-title-3 >}}

#### How are the teams structured?

We have short-lived pods that folks are split into. We have three pods working
on three main major projects that we're going through, but they will restructure
every few months or so as priorities shift, so these aren't long-lasting teams.

We don’t structure teams around product features or technologies. What kind of
product you get depends on the shape of your team. Everyone here at Airplane
currently is more of a generalist. There are different focuses around front end
versus back end, but the teams are structured around products that we're
building. So, the mission of people on each team is to ultimately deliver a high
quality product and not just, say, a set of API endpoints.

We focus more on hiring people in US time zones, just so that there's at least
five hours to work synchronously with other people. There's a lot of small
things where it's just easier to hop on a Zoom call and have higher-bandwidth
interaction. We lean on synchronous communication.

#### What tools do engineers use?

- **Communication**: Slack, Zoom
- **Wiki and docs**: Slab
- **Project planning**: Linear, Productboard, Airtable
- **Support operations**: Airplane
- **Infrastructure**: GCP running Kubernetes
- **Design**: Figma
- **Monitoring & error reporting**: Datadog and PagerDuty
- **Workflow management**: GitHub Actions

#### Can developers pick their own tools?

Yes and no. If it's going to affect the team, then we are definitely not a “let
a million languages fly” kind of company. There's a bit of coordination that we
want to do as a team. The goal for the code is to be as anonymous as possible.
You should not be able to tell who wrote these lines of code.

When it comes to things that are team-wide we try to reduce how many tools we
have. But if it's for individual productivity, if you have some way of working
about it that benefits you, then definitely. People are welcome to expense and
adopt their own tools. A lot of us are on macOS, but we have a few folks on
Linux. We have a bunch of Vim users, some using VSCode. I don't know if anyone's
actually using Emacs at Airplane right now!

#### How does the development process work? What's the process for working through bugs, features and tech debt?

It's an age-old challenge, and we don't think we've solved it - it's constant
prioritization. Most recently, we've switched to a one-week sprint, where we're
optimizing for velocity over predictability. Each sprint is really just a very
quick retro, plus pulling whatever's most important, then getting back to
building. Rather than, "Hey, I'm going to spend all Friday planning for this
two-week sprint coming up."

The goal is to move a lot more quickly, and be more iterative. Everyone should
have a bug or a tech debt item for that week, just to make sure we're covering
everything. The focus of the company also shifts regularly.

#### How does code get reviewed, merged, and deployed?

Every bit of code is reviewed. Approximately 25% of PRs have two reviewers. This
is an especially helpful pattern for handing off context or splitting up the
load.

We use GitHub and GitHub Actions to handle the standard run, unit tests,
security scans and merging when it passes. We have a release train where we
automatically deploy the staging, and then the devs have about 30 minutes to
verify things, before it's automatically promoted to prod.

We're trying to balance this. We're not quite ready yet to just deploy directly
to prod, but the idea is that if you merge something, you're watching it go out
and if it's causing issues, you should cancel the prod deployment. So that helps
us deploy often.

#### What is the QA process?

It is pretty standard, like a pyramid of testing, where most issues should be
caught by unit tests, or end-to-end tests. And then we have a few live tests,
like Datadog synthetic checks, that will make sure key features still work,
basic onboarding, etc.

Even manual checks; we think they're not a substitute for automated testing, but
they do still help catch sanity checks. So we still manually test on staging
just to make sure that everything looks right before it goes to a prod.
Ultimately, we provide infrastructure to our customers, so reliability and
quality are important.

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

We're basically building our own auto-scaling, serverless runtime for tasks, for
Airplane scripts. That involved figuring out the model of the control plane and
data plane, and figuring out the APIs between things. Working on load testing
this was a fun project that had tangible metrics as we saw latencies decrease.

Closer to the front end side, we're building authoring experiences for people in
the browser. This involves building an IDE in the browser. How do you apply
Airplane-specific semantics to build an IDE? Can you write something, see the
preview; can you live-test it in your browser; can you collaborate with others?
Building a better authoring experience is something that we’re pretty excited
about starting.

#### How does on-call work?

Every engineer is on call and we have just one rotation right now. This will
evolve as our company grows. With 11 engineers, everyone still has a good sense
of what the others are doing. The most important role of on-call is to be that
interrupt sponge for the week.

We do one-week rotations, although people have been known to trade slots. When
you're on call, you're looking at tickets, you're looking at Sentry errors,
you're getting paged if necessary. And then once a week, we do an on-call sync,
where we ask what noise there has been, how do we reduce that - what alarms have
you gotten; are they real issues, are they not? How do we shift priorities to
make sure that on call is not a big burden? We try to proactively manage that to
avoid getting to a really burnout-heavy on call rotation.

{{< nav-wrapper--open id="wrapper-2" anchor-name="hiring-process" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}} Hiring process at
Airplane {{</ rich-title-3 >}}

#### How does the application process work? What are the stages and what is the timeline?

We move as quickly as the candidate needs; we've interviewed someone over two
days and given an offer out right afterwards, so we can move fast. But
generally, we like to meet with every candidate on a first call, partly to
introduce the Airplane, but also to get a sense for what the candidate's
interested in.

At our size it is about finding fit rather than purely selling someone. An
honest conversation about what is interesting and what's not, helps candidates
really self-select. It turns out that when you're working on an internal tool,
you get candidates who are very self-selected and really passionate about the
things that we're building.

We like to do a two stage on-site where we go through a classic programming
challenge, where you can write code and solve hard algorithmic problems. We
don't face that every day at Airplane, but once in a while you do, and that
difference between good and great engineers is how they adapt and face that. We
ask a system design problem; can you think about building blocks and how things
connect to each other and the abstractions there?

We also do a longerproject where we ask you to build an HTTP server to match
some sort of spec. We'll tell you what it needs to do and what the endpoints
should support, and then you build it. We try to get something close to seeing
you produce real code. We've found that this gives a realistic sample of what
the candidate can do.

And then last, there's an interview with co-founder and CEO, Ravi. Part of
that's just answering any questions you have about Airplane, but it's also to
get a sense for your values and how they align with Airplane's.

#### What is the career progression framework? How are promotions and performance reviews managed?

We do performance reviews and we do give feedback to each other, but right now,
either this company works, or it doesn’t. So it doesn’t make much sense to look
at titles or career ladders.. Ultimately, your success and growth is based on
the success and growth of Airplane.

{{< div--close >}}
