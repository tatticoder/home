---
title: Interview with Josh Ma, Airplane
who: Josh Ma
role: CTO
org: Airplane
what: Platform for internal tools.
tags: ["DevOps"]
date: 2022-06-06T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Josh Ma, CTO, Airplane
isPage: interviews
topImg1Src: /img/interviews/airplane-josh-ma-profile.jpg
topImg2Src: /img/favicons/www.airplane.dev.svg
ogImg: /img/interviews/airplane-josh-ma-desk.jpg
---

### What is Airplane and why did you build it?

[Airplane](https://www.airplane.dev/) is a developer platform for internal
tools. The idea is that we provide developers with a host of
primitives---services, SDKs, etc.---to build internal software faster.

I consider "internal tools" to be a somewhat awkward way to describe the space,
even if it's the best we have right now. Most software is actually internal.
Whether it's a silicon valley startup or some real estate company in the
midwest, companies need software for the work that they do - they need internal
tools. So really, I think of Airplane as a business tools company. We let people
build tools faster, and our goal is to power as many of the business tools out
there as possible.

The reason why we started comes from a few areas. My co-founder and I both come
from an enterprise SaaS background. I was CTO at Benchling, which was in the
life sciences, but ultimately built enterprise SaaS primitives, just specialized
for biology. My co-founder Ravi previously co-founded and ran the go-to-market
side at Heap. Both of these companies developed all sorts of tools to run their
core product, but even then we noticed how manual everything felt. Which was
ironic, given the software nature of the companies.

When we started looking at startup ideas, we talked to about 40-50 engineering
friends of ours, engineer managers, and we just asked them what tools they were
building or what they wished they had. We weren't on the "internal tools" path
yet. We were trying to solve problems for engineers because we liked building
for engineers. The pattern of a script runner actually was the first thing we
came onto. And we started exploring the idea of, "Hey, what if you just could
run scripts, but like in a hosted fashion, what does that look like?"

And the more we played with that, it was like, "Oh, actually this is like
building Lambda for internal tools." We're creating a way to make it easy to
code and push a function, but then wrap UI, permissions, notifications,
authentication, logging, and all that around it.

If I'm building internal tools, I need just more than the runtime environment;
so these are things we're currently working on. Airplane evolved from the one
problem of running scripts, into a full platform to support it and provide an
additional UI layer. This means Airplane can handle anything from a very simple
shell script or Python script all the way through to the full internal tooling
for managing a business.

We come from the "get rid of scripts" philosophy. But then, because we use code
as a primitive, code is the ultimate composable tool, and so how do you allow
people to mature past that? You start off getting rid of a script, but you can
still write code to hook into a UI, build workflows, and access the full
features of the platform. The fact that it's all code lets you opt-in to more
powerful functionality, if needed.

### What are the benefits over containerizing your scripts?

Developers can theoretically build whatever they want when it's just code. So
the question is, what are we building for developers, that developers wouldn't
want to build? There is the basic hosting we offer, that you could probably
manage yourself if you're experienced with infrastructure. But with Airplane,
you get a fully managed serverless environment just with a few lines of code. We
also solve the execution side, such as managing long running or scheduled tasks.
Then everything else that needs to come with more complex requirements - RBAC,
SSO, auditing, output storage, auditing, and so on.

Then there's notifications, like a Slack integration. This goes two ways, so you
can also trigger tasks from Slack. Dealing with all of the permissions,
auditing, integration, etc, are all handled for you.

And it just goes on and on. I like to joke that we work on the most boring
things as a feature - these are all things that every developer should do, but
you end up not doing it! Either you allow e.g. missing SSO as a security risk,
or you just don't build the tool in the first place. We're trying to solve these
things.

### What does a "day in the life" look like for you?

About a year ago, it was all coding. When there's no product, that's all that
matters. So my routine was just waking up, coding, and going back to sleep.
Nowadays, I'm not really coding anymore. My workday is a mixture of tasks and it
changes every month or so. Right now, I'm particularly focused on hiring,
sourcing and interviewing, meeting great candidates, just playing the role of
recruiter.

Once I close out those hires, I will probably spend a period of time, a month or
two, with close to no recruiting and focusing on product design instead. There's
also a lot of just running the engineering team and acting as product manager or
engineering manager, helping the team move along and make decisions quickly. And
then there's the things in the background: SOC 2 compliance, barebones IT, and
on and on.

### What is the team structure around Airplane?

There's 11 engineers, one product designer, and one growth lead. We just hired
our first person in sales, and then there's the two founders.

### How did you first get into software development?

I'm the stereotypical nerd - I started coding before I had internet access. My
parents were both software engineers, so I grew up building home computers. I
think the first thing I remember doing was Visual Basic, I built some silly game
where you had to close as many popups as possible. I did a lot of gaming and
building games - there was Age of Empires which had scripting, and I loved doing
that. StarCraft had scripting too. I built Flash games, played Neopets, which is
just a web based game, but then our Guild needed a website and that's how I
first learned PHP.

I started with Visual Basic, PHP and then a lot of Actionscript for Flash. All
very web based. I didn't learn C, C++, JavaScript, or Python until late high
school, maybe even college. I never quite got into Lisp or Rust or the more
"interesting" languages - I think I'm a very boring person when it comes to
that. I feel like it is important for some tooling, but a lot of the high level
problems we were solving didn't depend on the language.

### What is the most interesting development challenge you've faced working on Airplane?

There's definitely a lot of the world still on-premises, but for Airplane's
initial customer base everyone's on AWS. So there's a new compiler target now,
which is targeting public clouds. If you write code that supports GCP and AWS,
you can basically run your code in other customer's accounts a lot more easily
than it used to be.

Airplane has a self hosted agent, for example, it's a CloudFormation stack and
it's relatively stateless. You toss in your account and we now run Airplane
tasks in your network. It requires very little input from the customer and just
tends to work.

So there's this idea of building an infrastructure company, where the data plane
can now be split across different regions, different customer accounts,
different networks, and the control plane can still be trusted to be managed
centrally. We've been redesigning and rearchitecting a lot of our backend for
that because I think that's what new infrastructure companies are going to look
like. If you look at what new database providers are doing, for example - these
folks are all supporting your own AWS account.

Add Kubernetes to that list too. Kubernetes, AWS, GCP, they don't look the same,
but in some sense they are. They provide a standardized set of APIs for you to
distribute software. That's been really interesting. As we go into hard to
maintain services like data storage or like other APIs that customers want to
run on premise, I think the idea of building a distributed data plan will be
really important.

### What is the most interesting tech tool/product/project/thing are you playing around with at the moment?

[Replicache](https://replicache.dev/) is the newest one I've heard of that I
really like. We're seeing the continued destructuring of the front end stack
from this three tier thing to like, you have code that lives on the edge and
your data lives on the edge, some lives in the core. And it's this intermingling
or challenging assumption set. Replicache is a really interesting manifestation
of that.

Otherwise I just really love various database technologies. I'm really glad
Google finally has AlloyDB now, which catches up with Aurora. And I'm looking
for an excuse to migrate to CockroachDB.

### Describe your computer hardware setup (laptop/desktop, display, keyboard, mouse, phone)

I am using one of the new MacBook Pro 14 inch M1s. I think it's great. People
always complain about more CPU. I have 32gb of RAM and a 10 core CPU. My
computing needs are solved!

I also have a LG Ultrafine 5K monitor. I used to have an ultrawide, but now I
find a single 27" monitor is simpler and works great. I'm using the Opal webcam
for video and mic. I made my own mechanical keyboard, just to play around with
it, and use a Logitech MX Master 3 mouse.

### Describe your computer software setup

**OS:** macOS.

**Browser:** Safari.

**Email:** Superhuman.

**Chat:** Slack.

**Source control:** GitHub.

**IDE:** VS Code.

### Describe your desk setup

{{< img-center src="/img/interviews/airplane-josh-ma-desk.jpg" alt="The desk of Josh Ma, Airplane" width="100%" >}}

I have a desk that I like to keep clean, and it's nice and simple. I used to
have a standing desk, but I just didn't use it. So it wasn't worth it.

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** Coffee.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I like eating and drinking, but I don't think that counts. I enjoy skiing and
snowboarding.

### Find out more

[Airplane](https://www.airplane.dev/) is a developer platform for internal
tools. It was featured as an "interesting tool" in the [Console newsletter](/)
on 16 June 2022. This interview was conducted on 6 June 2022.
