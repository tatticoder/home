---
title: Interview with Jason Laster, Replay
who: Jason Laster
role: CEO
org: Replay
what: Time travel debugger.
tags: ["Debugger"]
date: 2022-02-02T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Jason Laster, CEO Replay
isPage: interviews
topImg1Src: /img/interviews/replay-jason-laster-profile.jpeg
topImg2Src: /img/favicons/www.replay.io.png
ogImg: /img/interviews/replay-jason-laster-desk.jpeg
---

### What is Replay? Why did you build it?

[Replay](https://www.replay.io/) is the first collaborative developer tool for
the web. Replay helps you record a bug and share it with your team so that
anyone can debug it after the fact.

Time travel debugging is something I have been fascinated by for 10 years, ever
since I watched [Bret Victor’s](http://worrydream.com/)
'[Inventing On Principle](https://www.youtube.com/watch?v=PUv66718DII)' and saw
him demo Mario running and jumping over the bridge, then rewinding and seeing
the path that Mario took. I have wanted to work on something like Replay ever
since.

When I joined Mozilla in 2016 to work on the Firefox debugger, I thought this
was my chance. I didn’t realize that they had actually already built the first
production time travel debugger in the world. The developers who work on
[SpiderMonkey JavaScript Engine](https://spidermonkey.dev/), the Graphics
Engine, the DOM, all swore by it. It was their secret weapon. Anytime there was
a really hard bug, you would look at it with GDB and if you could not figure it
out, you could just record it, and then in GDB, you could pause and rewind. That
was the killer feature - add a breakpoint and then rewind to the last time it
was hit or fast forward to the next time it is hit. The question has always
been, could we build something similar for web developers?

It is a really hard problem to solve.
[Brian Hackett](https://www.linkedin.com/in/brian-hackett-0969a070/), who
ultimately became my co-founder and CTO at Replay, had spent five years with
Mozilla trying to solve this problem. We thought we should go for it, which led
us to starting Replay.

### What do developers use currently to do this?

Most people use [Datadog](https://www.datadoghq.com/) in production to see if
there is an issue. [Honeycomb](https://www.honeycomb.io/) is amazing for
observability, but at the end of the day developers want to debug with print
statements! It does not matter if you are just writing your first hello world
program, or if you are working on Gecko the Firefox engine. You add a print
statement to your code, refresh, rerun, and you hope you could reproduce it.

The premise of Replay is that you can record the problem once and then you can
find a line of code and the console just lights up with all those logs as if the
print statement has been there all along.

### What does a "day in the life" look like for you?

I spend a lot of time talking to users who are using Replay and getting their
feedback, or talking to people who want to use Replay and helping them get
started. I used to spend a lot of time in the code, trying to make everything
work, but now we have this incredible team working on all our tools. I’m now
trying to keep up with what everyone is working on.

For example, we just shipped the elements panel last week. You can pause
anywhere in the Replay. Use the note picker to inspect elements, see its styles,
attributes, layout. Sharing that with people and getting their thoughts,
feedback that has been fun.

### What is the team structure around Replay?

The team is currently twelve people, all with incredible backgrounds. We have a
brilliant designer who comes from the Bret Victor creative programming space and
helped run Microsoft's mobile design studio back when the Microsoft mobile
design studio was hundreds of designers. Our engineering manager was one of the
early engineers working on EC2  and was an early team member at Cloudflare.

We have people who worked on Node, who worked on the Just-In-Time Compiler
within Firefox's SpiderMonkey, working on the runtime. Our backend is a crazy
Kubernetes, Docker beast that can start up a browser and then run it with the
recording. We have a lot of devtools engineers who've worked on Babble and
worked on open source libraries and are excited to build their first elements
panel and network monitor.

### How did you first get into software development?

I’ve always enjoyed building. When I was in college, I picked up Ruby on Rails.
Out of college, I did this program by the
[Recurse Center](https://www.recurse.com/), which is a three-month retreat for
programming. I wanted to work on an open source library like Rails with the
thought that if I understood how Ruby on Rails worked. I would be better at
debugging. I ended up spending the full three months working on the Ruby REPL,
the Python REPL, and a bunch of other debuggers and realizing that they are
written in their language and you do not have to be this super nerd to work on
something like autocomplete. That felt really empowering.

Back in Recurse, it was Ruby. I still think it is an incredibly elegant and
expressive language. I fell into JavaScript just by virtue of being at Etsy and
working on the front end. Having spent time with the JavaScript team at Mozilla,
I felt so comfortable with what JavaScript can do, and the call stacks, and why
variables are in each scope.

### What is the most interesting development challenge you've faced working on Replay?

One of the reasons why Replay was so scary at Mozilla was each team looked at
what Replay was doing and was terrified of maintaining it. How could they be
expected to understand how this crazy system is running? Since leaving Mozilla,
we have done a good job of moving a lot of the recording bits into its own
standard component so that we could record Firefox, Chrome, Node, and in the
future Python and Ruby and so on.

The most interesting development challenge when you have this standalone
recorder is what happens when it fails? In the success mode we capture
everything coming into the browser, every system call. The failure mode is
something that is difficult to deal with, because of what is missed when there
is an error.

If we do not capture it, the process runs out of sync with the other processes.
The way we got good at that was we wrote this crazy automation system that would
record the top 500 sites. Instead of just Replaying it from the beginning to the
end, we took that recording, and then we just chaos monkey’d it. We added a
million breakpoints to it and rewound it to a million spots and examined a
million variables. As as soon as we did that, we realized that our stability was
not 90%, it was 15%. We had all the bugs we could ever ask for!

### Does that collect a lot of data?

A standard Replay capture is smaller than the video of the same thing. If you
were to just record to video the page, that video would be larger than our
Replay. You could Replay the Replay and have a video of every paint that a
browser made, all of the internal application state, and all the execution
choices. It is a weird property of the system that we can recompute all the
determinism, all of the execution,m so it doesn’t require us to store everything
that happens.

For all the processing we can use AWS’s big spot instances, such as those with
100+ cores! Our recordings can run maybe 50 Replays on the same Node. And when
it is idling, very low usage, memory usage plummets and we don’t need all those
resources. But then you add a print statement that is called 30 times across the
recording, and we go from a hundred megabytes of RAM up to 30 gigabytes and all
the cores and then back down under a second.

### What is the most interesting tool you’re playing around with at the moment?

This probably will not surprise you, but with something this wild on a system
level, you cannot run Replay on a laptop, you have to use something like the EC2
instances - our log files have hundreds of thousands of lines of JSON to just
communicate what happened.

We pump a bunch of that JSON into Honeycomb, so Honeycomb is by far the most
interesting and exciting tool I have used in a while. It has done such a good
job of helping us understand P90 performance of print statements or which users
are having more crashes with this type of issue in this type of scenario. You
can filter it down and then see those users and immediately know that this is
what I'm going to focus on.

### Describe your computer hardware setup

I have got a MacBook Pro with a Dell 24 inch monitor and a fun
[Kinesis Ergonomic Keyboard](https://kinesis-ergo.com/).

One of the nicest things we have done is move all of the backend development
into the cloud. I can have VS Code running, make a change that then goes up to
the cloud. It runs the build in under 20 seconds, and my laptop is not freaking
out everytime.

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome. I could not use Firefox because at Mozilla I was constantly
rebuilding Firefox, and that would blow away my settings and everything!

**Email:** Superhuman.

**Chat:** We use Discord at Replay, as it is really easy for anybody in the
community to join.

**IDE:** VS Code.

**Source control:** Github.

### Describe your desk setup

I have a really nice live edge desk with a standing desk base.

{{< img-center src="/img/interviews/replay-jason-laster-desk.jpeg" alt="The desk of Jason Laster, Replay" width="100%" >}}

### When coding

**Daytime or nighttime?** Night.

**Tea or coffee?** Coffee.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I have been doing a lot of woodworking the past couple years, and have been
making furniture. The process has the same kind of builder debugging mindset
that you have in software where you are trying to figure out how to do it. You
always have these moments where you are like, “I should start over”, then you
figure out a way to make it work.

### Find out more

[Replay](https://www.replay.io) is a time travel debugger. It was featured as an
"Interesting Tool" in the [Console newsletter](https://console.dev) on 17
Feb 2022. This interview was conducted on 2 Feb 2022.
