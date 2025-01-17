---
title: eBPF
who: Liz Rice
whoLink: https://twitter.com/lizrice
org: Isovalent
orgLink: https://isovalent.com/
what:
  We discuss BPF and why it is such a revolutionary approach to developing low
  level kernel applications, how BPF can be used for observability, networking
  and security. How developers should think about application security and why
  all of these technologies are open source.
season: 3
episode: 2
date: 2022-06-16T06:00:00Z
duration: 32:25
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/7c610a77-33a4-4c99-8032-4395237cb5cd/audio/1617bfd4-a52e-43cb-969c-2445087346f4/default_tc.mp3
draft: false
summary:
  eBPF - a devtools discussion with Liz Rice (Isovalent).
  Episode 2 (Season 3) of the Console DevTools Podcast.
metaDescription:
  eBPF - a devtools discussion with Liz Rice (Isovalent).
  Episode 2 (Season 3) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/podcast/isovalent-liz-rice-profile.webp
topImg2Src: /img/favicons/isovalent.com.jpg
ogImg: /img/podcast/podcast-cover.jpeg
twitterCard: https://player.simplecast.com/7c610a77-33a4-4c99-8032-4395237cb5cd
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorImg: /img/david.jpg
authorBio:
  is Co-founder & CEO of Console. In 2009, he founded and was CEO of Server
  Density, a SaaS cloud monitoring startup acquired in 2018 by edge compute and
  cyber security company, StackPath. He is also researching sustainable
  computing in the Department of Engineering Science at the University of
  Oxford, and has been a developer for 15+ years.
---

### Episode notes

{{< div-custom class="aside" data="data-inline-aside-content-wrapper" >}}
{{< div--close >}}

In this episode we speak to Liz Rice, Chief Open Source Officer at
[Isovalent](https://isovalent.com/), the company behind the open source eBPF
product Cilium. We discuss why it’s such a revolutionary approach to developing
low-level kernel applications, how BPF can be used for observability, networking
and security, how developers should think about application security, and why
all of these technologies are open source.

Things mentioned:

- [Isovalent](https://isovalent.com/)
- [Berkeley lab](https://www.lbl.gov/)
- [Dave Thaler](https://www.microsoft.com/en-us/research/people/dthaler/)
- [Kubernetes](https://kubernetes.io/)
- [Firecracker](https://firecracker-microvm.github.io/)
- [Lambda](https://aws.amazon.com/lambda/)
- [M1 Macbook](https://www.apple.com/shop/buy-mac/macbook-pro)
- [VS Code](https://code.visualstudio.com/)

{{< rich-title-5 icon="future-head" >}}About Liz Rice{{</ rich-title-5 >}}

Liz Rice is Chief Open Source Officer at eBPF pioneers Isovalent, creators of
the Cilium project, which provides cloud native networking, observability and
security. Prior to Isovalent she was VP Open Source Engineering with security
specialists Aqua Security. She is also Chair of the CNCF's Technical Oversight
Committee, has co-chaired the KubeCon/CloudNativeCon and is an Ambassador for
Open UK.

### Highlights

{{< podcast-episode/clipping time="03:11" >}}

**Liz Rice:** What eBPF allows us to do is write programs that get verified on
the fly. We should probably talk a bit about what verifying is, but it basically
makes them safe to run. It ensures they can't crash the kernel and you can
change how the kernel is going to behave. We attach these programs to events
and, depending on what kind of event it is, is it a network packet arriving or a
user-space program making a system call, we can influence the way the kernel
responds to that event.

{{</ podcast-episode/clipping >}}

{{< podcast-episode/clipping time="16:07" >}}

**Liz Rice:** Yeah. As you say, firewalling, I mean, being able to look at
packets and make decisions based on the source or destination, or even the
contents of those packets. There's a whole world of network security that we can
do with that. We can do Kubernetes network policy by looking at the source and
destination entities involved and seeing whether they meet or don't meet network
policy.

Some really interesting things around kernel vulnerability mitigation. So a good
example of this is the packet of death. There's been a few examples where a
kernel vulnerability has meant that if you sent a particularly crafted packet,
it would exploit this kernel vulnerability and crash the machine. With BPF, we
can hook into that XDP event, look for those particularly formed packets and
just discard them. And the really great thing about that is you've just got the
ability to mitigate that. All you need is that BPF program loaded into your
production machines and you are no longer vulnerable to that kernel
vulnerability. You don't have to upgrade your kernel.

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David Mytton** (00:05): Welcome to the Console Podcast. I'm David Mytton,
co-founder of console.dev, a free weekly newsletter, highlighting the best and
most interesting tools for developers. In this episode, I speak with Liz Rice,
Chief Open Source Officer at Isovalent, the company behind the open source eBPF
product Cilium. In this episode, we discuss BPF and why it is such a
revolutionary approach to developing low level kernel applications, how BPF can
be used for observability, networking and security. How developers should think
about application security and why all of these technologies are open source.
We're keeping this to 30 minutes, so let's get started. I'm here with Liz Rice.
Liz, thanks for joining the Console Podcast.

**Liz Rice** (00:51): Thanks for having me, David.

**David Mytton** (00:53): Let's start with a brief background. Tell us a little
bit about what you're currently doing and how you got here.

**Liz Rice** (00:59): So I am currently the Chief Open Source Officer at
Isovalent and Isovalent is the original creating company of the Cilium project,
which is an eBPF based Kubernetes, CNI and much more, in terms of networking,
observatory and security. Yeah, I'm very focused on Cloud Native networking, and
particularly eBPF, at the moment.

**David Mytton** (01:28): Excellent. That leads into my first question, which is
what is BPF?

**Liz Rice** (01:34): So it stands for Berkeley Packet Filter and we use the
terms BPF and eBPF pretty interchangeably. The E stands for extended, but to be
honest, it's really so much more than packet filtering now. Berkeley is the
Berkeley lab. I never know whether to say Berkeley or Berkeley, but I'll try and
use both interchangeably. So it has its roots in packet filtering, but nowadays,
it's really so broad that I don't think the acronym means much. I really just
like to describe it as making the kernel programmable.

**David Mytton** (02:10): Right. I suppose it started as a packet filter and
it's just evolved and BPF doesn't really stand for anything, although it does,
but it doesn't and it's just a really broad technology.

**Liz Rice** (02:20): Exactly, exactly.

**David Mytton** (02:21): Excellent. At what point did it become eBPF? What was
that transition?

**Liz Rice** (02:28): A couple of major changes. One was the introduction of a
thing called maps and maps of data structures that you can share between the
kernel and user space, or between different BPF programs running within the
kernel, so they can communicate with each other. I think that made a huge
difference to what you could do with BPF. The scope of it becomes so much
bigger. There were also some changes to the instruction set. I think that was a
big deal for eBPF programmers and less of a big deal from a conceptual, whereas
maps are a big conceptual change.

**David Mytton** (03:04): What are the use cases then? How would you describe it
to a developer who's never heard of it about what they could do?

**Liz Rice** (03:11): The reason why this is a big deal is that you can load an
eBPF program into the kernel and it immediately takes effect and it changes the
way the kernel behaves straight away. Now this is in contrast to, either loading
a kernel module, which is quite a scary prospect I think, in production, or
waiting for a change to make its way through kernel development. If you want the
kernel to behave in a different way, the traditional way would be to propose
that change and do some really hard work to make that change in the kernel. If
that change doesn't suit the rest of the community, it's not going to make it
in, so that would point you more to the kernel module approach. You'd have to
write your own custom code and if anything went wrong, you'd crash your machine.

What eBPF allows us to do is write programs that get verified on the fly. We
should probably talk a bit about what verifying is, but it basically makes them
safe to run. It ensures they can't crash the kernel and you can change how the
kernel is going to behave. We attach these programs to events and, depending on
what kind of event it is, is it a network packet arriving or a user space
program making a system call, we can influence the way the kernel responds to
that event.

That means we can change what it does immediately, dynamically, on the fly and
we can use that for security purposes. We can use it to mitigate kernel
vulnerabilities, and we can use it for some amazing security, observability,
functionality, because we can see what's happening across the whole kernel and
we can use it to change networking behavior. So there's a ton of really cool
ways we can use it. If we think about how involved the kernel is with everything
that you do on a machine, we can use eBPF to influence that, to get involved
with it, to observe it, you name it.

**David Mytton** (05:15): Is there a list of events then that you can trigger
eBPF programs from? Is that how it works?

**Liz Rice** (05:22): So there kind of is. There's a list of different program
types for different types of events, but in reality, one of those types is a
kprobe and you can attach a kprobe anywhere in the kernel, literally anywhere in
the 300 million lines of code that exist. So there are a lot of different places
you can attach to. Now, not all of those events, or only a subset of those
events, are stable from one kernel version to the next. I can write an EPF
program that attaches to a kernel function, but there's no guarantee that
function will exist in the next release of the kernel. But there are some
guarantees around, for example, system call interface. There are some attachment
points related to the Linux security module interface. Those are stable.
Networking interfaces that are stable. So depending on how permanent you want
your BPF program to be, there's a shorter or longer list of possible events.

**David Mytton** (06:24): Right? I suppose that explains why it has the packet
filter name as the original name, because it was to do with very low level
networking and that was very performance sensitive. But it's just being able to
attach to all of these events now means you can run very high performance, low
level, not scripts, but responses to events and run your own programs, that
those key points in the life cycle of a packet or an event happening in the
kernel.

**Liz Rice** (06:49): Exactly. Yes. Yes, and the kernel is essentially event
driven, so whatever's happening, we can potentially write eBPF programs to
respond to those events.

**David Mytton** (07:01): Yeah. We're talking about the Linux kernel here,
right?

**Liz Rice** (07:05): Well, we're primarily talking about the Linux kernel, but
in fact, Microsoft are now adding eBPF support into Windows as well, which I
think when I first heard it, I was like, "How? How can that possibly make
sense?" But speaking with Dave Thaler from the Microsoft team, who's leading
that project, and he explained to me how, in reality, a lot of what we're
talking about, particularly in networking, a TCP packet looks like a TCP packet,
whether it's in Linux or Windows, so quite a lot of the data structures are the
same. This isn't going to apply across every possible event type, but in a lot
of cases, actually, there's no reason why you couldn't run the same eBPF
bytecode because it's running in, essentially, a virtual machine. Why not
implement that virtual machine in a different operating system? If it's given
the same data in the same structure, it can be the same code on both operating
systems, which I think is pretty exciting.

**David Mytton** (08:05): Is that why some people, I think Brendan Gregg has
said in particular, that BPF is the biggest operating systems change that he's
seen in his career, do you think that is why he's describing it like that?

**Liz Rice** (08:16): I don't know whether he said that before or after the
Microsoft announcement, but I think in terms of the ability to have,
essentially, bespoke kernel behavior. You and I could be running the exact same
kernel version, but actually, have some pretty different kernel behavior. That's
quite a radical change, I think.

**David Mytton** (08:39): Why would you replace kernel modules with something
written in BPF? So you mentioned verification, I would assume that's one of the
big reasons.

**Liz Rice** (08:47): That is the big reason. I think, in theory, we can write
kernel modules to do anything, but the reality is testing is hard. Software
development is hard. Bugs in the kernel give everybody a bad day. A kernel crash
brings down the machine, and in the mainline kernel, we don't see much in the
way of kernel crashes because it's so well hardened. It's so widely used. By the
time you've got a Linux distribution, that's using a kernel version that's
actually been tried and tested over the course of probably years to harden it,
kernel modules, if it's a bespoke kernel module, it won't have been through that
same hardening process.

So what's the difference with eBPF? It's the verifier. When we load a BPF
program into the kernel, there's just in time compilation process and there's
this verification process that makes sure that it's safe to run, that it's going
to run to completion that you have to explicitly make a check on every pointer
before you dereference it, so that there is no possibility of dereferencing a
null pointer. It checks that the memory access that you're making within that
program is appropriate for the event you're looking at, so that you're not
accessing the wrong bits of memory from your program. The verifier is there to
make sure that by the time you actually get to execute that program in the
kernel, it's going to run safely. That gives a huge amount of confidence in
being able to load and run BPF programs.

**David Mytton** (10:32): What does that look like from a developer perspective?
Is there a separate language that you write in or does it hook into other
languages?

**Liz Rice** (10:41): So you need a language that can be compiled into BPF
bytecode. The code that we're actually executing in this BPF virtual machine has
its own byte code, it's very, very similar to regular machine code, but to make
the compilation very, very fast. So today, to the best of my knowledge, there
are two languages you can write in. One is C and one is Rust, because Clang
compiles to BPF target byte code, and the Rust compiler does as well, but you
are limited.

Now my knowledge of Rust is pretty small, so I can only speak to it in
theoretical terms, but in C, we talk about being a limited C, because for
example, you can't write loops or at least you have to unroll loops to allow the
verification process to be sure that your program is going to run to completion.
You can only use a certain set of BPF helper functions, and only a subset of
helper functions are going to be valid depending on the event that has triggered
your BPF program.

If I've got a network packet that looks like a socket buffer, then that packet,
I can use some helper functions to allow me to access data within that packet,
but I can't make a call to find... If it's just come from the network, there's
no process involved, so I can't make a call to find out what process is related
to it. Whereas if I'm dealing with a BPF program that's attached to a system
call, some process has made that system call, so I'm allowed to make helper
function calls to tell me about that process, but I don't have a packet in my
hand, so I can't make that kind of helper function call.

**David Mytton** (12:43): Yeah. This would be part of a larger application, or a
call in something like an agent that might be running somewhere, or another
application? Would you write an entire application to be run as a BPF module?

**Liz Rice** (12:59): It's very dependent on the kind of program we're talking
about. You mentioned Brendan Gregg earlier, and he has written lots of
standalone observability programs that have a... I don't know if they all fall
into this model, but I think the majority of them at least, there's a single BPF
program that attaches to a particular event and passes data about that event or
metrics about that event into user space. Say, for example, Open Snoop that will
tell you when any process opens a file, and I think there are actually a small
handful of BPF programs involved in that because you're looking at two different
types of open system call and also looking for the close. I think it's something
like that. So to implement that very small observability tool, you needed a
small number of very simple BPF programs to attach to different places.

Other examples might be load balancing, where you can attach to a thing called
XDP, which stands for express data path, and it's a BPF event, as soon as
possible that a packet is received from a network interface. In fact, so early
that some network interface cards will support offloading it to the network card
and you can run the BPF program on the network card rather than in the CPU,
which is pretty cool. It means that you can do manipulating those packets, maybe
do DDoS protection or some load balancing functionality on that XDP event. As I
say, potentially not even getting as far as the CPU and in those cases, it is a
standalone BPF program typically.

Or you can have a series of programs that communicate with each other to do more
complex functionality, and something like Cilium would be an example of that,
where we're hooking into network packets arriving from the network card, but
also into applications sending packets into sockets and other places in the
network stack, and we're also hooking into what Kubernetes is doing to create
pods and so on. So in that more complex example, we've got lots of BPF programs
communicating, either directly with each other through maps, or through a user
space agent, that's orchestrating the whole process.

**David Mytton** (15:37): Right. You mentioned security there, and that was one
of the areas I discovered as part of my research for this, just learning about
the different use cases, and I suppose, the advantages that you talked about
with security is just being able to get in front of pretty much everything else
that's going to happen following an event, which could just be a single packet.
So things that come to mind for me are firewalls, or the packet inspection,
those kinds of things. Can you say a bit more about the use cases about security
and how BPF plays a role there?

**Liz Rice** (16:07): Yeah. As you say, firewalling, I mean, being able to look
at packets and make decisions based on the source or destination, or even the
contents of those packets. There's a whole world of network security that we can
do with that. We can do Kubernetes network policy by looking at the source and
destination entities involved and seeing whether they meet or don't meet network
policy.

Some really interesting things around kernel vulnerability mitigation. So a good
example of this is the packet of death. There's been a few examples where a
kernel vulnerability has meant that if you sent a particularly crafted packet,
it would exploit this kernel vulnerability and crash the machine. With BPF, we
can hook into that XDP event, look for those particularly formed packets and
just discard them. And the really great thing about that is you've just got the
ability to mitigate that. All you need is that BPF program loaded into your
production machines and you are no longer vulnerable to that kernel
vulnerability. You don't have to upgrade your kernel.

There've also been some examples of specter mitigations that have been possible
through BPF. So yeah, there's quite a range of things that can be, I'm going to
say patched, by loading a BPF program, which I think is pretty exciting. Then
there's a whole class of things that we can do around runtime security, so
particularly in a Cloud Native environment where you might have microservices.
Microservices typically are supposed to only do one thing or a small amount of
function, so it becomes quite easy to reason about what that microservice is
supposed to do, what executables are running inside that Kubernetes pod or
inside that container, and what network connections it's supposed to be allowed
to make. We can use eBPF programs to observe exactly what is being executed
inside each container. We can map that against a profile or some kind of policy.
We can, for example, say, "This is an nginx pod. I'm not expecting to see a
cryptocurrency miner executable running in it. That's probably not what was
intended."

Also we can get this contextual information, so if we do see some malicious
activity, we can look at well, what was the process that was running? What
executable was that process? What pod was it running in? When did it start? When
did this malicious activity happen? And get all the forensic information that
might be needed to figure out how the host or how the container was compromised
in the first place. So lots of really cool security tooling that exists today
and is also being built in the future.

**David Mytton** (19:25): Is this something that developers need to think about
themselves or is there a product that they just plug in and they don't need to
worry about it? What's the balance? What role should developers play?

**Liz Rice** (19:35): I would say that for the majority of developers, eBPF is
going to be a technology that they will use rather than write, in much the same
way that most of us are not kernel developers. It is totally possible to write
the “hello world”. I've done it myself in a few conference talks. You can write
eBPF hello world. You can write some really interesting and powerful tools with
a few lines of code, but once you start getting into things that are a bit more
complex, you start needing knowledge of the kernel event that triggered it and
the context of that.

If you've got a socket buffer in your hand, well, what's in that socket buffer?
Not everybody necessarily will have that knowledge. I think it's more likely
that for the majority of developers, they'll be using tools, things like Cilium
and Falco and Pixie that are all examples of eBPF based projects in the CNCF.
But I think it's really useful to have an understanding of why eBPF is so
powerful, because of its position in the kernel. So even if, as a developer,
you're not necessarily going to write eBPF code yourself, having that mental
model, I think, is really helpful.

**David Mytton** (20:59): If developers are just wrapping their applications
inside containers, is there anything that they should be thinking about when
they're doing that as part of the build and deploy process? And then once those
go into production, how should they be thinking about securing them?

**Liz Rice** (21:13): This is one of the real beauties of eBPF for Cloud Native,
because eBPF runs in the kernel, every container on a given host is sharing the
same kernel. So the kernel is involved every time an application does anything
interesting. If you are writing user space code... Well, I think most developers
don't even think of the division between user space and kernel. And what people
may not be aware of, but I think is actually interesting, as soon as you want to
do anything that touches any hardware at all, whether it's writing something to
the screen or reading memory or writing to a file or interfacing with the
network, the kernel has to get involved.

Pretty much anything that you are going to do, apart from adding up a couple of
numbers or something, the kernel will know about it and that means if we can
hook observability or security tooling into the kernel, we don't need to worry
about instrumenting individual applications or individual containers. We don't
have to worry about configuration. It can all be done from the kernel side to
say, "Yeah, I'm interested in these kinds of events. Tell me about them
regardless of which pod it's happening in or which container it's happening in."

**David Mytton** (22:40): How does that apply to VMs? Because, actually
different containers, everyone thinks of them as an isolated environment, but
they're not really, whereas VMs are supposed to be actually isolated, but of
course the host can still see everything that's going on. Is that where the BPF
events and the activity would happen on the host? How does that work with VMs?

**Liz Rice** (23:00): So each virtual machine has its own kernel, and therefore,
would need its own independent set of eBPF instrumentation. You can see from
each kernel, you can see all of the processes that are running on that machine.
I think a lot of people are not necessarily aware that containerized processes
from the kernel's perspective, they're just processes. They might have some
little differences, but they're essentially just processes and therefore they're
all visible to eBPF. But if you have a host machine running different virtual
machines, I think when I've used the word host earlier, I've been thinking of
Kubernetes host, rather than a bare metal host, where you don't have necessarily
visibility into the guest operating systems.

**David Mytton** (23:53): Yeah. Do you think that becomes a bit more confused
with the use of something like Firecracker, where the developer might think
they're running in a container, but actually, the infrastructure's just
converted all to VMs?

**Liz Rice** (24:04): Yes. I do think that. It's not a problem that I have
encountered yet in the wild, but I think it will be an interesting question. I
think as the eBPF tooling market matures, we'll see cloud providers offering
different ways of using these tools in conjunction with their different
isolation mechanisms. I guess another example would be managed containers,
things like Fargate, or even serverless like Lambda, if you want to benefit from
the eBPF tooling, you couldn't just apply that into Fargate or Lambda. It would
need support from the cloud provider to do that, and I'm sure that kind of
evolution will probably happen because eBPF is so powerful. It's a natural way
to get a lot of this observability information to users.

**David Mytton** (25:02): Right. So that's where the observability use case
comes in, because you want to know what your code's doing, where you might be
able to just let the cloud provider idea with the security side of things?

**Liz Rice** (25:12): Yeah. I think potentially, or they might want to allow you
to have custom policies that are then enforced by a provided security layer that
could be implemented in eBPF.

**David Mytton** (25:26): And of course, all of these tools and technologies are
open source. Do you think that's a critical factor in them being successful?

**Liz Rice** (25:35): Well, so eBPF programs running in the kernel actually have
to comply with kernel licensing rules, so there's actually some enforcement
of... You actually have to declare if you want to use a GPL helper function,
because some of the helper functions are GPL, you have to declare that your code
is GPL. So it's actually more enforced than some technology. So inevitably, the
eBPF code itself has to be open source. The same thing doesn't necessarily apply
to the user space side. For example, Cilium is an open source project, but we do
have some enterprise proprietary extensions that we build as Isovalent, the
commercial company. Do I think that the open source nature is important? I
absolutely do. I think Cloud Native would not be where it is today, if we
weren't all able to collaborate on this open infrastructure or these open
infrastructure projects, for sure.

**David Mytton** (26:44): What's your take on the funding challenges that open
source has had over the years and how we make them sustainable? Because you've
been involved with open source for a long time. You've probably seen a lot of
these up close.

**Liz Rice** (26:55): Yeah. I think a lot of people get a very romantic idea of
open source and we'll build it and then magically the money tree will just grow
in our back garden and it doesn't work like that. I think we have to recognize
that when you write open source code, you are giving away that code and that
therefore is something you can't sell. You have to provide value in some other
ways and that could be your expertise, it could be proprietary extensions, it
could be support, it could be training. There's probably a hundred different
ways that you could add value that are not just the code as it is. I think
people are kidding themselves when they think they're going to get paid for
something they've given away. Even those sponsorship models, I think, are less
about paying for the code and more about paying for the longevity of the code,
the future dependency on that code.

In reality, more and more enterprises are using open source. They want to know
that it's going to be maintained. They want to know that people are continuing
to develop it, so it's in their interests as enterprises to find ways to fund
that development, whether that's through paying developers directly, whether
it's paying commercial companies to employ developers to work on that open
source code, there's all sorts of ways. But I think in the end, it has to result
in developers being paid either a salary to just write the code, or coming up
with something else that they can sell alongside the code that they're writing
to provide value.

**David Mytton** (28:43): Right, and running a lot of these services is actually
quite difficult, so if you can pay someone who's the expert to run it, and I
suppose that's why SaaS and cloud infrastructure became so popular.

**Liz Rice** (28:53): Absolutely. Yes. Yes. It almost lines up with the debates
around Web3 and decentralized services where I think, "How many of us actually
run our own email services these days? Almost none of us. We want somebody else
to do the spam filtering for us." There are all sorts of reasons why I have no
interest in running my own email service and there's a lot of good reasons why
people will want to pay somebody else for looking after things for them on their
behalf.

**David Mytton** (29:30): Yeah, absolutely. Well, before we wrap up then, I have
two lightning questions for you. The first one is, what interesting tools or dev
tools are you playing around with at the moment?

**Liz Rice** (29:42): I, a few months ago, moved to a Mac M1 and that's meant
I'm playing this game of having an arm chip where lots of the tools that I
previously used are X36. That has meant I'm using a lot more cloud virtual
machines than I used to. I used to run a lot of virtual machines on my laptop.
Now that I'm running more things remotely, it has led me to be a big fan of VS
code remote and trying to set that up in a really easy way so that I can just
plug it into my huge variety of virtual machines that I keep spinning up.

**David Mytton** (30:20): Yeah. It's funny that the M1 hardware is so amazing
and so fast, and yet, a lot of the stuff that we want to be able to run on it,
you have to offload to the cloud somewhere because it just doesn't support the
architecture yet.

**Liz Rice** (30:31): Yeah. Yeah. I think things are moving pretty fast. A lot
of things are being compiled, but so many times it's just that one thing that I
want that isn't available, so I'm falling back to the cloud. It means that when
I'm doing conference demos, in the past, I've always said, "I'm never relying on
the network. I want everything to be running on my laptop where I can control
it," and now I'm breaking that rule.

**David Mytton** (30:58): Then the second question, you've partially answered,
what is your current tech setup? What hardware and software are you using?

**Liz Rice** (31:04): Yeah, I guess I already answered with having my MacBook
Pro. I am lucky enough to have access to VMs in all the cloud providers when I
want them. Because eBPF continues to evolve and some of the newer features
require a pretty modern kernel, I'm constantly spinning up a particular kernel
or a particular distribution because I want a certain kernel version so that I
can try a particular feature. I guess that's another advantage of having access
to the cloud.

**David Mytton** (31:39): Yeah. Get access to all the cutting edge tech and the
software.

**Liz Rice** (31:41): Yeah.

**David Mytton** (31:43): Well, unfortunately that's all we've got time for.
Thanks for joining us, Liz.

**Liz Rice** (31:47): My pleasure. Thanks for having me.

**David Mytton** (31:51): Thanks for listening to the Console Dev Tools podcast.
Please let us know what you think on Twitter. I'm @davidmytton and you can
follow @consoledotdev. Don't forget to subscribe and rate us in your podcast
player, and if you are playing around with, or building any interesting
devtools, please get in touch. Our email is in the show notes. See you next
time.

{{</ box-collapsible >}}
