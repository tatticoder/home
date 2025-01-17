---
title: Interview with Dylan Sather, Pipedream
who: Dylan Sather
role: Co-Founder
org: Pipedream
what: Automation and integration platform for developers.
tags: ["Integration"]
date: 2022-02-16T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Dylan Sather, Co-Founder, Pipedream
isPage: interviews
topImg1Src: /img/interviews/pipedream-dylan-sather-profile.webp
topImg2Src: /img/favicons/pipedream.com.jpeg
ogImg: /img/interviews/pipedream-dylan-sather-desk.jpeg
---

### What is Pipedream? Why did you build it?

[Pipedream](https://pipedream.com/) is an integration platform for developers.
You can think of us in the same class as tools like
[Zapier](https://zapier.com/), [IFTTT](https://ifttt.com/), or
[Integromat](https://www.integromat.com/en), which are all automation and
integration platforms. But most of those are targeted to non-technical users.

The co-founders at Pipedream, including myself, all worked at
[BrightRoll](https://en.wikipedia.org/wiki/BrightRoll), which was acquired by
Yahoo. We were at Yahoo for a few years, then got the itch to do another company
together. The vision for Pipedream came about talking to a lot of other
developers about the problem of building integrations. These were a lot of the
same problems we encountered building BrightRoll.

We were early adopters of tools like AWS Lambda because we saw how easy it was
to develop glue code in those platforms. But the developer experience around
serverless is painful. It's tough to learn. Developers build a lot of
integrations, and yet most integration platforms target non-developers. There
was a clear gap in the market.

Pipedream targets developers. We're trying to find that perfect balance between
the ease-of-use of a platform like Zapier with the power of a platform like
Lambda. But we want our tool to be accessible for non-technical users, as well.
We're building the UI, actions, and triggers to be used by anyone, but
developers can always dig into the code and go deeper. We provide built-in
queues to manage concurrency and rate-limiting, state management,  and all the
things that you would expect on a platform like AWS.

When you use Pipedream, you're either authoring workflows from pre-built
components or writing your own code. You write code in the browser because the
testing flow is much easier there, but we're building a local development
experience and a deeper VS Code integration.

When you deploy a workflow, we manage the serverless infrastructure behind it,
such as the HTTP endpoints. There's very little networking, no management of any
cloud resources. We also abstract auth. As a developer, you can connect your
account in Pipedream to a service like Google Calendar. We manage the OAuth
authorization and token refresh flow for you. We try to simplify all of the
things you end up building when you develop integrations.

### What does a "day in the life" look like for you?

I lead our Developer Relations Engineering and Data teams. Since we're a small
company, we wear a lot of hats.

When doing Developer Relations Engineering, I spend time in the community
working with our users. We use the term “Developer Relations Engineer”
deliberately. We believe that developers are best able to support other
developers, so we hire engineers to do support. Developer Relations Engineering
handles all customer-facing work. We write documentation and do a lot of
customer calls. We collect feedback from customers and present that to the team.

On the Data side, my team handles all product analytics and data infrastructure.

As a founder, my role involves a lot of context switching, but it's fun to be
involved in such disparate areas. I also hack on the core product when I have
the time.

### What is the team structure around Pipedream?

We're a team of 14. Besides our two product managers and our CEO,
[Tod Sacerdoti](https://en.wikipedia.org/wiki/Tod_Sacerdoti), we're all
engineers across a range of functions.

### How did you first get into software development?

In high school, I worked the Guest Services desk at Target doing customer
support. A lot of employees dropped off broken hardware: POS systems, scanners,
etc. I got curious, and started trying to fix them. As I learned how these
systems work, I realized there was this thing called a console underneath the
POS system where I had access to a terminal, and could inspect the system at a
deep level. I started to learn how to fix issues on my own. I realized that this
was exactly what I wanted to do. When I went to college, I ended up majoring in
Political Science, but took a lot of CS and started to write code.

I started with PHP, JavaScript, HTML and CSS. In class, I wrote C, Java, Python,
and a variety of other things. After college, I moved out to San Francisco and
joined BrightRoll.

Today, I work mostly with Node, SQL, R, and Python.

### What is the most interesting development challenge you've faced?

One of our biggest technical challenges is figuring out how to support a
multi-language environment in an elegant way.

The new version of our workflow builder supports Python, Go, Bash, and Node.js.
We're adding support for TypeScript, and plan to support other runtimes soon.
And you can do it all in a single workflow. You can write one step in Node, one
step in Python, and so on. Getting this to work has been a challenge. We've had
to architect our execution environment to handle the nuances of each runtime,
like large packages in Python. To alleviate some of these challenges, we've
moved to a model where we're building containers for every workflow and then
deploying those in AWS. That's helped us ship support for multiple languages
within the same workflow.

A further challenge is figuring out how we introduce multi-language support on
the developer side. We provide what we call the "Pipedream component API", which
is our API for authoring triggers and actions. A lot of that API is built off
Node patterns that make sense in Node, but may not work as well in other
languages. We're now thinking about multi-language support, and need to build a
component API for all of our supported languages. Python is the one we're
working on right now. It introduces different language semantics, so building a
consistent interface for such a complex API across language runtimes is a
challenge.

All of our public integration components are
[open source](https://github.com/PipedreamHQ/pipedream). As a developer, you can
see how each of them work behind the scenes and submit PRs to our repo with
improvements or fixes. You can fork any component and run your own private copy.
We have mechanisms for managing state, managing how you dedupe incoming events
for things like triggers, etc. All these primitives are built into the component
API.

### What is the most interesting tech tool you are playing around with at the moment?

I've been working with [PostGIS](https://postgis.net/), the geo-extension for
Postgres. I'm using it to analyze some public geodata here in San Francisco.
I've been enjoying learning about GIS and dealing with the nuances of spatial
data. As a data nerd, the ability to run a SQL query to say, "Give me all the
points within this polygon" is pretty amazing.

### Describe your computer hardware setup

I have an [M1 MacBook Pro](https://www.apple.com/shop/buy-mac/macbook-pro),
which I'm really enjoying. I use a
[Goldtouch](https://www.goldtouch.com/ergonomic-keyboards/) split keyboard and a
Dell monitor. Our CEO Tod also bought us professional cameras we use as webcams
that we could use for podcasts, meetings, etc.

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack.

**IDE:** [VS Code](https://code.visualstudio.com/) with Vim key bindings

**Source control:** Git and GitHub.

### Describe your desk setup

{{< img-center src="/img/interviews/pipedream-dylan-sather-desk.jpeg" alt="The desk of Dylan Sather, Pipedream" width="100%" >}}

I have a standing desk, but I also work a lot outside. I like to move a lot
during the day and we get nice weather here in San Francisco. I use a beach
chair as my desk for half the day. And then I use my standing desk here in the
office.

### When coding

**Daytime or nighttime?** Night.

**Tea or coffee?** Coffee.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I love to read and run. I'm prepping for a half marathon that my mom and I run
every year, back in Oklahoma where I'm from. I also enjoy cooking with my wife.
We go on a lot of hikes with our dog. I try to embrace all the beautiful nature
we have out here in California.

### Find out more

[Pipedream](https://pipedream.com/) is an integration platform for developers.
It was featured as an "Interesting Tool" in the [Console newsletter](/) on 24
Mar 2022. This interview was conducted on 16 Feb 2022.
