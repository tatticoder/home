---
title: Interview with Zach Lloyd, Warp
who: Zach Lloyd
role: Founder
org: Warp
what: GPU accelerated terminal.
tags: ["Terminal"]
date: 2022-03-31T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Zach Lloyd, Founder, Warp.
isPage: interviews
topImg1Src: /img/interviews/warp-zach-lloyd-profile.png
topImg2Src: /img/favicons/www.warp.dev.png
ogImg: /img/interviews/warp-zach-lloyd-desk.jpeg
---

### What is Warp? Why did you build it?

[Warp](https://warp.dev/) is a reinvention of the terminal.

I was really interested in building something that could potentially impact all
developers. The terminal is one of the two tools where if you walk by a
developer's desk, you're likely to see it open alongside a code editor. For some
developers, the terminal still is their code editor. It's a ubiquitous tool, but
from a product perspective there are a number of issues with it.

Firstly, it is a tool that's hard to learn and hard to configure. It’s hard to
get really good at it. On the flip side, if you do manage to get really good at
it, you unlock a lot of productivity. I've worked with engineers throughout my
career who were good at it, and who have been able to do things that I just
couldn't do as an average user.

One of our product ideas was can you make that power accessible to all
developers?

The second idea on the product side really stemmed from my time being as a
Principal engineer on Google Docs. I used to be the tech lead for that project
and helped build a lot of Google Sheets in particular. That experience made me
realize how if you take an app that has traditionally been desktop, single-user,
non-collaborative software, and make it cloud-native and collaborative, that
always unlocks significant productivity gains.

The idea was to do something like that for the terminal, which is one of the
last apps I can think of that's both very widely used, but remains
non-collaborative and not oriented towards teams.

Warp needs to be a very fast app, so we built it in Rust. It's GPU accelerated.
Today, it's Mac only and is in public beta, so anyone can go download it and
start using it.

We plan on supporting more platforms by taking that same Rust codebase and using
it for Linux, Windows, and also for the web where we would do WebAssembly and
WebGL rendering of Warp.

### How is it different from any other terminal?

As a developer, the features you're going to notice first are the way that input
and output work.

In Warp, output is more like a data notebook where we connect your command with
the output that it produced, and we let you navigate your terminal on a command
by command basis. We call those command outputs 'blocks' because they logically
separate commands; this lets you easily copy and paste something you did in the
terminal, or make a permalink, so you can share an output with your team, or
search within an output, or rerun an output.

In Warp we've taken over the way that input works and made it work much more
like a normal code editor. For instance, there are basic things in the terminal
that are very jarring to people who are new to it and are annoying to people who
use it a lot. The terminal is not mouse accessible. You can't click and put your
cursor someplace, you can't double click, select, and then delete text. You
can't do advanced things like multiple cursors.

We’ve introduced a text area that works like the text editor in VS Code. You can
position the cursor, and all your normal keyboard shortcuts work. There's no
learning curve for executing commands.

The third thing that's very different is you don't need much configuration in
Warp. It works out of the box. Things like completions just ship with Warp, and
we give you a nicer way of interacting with them. The prompt comes
pre-configured. We also ship with a cool feature called Workflows, which lets
you search for commands that are hard to remember.

For instance, the one that I always go back to is like, how do I undo my last
git commit? That's hard to actually figure out how to do via just completions.
Typically, you'd have to leave the terminal and go StackOverflow and do a
search.

In Warp, we ship with a community-sourced version of these commonly used
commands. We also ship with an integration into OpenAI codex that does natural
language command search. You can type in natural language what you want, e.g.
“archive current directory”, and the feature returns the command for you to run,
e.g. `tar -cvf archive.tar *`.

We have a really nice modern interface that includes a command palette, and we
have built-in theming. You can to use it with your existing shell. It supports
Bash, ZSH and Fish shells, but you immediately have a nicer experience working
with the command line.  Users by and large are able to download Warp, open it,
and immediately be more productive.

### Is the tech stack exclusively Rust?

Our tech stack is almost about 98% Rust on the client and a little bit of
Objective-C just to interface with the Mac platform. You have to create an
Objective-C app. Our graphics code is in Metal, which is Apple's graphics API.
Our server is in Go. We have a small web app front end for some things, like the
sharing of blocks, and that's written in React and Typescript.

### Does Rust interface directly with the Metal APIs or do you have to go through the Objective-C layer first?

You have to go through a very thin Objective-C binding where you basically pass
in a shader program. The Metal APIs are in Objective-C, but it's a very thin
layer.

The most interesting thing in our usage of Rust is that
[we've built a full UI framework to do the rendering of Warp](https://www.warp.dev/blog/how-to-draw-styled-rectangles-using-the-gpu-and-metal).
We are not using one of the existing ones. That UI framework is something that
we will open source in the future - it’s kind of inspired by
[Flutter](https://flutter.dev/). We had some early help from Nathan Sobo, the
creator of Atom, on this library.

We set up the UI framework so that we can take advantage of Rust's concurrency
so we can lay out independent parts of our UI tree in parallel. We did a bunch
of stuff with Rust concurrency in the way that the terminal itself is built. All
of the things around updating the terminal model have their own thread. The UI
is running on a completely different thread. If you have a ton of text that's
coming back from the Terminal, you can process that without janking up the UI.
It was very hard to get the ownership rules to work properly for this in Rust.

We prototyped the app in Electron and it was kind of slow. We did that because
we knew web tech the best, and it was easiest to prove out some of the product
ideas. We then were looking for what's going to be the thing that is, first and
foremost, the best performance, but also, secondly, the best cross-platform
story.

From a performance standpoint, what we like about Rust is that the binary
compiles down to be as fast as if you had written it in C or C++. In some cases,
even faster. We like the ergonomics of Rust. It has a nice set of libraries that
are better to use than what you would get in C and C++. They're more
constrained.

The safety guarantees that we get with Rust are great, meaning we don't have the
risk of dangling pointers and random segfaults, and that kind of stuff. We do
not have much in terms of crashes. Our more typical crashes happen with
interfacing with the Objective-C code, which is the hardest part, but Rust has a
nice foreign function interface.

A lot of the stuff that the [Servo](https://servo.org/) folks did at Mozilla was
useful to us. It's for doing the font rendering, text layout and Objective-C
bindings.

Rust is a fast language. It has one of the best stories around binding into
WebAssembly. We haven't done that yet, but a major concern for us is that we
want to have web rendering later, we don't want to have to write it from
scratch. Our plan is to take the same code base, and compile it to WebAssembly.
It also has a good cross-platform story for things like Linux and Windows, which
I think will be very useful for us when we support those platforms.

Rust also has a great community. If you look at the GitHub survey and what
languages developers most want to work in these days, it's Rust by a significant
margin, which is cool.

### How does this turn into a business?

We're trying to build a company out of the terminal. The idea is to build
something with a business model that's much more similar to a company like Figma
or Notion where Warp is free for individuals, and then there's a set of paid
team features that are focused on collaboration and sharing, and things like
firefighting or making the terminal more secure for enterprises.

These are a set of features that hopefully large companies would one day pay
for, but we don't currently have a paid plan. We're just focused on making
developers as productive as possible by giving Warp away.

As far as our open source strategy, it is likely we will open source the entire
Warp client but not the server side components. We are also aiming to create an
ecosystem around well-defined APIs in Warp. For instance, if people want to add
themes or they want to add workflows, we already have open source repos where
folks can start contributing those, and they'll go out to all Warp users. I see
us adding more of those hooks and extension points into Warp as the product
becomes more mature and we have more folks using it.

### What does a "day in the life" look like for you?

I spend a lot of time thinking about and working on what the product should be
like. I'm most interested in how we turn the existing terminal experience into
something awesome.

I still code once a week. I think doing some coding is important and it's a
chance to use Warp. We dogfood our own product, so I get to see what the state
of Warp is. When it comes to making technical decisions, architecture decisions,
and understanding what engineers on the team are dealing with, it's good to be
in the code.

As a startup founder, I have to spend significant time recruiting and growing
the team. We're trying to grow at a measured pace. We are bringing on awesome
engineers, and we are also hiring people who are focused on content and
community: helping engineers understand what Warp is about and helping them
contribute to Warp.

My day is a real mix, but I try to focus on where I can have the most impact to
increase the chances of the company succeeding.

### What is the team structure around Warp?

We’re a team of 14 right now. Alongside myself, there are 9 engineers on the
team. We also have a designer, someone who runs all of our customer feedback
channels and a chief of staff, who helps with internal operations of the
company. We just hired our first Developer Advocate as well.

Our structure is flat. There's no internal hierarchy. The way that engineers
work on things is based on some combination of what they are most interested in,
what does the company need most, and what they are most knowledgeable about. We
rotate people through and let folks, as much as possible, choose what it is that
they want to work on and give everyone a chance to lead different projects.

### How did you first get into software development?

I did a little bit of programming when I was a kid, but I'm not one of those
engineers who was heavily coding when he was 12 years old. I got into it in
college, in a more serious way. I remember my freshman year CS class. I hadn't
planned on doing engineering, but I just got really into it and found it fun to
build stuff. It wasn't a straight line from college into engineering, It took me
a while to figure out that I actually really wanted to build technology for my
career.

After college, I worked at Amazon, then I worked at
[JPL](https://www.jpl.nasa.gov/), which is part of NASA, doing stuff that's more
like MATLAB type programming. I actually got a master's degree in philosophy of
science. My undergrad was symbolic systems, which is part computer science, part
philosophy, part math. I did a lot of logic and I was really interested in that.

Afterwards I went to law school for a year, but I realized that this wasn’t the
right thing for me. It was a hard choice to make at the time, but in retrospect
was a really smart choice, because I enjoy what I'm doing now about a million
times more than I would enjoy being a lawyer!

I worked in a music studio for a little bit. Then I found my first proper
programming job on Craigslist because I needed to make some money on the side
when I was working in the music studio. This was in 2006, and I got back into
coding, and then, that turned into a job at Google, which is where I think I
really learned how to program as a professional engineer.

I've been out of Google for a while now, and I've been learning how to be an
entrepreneur and start companies and build products on my own.

### What languages did you learn over the years?

I was coding C++ at Amazon. I learned MATLAB, which is its own thing. At Google,
I primarily did Java and JavaScript. After Google I worked on an iOS app and
learned Objective-C.

At Warp, we're mostly Rust. So I've learned Rust and Go. I would say I'm
mediocre at Go, but I'm pretty competent in Rust at this point. Rust is now my
preferred language from an abstraction standpoint. I like the fact that when you
use Rust by default, the thing you build runs really quickly, which was not the
case for the web apps that I worked on, which you needed to put a lot of work
into to get them to run with okay performance.

### Tell me about your computer hardware setup

I'm working in New Mexico away from my main apartment so all I have is a 16 inch
MacBook Pro M1!

### Describe your computer software setup

**OS:** macOS.

**Browser:** Chrome.

**Email:** Gmail.

**Chat:** Slack.

**IDE:** VS Code.

**Source control:** GitHub.

### Describe your desk setup

Nothing fancy. I do have this nice office chair that I have been using since I
was at Google, called the
[Okamura Contessa](https://teknionstore.com/products/nuova-contessa-all-mesh-task-chair-polished-aluminum-frame-base?variant=39317836955782).
I'm a big fan of the Contessa chair.

{{< img-center src="/img/interviews/warp-zach-lloyd-desk.jpeg" alt="The desk of Zach Lloyd, Warp" width="100%" >}}

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** Coffee.

**Silence or music?** Music.

### What non-tech activities do you like to do?

I go skiing every weekend during the winter. I also enjoy playing guitar and
golf.

At the moment, I’m watching a lot of these startup failure dramedies now, such
as WeCrashed and the Droput. Otherwise, I like watching football and to bet on
it, through a
[Survivor Pool](https://www.teamrankings.com/nfl-survivor-pool-picks/) every
year. I also like to hang out with my dog, Blue.

### Find out more

[Warp](https://warp.dev/) is a GPU accelerated terminal. It was featured as an
"Interesting Tool" in the [Console newsletter](https://console.dev) on 14
Apr 2022. This interview was conducted on 31 Mar 2022.
