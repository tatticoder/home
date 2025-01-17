---
title: Interview with Tom Hacohen, Svix
who: Tom Hacohen
role: CEO
org: Svix
what: Webhooks sending-as-a-service.
tags: ["API"]
date: 2021-05-27T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Tom Hacohen, CEO, Svix
isPage: interviews
topImg1Src: /img/interviews/svix-tom-hacohen-profile.jpg
topImg2Src: /img/favicons/www.svix.com.svg
ogImg: /img/interviews/svix-tom-hacohen-desk.jpg
---

### What is Svix? Why did you build it?

[Svix](https://www.svix.com) is webhooks sending-as-a-service. It's like Twilio
or SendGrid, but for Webhooks.

I originally had the idea when I was working on a different project called
[Etebase](https://www.etebase.com/), which is an SDK for building end-to-end
encrypted applications. Our users kept on asking us for webhooks, but we kept on
deferring doing it. The thing is: we had built a beautiful API at Etebase that
had taken a long time to get right, but our webhook feature wasn’t going to be
anywhere near as polished. There was so much to deal with - exponential backoff,
retries, payload formats, management UI - that we just didn’t have time to build
it to the level of quality we wanted. Especially since webhooks were not our
core business. However, it was only when a friend of mine asked about how she
should go about adding webhooks to her own product, that I realized "Oh, maybe
there's a business here."

{{< img-center src="/img/interviews/svix-tom-hacohen-product.png" alt="Svix product screenshot" width="100%" caption="Svix webhook management UI." >}}

### What was the idea behind Etebase?

I was born in the late '80s and everything was hackable back then - the
Pentagon, the FBI - everything was being hacked all the time. Also during that
time, everyone’s data was gradually going online. I found it crazy that people
would store their data on something that gets hacked all the time, so I just
avoided the cloud. I wish I could say that changed, but hacks still happen all
the time. However, the cloud is convenient, and not storing on the cloud meant
my data was only on my device, and thus it occasionally got lost!

I also worked on [OpenMoko](http://wiki.openmoko.org/wiki/Main_Page), an open
source software and hardware mobile phone, but again, the same issues remained.
I ended up joining Samsung and started working on
[Tizen](https://www.tizen.org/) and Android, but it continued to bug me that
everyone’s data is stored unencrypted on the cloud.

Eventually I decided to quit my job, and build an encrypted app for encrypting
your contacts, calendars, tasks, and notes. I thought: "Okay, the cloud is
great, but I don't want an unsafe cloud. Let's use the cloud, but encrypt
everything on the device." That was [EteSync](https://www.etesync.com).

Throughout the life of EteSync, people kept asking me for an SDK to build
encrypted applications. Encryption is very easy. You take a key, you run it for
one of the recommended encryption functions and that's it. The problem is
there's so many more challenges to actually do it all right. How do you rotate
keys? How do you take a password and make it a secure key? There’s a lot of
challenges that you need to take to be aware of and solve. After realizing this
is something that people wanted, I finally relented and built
[Etebase](https://www.etebase.com). So with Etebase, everything's encrypted on
your devices, then stored encrypted on the cloud.

### What does a "day in the life" look like?

I’m based in Israel but the team is in the US so I try to wake up late.
Unfortunately I never manage to. So I typically wake up early, work on Svix and
then go to sleep late because the team is up and still working on Svix. Which
reminds me
[we are looking for a technical writer / developer advocate](https://www.svix.com/careers/),
so reach out if you would like to join us!

We have a strong team that is taking care of everything, but there's still some
stuff that I can help with, so I still spend time coding, just not as much as I
used to. The rest of time I spend doing start-up stuff, like talking to our
users and figuring out what they really want and how we can serve them better.

I'm very lucky to be enamored with the problem, but also just with coding in
general - being a developer is the best gift I've got in my life. Growing up, I
thought I was going to be a lawyer because my dad was a lawyer. I'm sure a lot
of being a lawyer is fine, but I consider myself very lucky to have discovered
coding.

### How have you found remote working?

Our CTO is on Pacific time, our development team is in the east coast. The
company is officially running on Eastern Time, to make things easier. I worked
remotely for most of my career, most of it at Samsung with teams in Korea,
India, the US, Europe and in Israel. I'm used to it, love it, and wouldn’t trade
it for the world.

### How did you first get into software development?

I started very young. I was interested in robotics and wanted to take this
robotics class at the local university, but they had an annoying requirement
that you have to take a coding class before starting. I did the coding course
and then never looked back. I found coding was all the power of robotics, but
with much faster iteration. It was just so much fun.

As I said earlier, in the '90s, everything was hackable. So naturally I
discovered, and was fascinated by computer security. However, over time I
realized that it's not as fun as coding. I went back to coding and that's what
we are.

### Which language did you learn first?

I’ve been through a lot. Pascal was the language I learned in my first class,
and then after the follow-up class I gave up on robotics for C++. I also read
books on x86 assembly, and built side-projects in Visual Basic. I then moved to
C for actual coding.

Both in my career at Samsung and my initial open-source work, were in C. For
webdev, I’ve used TypeScript, React, Python and now
[FastAPI](https://fastapi.tiangolo.com), which I love. I’m a huge fan of Rust
too.

### What's the most interesting development challenge you faced with Svix?

Things were different when I first started coding. Back then it was common to
re-implement linked-lists, you would re-implemented a lot of things. At least in
the Linux world, you would be using the glib and other utility libraries, but
you would still reinvent the wheel quite a lot. Though nowadays, we've got this
boom of open source package-management and a lot of reusability and connecting
things together. This was with using services to do the heavy lifting, with
services such as Stripe, Twilio, SendGrid and so on.

The problem with services though, is that the gap between a network request and
local request, however, is still quite large. There’s a lot that can go wrong in
between. We are focusing on extreme reliability to try to eliminate this gap.
This extreme reliability has been the biggest challenge because we’ve set the
bar high for ourselves. For example, we spend a lot of time working on how we
deploy our application to multiple regions and cloud providers to ensure that we
can provide great reliability even in the event of network failures.

### What's your tech stack?

That is changing at the moment. It was FastAPI, Docker Swarm, Redis and
PostgreSQL and SQLAlchemy. Now it's changed to AWS: SQS and DynamoDB, and all of
those. We realized it was better to offload the operational overhead to AWS
rather than having a full devops team working on it. This is not a long-term
solution. We're probably going to switch back to our own once things are running
and we're able to have people focusing on it.

### What's the most interesting tech that you've been playing with recently?

When coding - FastAPI and Rust. But in hardware, I really want to get the
[Framework laptop](https://frame.work/). That's exciting to me because of the
upgradability. My laptop is very old, and it's doing well, but the problem is
RAM. I wish I could just increase the RAM. I also like that Framework claims to
support Linux.

### Describe your computer hardware setup?

I used to live a lot on the road. I have a
[OnePlus 8T phone](https://www.oneplus.com/8t), which is running
[LineageOS](https://lineageos.org), which I absolutely love. I actually do a lot
from that even when just sitting on the couch, it's easier for me to run on my
phone.

For my laptop, I have an ancient, but powerful
[Lenovo Y50-70](https://www.lenovo.com/gb/en/laptops/lenovo/y-series/y50/). It
has a 15” 4k screen, 16GB of RAM and 4th Generation Intel i7, but it still gets
me through the day.

I have always touch-typed, and changing to even slightly higher keys or any kind
of different configuration makes me do a lot of typos. That’s why I want to use
the same setup everywhere, which is why I don’t have a separate keyboard or
mouse.

### Describe your computer software setup

**OS:** [Arch Linux](https://archlinux.org/).

**Browser:** Chrome.

**Email:** Thunderbird.

**Chat:** We use Slack just because a lot of our customers use it, so we have a
community there. I wish it was on IRC. We’re probably going to set up bridging
for [Matrix](https://matrix.org) and IRC.

**IDE:** neovim.

**Source control:** I’m a big fan of Git, was an early adopter, and evangelized
its usage at Samsung.

### Describe your desk setup

{{< img-center src="/img/interviews/svix-tom-hacohen-desk.jpg" alt="The desk of Tom Hacohen, Svix" width="100%" >}}

I used to have a standing desk. Not since I moved to Israel - it's still in
London, in storage. I sit on a yoga ball every now and then, but not always.
Everything else I use is just generic. Nothing I can take pride in, which is
probably bad, by the way!

### When coding

**Daytime or nighttime?** Night.

**Tea or coffee?** I don't drink caffeinated drinks.

**Silence or music?** Silence.

### What non-tech activities do you like to do?

I surf and cycle. I also snowboard when there's no COVID, and I occasionally
skateboard, though much less nowadays. And hikes and stuff like that.

### Find out more

[Svix](https://www.svix.com) provides a webhooks sending-as-a-service. It was
featured as an "Interesting Tool" in the
[Console newsletter](https://console.dev/) on 8 Apr 2021. This interview was
conducted on 27 May 2021.
