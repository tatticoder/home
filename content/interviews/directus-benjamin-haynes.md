---
title: Interview with Benjamin Haynes, Directus
who: Benjamin Haynes
role: CEO
org: Directus
what: Platform for your database.
tags: ["Data platform"]
date: 2022-06-20T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Benjamin Haynes, CEO, Directus
isPage: interviews
topImg1Src: /img/interviews/directus-benjamin-haynes-profile.png
topImg2Src: /img/favicons/directus.io.png
ogImg: /img/interviews/directus-benjamin-haynes-desk.png
---

### What is Directus and why did you build it?

Completely open-source, [Directus](https://directus.io/) is a modern data
platform that provides an unopinionated end-to-end backbone for any data-driven
project. It instantly layers directly on top of any new or existing SQL
database, giving developers a set of tools that allow them to build faster and
more efficiently.  At the core of Directus, there are essentially three layers,
two of which are our platform. The first layer is the database. By design, the
database isn't really part of our system, however, it's an integral part of
describing these three layers. The database can be any SQL vendor, Postgres,
MySQL, Oracle, MS-SQL Server, SQLite, Aurora, Cockroach, or whatever flavor your
business requires, and more importantly, any data model. So whatever's in that
database, whether it is completely new, or an existing schema with
tens-of-millions of records

The first layer of our platform is the Data Engine. This is essentially a
backend-as-a-service that creates REST+GraphQL APIs based on your database
schema. It also includes flexible auth options, granular access control,
workflow automation, event hooks, asset transformations, and a lot more. We
introspect your schema and build out a full set of APIs, both REST and GraphQL,
as well as a JavaScript SDK and CLI. We wrap all of that with modular
authentication options (OAuth2, OpenID, and LDAP) and granular rule-based access
control, as well. All of this is extremely unopinionated and fully extensible.

The next layer is our Data Studio, which is powered by our API. This is a
no-code data collaboration app that enables anyone — even completely
non-technical business users — to browse, manage, and visualize the database
through a safe and intuitive interface. It’s completely white-label,
configurable, and extensible, so it truly becomes yours and grows alongside your
project. Users get a variety of different interfaces and layouts to visualize
data, such as maps, tables, charting dashboards, custom forms, Kanbans, media
libraries, calendars, and more. It's a highly modular and flexible system that
allows your engineering team to avoid building bespoke admin platforms. Other
data tools available are very domain-specific; they're limited to inventory or
project management, et cetera, but nothing that simply says, "Whatever data you
have, we're going to give your entire team tools to access, manage, and
visualize it." 

Most importantly, going back to that unopinionated-ness, the entire suite can be
deployed in a number of ways. There is a free and open-source option for
self-hosted deployments with absolutely no paywalls or limitations. We also have
a fully-managed Cloud solution with a free unlimited tier for hobby projects, a
multi-tenant tier for self-service, and a fully customizable tier with
single-tenant infrastructure and SLAs for enterprise-grade projects.

Because this is a no-code solution, marketing, finance, and other non-technical
business users often leverage the platform in a very meaningful way. However,
first and foremost, we are developer tooling, and so engineers are our primary
focus and the key to our user base. We obsess over the developer experience
throughout our software, always listening to our vast technical community on how
we can continue to improve our software over time. The breadth of use-cases
means we’re still always learning about completely new ways Directus is being
used to power innovation within data-driven projects.

I ran an IT consultancy out of New York City for about 15 years, building
projects for Google, Prada, AT&T, Snapchat, and others. You get to a certain
point, even when working on smaller projects, and you can no longer rely on CMS,
even more modern headless versions, because you are expanding beyond content,
and commingling data and metadata. These applications are often more robust or
complex than simple websites. Consider SaaS, AR and VR applications, IoT,
business intelligence and other internal tools, or even just managing and
visualizing just raw business data. Developers typically use database admin
tools, such as MySQL Workbench, phpMyAdmin, or Sequel Pro to architect and
manage database content. Through their introspection, these tools do provide a
window into the database, but they're far too technical to hand off to a
customer or a client.

So we said, "Why can't we build a similar introspection-powered tool that is
unopinionated in terms of what it's managing, but with expanded technical
capabilities for developers and an amazing no-code experience to democratize
access?" Fast forward, and that’s exactly what we’ve done with Directus.

### What does a "day in the life" look like for you?

A lot different now than a year ago! Back then I was able to spend all my time
designing and building with my co-founder, which was amazing. Now, as our team
and business have grown, there’s a lot more strategic, investor, and
administrative work to be done. Different times, to be sure, but still very
amazing.

Our internal team is globally distributed, because of that, activity is not
constrained to a timezone and somebody's always working. We have teams in
Singapore and Malaysia that begin working at 9:00pm my time. So I wake up around
6:30am to a slew of emails. I spend probably an hour right there in bed, on my
phone, just going through 50% of my battery, plowing through emails and Discord
notifications. 

I’m in the office by 8:30, and I spend the next few  hours doing admin and more
strategic work. Around noon, I shift into internal team calls and sales demos
for keystone customers. It’s pretty much meetings from that point on.  

I reserve one to two days a week for just heads-down work, and really staying
focused on the product. I am our sole creative, so I’m responsible for our
website and all of the marketing collateral for our product. That in and of
itself is a heavy lift, but I also try to stay up-to-date with our engineering
and development whenever possible. And then being CEO, there's always a huge
docket of things on the admin and strategic side.

Things formally wrap up around 7pm, when I switch into family mode. Though,
being open-source, we get a lot of contributor activity on nights and weekends,
therefore, it's pretty much a 24/7 gig these days. Maintaining a good work/life
balance is difficult, but crucial.

### What is the team structure around Directus?

First of all, it’s flat. It may not be sustainable forever, but everyone on our
team is a leader... so we’re able to minimize “management”, with our executives
and team leads being hands-on by design. By removing bureaucracy and embracing
autonomy, we’re able to keep our product and services moving forward quickly and
efficiently, allowing our small open-source organization to compete with much
larger and more funded vendors.

Secondly, it’s remote. We saw value from being distributed, and so we were well
prepared when the pandemic hit. Our platform is international, and so it only
makes sense that our team is too. No need for a physical headquarters, we have
excellent digital tools (like Discord) to keep our team communicating
sync+async.

Finally, it’s technical. We’re mostly engineers, but even our growing Sales and
Marketing teams are technical, allowing us to better learn from and communicate
with our users. This is key since we’re building developer tooling... and you
don’t market or sell to developers, you explain and showcase value.

### How did you first get into software development?

Growing up in the 90s, I was piecing computers together from discarded
components at my town’s trash and recycling center. Once I had some hardware up
and running, I naturally started messing around with software — though, a decade
before YouTube, it was a bit harder to be self-taught. So, at 16 I got a job
learning to code (.NET) at a tiny local software company.

At 17 I joined the Air Force, with a job in Electronic Warfare — yet, while the
technologies were exciting, they lacked any innovation. So when I got to
college, I tried a formal CS course, but even that dated curriculum was far less
exciting than what I had already been doing on my own for years. In the end, I
focused instead on Communication Design... which had a better balance of
creative and early web-dev. It was a great time to do that, because the web was
just taking off. I realized that designing and building custom sites and early
web apps was what I wanted to do.

I started my own company developing freelance digital experiences – basically,
really early websites with more advanced functionality. 

In the early days, my programming languages were based on whatever clients
required. Trough school, I got into Python and other languages – but all of that
was all secondary to what I was doing informally, which was primarily HTML, CSS
and JavaScript. 

Now, I mostly do a lot of front end because I have much more experienced
developers doing a lot of the backend logic. Though, occasionally I enjoy diving
deeper into JavaScript, especially since we switched Directus from the LAMP
Stack and modernized with 100% TypeScript on Node and Vue.

### What is the most interesting development challenge you've faced working on Directus?

Easily, database abstraction. Every capability we build is through the lens of
supporting every major SQL database vendor. This is not a new hurdle to tackle
in and of itself, but providing feature parity across vendors without reducing
things to the lowest common denominator is extremely difficult.

In Directus, a developer can be working locally with SQLite, then move up to a
staging environment leveraging Postgres, then promote that to Aurora serverless
or a distributed vendor in production. Abstraction works really well for us, and
enables the platform to remain unopinionated even across different environments
and deployment stacks.

Other than that, the biggest challenge for us as a company is just community
management. In the last ten months, we’ve amassed an amazing 20M downloads on
Docker and tens of thousands of developers in our community. That’s awesome, but
managing triage/roadmap expectations across that many users and maintaining
organization of issues and feature requests across so many opinions is
difficult... especially for a small open-source team. However, developers and
contributors are our lifeblood, so this is an area where we’re really trying to
stay focused.

I see our software as a carpenter's toolkit. It’s very simple: the hammer, the
screwdriver, the drill, et cetera. These simple tools overlap to provide
powerful capabilities, not dissimilar from how a SQL database operates. So,
holding true to that vision while managing expectations within a community that
has their own very specific goals is probably the biggest hurdle.

### What is the most interesting tech tool/product/thing you are playing around with at the moment?

The idea of globally distributed data solutions — a globally distributed
database and block storage is huge. To really embrace large, worldwide user
bases means building multi-region distributed deployments to be resilient,
high-availability, and performant. We’re also lucky enough to be talking with
vendors like Cockroach Labs about how to leverage these technologies within our
products and services. We have a number of Fortune 100, Fortune 10 customers
using our platform where these become extremely relevant.

### Describe your computer hardware setup

I run two Mac Minis with 64GB of memory for handling all my Chrome tabs – and
there are way too many of them — with a standard Apple keyboard and mouse. My
Pixel 6 Pro is always on its wireless charger, since it gets a lot of use each
day. I also have two 34” ultrawide Dell monitors for my main screen real-estate;
a 27” 4K up top for dashboards, presenting, and occasional gaming breaks; and a
Sony A6400 camera with a Sigma 16mm lens — all running through a Blackmagic ATEM
Mini. I have AudioEngine speakers, a Shure SM7B, and a RODE NTG4 shotgun mic,
all through a Scarlett 6i6 audio interface.

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Switched to Discord from Slack

**IDE:** VS Code.

**Source control:** GitHub.

**Password Management:** Bitwarden. 

**VPN:** Nord VPN.

**Window manager:** Magnet.

**Design assistance:** ColorSnapper, PixelSnap, CleanShot

### Describe your desk setup

I have almost always worked from home, so I’ve been trying to optimize my setup
for a while. In addition to the setup above, I have some Elgato Key Lights and a
bunch of Philips Hue bulbs controlled by a Stream Deck, a Wacom Intuos Pro, an
XBOX Series X for the late-night “team-building” with my co-founder, and a bunch
of GyroVu articulating arms keeping things where they should be. Most
importantly, a rotating set of artwork from my kids and a Google Hub for family
pictures.

All that sits on top of some old IKEA desks I bolted together. Not sure who
makes my chair, but it’s comfortable and adjustable enough for spending a silly
amount of hours sitting here each day.

{{< img-center src="/img/interviews/directus-benjamin-haynes-desk.png" alt="The desk of Benjamin Haynes, CEO, Directus" width="100%" >}}

### When coding

Daytime or nighttime? Prefer night, but mostly do it during the day

Tea or coffee? Neither. I just drink bottles and bottles of ice cold water; no
ice, just cold water.

Silence or music? Music.

### What non-tech activities do you like to do?

The big few things that I still try to find time for are woodworking – I've
built credenzas and jewelry boxes and trunks, mostly for gifts.

Another one is making music, which is something a lot of our team members do.

I also do a lot of gardening, but mostly just hot peppers. I make my own hot
pepper jellies, crushed red pepper, and hot sauces. Those are probably the big
three, in addition to spending as much time as possible with my family.

### Find out more

[Directus](https://directus.io/) is data platform for your database. It was
featured as an "Interesting Tool" in the [Console
newsletter](https://console.dev) on 30 Jun
2022. This interview was conducted on 20 Jun 2022.
