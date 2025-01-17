---
title: Interview with Ellie Huxtable, Atuin
who: Ellie Huxtable
role: Creator
org: Atuin
what: Shell history search and sync.
tags: ["Shell Tools"]
date: 2021-05-18T12:00:00Z
draft: false
headerType: fixed
summary: Interview with Ellie Huxtable, Atuin
isPage: interviews
topImg1Src: /img/interviews/atuin-ellie-huxtable-profile.jpeg
topImg2Src: /img/interviews/atuin-ellie-huxtable-logo.png
ogImg: /img/interviews/atuin-ellie-huxtable-desk.jpeg
---

### What is Atuin? Why did you build it?

[Atuin](https://github.com/ellie/atuin) is your shell history. The idea is that
it's not just the shell history of a single session, or the shell history of a
single machine, it's all of your shell history, forever.

If there's one command you remember running on your old laptop three years ago
that was really useful and you need it now, odds are it's probably not the same
history file, but hopefully it would be in your Atuin database. Personally, I
have lots of machines I’m always switching to. Laptops, desktops, servers.
Sometimes I'm like, "oh, I wrote this really long pipe sequence that I don't
quite remember, but I want to find it again." I want to try and make that
easier.

[SQLite](https://sqlite.org/index.html) is one of my most favorite pieces of
software, so I went straight for that. It’s the database behind Atuin. I've used
it before for various side projects, and it’s never failed me for anything. It's
always really reliable.

I’m still working on all the features so it’s not all there yet, but I want to
be able to take all your shell history from all your machines and put it in one
place. Then you’ll be able to see trends in what you like to do, the sorts of
commands you run that pass and fail. That’s the idea for Atuin

{{< img-center src="/img/interviews/atuin-ellie-huxtable-product.gif" alt="Atuin product screenshot" width="100%" caption="Searching shell history with Atuin." >}}

### What does a “day-in-the-life” look like?

I work remotely on the [Coinbase](https://www.coinbase.com) infrastructure team
doing dev prod stuff, and probably will stick with being mostly remote even when
offices open again. I try to get out for a walk during my lunch break, usually
through the park. I grab a coffee, come home and finish up with work.

Atuin is entirely separate from my day job - it’s just me scratching a brain
itch that happens to be useful to other people. I've open sourced some other
projects of mine, but not with the intent for people to use them. Atuin is the
first one that I actually put effort into the docs and making the readme look
nice. People started using it which I found surprising!

After work, depending on how I’m feeling, I either do some side project work,
some open source stuff, or I just meet friends because I don't think every
second should be software.

### Did you do anything specific to promote it, or was it just discovered?

I put it on [Hacker News](https://news.ycombinator.com/item?id=27079862),
[Lobsters](https://lobste.rs/s/r5zptc/atuin_improved_shell_history_with_multi),
and [tweeted](https://twitter.com/elliebike/status/1390699482237579267). My
tweet got quite a lot of retweets. I think it had around 60,000 impressions,
which is quite a lot for me.

### How do you find working on an open-source project that's starting to be used by other people?

It's both really cool, and also a weird responsibility. As of a few days ago,
[it's in Homebrew Core now](https://formulae.brew.sh/formula/atuin). If someone
does a Brew update, the update actually appears on their laptop.

If I screwed up before it's fine, it's just my laptop, whereas now I have to
make sure I do releases properly. Atuin has a sync feature which by default uses
a server I run (you can choose to run your own). Before I made it public I read
through the encryption code many times and got a bunch of friends to check: "I'm
certain this code works, but can you just confirm that I'm not doing something
silly." It's my nightmare to have to make a tweet shortly afterwards and
announce: "so all your history wasn't actually encrypted." So I have to make
sure everything is properly tested.

I enjoy it, but there’s an extra level of making sure things are okay for
everyone.

### Do you consider the sync server a separate project?

They're the same. Without the sync it's still useful - I used it without sync
for a while before I implemented it, but there are already a lot of projects
that make shell history nicer. There aren't any that I could find that
aggregated it all and shared it all between multiple machines. So this is what
makes it stand out.

While developing it, I made it sync real time - there's a setting where you can
adjust the frequency for how often sync happens. If you set it to zero, it
happens after every command. I was testing it with that just to make sure it
would handle the frequency of updates.

### How did you first get into software development?

Software development has been most of my life at this point, which is kind of
freaky. When I was a kid, my parents bought me a
[LEGO Mindstorms set](https://www.lego.com/en-gb/themes/mindstorms). It's a
little programmable LEGO with sensors and motors. I'd always loved building
things - just wanting something to exist and then making it. Then I found that
software was limitless. If you want to do something mechanical, you have to buy
parts, and if you do something wrong, like if you break them, you have to order
more.

With software, you can just do anything and it's almost always free. That got me
going. I got into modding games and I spent ages writing game engines and little
games that I never finished or published. I spent most of my time as a teenager
doing that. I went to university to study computer science, and then found a job
two months after starting writing software.

I didn't really attend university after I got the job. I went to the bare
minimum of classes. They were teaching Java and I could already code, and had a
decent understanding of algorithms. I finished my first year, but didn’t carry
on. Since then, I've just been doing the thing I love, but getting paid for it,
which is pretty good.

### Which languages do you like to work with?

I think Python was the very first one, because it was really approachable and
reads like English, so I found that useful. I used to write Flash games back
when that was popular. That was ActionScript, then Java and C# for modding
games. Later I spent a while doing C++.

Today I mainly code in Go and Python. For the last few years I've been on and
off with Rust, partly because my motivation for doing stuff outside of work has
depended on how much time I've been spending at work. In past jobs, I spent way
more than working hours at work, so I didn't have much time for side projects.

Unfortunately I’ve never been able to use Rust professionally because my past
jobs have tended to be startups. They tended to prefer speed of iteration, and
Rust just takes more time because you’re investing in code quality up-front.
Trying to convince people to learn Rust didn't really work. Rust is my free time
language, work is mostly Go.

### Why do you prefer Rust?

In the past I’ve spent a lot of time modding, which was usually in C++. Rust is
obviously really different but some of the concepts carry over. For example, the
move semantics and something kinda similar to the borrowing rules are there in
modern C++, but Rust takes them to another level.

The compiler is also super helpful. It's the first time I've ever had a compiler
actually teach you rather than just shout at you, so that's been nice. And
[Clippy](https://github.com/rust-lang/rust-clippy) is there to tidy everything
up for you.

The Rust tooling blows my mind, especially as a compiled language. With Python,
your scripts will often work in most places but there can be a lot of problems
depending on the environment. With Rust you just cargo build on that platform
and you’re done. It runs.

Rust is particularly good for a CLI like Atuin because there’s minimal startup
time. For something that runs once for every command or locks once for every
command, that's really important. User experience has been a big thing I've
tried to focus on. I've tried to make the whole thing as seamless as possible.
Creating some benchmarks to measure that is something I’m planning to do.

### What has been the most interesting challenge you've faced building Atuin?

I would say the sync. Currently it is still quite naive. I would like to make a
v2 of the sync protocol, but it works well enough for the time being.

Originally there was a really awkward edge case where sometimes adding older
history after adding newer history would cause sync to try and run forever. It
took a while to iron out all the smaller issues like that.

I was also very conscious of the fact that if I ended up making too many HTTP
requests to the sync server, users would not like that very much. For example,
when I was working on it, I was staying with my parents for part of the time. I
was testing something and left in a conditional that ended up spawning 500
instances of Atuin all running in the background trying to sync. The internet
was slow all afternoon, and I wasn’t sure what was going on! Then I saw all the
processes! So that’s been fun to build.

### What interesting tech have you been playing around with recently?

I'm trying to get a home network properly set up and I want to get a lab running
in my garage. I want to have loads of storage and ZFS set up. That’d be fun.

To keep the noise down I’ve capped myself at a 4U rack but I’ve started ordering
things. I’m starting with a skeleton so I can have it all laid out, and I’m
trying to figure out the most financially efficient way of ordering disk drives.

I’m sure there will be lots of VMs but experimenting with things that would end
up being too expensive on public cloud is the plan, particularly playing around
with Kubernetes. I’ve been looking at [Proxmox](https://www.proxmox.com) but
I’ll see how good it is when I install it.

I even want to try hosting side projects from my house. Latency on my internet
seems okay so we’ll see how that goes.

### Describe your computer hardware setup

My laptop is a Razer Blade Stealth. I'm running Linux which was a bit of a
challenge to begin with, but it runs well now. Everything except the microphone
works, which was surprising. I've got a USB webcam.

I built my keyboard myself. It’s really compact. I learned this layout a few
years ago, and it fits in a backpack. You can take it with you everywhere, it's
great. It's got a lid so it kind of comes off. I
[wrote a blog post about it](https://elliehuxtable.com/my-planck-keyboard/).

My screen is a Dell Ultra Wide. I like having plenty of space but try not to get
too much stuff.

### Describe your computer software setup

**OS:** [Manjaro Linux](https://manjaro.org). I used to run Arch in the past but
it’s a lot of hassle, so Manjaro is a nice balance.

**Browser:** Firefox.

**Email:** Gmail.

**Chat:** Mostly Telegram, I try to convince friends to use it, but I end up
having most popular chat apps installed in order to match everyone’s preference.

**IDE:** Neovim.

**Source control:** Git.

### Describe your desk setup

{{< img-center src="/img/interviews/atuin-ellie-huxtable-desk.jpeg" alt="The desk of Ellie Huxtable, Atuin" width="100%" >}}

I just moved house and everything's all over the place at the moment! Nothing
particularly fancy - I don't have one of those cool standing desks or something.
It's just an Ikea wooden desk. My chair is by Herman Miller.

### When coding

**Daytime or nighttime?** Daytime.

**Tea or coffee?** Coffee with tea to fill the gaps.

**Silence or music?** Music. I can't think without music.

### What non-tech activities do you like to do?

Motorcycles. I'm kind of obsessed. So whenever there's a sunny day, I'll
probably be out on my bike all over the countryside. I'll use it to get around
the city too, but it's not the most fun in winter.

### Find out more

[Atuin](https://github.com/ellie/atuin) is a tool for shell history search/sync.
It was featured as an "interesting tool" in the
[Console newsletter](https://console.dev) on 20 May 2021. This interview was
conducted on 18 May 2021.
