---
title: Security & Software Supply Chain
who: Feross Aboukhadijeh
whoLink: https://twitter.com/feross
org: Socket
orgLink: https://socket.dev/
what:
  We discuss the risks of using third party dependencies, how JS and NPM could
  improve their approach to security, whether trust in open source is eroding,
  and how to improve the overall security posture of your application.
season: 3
episode: 5
date: 2022-07-07T06:00:00Z
duration: 31:45
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/6321d89b-85ae-4572-8c36-c852aacd0480/audio/5857ed10-f2a7-4c4e-91e2-71eaed77cddb/default_tc.mp3?nocache
draft: false
summary:
  Security & Software Supply Chain - a devtools discussion with Feross
  Aboukhadijeh (Socket). Episode 5 (Season 3) of the Console DevTools Podcast.
metaDescription:
  Security & Software Supply Chain - a devtools discussion with Feross
  Aboukhadijeh (Socket). Episode 5 (Season 3) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/podcast/socket-feross-aboukhadijeh-profile.jpg
topImg2Src: /img/favicons/socket.dev.png
ogImg: /img/podcast/podcast-cover.jpeg
twitterCard: https://player.simplecast.com/6321d89b-85ae-4572-8c36-c852aacd0480
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

In this episode we speak to Feross Aboukhadijeh, CEO of
[Socket](https://socket.dev/), a software supply chain security company. We
discuss the risks of using third party dependencies, how JS and NPM could
improve their approach to security, whether trust in open source is eroding, and
how to improve the overall security posture of your application.

Things mentioned:

- [Socket](https://socket.dev/)
- [WebTorrent](https://webtorrent.io/)
- [Standard JS](https://standardjs.com/)
- [npmJS](https://www.npmjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/)
- [Dependabot](https://github.com/dependabot)
- [MacBook Pro M1](https://www.apple.com/macbook-pro/)
- [Studio display](https://www.apple.com/studio-display/)
- [Logitech mouse](https://www.logitech.com/en-gb/products/mice.html)

{{< rich-title-5 icon="future-head" >}}About Feross
Aboukhadijeh{{</ rich-title-5 >}}

[Feross](https://feross.org/about/) is the founder and CEO of
[Socket](https://socket.dev/), where he's working on a new approach to open
source supply chain security. Feross is the author and maintainer of WebTorrent,
StandardJS, and 100s of other open source projects which are downloaded 500+
million times per month. Feross is a lecturer at Stanford University where he
teaches CS 253 Web Security. Socket, the company Feross started, is auditing
every package on npm to detect suspicious changes and block
[software supply chain attacks](https://socket.dev/blog/inside-node-modules).
Hundreds of companies use Socket to protect their software applications and
critical services from malware and security threats originating in open source
code.

### Highlights

{{< podcast-episode/clipping time="01:59" >}}

**Feross Aboukhadijeh:** I want to start by saying that most of the time it's
fine to use third party code. It's one of these things where it's 99% of the
time, you're going to be fine. Most open source maintainers are good people.
They're just trying to put out good work. And as a person who's been a
maintainer for many years, I don't want to disparage maintainers in any way at
all. But unfortunately there are bad actors who are taking advantage of this
trust that people have in open source code, because most of the time it's great
software and it does exactly what it's supposed to do. When an open source
package gets hijacked, and that can happen for many reasons, it can be the
maintainer reused their password on another website and that website was
breached. It could be that they just chose a bad password. It could be that they
added an additional maintainer to the project to help out, and it turns out that
person was dishonest and had nefarious intentions. There's a whole host of ways
that this can happen.

{{</ podcast-episode/clipping >}}

{{< podcast-episode/clipping time="14:30" >}}

**Feross Aboukhadijeh:** I think before the barrier to even starting an open
source project was so high that if you found a project, it probably had an email
list to email, you probably sent your patches over an email to get them
included. There was a lot of work put into making this code available to you.
It's not just some fly by night package that just came out of nowhere. Whereas I
think NPM is a lot closer to a wiki, where if you find a page, it could have
been added 10 minutes ago by some random person you've never heard of, and if
you install it, there's no guarantee that it's not going to just immediately
cause trouble for you or you make your computer blow up. So it's just very
different.

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David Mytton** (00:05): Welcome to the Console Podcast. I'm David Mytton,
co-founder of Console.dev, a free weekly newsletter highlighting the best and
most interesting tools for developers. In this episode I speak with Feross
Aboukhadijeh, CEO of Socket.dev, a software supply chain security company. We
discussed the risks of using third party dependencies, how JS and NPM could
improve their approach to security, whether trust in open source is eroding, and
how to improve the overall security posture of your application. We're keeping
this to 30 minutes, so let's get started. I'm here with Feross Aboukhadijeh.
Feross, thanks for joining the Console Podcast.

**Feross Aboukhadijeh** (00:46): Hey David, glad to be here.

**David Mytton** (00:48): Let's start with a brief background. Tell us a little
bit about what you're currently doing and how you got here.

**Feross Aboukhadijeh** (00:54): Yeah, so I'm the founder and the CEO of Socket,
which is a tool for supply chain security for open source software. I guess
we'll get into a little bit more about what that is on the podcast, but
background on me is I spent the last, I don't know, seven, eight years as an
open source maintainer, worked on a bunch of different JavaScript projects,
including WebTorrent, Standard JS, and hundreds of other tiny NPM libraries, as
you do in the NPM ecosystem. And spent time as a maintainer, talking at
conferences, working on these different projects, and then seeing how the open
source sausage is made, I guess. And that's kind of what led to the inspiration
for Socket, was seeing that there were kind of gaps in how open source
maintainers secure their packages and how we consume open source packages. And
that's kind of what Socket is trying to help with and to solve.

**David Mytton** (01:45): All right. So developers are used to including
libraries to help solve common problems. What are the risks of going to whatever
package repository it might be, and then just picking a third party dependency?

**Feross Aboukhadijeh** (01:59): I want to start by saying that most of the time
it's fine to use third party code. It's one of these things where it's 99% of
the time, you're going to be fine. Most open source maintainers are good people.
They're just trying to put out good work. And as a person who's been a
maintainer for many years, I don't want to disparage maintainers in any way at
all. But unfortunately there are bad actors who are taking advantage of this
trust that people have in open source code, because most of the time it's great
software and it does exactly what it's supposed to do. When an open source
package gets hijacked, and that can happen for many reasons, it can be the
maintainer reused their password on another website and that website was
breached. It could be that they just chose a bad password. It could be that they
added an additional maintainer to the project to help out, and it turns out that
person was dishonest and had nefarious intentions. There's a whole host of ways
that this can happen.

It could even be that the maintainer themselves, sometimes they go rogue. There
is an example of that in January where some maintainer just kind of decided that
he wanted to put malware... If it wasn't malware, it was troll software, it was
changing the behavior of the package very severely into the package. So what
does this mean for consumers of open source software? Well, what it means is
when you're using open source code, it's really not enough to just rely on the
trust of that particular maintainer because they might lose control of the
package, or they might have shared access with someone who can't be trusted. Or
they themselves may have changed in a way that makes the code no longer
trustworthy.

So as a user of the open source software, I think we have a responsibility to
really treat this code as part of our application, because when you ship code to
production, 90% of the lines of code are probably coming from open source.
They're probably in your Node modules folder for the JavaScript developers out
there. So we're really like shipping the majority of our code as open source.
And fundamentally when it's running in that Node process, the Node process
doesn't care who wrote the lines of code, it's all running in the same process,
it's all your application. I think we need to change the way we think about
these dependencies. And the best thing to do would be for everyone to start
reading the code, actually looking at what the open source modules are doing,
but that's obviously a very tall order and it's a lot to ask from developers. So
that's where Socket is trying to help. It's a kind of middle ground between
reading all the lines of code yourself or doing nothing. I don't think doing
nothing is actually very acceptable going forward.

**David Mytton** (04:18): That makes sense. And I suppose it's because
developers have chosen to include a third party library in their code and they
technically should take responsibility for that, and the old saying about open
source is that you can read the source, you can check that there are no bugs or
fix bugs themselves, read the code, make sure you know what it's doing, but very
few people actually do that.

**Feross Aboukhadijeh** (04:39): And it's not really developers' faults in some
ways. I mean, developers already have a ton of work to do. There's already just
a million things to be doing and code to be refactoring and improving and
features to be shipping. So it's really a lot to ask. And that's not helped by
the fact that the average NPM package has 79 dependencies. So it's not just
auditing the individual package, it's like, "Okay, what does this thing depend
on? And what do those things depend on?" And it's quite a tree to follow in a
lot of cases. So we need tooling to help with this, I think. People don't want
to be auditing 79 packages every time they add a new dependency, not to mention
every time they update.

So whenever you update, too, that's where a lot of these supply chain attacks
have so much power is people have been trusting a package for years, and then
suddenly a new version comes out that contains a bunch of extra code to read
your files, to read your environment variables, send them off to a remote server
with some network requests, to execute new executable files that were never part
of the initial behavior of the package. That's something that you want to really
ideally catch by looking at a diff, really, of what changed in the package. It's
just a lot of work to do, and you got to be an expert in the package and know
what it's doing. So Socket is kind of an automated way to highlight whenever
something significantly changes in the behavior of a package. Socket can call
that out to you. So that most of the dependencies that you add, or the updates
that you merge into your project aren't going to flag anything because
everything is normal. The package is behaving the way it always has.

But for those rare updates where a package suddenly starts doing a ton of these
things like including obfuscated code and running shell commands and pulling
environment variables and files and sending them off somewhere, that's such a
departure from the way that the package behaved, that using automation, we can
actually just call that out to you and say, "Hey, wait a minute. This update is
not like the others. Maybe take a closer look at this one."

**David Mytton** (06:27): What are the common routes to compromise that you see
or that you can detect as part of this automation?

**Feross Aboukhadijeh** (06:33): So the number one thing that happens when
someone hijacks a package, the bad guys, what they do is add an install script.
If you've used NPM before, maybe you've heard of install scripts. They're kind
of a quirk of NPM. They're not actually that common in other package managers.
But basically what an install script is, is a way to tell the package manager
that after you've installed this package, I want you to run some shell script or
some Node script to do additional steps after the code has been downloaded. The
legitimate use for these is that oftentimes there's native code for some
packages that needs to be compiled. Usually someone will rewrite part of their
JavaScript package in C or something like that, or Rust to get better
performance for certain functions. And they want to be able to have that code
get compiled for the particular developer system after the package has been
downloaded.

So that's a legitimate purpose, but when you look at malware or supply chain
attacks that have happened in the last few years, there was a paper that came
out in 2021, which was presented at a prestigious security conference, that was
basically looking at what happens to these hijacked packages? What do the
attackers do? I think it was 59 or 60% of hijacked packages get an install
script added to them when the hijack happens. So that's one perfect example of
like... That's a thing that you can really detect with automation.

I mean, a package that you've been using for two years suddenly decides today
that it needs to run code upon installation? Maybe that happens sometimes for
legitimate purposes, but it's so rare that whenever that happens, I think it's
better to err on the side of caution and just tell the developer that, "Hey,
there's a new install script. By the way, here's a link you can click to go to
that script and just look at it and see, does it look like a reasonable thing?
Why does this module suddenly need to compile some C code, or did they improve
the performance? Maybe that's what they did. Great. Then you don't have anything
to worry about." But for that rare case where it's actually been taken over,
that can really save your bacon.

**David Mytton** (08:26): So this is an interesting quirk of the JavaScript
ecosystem, I suppose, and specifically to do with how NPM and the package
manager there works. Do you think that's an inherent weakness in how JavaScript
does it, and this is the reason why we're seeing so many of these
vulnerabilities within NPM packages, or do you think it's an abuse of a
mechanism that really does have legitimate uses?

**Feross Aboukhadijeh** (08:50): So I definitely think the mechanism... I mean,
it's used legitimately. I think there's probably a better way to design this so
that the package registry itself can pre-compile all the native bindings for all
the potential systems that users will be installing stuff from. It would be a
lot to ask of the package manager to basically go and do that for everybody, but
I think it would massively improve the security of the ecosystem because then
they could remove install scripts as a feature from NPM entirely. That's
basically the main legitimate use for it. So if they could just build that into
the package manager on their end, then we wouldn't need every different client
to be having this risk of code running right away on installation. But the thing
to keep in mind is if a package is hijacked, it's still possible to do a ton of
damage even without an install script, because usually when you're downloading
and installing a package, you're planning to import the package.

So it just means that now the attacker can't run code right away, but as soon as
you import it, they can deliver their goodies to your computer. So it's just
going to move the problem somewhere else. So you're still going to need to
actually fundamentally look at the code, whether with your human eyes or with an
automated tool like Socket to actually see what it's doing. One other thing I
want to say is I think some people might also say that it's a problem that's
specific to NPM for other reasons, not because of this install script thing, but
rather because people in the NPM community tend to publish a ton of tiny
packages, so the dependency trees can get pretty crazy, and a hello world for
React is hundreds or maybe even tipping over a thousand packages sometimes.

So I think there's definitely some legitimacy to that argument because the way
that people split packages up in the NPM ecosystem does mean that you are
trusting more maintainers overall. But I would say the kind of flip side to that
is that a lot of times in these discussions people will say that JavaScript
programmers have forgotten how to code. They have to import a library to do
anything. They can't even write 10 lines of code before they have to go reach
for a library. That's what some people will say. I don't agree with that. I
think that there's often really good reasons to pull stuff out into a separate
package, and one famous example that people love to point to is the left-pad
incident, where people were importing a library to basically pad a string with
extra spaces on the left side. And people said, "Oh, I could write this as a one
liner. Why would anyone install a package to do this?"

But if you actually look at their implementations, they had tons of bugs. Even
something as simple as padding a string, there were a ton of bugs in the
different implementations that people were posting and saying, "Oh look, I could
do this. It's so easy." So a lot of times there's actually surprising subtlety
in simple stuff like that, and to handle all the cases and to think about the
performance, especially even as the JavaScript engines are changing. You get
free bug fixes and you get free security updates and you get free performance
improvements when you depend on a third party library versus copying it into
your own code base. So it's not a clear 100% win to just say, "I'm going to not
use the dependencies. I'm going to just copy everything in." You really do lose
a lot, too.

I guess the last thing I'll say about NPM too, is NPM really solved this problem
of dependency hell for developers in a way that has encouraged people to create
a lot more dependencies. So what I mean by that is back before NPM, most package
managers, let's take Python, for example, had this, I would say it's a problem,
where when you install a package foo at version one in your project, then to go
depend on another package, let's say bar, if bar also wants to use foo, it needs
to make sure to use foo version one, because you're already using foo version
one in your project, so all other dependencies that need to rely on foo must use
foo version one. And what this means is say one of your dependencies wants to
update and use foo version two, well now you're screwed. You're basically
totally screwed. The package manager will say something wants foo version one
and something else wants foo version two. I can't install both of those. Sorry.
The whole thing is messed up. You can't proceed, basically. It just throws up
its hands and says, "Sorry."

So NPM came along and said, "Well hey, this is silly. Why do we want to put
developers into this awkward position? Let's just make it install both versions,
and we'll give any of the packages that want foo version one, we'll give them
version one, and the other ones that want version two, we'll give them version
two." Because of that, it meant that people could start depending on
dependencies more freely, because if I'm a maintainer and I depend on a new
package, I don't have to worry that I'm going to cause trouble for my users by
making it really hard for them to use my package. And for that reason people
added dependencies more freely.

Whereas in the Python world, people wouldn't add a 10 line dependency. They
would copy those 10 lines into their project to avoid adding a dependency and
creating trouble for their users. So it developed a different culture. I'm
biased here, but I think on the whole it's probably good that we don't create
this situation for users. Although there's obviously the downsides we're talking
about on the show, which is that you end up now trusting a ton more people. So
that's where the security comes in as a problem. Anyway, I just wanted to be
fair to the NPM community and make that argument, even though obviously there's
all the security problems that come from this design that we're trying to fix
with Socket. So yeah, that's my story.

**David Mytton** (13:47): Yeah, that makes sense. So I suppose as the efficiency
of NPM has improved or at least it's possible to use it in more circumstances,
it makes more sense for people to include libraries and then you are trusting
more developers to apply best practices. I suppose thinking back over the years,
software development has been somewhat of a niche compared to maybe other
industries, but it's really become much more mainstream, there are much larger
companies, there are more engineers building more software and more open source
being used. Do you think that changes that implicit model of trust there's been
there historically, where you could almost just blindly trust anything that was
released just because it was such a small community?

**Feross Aboukhadijeh** (14:30): Yeah, it does change the model for sure. I
think before the barrier to even starting an open source project was so high
that if you found a project, it probably had an email list to email, you
probably sent your patches over an email to get them included. There was a lot
of work put into making this code available to you. It's not just some fly by
night package that just came out of nowhere. Whereas I think NPM is a lot closer
to a wiki, where if you find a page, it could have been added 10 minutes ago by
some random person you've never heard of, and if you install it, there's no
guarantee that it's not going to just immediately cause trouble for you or you
make your computer blow up. So it's just very different.

To play the devil's advocate here it's obviously good that anyone can
participate in open source and it's not as confusing and there's a lower barrier
to entry. So I do like that, but it does mean that people should probably think
differently about open source. Just because something is on NPM doesn't mean
anyone's even looked at it. There's malware removed all the time. Actually, this
might be interesting to people. So at Socket, we started following the NPM feed,
so we ingest every single NPM package so we can analyze it. One of the things
that happens when you start doing that is sometimes NPM deletes packages and
they do it for security reasons. So as we follow this feed, we get these delete
notifications from them, so we can actually see exactly what's being deleted.
When usually something is deleted because some security researcher has found
there to be malware in it or a supply chain attack or something like that. So we
can actually get this nice feed of what is actually happening, what is getting
deleted on a daily basis.

If people are curious to see that, you can go to Socket.dev, and there's a link
at the bottom of the page called removed packages, and you can click that and
see exactly what's been removed today. And it's pretty crazy stuff. Sometimes
there's just like blobs of crazy obfuscated code. You don't know what it's
doing. Sometimes it's just a clear, simple example of let's just steal the
process.env, so the environment variables, and just send them to an IP address,
something straightforward like that. There's all kinds of stuff like that in
there that you can poke around. So yeah, the scale is quite surprising, I would
say. Just like how there's... I think when we looked before there were 700
packages removed in the last 30 days. So just a lot of this stuff getting
published is just this kind of garbage that needs to get removed.

**David Mytton** (16:46): What kind of security training or education do you
think is needed for developers, because you could just say, "Well, pin the
packages at the version you expect, and then you can examine all the or future
updates." And would that remove just a large number of automated
vulnerabilities?

**Feross Aboukhadijeh** (17:02): Sure. I mean, pinning your packages is a great
idea. Everyone should be using a package lock file for sure. I still think you
have the problem of how do you evaluate a new package that you're thinking about
adding and how do you evaluate an update? And I think at that point, you're now
looking at a ton of work to actually do a true audit of this code. So I think
everyone should pin, but as soon as you throw Dependabot in there or one of
these bots that will come along and try to update your dependencies, then you'll
end up with 5 to 10 of these PRs every day, just trying to move your
dependencies around. So it's funny because keeping up to date is actually
usually good. I mean, it means that you're getting the bug fixes, the
performance improvements, you're getting the security fixes, and when there's
this security issue down the line, oftentimes it's a lot easier to update to the
new version if you're already on a pretty new version. That way you don't have
to like to do a bunch of updates for unrelated things just to get that security
fixed.

So in general it's pretty good to stay on the latest version, but the downside
is now you're more susceptible to supply chain attacks because supply chain
attacks have a completely different kind of threat model. So with
vulnerabilities, which are different, vulnerabilities are these known things. A
security researcher found a problem, and the goal is basically to get onto a new
version of the package, which has fixed the vulnerability. But with the supply
chain attack, the problem really is that a code just came out, it's a new
version of the package, and no one has really opened it up yet to see that it's
doing something naughty. And the faster you update to that new version, the more
vulnerable you are, the more in trouble you are because you basically updated to
a version that was published maybe a couple days ago and no one has actually
found that there's an attack in there yet. So you're just an unlucky person for
updating too quickly.

So for that reason, actually, some really security sensitive projects like
Signal, for example, Signal, the desktop app for Signal, what they do is they
just keep their dependencies six months out of date and try to hope that that
means that most supply chain attacks will have been caught by the time they
update. Obviously they also have to be pretty careful about updating and to fix
really bad known security vulnerabilities as well. So they have to balance this
in an interesting way, but I think that's really where something automated like
Socket can help. You basically try to stay on the latest version and then just
be told when something in the package itself is doing something suspicious. I
really do think that's the right trade off. It's not to stay six months out of
date.

Because this is another interesting stat for people. That same paper that I
mentioned earlier that was talking about the security problems, they found that
the average malware stays on NPM for hundreds of days before it's found. So the
average length of time is actually super long. It's not this thing that just
gets caught really quickly. It's something that people are finding malware on
NPM from sometimes over a year ago, and it finally gets taken down. So I don't
even think that the strategy of just not updating your dependencies for six
months is really foolproof. It probably helps, but it's not a guarantee that
you're not going to still install something bad.

**David Mytton** (20:02): Where should the responsibility be then? So you've
also got the library developers and their security practices. You've got the
package repository, which sounds like there could be quite a lot more done by
the people running those. And then there's the code developer themselves who has
to audit all of their dependencies. How do you see that split, and is there
anyone else that needs to be involved?

**Feross Aboukhadijeh** (20:23): I think it's the kind of thing that everyone
needs to help with. So it's partially on the library developers to vet their
dependencies and to choose good quality dependencies. It's partly on the package
repository to actually do more than they're currently doing to find malware when
it's published. They do somewhat scan packages now, but they're really not very
good at finding stuff. Stuff gets through all the time, and that's why we keep
seeing these headlines. So I think it's partially on them also to improve the
install script situation as we talked about.

And then I think the developer themselves also should probably change their
mindset around how they think about dependencies. I think developers need to
think about dependencies as part of their app. They're not these just magical
code that's descended from upon high written by the sages and you can just use
it and it's all going to be fine. It's just code written by people just like you
and they make mistakes. They don't set their passwords to be strong sometimes.
There's different problems that happen. The computer gets compromised. Their
credentials get stolen. This kind of stuff can happen. So I think everyone needs
to do better. It's really a community thing. I think really everyone chipping in
different ways can improve things.

**David Mytton** (21:30): What security tools do you see developers using or
what should they be using?

**Feross Aboukhadijeh** (21:35): Well, I'm biased. I'll tell everyone that they
should check out Socket at Socket.dev, which is the project I'm working on. So
Socket helps because it helps identify when a package update is particularly
suspicious. If you throw that in there, you add it to your repository as a
GitHub app, then you have this virtual security person reviewing all your PRs
and calling out when it finds something particularly egregious in the pull
request. So when it sees a dependency getting added that, for example, looks
like a typo. If you installed Reactt with two Ts or something like that by
accident, you made a typo. We can tell you, "Hey, the package you're installing
gets 300 downloads a year. Are you sure you wanted to install that and not
React, which is one letter away? And that's the thing that doesn't slow
developers down. It doesn't block them from doing their work. It actually helps
them because it's purely a piece of information that you're probably really glad
that you've been told before that PR lands and then bad things happen.

And then actually this is not theoretical. We actually found this package called
Browserlist, which is a typo of the true package, Browserslist. Browserlist is
not a very easy name to remember. People type browser list all the time, because
it's just this weird plural in the middle of the package name. So we found
actually Preact, which is this really popular React alternative. It focuses on
small package size and really small bundle sizes. They were using both
Browserlist and Browserslist, which is weird because one of them, the incorrect
one actually appears to have been malware at some point in the past, because if
you look at the version history, the very first version that's currently on NPM
shows that it was removed for security reasons. And the current version just
throws an exception and tells you, "Hey, you installed the wrong thing," so no
reason for anyone to be using this thing, but it still somehow gets like
hundreds of thousands of downloads a year because of typos where people will
type the wrong one and then they'll type it again, and they'll now they'll have
both of them installed, and this is just unnecessary risk.

So we went and told that project Preact, you're installing this unnecessary
package and they fixed it. I think Socket's a no-brainer to me. Obviously
asterisk on that is I'm biased. But I would say other tips for people would be
everyone should be using a linter, or if not that, TypeScript. If you don't use
TypeScript and use a linter, I don't think anyone should be writing raw
JavaScript without a linter at least looking at their code. I'm also biased, but
I would recommend StandardJS as a linter to use because it doesn't require any
configuration. So you can get started with it by just installing a single
package and then you get a bunch of nice rules out of the box.

And a linter is more than just about style. So if you're using something like
Prettier, don't be confused and think that's sufficient. Prettier is only about
code formatting and spacing. A linter actually looks for actual errors in your
code as well, because it does a more in-depth static analysis. So you can get
quite a lot of really nice help for your code by turning on those features in
ESLint, or using something like Standard, which will turn them on for you
automatically. And you can catch a lot of bugs, including security bugs in your
code by using a linter.

Also people should be keeping their dependencies up to date. So something like
Dependabot to get security fixes and to keep your dependencies up to date is a
great idea. And then I think just general education around security and how to
write code securely is probably the other thing people should do. It's something
that you actually have to learn a little bit. It's a mindset shift to really
think like an attacker. And I think that's really the best way to make sure that
you write good code and you code defensively is to actually understand the other
side of it. So what does an attacker think? So when you're writing code, you're
always thinking, what would I do if I was an attacker? How would I abuse this
function? How would I pass in arguments that I wasn't expecting? As you're
coding, you want to be thinking of both sides of that. You want to be thinking
of this adversary who's trying to own as you're coding.

You can only get that from practice thinking like an attacker. So I would say
people should probably like buy a security book or take a security course if
people want to take a course on web security. I'll shout out my own course. I
taught a class at Stanford in 2021 and also in 2019 on web security. The videos
are online for the 2019 version of the web security course. So if you just
search Stanford web security, you can find the videos on YouTube, or search CS
253, which is the name of the course. But there's a ton of stuff in there for
how to think like an attacker and what are all the different things that can
happen as far as web apps are concerned. So I don't know, those are the things
that come to mind. Maybe I'm missing something, but I think those are probably
good starting points for people to improve their security training.

**David Mytton** (26:03): And is there anything specific that library developers
should do to improve the security of their projects?

**Feross Aboukhadijeh** (26:09): I mean, there's too many things to mention. I
mean, I think making sure that only the people who need access to the package
have access, so removing old maintainers, I think that's something where there's
probably the package manager could help with that. Because I think part of the
reason people keep old maintainers around on packages is because they want to
honor that person's contribution and they want the face to show up there, so if
there was some way to have an alumni section for maintainers, so they still get
the credit but they don't need to have the access, which just adds risk would be
great.

Using more tooling. So depending on the maturity of the project, using something
like a fuzzer to try a bunch of inputs and get the project to crash, writing
more complete tests, making sure that you get to 100% test coverage if that's
possible. And like I said, thinking differently about the dependencies, so
trying to really at least do what you can to make sure the dependencies that
you're depending on have some basic measure of quality. That they're maintained,
they don't have known vulnerabilities. That you hopefully have looked at the
code, at least you've opened it up, and you agree with that person's philosophy
on... This goes actually beyond security, but just for the quality of your
project, knowing that the dependencies you're using are designed well,
architected well. They're not just a pile of risk waiting to explode at some
future point. That the design itself is actually sound. That's something that I
care a lot about when I'm choosing dependencies for my libraries.

**David Mytton** (27:32): Okay. Well, before we wrap up, I have two lightning
questions for you. The first one is what interesting tools are you playing
around with at the moment? Could be dev tools or could be something broader.

**Feross Aboukhadijeh** (27:43): Maybe I'll just say something obvious, I'll say
Type Script, because I actually had avoided TypeScript for most of my career.
While everyone was getting on the TypeScript train a few years ago, I was pretty
against it because I just like the ability to open up a file and just edit it
without having this build step, and I've been hoping and praying that we could
get to a place where we don't need build steps in JavaScript. And we keep
getting all these nice features in the language, so you need Babble less and
less these days, but then with JSX and now with TypeScript, it's like we still
have these remaining things that we can't get rid of the build step for.

With ESM coming out now, there's so much potential for being able to just import
something and not have this build step. So I was pushing back against
TypeScript, because I just wanted to not have that in my code bases that I work
on for as long as I could avoid it. But there's just so many advantages to the
TypeScript way once you actually just bite the bullet and learn it. And for
libraries, I would say less so. Actually I think for libraries I do like pure
JavaScript ones, especially for simple packages because it makes contributing to
them easier, but who knows, maybe my opinion will change on that as well.

But certainly for big team projects where you have a ton of different
developers, there's a big code base, the types are just so helpful getting
everyone on the same page. This is probably preaching to the choir to a lot of
the audience, but for me it was a revelation. When we started working on Socket
we decided to do everything in TypeScript and it's great. So that's probably the
thing I like learning the most all the time these days. It's probably a really
obvious choice though, for people. Sorry, I don't have a more interesting
answer.

**David Mytton** (29:14): No, that's fine. Great. And then secondly, what's your
current tech setup? What hardware and software are you using on a daily basis?

**Feross Aboukhadijeh** (29:22): I used to love the little tiny MacBook 12 inch,
which was super good for travel. And I used to travel a lot more and go to all
these JavaScript conferences. But ever since COVID I just don't travel that
much, so I got a bigger computer. I have the new MacBook Pro with the M1 chip in
the 16 inch form factor. I maxed it out as much as I could, so it's a ridiculous
machine. It's the most I've ever spent on a computer in my whole life. But it is
also the best computer I've had. The main thing that I think JavaScript
developers should get excited about with the M1 chip in particular is the single
core performance, because a lot of the things you do are not using multiple
processes in Node. So your Babble build step is happening in a single process.
So it doesn't matter how many cores you have. There's only so fast you can go
with that, even if you have eight cores.

But with the M1 chip, the single core performance is just so much better than
any other chip on the market that I've seen that you actually do notice your
builds speed up so much more than any other... Going from four cores to eight
cores, you're not going to notice that much of a difference because usually
you're probably not even using all four cores to do a build. Maybe you are, who
knows. Maybe some people have eight things getting compiled or whatever, every
time they hit save. But I think for most projects the big thing you're going to
feel is that single core performance. I like it a lot.

I just got the Studio Display from Apple. I know I'm chilling for Apple hard
here, but it's a pretty great monitor. It's super overpriced, but it looks
really nice and it has the same pixel density as the screen on the laptop, so
you get the same Retina, and you don't have to deal with... When you put your
monitor next to your laptop and the difference in the way they look is so
different. I like that it's just all Retina and it all looks good. And then I
just have a typical Logitech Performance mouse, standing desk, typical Apple
keyboard. Nothing too fancy there.

**David Mytton** (31:05): Well unfortunately that's all we've got time for.
Thanks for joining us, Feross.

**Feross Aboukhadijeh** (31:09): Yeah, thanks David. It's been really awesome to
be able to share all this with everybody. Thanks for having me.

**David Mytton** (31:14): Thanks for listening to the Console Dev Tools Podcast.
Please let us know what you think on Twitter. I'm @DavidMytton, and you can
follow @consoledotdev. Don't forget to subscribe and rate us in your podcast
player. And if you're playing around with or building any interesting dev tools,
please get in touch. Our email is in the show notes. See you next time.

{{</ box-collapsible >}}
