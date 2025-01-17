---
title: "Steadybit"
date: 2022-05-30T12:00:00+00:00
draft: false
summary: Chaos engineering platform for SREs and DevOps.
metaTitle: Working at Steadybit - Console profile
metaDescription:
  What is it like to work at Steadybit?  Console profile behind the scenes at
  Steadybit - chaos engineering platform for SREs and DevOps.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: company-profile
pageType: company-profile
customPageStyle: true
xlViewport:
  largeText: true
companyInfo:
  favicon: /img/favicons/www.steadybit.com.png
  URL: https://www.steadybit.com
  jobsURL: https://www.steadybit.com/about-us
  location: Remote
  description: "Chaos engineering platform for SREs and DevOps."
  product:
    name: "Steadybit"
    description:
      "Steadybit aims to provide the best chaos engineering platform for SREs, 
      DevOps and developers to gain control of their cloud infrastructure. We 
      highly encourage experimentation. If you join the team, you'll have a 
      chance to leave a footprint in whatever area of interest you have. We are 
      looking for folks who like to be pioneers and who like to actively grab 
      what they are an expert for and start evolving it as the company grows."
  techStack:
    - Java
    - JavaScript
    - NodeJS
  meta:
    - label: "Founded"
      value: 2019
    - label: "CEO"
      value:
        links:
          - href: "https://www.linkedin.com/in/benjamin-wilms/"
            text: "Benjamin Wilms"
            iconRight: "external-link"
    - label: "Employees"
      value: "10-20"
    - label: "Stage"
      value: "Early-stage startup"
    - label: "Social"
      value:
        links:
          - href: "https://twitter.com/steadybitHQ"
            text: "Twitter"
            iconLeft: "twitter"
          - href: "https://www.linkedin.com/company/steadybit/"
            text: "LinkedIn"
            iconLeft: "linkedin"
  type: "DevOps"
  category: "DevOps - Chaos Engineering"
  topCategory: "DevOps"
  subCategory: "Chaos Engineering"
  filterTaxonomy: "devops, saas, java, javascript, nodejs"
---

{{< nav-wrapper--open id="wrapper-1" anchor-name="how-engineering-works" >}}

{{< rich-title-3 icon="checklist" id="how-engineering-works" >}}How engineering
works at Steadybit{{</ rich-title-3 >}}

#### How are the teams structured?

We are 12 people right now, so it is actually just one team, which we expect to
stay like this for some time. It's pretty much all hands on deck on our team, so
you are invited to join whatever activity you'd like to. For example, you might
be a member of the development community if you enjoy coding the most. 

We have discussed structuring teams based on roles and technologies, but
currently, everyone is doing everything, and that's encouraged. In future, we
will likely split into platform and ecosystem teams. In the ecosystem teams,
we'll likely end up with different verticals based on technology, as writing
attacks and weak spot detections requires deep subject matter expertise of
engineers.

#### What tools do engineers use?

- **Communication:** Zoom, Slack
- **Documentation:** Mural, Notion
- **Workflow management:** Kanbanize
- **Incident management:** email transformed into Kanbanize ticket
- **Deployment:** GitHub actions
- **Monitoring:** Instana, LogDNA, Cloudwatch

#### Can developers pick their own tools?

Yes, developers have flexibility to choose their tools. However, for everything
that ripples out through the whole team, we have established a super lightweight
request for discussion process where you just write up a rationale, provide a
few options, explain to the team what you're trying to achieve, and then the
team gets a say in this. For example, we would have a discussion if there was a
proposal to migrate from AWS to GCP, but for everything that's development
related, folks can decide what is best for them.

#### How does the development process work? What's the process for working through bugs, features and tech debt?

Currently we have a very basic setup because we didn't want to introduce
unnecessary complexity with a small team. Our project has the usual stages -
committed, in progress, waiting for review, delivered - but we categorize
everything in three service classes for prioritization: everything is either
expedited, standard, or intangible. 

We mark things as expedited usually when it's a game breaking bug or when it's
something that we absolutely need. The majority of the tasks just end in the
backlog which are tackled on a first in, first out basis. The intangible service
class consists of things which don't really fit into our normal priorities, but
we should still be doing it. In my experience, these things always end up
rotting away on the shelf, so every two weeks, one whole day, folks get to
choose what they want to pull from the intangible backlog and then just work on
these things.

#### How does code get reviewed, merged, and deployed?

Everything will happen in a branch before it's merged to main and then deployed.
We don't have a formal pull request policy yet, but if it's a non-trivial
change, folks will ask for a review and then everything happens inside a pull
request.

#### What is the QA process?

With that being said, we do have lots of QA built in. So first of all, we don't
really believe in having a QA process as a separate functional thing to happen,
because that will introduce lead time and will introduce dysfunction. We have a
test environment, we have plenty of unit, integration and load test coverage. We
invest into our own testing tools, especially because agent based functionality
is not that easily testable in many cases. So everything will be thoroughly
tested by the team in an automated fashion and in the dev environment before we
release it into production.

#### What are some recent examples of interesting development challenges solved by internal teams as part of building the product?

With customers, onboarding scalability is one of the things that we had to
tackle recently. If someone intends to rapidly scale out to 600 clusters in
their enterprise environment, then you put your software to the test! 

Technically the most challenging thing we've done in the past few weeks is
really testing for bottlenecks in our architecture. One example we discovered
was the way we manage targets for a task, how we store them, and how the agent
communicates them to the back end - that didn't scale as well as we wished it
did, so that's one of the things we had to solve recently.

#### How does on-call work?

We have a few folks from the management team signed up for pager duty, but we
don't have on-call beyond that. Given the phase we are currently in, it's not
something we will promise our customers. Our service level agreements with
customers will usually make it clear what the capabilities of the teams are with
that regard. Usually, if something really breaks down, the management team will
get a page and then see whether they can do something, but we make it clear that
things will happen in normal business hours.

{{< nav-wrapper--open id="wrapper-2" anchor-name="hiring-process" >}}

{{< rich-title-3 icon="checklist" id="key-features" >}}Hiring process at Steadybit
{{</ rich-title-3 >}}

#### How does the application process work? What are the stages and what is the timeline?

We usually have two rounds of interviews, first one is getting to know the team,
the product and really just having a good conversation about what's important
with regards to the role. This is usually done by the folks in the roles who
will be working most closely with the position we are trying to hire. The second
round of interview is with one of the founders where we just discuss all the
formal stuff that can't be answered in the first calls, we might dig deeper if
the team tells us that there are some topics that they would like us to follow
up on. It usually takes a week from the first interview before you either know
that you've been accepted and have an offer in your inbox or we've declined with
some feedback.

{{< div--close >}}
