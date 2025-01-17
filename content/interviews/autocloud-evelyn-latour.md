---
title: Interview with Evelyn LaTour, AutoCloud
who: Evelyn LaTour
role: CPO
org: AutoCloud
what: Viualize cloud resources.
tags: ["Cloud"]
date: 2022-01-10T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Evelyn LaTour, CPO, AutoCloud
isPage: interviews
topImg1Src: /img/interviews/autocloud-evelyn-latour-profile.jpg
topImg2Src: /img/favicons/autocloud.dev.png
ogImg: /img/interviews/autocloud-evelyn-latour-desk.jpg
---

### What is AutoCloud? Why did you build it?

[AutoCloud](https://www.autocloud.dev/) is a cloud visibility tool. For
enterprises that are running workloads on AWS, Azure and Google Cloud, we're
helping their engineering and DevOps teams maintain visibility into things like
security, compliance, spend, and drift with three main features: automated
technical documentation, interactive 3D visualizations, and a managed GraphQL
API.

Our product is incredibly UX-focused and highly visual, which is uncommon in the
world of developer tooling. We use auto-generated diagrams and visuals as the
foundation upon which we layer insights and show connections and relationships
between services. Our aim is to reduce the complexity and the time to insight by
visualizing things that matter to the end-user in a human-readable way. Our
grand vision with all of this is to reimagine cloud visibility by creating a new
industry standard for visualizing and querying multi-cloud data.

AutoCloud has four founders [Tyson](https://www.linkedin.com/in/tkunovsky/),
[Drew](https://www.linkedin.com/in/drewgilliam/),
[Chris](https://www.linkedin.com/in/christopher-koning/), and myself. Tyson,
Drew and Chris have worked together previously in a cloud consulting company and
were helping enterprises with cloud migrations and greenfield projects where
they kept encountering the same problem.

These companies didn't have a core competency in technology and were really
struggling to build reliable, secure, and cost-effective cloud infrastructure.
They all had super small or completely non-existent devops teams. They couldn't
retain good talent and if they were hiring external consultants to come in and
help out, things would be fine for a while. Once the consultants left, however,
they had no idea how to maintain this infrastructure that had been built for
them so it would degrade over time.

With AutoCloud we want to help these types of companies and create a tool that
could give any developer with varying levels of knowledge about cloud
infrastructure the abilities of a senior solutions architect. Even for the more
experienced devops professionals, the aim is to make their jobs easier by giving
them access to the data they want in the format they need.

### How does it work alongside tools like Terraform?

We do quite a bit of integration with IaC. For some of our enterprise clients,
we have this tool we internally call “Terra-Forms” where we take a pre-existing
Terraform module, and create a front-end so that it's really easy for them and
all of their developers to deploy resources in a consistent manner that complies
with their internal compliance policies. We love IaC and we're looking for ways
continually to incorporate it into the platform.

### What does a "day in the life" look like for you?

One day is never like the next, as I'm sure is the case for most startups. First
thing in the morning, I always work out otherwise the whole day is probably off
to a bad start! I have amassed an enormous amount of workout equipment through
Amazon Warehouse Deals over the pandemic, which has been wonderful. I then
shower, have coffee, breakfast, and do a remote standup with all of our
co-founders that we always have every morning. We've been a remote company since
day one, so we've never had a real office. Fingers crossed maybe one day we’ll
get a physical office.

Typically, the CEO and I will argue about some things since our desks are about
15 feet apart from each other, then I'll check email, look at Jira, see what's a
super high priority and what I have to do during the day. I try to keep meetings
to three hours or less, but sometimes that's not feasible. There's lots of
planning involved in the CPO role, but I also have a background in user research
and design, so I'm wearing a lot of different hats.

On any day, I could find myself doing product strategy, team management,
front-end design mockups in [Figma](https://www.figma.com/) or creating the 3D
models in [Blender](https://www.blender.org/). I'll also do code reviews, and
then jump over and do social media strategy, handling our email lists, our email
nurturing campaigns and content generation with PowerPoint decks, graphic design
and copy editing.

I manage our landing pages for both AutoCloud and CloudGraph properties,
including SEO analytics. I'm fully trained in user research and user outreach,
doing interviews and translating those to findings, making sure it's on our
product roadmap. I still do a little bit of software development for the SaaS
platform and 3D environment, but as time has gone on I've been trying to take a
step back from all that.

As we work from home the day never really ends. I try to wrap things up around
sixish at night, but I'm still available on Slack, looking at our danger channel
for Sentry errors that look weird. I have no boundaries between work and life,
but hopefully one day that'll change.

### What is the team structure around AutoCloud?

Right now we have 17 employees, which is great for a seed-stage company. We have
seven people in the US, and everyone else is in South America. Really amazing
engineering talent in Mexico, Chile, Argentina. The majority of the team speaks
Spanish!

The team structure is based on the products themselves. We have the AutoCloud
team for the SaaS platform mainly consisting of full-stack engineers, and within
that, we have a mini 3D environment team, which is just me and Paul Elliot,
who's a fantastic 3D web dev.

Next we have our CloudGraph team, which is our open source team. Under the hood,
CloudGraph is powering AutoCloud. The backend of AutoCloud gets all of the data
that we need from the cloud provider SDKs and then sends it over to AutoCloud.
AutoCloud is formatting it for the diagram layouts, the compliance and security
scans, the drift comparisons and things like that. They share the same GraphQL
API, but AutoCloud has a more managed version. Each of those teams has its own
separate sprint planning and scrums ceremonies.

Lastly, we have our infrastructure team who are responsible for keeping all of
our systems up and running, maintaining our SOC compliance, CI/CD pipelines,
etc.

We also have one superwoman of a project manager Anabella who just keeps
everything running across all of the teams. I don't know how she does it, but
before her, our life was a complete mess!

### How did you first get into software development?

I actually have a master's degree in Cultural Anthropology. In college I really
wanted to go into software development because I was into playing lots of video
games. I went to school in Canada, in British Columbia, that had a very old
school approach to software development. You had to pass a theoretical
mathematics course in your first year to even be allowed into the software
development program. I failed that course harder than anything I've ever failed
in my entire life.

To this day, now having been a software developer for coming up on four years, I
still have not seen or come across anything in that theoretical mathematics
course. I don't know why that was a requirement, so that destroyed my early
dreams of being a developer. A decade later I find myself now starting a
software company.

It was a very long route to get there. I got my master's degree, then I started
working in market research for a pharmaceutical company. We started getting a
ton of projects that would come in where these pharma companies were building
their own apps for mobile devices, for physicians and for patients. They also
had websites that they had no idea how to design or do anything with. I was
asked to figure out what to do and how to have an effective digital
communication strategy. I took on all those projects, and taught myself from
scratch, learning how to do UX research and UX design, and found that I liked it
a lot.

I then moved over to Motorola and was leading user research there for the
cameras on the phones. That was super fun, but as everyone knows, Motorola
Mobility was not doing super well. While at Motorola, I had the chance to do a
software development boot camp at
[Fullstack Academy](https://www.fullstackacademy.com/) in Chicago.

I learned everything I needed to get started and then went to work for a prop
trading firm, but found that I wanted something different working there. Having
come from a role where I was interfacing with so many people, I love software
development, but I also don't want to be taking tickets and just knocking them
out.

I had a side project working with Tensorflow.js and leveraging Google's system
that they put together called
[MobileNet](https://ai.googleblog.com/2018/04/mobilenetv2-next-generation-of-on.html)
that would classify images, so you could basically write on top of that and
create your own image classification. I had always wanted to start my own
company and Tyson (the CEO) and I had been together for a few years at that
point. I was planning an app for the retail fashion industry, but then we
decided, we're probably better just combining forces and working on a project
together. AutoCloud was born.

### What is the most interesting development challenge you've faced working on AutoCloud?

The original algorithm for laying out the infrastructure diagrams and 3D space
was probably the most challenging. Our original idea was to create these
Terraform generation templates, we realized after a few months this was going to
require a huge team of people. We'd been doing a lot of interviews with our
customers, and one of the things that had come through was could you just show
me everything that I have?

We knew how to get all the data but we didn't really have a way to visually lay
it out. Coming from design, UX, and then also software development, I felt this
was an interesting problem to tackle. We did it in 3D to take it to the next
level. I had to learn the 3D environment API and we leveraged
[Amazon Sumerian](https://aws.amazon.com/sumerian/) under the hood for the 3D
environment. Sumerian has its own special way of creating meshes, handling
asynchronous and synchronous actions, like how do I create this mesh, and then I
have to move it and I have to copy it.

We had to take a JSON object and somehow generate a visual representation of it.
How do the entities know how big they should be? How do they know where they
should live in relation to other things? That was a creative and fun problem to
solve and I learned a lot about game design since all of the browser-based game
engines operate on the exact same principles, which was cool. We could take the
knowledge from say, Sumerian to [ThreeJS](https://threejs.org/), to whatever 3D
web dev platform you want to work with and all transfer it across.

That code is still powering a lot of our visualizations, but of course, Paul has
come and improved upon it.

### What is the most interesting technology product or project that you've been playing around with recently?

I am continually impressed by [Webflow](https://webflow.com/). It is a tool that
I was initially very opposed to using because I made our original landing pages
from scratch with [Gatsby](https://www.gatsbyjs.com/), which is this really
cool, full-stack framework for creating really powerful web pages. It handles a
lot of stuff like prefetching and lazy loading and image optimization. It
handles all this stuff for you. It's a really great tool.

However, you're still writing React components and spending a lot of time on
something that maybe isn't the core of your business, especially since for us,
should not be spending all my time writing a landing page from scratch. Most it
was just our landing page. You have to think, we've got a couple of people, I
startups shouldn't be doing that unless they're using Gatsby for their actual
product. I was pushed over to Webflow and it is so much better than using
something like WordPress or Squarespace.

The amount of customization it allows and the amount that they've stayed true to
just basic HTML concepts is ideal. They still have margin and padding and all
those things, and they have CSS Grid and Flexbox. All of these concepts that as
a front end developer, you are completely accustomed to working with, you can do
it in Webflow and you can get rid of all of the hassles of having to have a
build pipeline and involve your infrastructure team in making sure that the
website is continually up, deployed when you need it. They don't have to deal
with it at all.

They set up the hosting and then even someone that's non-technical can go in
there and edit some text. They even have a CMS. It's really been a great way for
us to build an awesome landing page that's super customized.

### What is the rest of the tech stack?

We use React on the front end and Amazon Cognito for all of the user signups and
all of our handling of that data. I believe we're still using Express and
Node.js in the backend, and then we have GraphQL and
[Prisma](https://www.prisma.io/) for API interactions.

### Describe your computer hardware setup

I've been using the same 15-inch
[MacBook Pro](https://www.apple.com/macbook-pro/) since 2017. It has been a
workhorse, but as of late, there have been some difficulties with it keeping up
with all of the memory-intensive applications. Try running Adobe Illustrator,
Figma, a 3D environment and a Zoom call at the same time. The computer just
shuts down.. I think I'll upgrade this soon.

In terms of monitors, I've got a
[34'' Samsung Ultrawide QHD](https://www.samsung.com/us/computing/monitors/uhd-and-wqhd/34-sj55w-ultra-wqhd-monitor-ls34j550wqnxza/),
so that I could have enough space horizontally to have three files open on VS
Code at the same time.

Next to this monitor, I have my favorite child, hopefully Samsung won't be
listening, but it's my [LG 4K IPS Monitor](https://www.lg.com/us/4k-monitors),
which is gorgeous and beautiful for doing all of any kind of design work. The
color depth on the IPS panels is amazing. Eventually, I'd like to have two of
those, having the VA panel and the IPS side by side is not recommended since
their colors are completely different.

Mouse-wise, I have the
[Logitech MX Master 3](https://www.logitech.com/en-gb/products/mice/mx-master-3.html),
which is perfect for development or design work, and it has the perfect
FreeWheel scrolling. You can go through thousands of lines of code in one swipe
and stop on a dime. It has horizontal scrolling and everything is customizable
and is mapped to macOS, so I can just go to mission control and switch between
screens really quickly. I have endless fights between myself and the CEO who
still uses the Magic Mouse from Apple without a right-click button. Although I'm
still using the Apple keyboard with the number pad on it, hopefully, we'll
upgrade that at some point, because the ergonomics are not the best. Headphones
wise, I use
[BOSE QC wireless active noise canceling](https://www.bose.com/en_us/products/headphones/noise_cancelling_headphones/noise-cancelling-headphones-700-conferencing.html#v=noise_cancelling_headphones_700_conferencing_black%E2%80%9D%20with%20%E2%80%9Chttps://www.bose.com/en_us/products/headphones/earbuds/quietcomfort-earbuds.html#v=qc_earbuds_black)
earbuds, which are nice.

### Describe your computer software setup

**OS:** macOS

**Browser:** Chrome. Although I also use Firefox, Edge and Safari for all the QA
testing on the platform

**Email:** Gmail.

**Chat:** Slack.

**IDE:** VS Code.

**Source control:** Git and [GitLab](https://about.gitlab.com/).

### Describe your desk setup

I'm very particular about my chairs because I like to sit cross-legged or put my
leg over an arm. So I had to find one that had flared arms that were just part
of the chair and also cushioned. I found one on Amazon and I haven't looked back
ever since. Other than that, I don’t have anything special.

{{< img-center src="/img/interviews/autocloud-evelyn-latour-desk.jpg" alt="The desk of Evelyn LaTour, AutoCloud" width="100%" >}}

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** Coffee.

**Silence or music?** Silence or podcasts, depending upon how much thinking the
work that I'm doing requires.

### What non-tech activities do you like to do?

Working out and yoga. I do a lot of cooking, which has been easy especially
during the pandemic when you can't really do anything else.

I've always been into investing, trading and my friend recently got me into
crypto and DeFis, which has been fun for me as well. I love to travel, and Tyson
has gotten me into skiing and scuba diving. I'd love to get certified one day.

### Find out more

[AutoCloud](https://www.autocloud.dev/) allows you to visualize your cloud
resources. It was featured as an "Interesting Tool" in the
[Console newsletter](https://console.dev) on 13 Jan 2022. This interview was
conducted on 10 Jan 2022.
