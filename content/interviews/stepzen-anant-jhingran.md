---
title: Interview with Anant Jhingran, StepZen
who: Anant Jhingran
role: CEO
org: StepZen
what: GraphQL as a service.
tags: ["APIs"]
date: 2022-05-12T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Anant Jhingran, CEO, StepZen
isPage: interviews
topImg1Src: /img/interviews/stepzen-anant-jhingran-profile.jpg
topImg2Src: /img/favicons/stepzen.com.png
ogImg: /img/interviews/stepzen-anant-jhingran-desk.jpg
---

### What is StepZen? Why did you build it?

The reason we decided to build [StepZen](https://stepzen.com/) was quite simple.
Myself and my co-founders had previously worked on
[Apigee](https://cloud.google.com/apigee), where we got a chance to see
customers and developers move through their API journey. We saw it took some
time for people to figure out why the APIs were important, but once they got
them, it didn't mean that they actually built them fast. Time and time again,
the front-end devs would say, "Can I get an API for X?". The backend team would
say, "Got it. We know you need it, but give us three months or six months,
because our next quarter is spoken for”.

APIs were not being developed at the rate, pace and speed at which they needed
to be for people who were using the APIs to build an awesome experience. The
reason for this was there was too much required to build them out - define the
schema, figure out the methods, set up the backend, handle errors, set up
caching, deploy to production…

I come from a database background, as does one of my other co-founders, [Sridhar
Rajagopalan](https://github.com/sridhar-rajagopalan). In the world of databases,
you don’t write a program for every question. We wondered, is it possible for us
to bring the world of databases to the world of APIs? Is it possible that the
API can be just configured? Can we do to the world of APIs, what SQL did to the
world of databases? If we can do this, then we'll unlock the productivity rate
at which APIs are being built.

We've also had two other ‘aha’ moments. Firstly, while REST APIs were
interesting, now front-end teams were clamoring for a GraphQL API. Secondly,
while building an API is exciting, the real pain is in running, managing,
scaling, and optimizing. We thought, can we run an awesome service, so that
people assemble their API, give it to us, and then we take care of everything
else?

That is our vision for StepZen. Reduce the friction between the front-end teams
wanting stuff and the backend teams being able to deliver it. To do this, we are
bringing some magical techniques to the world of GraphQL API creation and
operations. Developers can point StepZen to their backend - SQL, REST, SOAP,
whatever - and we generate a GraphQL API for them, fully managed with high
performance and reliability.

### What does a “day-in-the-life” look like?

Interestingly my co-founder [Helen](https://twitter.com/helewh) and myself are
the furthest West of all our team. Everybody else is to the east of us. Some in
the middle of America, some in Florida. Sridhar, our co-founder, is in
Liverpool, UK. We've also got some key employees in Finland and the
Netherlands.

This means my mornings are jam-packed. Luckily, I'm an early riser, but until
about 11ish, I’m in meetings. If you look at my calendar and you only look at
the afternoon part of my calendar, you'd say, why don't you do anything. The
afternoons are less packed and I have some think-time and doing-time. I like it
because it just enables me to focus on not just coding, but writing. That's how
I love it.

### Do you still get to spend time coding?

The act of coding is the closest that many of us will come to creativity. You
imagine something and you produce something. It is magical that you can
single-handedly, or with a small team, actually create something. I remember so
many ‘aha’ moments in my life. That passion has always been there. Sridhar, who
runs engineering, doesn't want me near production level code now, but we have a
set of experimental repos where I can experiment.

I try to keep myself technical and programming all the time. In addition to
programming, there was a lesson that my PhD advisor taught me, which was that
you can do awesome stuff, but that is just for you, ultimately you should also
inspire others within your team to do great work.

The act of inspiration means taking your thoughts and communicating them
effectively. I have taken that on board. I still get a B grade in it, I don't
get an A grade in it, but I take this responsibility really seriously.
Communicating in various forms, conveying my passion, conveying why we are doing
stuff, and getting the ‘aha’ moment for the developers, so that they even pay
attention to us is important to me.

It is great to hear from developers who say, we read everything that you do, and
we love it. My philosophy is don't just do good work, make sure that other
people embrace that passion. That's what I try to do in the afternoon.

### What does the team look like?

We’re very flat. We've got seven core engineers, and another six of us are
focussed on developer advocacy or spending time on the business. I am lucky to
have, as my third co-founder, Helen Whelan, who ran marketing for Apigee. It is
great to have somebody who's fantastic at making sure that we can do the right
things with respect to developers and customers. 

### How did you first get into software development?

When I was doing my undergrad at [IIT Delhi](https://home.iitd.ac.in/), I was
studying electrical engineering and I was fascinated with computers. When I got
a chance to do my bachelor's project, I was incredibly lucky to have an
inspirational advisor. At IIT we had [BBC
computers](https://en.wikipedia.org/wiki/BBC_Micro), and using BASIC, with my
professor's advice, we built a core database system.

Imagine building a database system that would fit on a floppy, the data and the
database system. We were able to send that database system to many schools and
got people interested in the fact that data and collecting data and accessing
data is important. Doing this I realized I can have fun doing it, but it can
actually make a difference.

After that I spent time working in C. I never got into object oriented
programming because I found the Java model too clunky. I moved into Python and
more recently, Javascript and Go. We do a lot of work with JS, but my go-to
languages are C and Go.

### What is the tech stack for StepZen?

Our backend is mostly Go, but some disconnected services have to be really high
performance so are written in Scala. All the front-end and the CLI are all
JavaScript tools.

### What has been the most interesting challenge building StepZen?

Our starting inspiration is that before Google search came around, with
something like AltaVista, Lycos or Ask Jeeves, you had to really know how to
structure the queries correctly. Google came about and managed to solve an
incredibly hard problem with Page Rank, but offer an incredibly simple user
experience.

The ‘aha’ moment was when Sridhar showed me “movie theaters in Santa Clara”, and
it came back and said, "Do you mean movie theaters near Santa Clara?" It figured
out what I was looking for. Similarly, we don't want to impose the burden of
complexity on the end-users with StepZen.

Similarly, there are some incredibly hard problems to solve with respect to
backend protocols, performance optimization, caching, and how this backend
speaks with language X and language Y. Can we solve all of those hard problems
and make it incredibly easy for developers to actually program around it? In my
mind that is always a tough challenge, because engineers want to solve hard
problems perfectly, and then worry about what the implications will be for the
people who actually use them. Getting both of those trains to go in parallel has
been a lot of fun, but a big challenge.

### What's the most interesting tech you're playing around with at the moment?

[GitHub Copilot](https://copilot.github.com/) is interesting. I'm not a fan
quite yet, because I find that it gets in the way almost as often as it helps.
As with any of these helper tools, you've got to figure out the right working
model and the right mode. When it works, it's mind-blowing.

The other things I am fascinated with right now are the tools that help StepZen
to succeed as a business. Building a business we have to find and sell
prospects. At this stage, you don't have a sales engine. What is the tech that
will enable you to sift through and understand? It really is about data
integration. What does that company do? Have they posted some jobs including
GraphQL? Do they have an API story?
  
I've recently started using [Apollo.io](https://apollo.io/). It is mind-blowing
how well it integrates with LinkedIn and brings all of these things in. I know
behind the cover, they're doing something similar that we are trying to do as a
horizontal platform. I find the notion of integrating data, and that it helps me
to actually better prospect, absolutely fascinating. It's a product that I'm
using as a business user, as opposed to as a technical user. It is fascinating.

### Describe your computer hardware setup

I'm a two-finger typist. I never learned how to type then I got Carpal tunnel
once. When I saw the doctor, he said don’t learn to type, because the slower you
type the better! So I've got a simple keyboard setup. I use a MacBook Pro
15-inch, and am completely into Mac . I just absolutely love it. I love how
simple Mac is. Mac gives me a real shell, as opposed to a fake Windows shell.

I like to have a full monitor here and at home. Right now at work, I have a
wireless setup. It’s a basic setup with tons and tons of memory on my laptop.

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack.

**IDE:** VS Code.

**Source control:** GitHub.

### Describe your desk setup

{{< img-center src="/img/interviews/stepzen-anant-jhingran-desk.jpg" alt="The desk of Anant Jhingran, StepZen" width="100%" >}}

I have a fancy standing desk, but I don't stand enough using it. It was
definitely worth the investment. In our conference rooms, we have standing desks
too, and I try to always stand when in meetings. Taking care of yourself is as
important as taking care of the business. 

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** Tea.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I'm a bit of a crossword puzzle aficionado. I have a couple of apps, including
the London Times app. My wife and I compete against each other in Wordle and
Spelling Bee. 

I also love reading. Typically, popular science or reading about Web 3.0 or
reading The Economist or the New Yorker. Lastly, I love to spend time with my
family.

### Find out more

[StepZen]([https://](https://stepzen.com/)) provides GraphQL APIs as a service.
It was featured as an "Interesting Tool" in the [Console
newsletter](https://console.dev) on 19 May 2022. This interview was conducted on
12 May 2022.
