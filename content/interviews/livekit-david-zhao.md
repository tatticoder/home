---
title: Interview with David Zhao, LiveKit
who: David Zhao
role: CTO
org: LiveKit
what: Open source real-time video and audio.
tags: ["Audiovisual"]
date: 2021-08-25T12:00:00Z
draft: false
headerType: fixed
summary: Interview with David Zhao, CTO, LiveKit
isPage: interviews
topImg1Src: /img/interviews/livekit-david-zhao-profile.jpg
topImg2Src: /img/favicons/livekit.io.jpg
ogImg: /img/interviews/livekit-david-zhao-desk.jpeg
---

### What is LiveKit? Why did you build it?

[LiveKit](https://livekit.io/) is an open source platform for building real-time
video and audio. We make it super easy for other developers to build apps on top
of it, or to include real-time presence, so you can connect to the other person
in the room.

We started working on a side project last year, early into COVID. Like other
hackers, my co-founder and I were stuck home and had a few ideas for apps that
made remote-work more tolerable. Surprisingly all of them required remote
presence, with some kind of video.

We got familiar with the current solutions that are out there and realized how
limiting some of them are. The hosted platforms tend to get pretty expensive,
especially when you're building something that's social, is always on, and where
people are publishing a lot of videos.

We looked at the open source solutions and realized how hard they are to get
started. They almost always require some level of understanding of
[WebRTC](https://webrtc.org/) and you are required to assemble the different
pieces together yourself. Some of them only provide the server-side and you have
to figure out how the clients work. We thought that there should be an easier
way - that's why we started LiveKit.

### Why did you make LiveKit open source?

For my entire career, I've benefited tremendously from open source. I've started
two companies before and we were all heavy users of open source. None of what I
built would have been possible without open source software. Secondly, we were
trying to increase flexibility. We observed limitations in the existing
services. Anytime you're trying to do something more complex or different from
just building a video conferencing solution, you are blocked.

It's rather binary, it either works or it doesn't. As an engineer and hacker, we
believed in hackability. How do I make something that other people like me can
just modify and contribute back? Seeing some of the successful open source
projects through the community contribution was really appealing.

When we started LiveKit, there were just three of us. There's only so much we
can do and this is a fairly complex project, so we thought if we produce this as
open source and create an ecosystem, the community can keep making it better and
improve it.

### What does a "day in the life" look like for you?

I get up about 7:30 am every day and then hang out with the kids for a couple of
hours. I have two boys, seven and five years old. I make coffee in the morning
before I can get anything done, then I'll start working. I work at home as most
of us do these days, and start by going through Slack. We also have a user Slack
for folks that need help with LiveKit. A lot of our users are international, so
they're sending messages and asking questions while we're asleep. I catch up on
that, scan through email, and then look through GitHub which is where we get
contributions, patches and issues.

We've made a few hires lately, so the team's looking more like a real company.
We have our daily stand-ups and catch up, then I try to keep my days free of
meetings. It's hard given that we're small and I'm still one of the main
contributors to LiveKit. I try to keep most of my day available so I can dig
into the technical work. I probably still spend about 50% of my time coding and
50% dealing with other stuff.

### What does the team look like?

We're six people. Most of us are engineers. The team is focused on deep video
stuff, backend distributed systems, and clients. Currently, I’m helping onboard
our new hires. We're pretty small but quickly growing and are hiring right now.
If you're interested in building video platforms,
[let us know.](https://livekit.notion.site/Come-build-with-us-af2b57e9c4e64c1f84b745e6a5c6a9d1)

### What is the tech stack?

We wanted to use a modern stack, so we built the entire system on Go. This is
really thanks to an awesome Go WebRTC implementation by
[Sean DeBois](https://github.com/Sean-Der). Sean decided that there should be a
modern WebRTC stack written in Go available for developers to use. The project
is four years old now and it's really thriving. It's got a really awesome
community behind it.

We picked Go because we saw this problem as a distributed systems challenge,
more than a WebRTC challenge. If you get enough people in the room, then what
you're using in LiveKit is a WebRTC Selective Forwarding Unit. You're forwarding
a lot of data between people, getting data from one person, and sending it to
many others in the room and vice versa. It was important for us to handle a lot
of simultaneous connections on the node. Those attributes make Go kind of a
better choice in my opinion.

Go is awesome for cross-platform reasons too. It is easy to cross-compile. I can
do all of the work on my Mac and run one command and get a Linux executable in
five seconds or less, then I can just `scp` it onto a Linux machine and start
running it. It's a single binary and super easy to distribute.

### How did you first get into software development?

When I was little I was really into video games. I just remember going to the
arcade and playing Street Fighter. That was like the arcade favorite back in the
day. I remember thinking that I want to build something like this. My dad knew a
bit of programming. He's not a programmer but was really interested as a
hobbyist, so he encouraged me to try. I remember him taking me to the computer
labs and teaching me
[Logo](<https://en.wikipedia.org/wiki/Logo_(programming_language)>). It's a
really old educational programming language where you control a little turtle,
and then you can tell it to go up, go left, and so on.

That's probably the genesis of how I first got into programming. I remember
doing some early really simple mods, changing the .WAV file sound effects from
games, recording my own tracks, and putting them in. I'm sure a lot of people
have done this, opening saved games in a hex editor and changing values to give
yourself superpowers. That was fun. I was always pretty into understanding how
computers work, it seemed like a natural path.

My first language was JavaScript in high school. It was really easy to learn but
it always seemed like a toy at the time. When I went to college, I learned C
first. They still taught C as a beginner language. In hindsight, they are now
way better languages. Professionally when I first started playing around with
the web, it was PHP and then Ruby, when Ruby on Rails was popular. With my first
startup, we were doing a lot of mobile, which was Objective C.

We got into Go at a later point around 2015. From my perspective, I'm agnostic
when it comes to languages. I think every tool has a strength. I tend to just
pick things up and try to learn them. I'm definitely more proficient in Go and
some of these more modern things because I've been playing with a lot of them.

### What's the most interesting challenge that you have faced building LiveKit?

There are a lot of challenges. When I first approached I had a naive view of how
straightforward it would be, but as I got deeper I thought, "Oh man, there's
still more to learn." I think the biggest challenge is really understanding the
different pieces of WebRTC at a level deep enough that I can actually build a
platform on top of it.

WebRTC is not a single standard. It is a bunch of different technologies that
make the whole thing work. It's kind of incredible how thoughtful people were
when developing all the layers. The biggest challenge is peeling these layers
and understanding more and more of how things work. I'm definitely standing on
the shoulders of giants here.

### What's the most interesting tool you’ve been playing around with recently?

There's been a few, but one that really stands out is
[Gather.town](https://www.gather.town/). It’s a virtual office that almost
blends a video game with Slack, where you have an avatar in this virtual space.
You can decorate your office and change the layout to whatever you want. You
appear as entire teams sitting in the office together. The moment you walk up to
someone or go into a conference room or a private space with someone, you can
see each other's video and audio. Even though it seems like such a simple
transition, the feeling of seeing somebody sitting next to you in the virtual
space and being able to walk over to them and start a conversation made the team
feel a lot closer.

We started using it about a week ago and it's been awesome. The team's really
liking it. Every day during standup we'll all stand up from our virtual desk in
the outer space, walk over to an area, and as soon as you get closer to each
other, you can see each other’s video.

The funny thing is one of my coworkers noticed something else in the virtual
office. He wanted to check it out, just using his cursor and started to move in
that direction, and he didn't realize how he couldn't hear us anymore. He was
like, "Oh, wait. As soon as I walked away I lost video", I'm like, "Yeah. What
do you think happens in the real office?"

I don't know if this is what the future of work looks like but it's working out
pretty well for us.

### Describe your computer hardware setup

I have a fairly standard set up - a 16 inch MacBook Pro from the last
generation.

At my home office, I have a laptop stand and a 34-inch monitor. That's my
primary work surface. I have a [CalDigit](https://www.caldigit.com/) Thunderbolt
hub. I just plug one thing into my laptop and everything works.

I use the [ErgoDox](https://ergodox-ez.com/) keyboard. The learning curve was
actually quite intense. It took me about a week to figure out where my key
mappings are, but it is better. I really like the split, ergonomic keyboard. I
also have a standard Apple trackpad.

I typically don't use headphones at home. I have a Sonos nearby for music and
sometimes I'll turn that on.

{{< img-center src="/img/interviews/livekit-david-zhao-desk.jpeg" alt="The desk of David Zhao, LiveKit" width="100%" >}}

### Describe your computer software setup

**OS:** macOS.

**Browser:** I'm primarily on Chrome, but end up using Safari and Firefox for
browser testing. We do quite a bit of stuff in a browser with a WebRTC SDK so a
little bit of everything.

**Email:** [Spark](https://sparkmailapp.com/).

**Chat:** For personal stuff - Signal, Telegram, and iMessage. For work, I use
Slack.

**IDE:** VS Code for anything, but for Go I use Goland.

**Source control:** GitHub.

### Describe your desk setup

I have a standing desk, but I don't stand as much as I probably should. For my
chair, I have a [Steelcase](https://www.steelcase.com/).

### When coding

**Daytime or nighttime?** Nighttime.

**Tea or coffee?** Coffee.

**Silence or music?** 50 / 50. Sometimes if I'm deep into doing some coding, I
will listen to music, but otherwise, I prefer silence.

### What non-tech activities do you like doing?

Lately I've been getting to grilling. I’ve got a
[Big Green Egg](https://www.biggreenegg.com/), which is a barbecue smoker. It's
been cool learning how to do stuff with it. The flavor profile it produces is
just so different from traditional grills that I've used before. Especially
compared to gas grills. Otherwise, I love doing just about anything on the
water.

### Find out more

[LiveKit](https://www.osohq.com) is an open source platform for building
real-time video and audio. It was featured as an "Interesting Tool" in the
[Console newsletter](https://console.dev) on 29 Jul 2021. This interview was
conducted on 25 Aug 2021.
