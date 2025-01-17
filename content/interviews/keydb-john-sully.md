---
title: Interview with John Sully, KeyDB
who: John Sully
role: CEO
org: KeyDB
what: A multi-threaded high-performance fork of Redis.
tags: ["Database"]
date: 2021-04-20T12:00:00Z
draft: false
headerType: fixed
summary: Interview with John Sully, CEO, KeyDB.
isPage: interviews
topImg1Src: /img/interviews/keydb-john-sully-profile.jpg
topImg2Src: /img/favicons/keydb.dev.jpg
ogImg: /img/interviews/keydb-john-sully-desk.png
---

### What is KeyDB? Why did you build it?

[KeyDB](https://keydb.dev) started out as a fork of [Redis](https://redis.io/).
After I left Microsoft, I wanted to start something new. One idea was a search
engine where you could use regular expressions to search the Internet which I
built using Redis. However, I couldn't understand why it was only using one of
my eight CPU cores. I was annoyed that it was using only a small subset of the
machine so I spent a month adding multithreading, and then I wrote a blog
posting saying
"[Redis should be multi-threaded](https://medium.com/@john_63123/redis-should-be-multi-threaded-e28319cab744)”.

I was really surprised with the feedback I got from that post. On Hacker News,
it did very well. We saw there is something there. We also saw that when you
look into the problem,
[Redis had basically suggested](http://antirez.com/news/126) that it was too
complicated.

My thought process was simply if they're not going to do it, well, we can do it.
So we did - we made KeyDB as the database that we think we should have.

We weren't looking to start a database company at that time, it was just an
itch. But the response really surprised us. My thought process was simply that
there is a big need here and Redis had for some reason decided not to serve it.
If they won't then we will.

Starting out this way posed some challenges. Investors didn't really know what
to do with us. There were forks like MariaDB where parts of the main dev team
split off, but not many examples of a completely independent team just saying
"we'll go our own way here". It took two tries applying to
[Y Combinator](https://www.ycombinator.com), but we were getting very clear
traction and so they took us in. YC's main concern in that interview was whether
we were truly building something distinct from Redis. Getting into YC really
opened a lot of doors and I'm thankful they took a chance on us.

Redis was a great base, and it’s founder Salvatore Sanfilippo did a very good
job building it, but we wanted to take it in a different direction. He wanted to
go with the simplicity aspect, we really wanted to go with performance. Redis is
often used as a cache, so we felt it made most sense to focus on performance.
Redis later changed course slightly with i/o threads, but our approach at KeyDB
achieves better performance.

We also spend a lot of time ensuring we are always compatible with Redis. For
instance, Redis has certain consistency guarantees: if you do this query, you'll
get this result. This is important to users, because they don't want to switch
to a different database and then have subtle bugs that only show up some of the
time. As we do more work to improve how well we are able to multi-thread, such
as the work we’ve done to move away from the global lock towards async instead,
we will maintain that compatibility. We'll never (for the sake of performance)
loosen those guarantees, we always maintain that compatibility.

Redis was a great base, I really liked its API, its protocol, and generally how
it worked. But it was sad that it left so much potential on the table. That's
what we wanted to tackle with KeyDB.

### What does a "day in the life" look like?

In the early days, I’d essentially wake up, write code and go to sleep. Now,
it's a little bit more involved. We’ve been through Y Combinator and raised a
seed round, both of which required different skills. There's a lot more meetings
now! During normal working hours, my day is mainly meetings and then I code at
night when things are a bit quieter.

### What does the team look like?

My role has two aspects: the CEO element talking to investors, then time for
developers as well.

My co-founder, Ben, is focused a lot more on the deployment side of things, like
DevOps. He makes sure that when people deploy things, there's packages and
documentation and all the key items needed for developers to work with a
project.

We’ve recently been focussed on expanding our developer team so we can continue
to build out the core database product.

### How are you working with your open source community?

We've tried to keep in good contact with the Redis team and have upstreamed
patches where it made sense. We have different philosophies and not everything
we do in KeyDB makes sense to go into Redis. Before Salvatore stepped down from
his various projects at Redis, I talked to him a number of times.

In terms of the community at large, we have a number of touch points.
[GitHub is a major one](https://github.com/EQ-Alpha/KeyDB). We’ve also used
chat, though that became overwhelming and we stepped back from that for a while.
We're now reintroducing chat again using Slack that will allow us to talk more
directly with users. We also have
[our message board as well](https://community.keydb.dev/).

### Do you have any advice on how to deal with all those different channels?

If you're going to do a chat, you have to invest the time in it. People expect
you to respond in a reasonable amount of time. If you can't give that time, then
don't do it. Make sure that you know what you're getting yourself into. It
really does pay off because customers appreciate having a direct connection with
the team, and you learn more.

With GitHub if you get an issue, you're really just talking about bugs, but
through the chat customers will tell you what they want to see. You get a freer
flow of information that really helps make the product better. It's worth it,
but you really have to block off the time to make it successful.

### How did you first get into software development?

I've been programming as long as I can remember. Early on I was playing with DOS
and Lotus 1-2-3. I have very early childhood memories doing little formulas. I
was also fascinated with the DOS prompt. You could type things in and the
computer would do it. It grew from there.

As long as I can remember, I've always been playing around with computers. At
high school I got more serious, and learned C and a little bit of C++.

I took a different track than I think most people take because I went right to
Assembly, which I don't think is normal. I was fascinated with these old, 1970s
8-bit machines. It was simple because there was nothing in the way - it was just
bytes and the raw hardware. I was programming emulators and making lights blink
and stuff like that. I enjoyed this so much I went back and
[ported KeyDB to a real 1970s 8-bit computer](https://github.com/JohnSully/KeyDB_Z80).

For as long as I can remember, I've always been fascinated with coding. Once
you're in Assembly, going to C is fairly natural. That was my progression. I
think normally people would go with a higher level of language, like JavaScript
or Go. It was a little different for me.

### Is C the main language you're working in today?

We do modern C++, not the old C++98. I think that's a bad language. Modern C++
is nice because it's a superset of C, and Redis is still C. If we need to
downstream any code from that, we can still do that, but having the extra
features in there is nice.

One of the downsides of C is people will often use suboptimal data structures
because it's so hard to use the right ones. With C++, it's fairly easy to use
the right data structure for the right thing. That's one of the reasons I like
it.

### What's the most interesting challenge that you've faced with KeyDB?

As you want to scale across different cores, bottlenecks start to creep up
because of the global lock. We've been doing more lock free programming to try
to improve that.

This has been very difficult on a technical level, but the most challenging
thing has actually been on the business side. It's one thing to have an open
source project that people use, but when you start to charge for it the
expectations go way up. You can be fairly successful as an open source project,
but if you want to start trying to sell, you need to be more organized. That has
been a big learning curve.

### How have you approached measuring KeyDB performance?

We didn't set out to do something where it would just get good benchmarks. We
wanted a product that you deploy and see real-world benefits in your
application.

When we do our testing, we use third-party testing tools. We use
[memtier](https://github.com/redislabs/memtier_benchmark) and
[the benchmarking approach described by Redis](https://redis.io/topics/benchmarks) -
nothing special.

There is also this idea of pipelining - you can send multiple commands in
parallel or one time. Redis can get quite good numbers if you use this approach,
the problem is that's not really how most customer applications work. Most of
the time you send a query, you wait for the results, then you do some processing
and you might send another query. We always test that way. We send with a queue
depth of 1, then wait for the results. We try to match what the user is going to
see on the ground.

### What is the most interesting tool you've been playing around recently?

When I started I didn't really fully understand Docker. Conceptually, I knew
what it was, but questioned why would you want a whole separate copy of all the
tools. When I started to look at how people are deploying it, and all the
different Linux distros you want to support, Docker makes so much more sense. It
makes life so much easier for everybody. Not just the user, but also us when we
create our images. Docker has been the coolest thing that I've really started to
appreciate.

We've had users creating [Helm](https://helm.sh/) charts for Kubernetes. The
orchestration is interesting. There is a lot more depth there when it comes to
how fast KeyDB is because introducing all of these different orchestration
layers become bottlenecks for us. Trying to navigate best practices is something
we're still trying to make work so that we can cater for all the different types
of systems our customers will deploy KeyDB on.

### How are you tackling on-premise vs cloud?

Open source essentially is on-premises. Customers download the code or they use
our Docker container. We're in the early stages of
[building the cloud version](https://keydb.dev/keydb-cloud/), which is in beta
right now.

With on-prem deploys, there’s a lot of different things that can go wrong. Our
hosted service allows us to make sure everything is optimally set up for maximum
performance. We think a hosted service is best for most people because we set
everything up for you.

The next step is for KeyDB Cloud to work more closely with existing cloud
environments. Lots of people are already running in the cloud so we need to be
as close to their environment as possible for minimum latency, and within their
existing networks.

### Describe your hardware setup

{{< img-center src="/img/interviews/keydb-john-sully-desk.png" alt="The desk of John Sully, KeyDB" width="100%" >}}

I do most of my software development on a desktop, I'm on an AMD 3900X (12
core). That's been pretty good for software development. For meetings and stuff,
I've started to use an M1 MacBook Air. We got it originally just to make sure
KeyDB ran on it, but it's been really good for meetings. I go between the two
right now.

I use a Microsoft ergonomic keyboard and I recently switched to a trackball
because my hand was spending so much time typing on the computer all the time.
My hands got a little wonky, and I got a bit of RSI. I found that it helped to
have it in a different position than the mouse. I've been focusing a little bit
more on ergonomics lately.

My main desktop is Windows and I do some work in Windows Subsystem for Linux. I
use two Dell 4k monitors. I like to have really crisp text.

I also have a mini-lab of Dell rack servers in my basement so that we can do
proper testing across differently configured machines. In the early days we used
to test using my desktop but one of the things we found is that you can saturate
a gigabit network connection really easily! You need 10 gigabit ethernet and
higher. The way that the CPUs are tuned are also different for the server
compared to a desktop. The Dell servers allow us to replicate an environment
more similar to where the code is going to run.

And of course we run a lot of cloud instances, mainly for benchmarking so other
people can quickly spin them up and replicate our tests.

### What do you think about the emergence of ARM chips, like AWS’s Graviton?

[Graviton](https://aws.amazon.com/ec2/graviton/) works really well with KeyDB -
we did a few early tests on that. However, ARM generally has lower single thread
performance, so that can have some impacts. I like that ARM is really coming
into its own in the data center and think it has a very strong future. There's
some little software differences at the lower levels, but at a high level, I
don't see a major challenge. The performance is there.

### Describe your computer software setup

**OS:** Windows.

**Browser:** Firefox.

**Email:** Microsoft 365.

**Chat:** Slack.

**IDE:** VS Code.

**Source control:** GitHub.

### When coding

**Daytime or nighttime?** Nightime

**Tea or coffee?** Coffee.

**Silence or music?** Music.

### What non-tech activities do you like doing?

I really like getting on the water. Kayaking and things like that are fun.

### Find out more

[KeyDB](https://keydb.dev/) is a multi-threaded high-performance fork of Redis.
It was featured as an “Interesting Tool” in the
[Console newsletter](https://console.dev) on 22 Apr 2021. This interview was
conducted on 20 Apr 2021.
