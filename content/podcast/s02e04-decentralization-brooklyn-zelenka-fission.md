---
title: Decentralization
who: Brooklyn Zelenka
whoLink: https://twitter.com/expede
org: Fission
orgLink: https://fission.codes/
what:
  We discuss the relevance of blockchain to web3 and decentralized web apps, why
  developers should avoid managing backend servers, the challenges of doing
  authentication and identity with local clients, and why web browser APIs are
  the place to build, not the native operating system.
season: 2
episode: 4
date: 2022-01-27T06:00:00Z
duration: 29:39
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/21114878-64c4-4605-95ba-81c946feaa77/audio/32a8188f-0a02-4847-95f8-b8f007ef3a34/default_tc.mp3
draft: false
summary:
  Decentralization - a devtools discussion with Brooklyn Zelenka (Fission).
  Episode 4 (Season 2) of the Console DevTools Podcast.
metaDescription:
  Decentralization - a devtools discussion with Brooklyn Zelenka (Fission).
  Episode 4 (Season 2) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/podcast/fission-brooklyn-zelenka-profile.jpg
topImg2Src: /img/favicons/fission.codes.png
ogImg: /img/podcast/podcast-cover.jpeg
twitterCard: https://player.simplecast.com/21114878-64c4-4605-95ba-81c946feaa77?dark=true
authorName: David Mytton
authorURL: https://davidmytton.blog/start
authorImg: /img/david.jpg
authorBio:
  is Co-founder & CEO of Console. In 2009, he founded and was CEO of Server 
  Density, a SaaS cloud monitoring startup acquired in 2018 by edge compute 
  and cyber security company, StackPath. He is also researching sustainable 
  computing in the Department of Engineering Science at the University of 
  Oxford, and has been a developer for 15+ years.
---

### Episode notes

{{< div-custom class="aside" data="data-inline-aside-content-wrapper" >}}
{{< div--close >}}

In this episode we speak to Brooklyn Zelenka, CTO at
[Fission](https://fission.codes/), a decentralized app framework for the future
of web apps at the edge. We discuss the relevance of blockchain to web3 and
decentralized web apps, why developers should avoid managing backend servers,
the challenges of doing authentication and identity with local clients, and why
web browser APIs are the place to build, not the native operating system.

Things mentioned:

- [Twitter Bluesky](https://blueskyweb.org/)
- [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [Electron](https://www.electronjs.org/)
- [Google BigQuery](https://cloud.google.com/bigquery/)
- [Starlink](https://www.starlink.com/)
- [Cloud BigTable](https://cloud.google.com/bigtable)
- [Apache Hadoop](https://hadoop.apache.org/)
- [Amazon S3](https://aws.amazon.com/s3/)
- [Location transparency](https://en.wikipedia.org/wiki/Location_transparency)
- [Decentralized Identity Foundation](https://identity.foundation/)
- [Restful API](https://restfulapi.net/)
- [Elixir](https://elixir-lang.org/)
- [Elm](https://elm-lang.org/)
- [Haskell](https://www.haskell.org/)
- [Go](https://golang.org/)
- [Web Assembly](https://webassembly.org/)
- [Rust](https://www.rust-lang.org/)
- [NixOS](https://nixos.org/)
- [esbuild](https://esbuild.github.io/)
- [GNU Emacs](https://www.gnu.org/software/emacs/)
- [Vim clutch](https://github.com/alevchuk/vim-clutch)
- [Tailscale](https://tailscale.com/)
- [ElixirConf](https://www.elixirconf.com/)
- [Discord](https://discord.com/)

{{< rich-title-5 icon="future-head" >}}About Brooklyn
Zelenka{{</ rich-title-5 >}}

Brooklyn is the Co-Founder and CTO at Fission, where her team is building the
next generation of web dev tools for the future of computing on the edge -
levelling the playing field for teams of all sizes.

She founded the Vancouver functional programming meetup, and is the author of
several Elixir libraries including Witchcraft & Exceptional. She was previously
an Ethereum Core Developer, and continues to push the broader web3 space forward
with standards like UCAN auth and the Webnative File System.

### Highlights

{{< podcast-episode/clipping time="02:08"  >}}

**Brooklyn Zelenka:** At Fission, we set ourselves a constraint right at the
beginning that everything had to work directly in a browser with no extensions,
no plugins, any of that stuff. That immediately ruled out blockchain. So we're
saying, "Well, how can we apply a lot of these techniques to get the same sort
of user and benefits of decentralization, interoperable data, permissionless,
the option to exit, to self-host, and not to rely on a single provider in the
web." That's taken us into all kinds of interesting areas.

{{</ podcast-episode/clipping >}}

{{< podcast-episode/clipping time="05:55"  >}}

**David:** What would you say is the advantage of using the web tech versus
relying on some of the operating system APIs to do these things?

**Brooklyn:** So the browser is the most widely installed, cross platform, easy
to use, easy to onboard piece of software that we've ever written. Everyone has
one. It's on every device. Because of web standards, they work not identically,
but pretty good, shockingly well. Learning native APIs is great, but you tend to
be locked onto a particular platform, to the point that there have been attempts
to apply web tech and web APIs to native app building.

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David:** Welcome to the Console Podcast. I'm David Mytton, co-founder of
Console.dev, a free weekly newsletter highlighting the best and most interesting
tools for developers. In this episode, I speak with Brooklyn Zelenka, CTO at
FISSION, a decentralized app framework for the future of web apps at the edge.
We discuss the relevance of blockchain to web 3 and decentralized web apps, why
developers should avoid managing backend servers, the challenges of doing
authentication and identity with local clients, and why web browsers APIs are
the place to build, not the native operating system. We're keeping this to 30
minutes, so let's get started. I'm here with Brooklyn Zelenka. Brooklyn, thanks
for joining the Console Podcast.

**Brooklyn:** Hi, thanks for having me again.

**David:** Let's start with a brief background. Tell us a little bit about what
you are currently doing and how you got here.

**Brooklyn:** I'm the CTO at a company called FISSION. We are a deep tech
protocol engineering team working on the future of the web, offline, local first
user agency, user owned data, and edge computing.

**David:** So when you hear about decentralization or web 3, the first thing
most people probably think of is blockchain and maybe cryptocurrencies. Are
those related, and what does decentralization mean in the context of web apps?

**Brooklyn:** Definitely related. I ended up in the space because of
blockchains. I was hired actually by my now co-founder a few years ago to write
a smart contract programming language that was both readable by lawyers and also
formally verifiable, so actually came in through the programming language route
more than anything else. The cryptocurrency portion of the space has really
taken off and is the part that's getting the most attention, because people are
making a lot of money. But it's certainly not the only thing happening. There's
a lot happening in web, in browsers, in peer to peer communication. But the
cryptocurrency space is, fundamentally, because there's so much money, funding a
lot of the core R&D which is really nice for the web space.

**Brooklyn:** At FISSION, we set ourselves a constraint right at the beginning
that everything had to work directly in a browser with no extensions, no
plugins, any of that stuff. That immediately ruled out blockchain. So we're
saying, "Well, how can we apply a lot of these techniques to get the same sort
of user and benefits of decentralization, interoperable data, permissionless,
the option to exit, to self host, and not to rely on a single provider in the
web." That's taken us into all kinds of interesting areas. Why it's important?
Well, for a lot of the reasons I just listed.

**Brooklyn:** Something recent, obviously Facebook had a very bad day a couple
weeks back when their border gateway protocol went down, and with
decentralization, you don't have to rely on a single provider to give you all of
these things. So as an example, Twitter Blue sky is an attempt to decentralize
Twitter. It's very early, but so that you wouldn't have to rely on one
particular platform and you'd still be able to do all of your social media. We
also don't think that hyper clouds, so AWS, GCP and Azure, should own all of
infrastructure. Anyone should be able to participate. So that's also part of
general movement.

**David:** One of the goals that you're aiming for at FISSION is to allow devs
to avoid managing backend servers. Why do you think that's something that they
shouldn't be doing?

**Brooklyn:** So for a lot of existing backend and full stack devs, it's
something that they already not only are used to doing, but that they like to
do. So there is this element of, "I enjoy my work. I want to work in whatever
the language is, and that's only available on the backend." There's nothing
wrong with that. But it is still a lot of work to build, maintain, deploy,
secure a backend. We see data breaches on the regular, and having a disgruntled
sysadmin with root access is maybe not the best way to set up an application,
and it makes it really difficult for users to control their own data, so there's
obviously the user agency side of this and also to comply with things like GDPR
and all of these other data security regulations. If you aren't holding onto
your user's data, if the user has their data instead, you can't possibly violate
any of these rules because you're not holding any data.

**Brooklyn:** The other big reason is training. So somebody coming into the
industry today has a towering stack to learn, stuff that 20 years ago, it wasn't
quite as deep. You didn't have to learn Kubernetes. And if you can just focus on
the front end, people coming out of a bootcamp, that's a reasonable amount of
things to learn. So not having to learn front end, backend, DevOps, database
design, all of this stuff means that we can keep pace with the number of
developers that we actually need in the industry, because today we just
literally can't train them fast enough.

**David:** So they can just focus on learning some of the front end technologies
and some of the web tech that underlies all these apps. What is that? What APIs
are developers having to interact with in the browser and what will they have to
learn to get into this?

**Brooklyn:** Our goal with Web Native, which is the product, is so that someone
could build a full stack web app that you would be able to build with a full
stack tools, but only in the browser, and in a way that it only feels like
you're working with React and you're making a couple calls out to a framework.
Underneath that there's a lot going on. So the Web Crypto API is really
important, specifically non exportable private keys. So you can generate a
private key in the browser and have that not accessible to literally anyone, not
even the user, so that key can't be stolen or removed from the context.
IndexedDB is a storage in the browser, a little bit more like a database like
abstraction versus something like just holding a memory or local storage.

**Brooklyn:** Putting a few more layers on top of that, definitely helpful, but
IndexedDB, super useful. And then some other things like web workers and service
workers as well, so that you can fake being online when you're offline or to
intercept calls, because sometimes the browser expects there to be, or some
tools to be an external call. And finally the post message APIs so that you can
communicate across tabs and communicate that way, because if you're not always
having to go out to a server, now you have to be able to communicate between
tabs and between windows.

**David:** Okay, so before we get to the network advantages, what would you say
is the advantage of using the web tech versus relying on some of the operating
system APIs to do these things?

**Brooklyn:** So the browser is the most widely installed, cross platform, easy
to use, easy to onboard piece of software that we've ever written. Everyone has
one. It's on every device. Because of web standards they work not identically,
but pretty good, shockingly well. Learning native APIs is great, but you tend to
be locked onto a particular platform, to the point that there's been attempts to
apply web tech and web APIs to native app building. So Windows has taken run at
this. There's a couple versions on Linux. You can obviously wrap a browser
window in something like Electron and ship that, so it's mainly a question of
convenience and ease of deployment, ease of distribution. You literally type in
a URL and boom you're there. You don't have to install anything. And it's just
ubiquitous.

**David:** What would the equivalent of a data store be then, particularly as
you need to you persist data, but then also syncing as well. How does that work?

**Brooklyn:** Having a distributed data store is widely needed and very exciting
for the people that are looking at these problems, because obviously these are
all on the bleeding edge. There's been a lot of work on this recently because we
finally have just the base computer science and the raw APIs in the browser to
actually do these things. There's obviously persisting data. It's one of the
core components. You have identity and auth storage, and compute, really, that's
fundamental building blocks. Storage, obviously we need a way of saying that,
and especially in a browser context where you have limited storage, and at any
time you might be disconnected.

**Brooklyn:** So distributed databases, there's a bunch of different approaches
to this. When you go digging, a lot of distributed databases or decentralized
databases in particular something more came to like an S3 bucket. So you're
going to dump some data in there, give it a name, and you're done. Having the
ability to run aggregates and queries and all the stuff that you expect out of a
database is a harder problem, especially in a case where there's no primary
database. So I have my phone and I have my laptop and maybe my phone is in
airplane mode, but I still want to be able to make updates and use my app. And
when I come online, that needs to sync up together and just work. But at the
same time, my phone has a lot less storage than my laptop does, and maybe the
storage quota allowance on each device is different.

**Brooklyn:** So we think about this kind of like a deck builder. If you have a
card game where you say, "Well, I'm only interested in data that matches X, so
only sync to me that portion of the data and I'll make updates to it and then
distribute that out to everybody else that's interested in it." And this is also
across users. Most databases are multi-tenant. And you and I might be interested
in different data as well, and overlapping, but not necessarily the same. So we
can copy some of the cards out of our deck and hand them over to you, but we
don't need to hand you the entire stack, and we can then still make edits and
changes to all of the bits of data, all the rows in this database and
collaborate on the subset that we have in common.

**David:** That makes sense. Does that rule out some of the so-called big data
type use cases? So I'm thinking where you might use something like Google's
BigQuery, or perhaps one of the Amazon data warehouse products where you might
have hundreds of terabytes of data and you want to run big jobs on them. Is that
the kind of thing that just isn't possible with this tech or is it done in a
different way?

**Brooklyn:** In principle there's nothing that prevents you from using this
tech for those things. This, in a sense, just aggregates the database into
separate components. So you have this very efficient sync and subscription
model. When you have all that data co-located, you could have this in the
petabytes. There's nothing preventing that at all. And there's actually some
nice things about how, especially in our still early designs, but in our
designs, the storage is very flexible, so you can arrange the data in any way,
depending on how you need to process it. You could absolutely do it at scale.
We're really focused down in the browser. The one thing to note is a lot of
this, especially in decentralization and distributed tech in general, there's
this trend going from, "Okay, well we used to have server and client, and there
was the cloud and then there was your local device."

**Brooklyn:** And now we're seeing that there's a bunch of different kinds of
compute in the middle. So you have your phone directly and it's very fast to do
things directly, locally because you don't have to make a network connection, go
out at all, and you do sort of 99% of what you need to do directly on device and
keep it off of the wire. When you do need to go out to send some data to
somebody else or send an email, any of that stuff, or synchronize data, now you
have several layers. And you can kind of think about this in some ways as
extending the cache metaphor that we have on the actual device. So you have the
CPU and then various layers of cache, then RAM, then disk. And now we're saying,
"Well, after disk, you have various layers on the internet." So your local
device is really just a cache for the internet. So you can make a jump now to
edge data centers, or even as we're seeing 5G and Starlink, they're putting a
small amount of storage and compute right on the receiver.

**Brooklyn:** So to make that first jump from your phone out to the 5G network,
there's storage and compute right there. That's hyper local, obviously. Past
that you can jump out to a edge data center so something in your city or your
region, still very, very local, something within some number of tens or at most
hundreds of kilometers. And then finally out to proper cloud, US East One, the
classic, where you do the really heavy data intensive stuff that's not as real
time and not as time sensitive, but maybe needs to be processing huge amounts of
data from multiple sources. So that's where we see this blending with the a
Bigtable and Hadoop all of these things, because they need to do this analytical
processing on many data sources. So that deck metaphor, you can build up a deck
of these many sources that you've been collecting over months and then run
compute over that.

**David:** It reminds me quite a bit of the storage tiers that you might get on
Amazon S3. You get price reductions, and then you have different reliability and
response time guarantees depending on whether you're using S3 Glacier or the
Nearline storage or those kind of things. Moving this into the data store or
even other APIs, how do you think that'll be exposed to engineers to develop on?

**Brooklyn:** I guess it really depends on the use case. If it's a cloud
provider, they're probably going on a bucket this in a different way than
somebody building things that are local first. Our Vision for the future is
something called location transparency. So your storage and compute should be...
Where that happens should be completely hidden from the end user. So if we are
in this world where... And one thing I glossed over a little bit earlier is
we've got this disaggregated database, we have these cards in this deck, and any
one of those cards can be encrypted directly for the user. So now we're not
being pushed through a central auth server all the time. So once you have
something like that set up, it doesn't matter where you run your compute or do
or storage. You can push this out to other resources transparently.

**Brooklyn:** So if my laptop is doing a bunch of other things in the background
and I want to render a 3D scene, well, why should my entire computer slow down
when I can push the assets out to an edge data center that's 50 kilometers away,
so very, very nearby, and have it stream back the results to me. And if my whole
UI feels completely responsive, and when it finishes, it'll send the end result
back, to the user, nothing has changed. But if we're offline, well, I'm going to
have to run that locally.

**Brooklyn:** So being able to give developers an API that just says, "Run this
compute over this storage," is the goal, and there's some complexity there about
how do you decide when to kick off a process remotely? Or even, "Okay, I know
that there's a replica of this data elsewhere and I want that machine to run it
because I know that they already have it right, as opposed to anyone." So
there's some debate about how smart should the APIs be versus giving developers
a nice DSL to say, "Under these conditions run this remotely." My ideal future
picture is it just happens directly in the background and then expose lower APIs
for people that need them, but we'll see how that all plays out.

**David:** So the developers will define something like a priority at the very
basic level, but you could even go further to define different conditions
depending on user characteristics or the type of data or the availability of the
background processing. Is that how you think it would work?

**Brooklyn:** Yeah, exactly. So we can look at some compute and say, "Okay, this
is going to be running over some large data sets, so we're going to need to push
this out somewhere else, but only if I have network bandwidth available and
latency to somebody that wants to pick up this job under these conditions and my
local machine is below a certain threshold." So defining... That's a very
granular way of looking at it, but defining maybe complexity levels, that kind
of thing, to say, "Okay, if this goes beyond X, then kickoff a remote process."
Or, depending on the use case, so maybe not with a 3D rendered scene that I was
using before, but you can also race them and say, "I'll start running this
locally and then kick off a process remotely and see whoever finishes first."

**David:** What would the security implications be for this kind of approach,
and particularly if you are relying on local identity? That sounds like it's
quite a big challenge.

**Brooklyn:** Doing fully distributed identity and distributed auth are the base
building block for things. So people usually think, "Okay, well we've got data
at the bottom and then we've got compute above that. And then we'll start adding
on top of that everything you'd see in a web framework controller." But when we
take a step back and look at it from a practical point of view... I mean, that's
absolutely what's happening in the technology, but from a practical point of
view, step one for doing anything practical is identity and auth. So there's a
bunch of standards that have been coming out over the past couple years, we're
also involved with this at the Decentralized Identity Foundation, to do
decentralized identity where it's a uniform way of describing an identity that's
based on public key cryptography, so using the same kind of keys that you'd sign
your Git commits with, that can be either issued to you or generated by the
user.

**Brooklyn:** So in our use case, we have the user generate them, so the user
now has an identity and that user will then register with different services, or
rather their identity will register with different services. And then auth as
well. So auth needs to be baked directly in these models. So for read access,
doing direct encryption, symmetric encryption on the data, and for any sort of
mutation issuing credentials that say, "Hi, I'm allowed to do these things.
Here's my proof that I'm allowed to do them." You're absolutely right that
there's this challenge of, "Okay, well I want somebody to run a query over my
data and my data is hidden." So today, in 2021, you have to have a trusted
provider of some kind. There are ways of doing secure multiparty compute for
certain classes of thing. There's versions of this for vote counting where you
can prove that your vote was counted, but nobody can prove that you voted a
particular way, as an example.

**Brooklyn:** But in the general case, yeah, you'll have to hand your data over,
somebody will have to decrypt it, run compute over that, and send you the result
back. And there's a couple ways of handling the security there, like breaking up
the data set into different partitions so that nobody has the full thing. That's
really dependent on the kind of query you're doing. The really exciting thing,
and this is further out, so this is even deeper in research land, is something
called fully homomorphic encryption, which is... It turns out that you can run
computation over encrypted data without knowing the data, ever seeing it and
getting results back. And you can even encrypt the function that's running over
it, so you don't even know what you're running, and when the user gets it back,
they can decrypt it, and the answer's correct.

**Brooklyn:** The reason that this isn't widely practical today is it's not very
efficient. So they're working on improving the efficiency of that. And this is
well funded research teams at big companies, because as you can imagine, your
health data would be very useful to train machine learning models with, but you
might not want to give some large company direct access to all your health
records. So that's where that's going. In the meantime, yep, you'll have to use
a trusted provider or be querying on public data. Or run it locally. You can
also do, "Here's the public data, run the sub query. I'm going to run the
private stuff locally and then combine those results."

**David:** Are you building a lot of this functionality as part of open source
projects, because I suppose you are benefiting from the standardization of the
APIs in the browsers, and that's why you are participating in the
standardization projects. How are you thinking about the open sourcing of all
these tools and technologies?

**Brooklyn:** So everything we do, I don't think that we have a single line of
code that's not open source right now. We're big, big fans of open source. As
you said, we've benefited tremendously from open source. It's not only the warm
fuzzy feelings of giving back to the community, all of that. I mean, that's
great, but it's also in our best interest to have everything open, have people
be able hack on it, look at the code. When they report bugs, they can say, "Hey,
I think it's on this exact line." All of that stuff. But also because we're so
far out on the edge, the number of people that have the background and interest
to get involved is not as high as in a lot of other projects. So having somebody
be able to wander in and say, "Hey, have you thought about doing it like this or
like that," is very useful, and standards are almost like a layer below open
source.

**Brooklyn:** With a spec, you can then go and do multiple implementations in
multiple different languages and different takes on it. Having the ability to
say, "Oh, okay you have a project in Go and it's completely on the server."
Yeah, the spec will work for you. Here's some of the things that you might want
to build around that, but here you go. We've had a lot of success with that.
UCAN, use controlled authorization networks is our form of distributed auth, and
that's been getting picked up by a number of teams outside of the browser, as
well as inside of it ,because it solves problems for them coordinating between
services, a use case that we didn't even think about at all. So rather than
having everyone reinvent the wheel, it's really great to put things out there
and have people be able to think about it, adapt it, and especially use it in
new ways.

**David:** So where should someone start if they wanted to either develop a
brand new app or maybe start out thinking to shift their existing architecture
from central servers or cloud over to being more decentralized?

**Brooklyn:** With the existing application, that's obviously the harder one,
because you often have a lot infrastructure built up around the centralization,
and it's a unspoken assumption in a system. The easiest, quickest, highest, and
best use is starting with identity. So giving users the ability to own their
identity means that you can then build distributed auth on top of that, which
makes it able to then do... Eventually you can do encryption at rest on your
server, which makes you much, much, much more secure, compliant with
regulations, all of these nice things. If you have a totally green field
project, that's a different story. That's great. So we have our, still in beta,
but toolkit called Web Native. You can find that at fission.codes. That gives
you everything that you need in a box, basically. Identity, auth, storage,
compute, the whole thing. Offline first, et cetera.

**Brooklyn:** Other than that, A lot of these components are very easy to pick
up on their own. The deeper into this that you go, the more changes you need to
do relative to what you're used to, and making that feel familiar is the
challenge for us, or companies like us, FISSION. Starting with DIDs, which can
be both again directly on device, or you can issue them for your users.
Verifiable credentials, which is related to the auth system that we have, gives
you provable way, as granular as you like, to say this user is allowed to do
this thing, or governments are using this to even... The provincial government
here in Vancouver, so in BC, is using these to, or has at least experiments to
say, "Okay, well this person is allowed to drive, but we're not going to tell
you their age... Any other information about them, their address, any of that."
So now you can walk around and say, "Hey, the government has signed off that I'm
allowed to do this thing."

**Brooklyn:** It also makes it much easier... I mentioned this term earlier and
didn't explain it, permissionless. In web 2.0, we went from having completely
siloed systems to suddenly, with RESTful APIs, being able to issue tokens and
say, "Hey, you're allowed to access these APIs with this token." Permissionless
says, "Why even bother with the token? You can generate your own, or there is no
token, please interoperate with us directly." This vision that we'd been sold
for the past 15 years, that never completely materialized. We have a little bit
of web hooks, things like that.

**Brooklyn:** It suddenly becomes much, much easier when you hand the user the
keys to the identity, and now they can wander around to all these different
services and say, "Hey, I have storage from over there, I have a bit of compute
from over here, and I'm allowed to post over there. I'm going to grant you, the
server, some abilities to do things across all of those to help me achieve some
goal." So that's very exciting for a lot of developers because now they don't
have to set up all this provisioning and an auth server and all this other
stuff. You can literally just look at the public key signatures and you're off
to the races.

**David:** And that brings the benefit of the user owning their data and being
competent in the security of it, because they understand, or maybe they don't
understand. That's the benefit. They can just assume that that it's been
implemented and the technology is providing these guarantees.

**Brooklyn:** Exactly. You don't have to trust a particular provider anymore.
Anyone can hook into this because they're standards, and because it's open. It's
very easy to verify, "Okay, yeah, somebody else did this thing and here's the
chain of signatures. Great." That's a guarantee.

**David:** And the tech stack that you're working on I understand is a mixture
of Elixir and Elm. How have you found working with those technologies? And is
there anything else that you're using that you find really useful?

**Brooklyn:** The actual framework, because it has to work with anybody else's
tech stack, is actually written in TypeScript. A lot of our first party apps are
in Elm, which is a delight to work with. When you get down to it, it's a DSL for
writing web apps, so it does that extremely, extremely well with really good
feedback and really good ergonomics. It's been surprisingly easy to hire for
because I literally went on Twitter and said, "Who wants an Elm job," and we had
more CVs than we knew what to do with. So yeah, Elm for a lot of our first party
apps. We have Haskell on the backend, filling in the couple things that we
actually need to manage still. So we do distribution of some information over
DNS text records. So we need to have a DNS Route 53 manager. So that's in
Haskell.

**Brooklyn:** We have a little bit of Go running because a part of our tech
stack, IPFS, we use Go IPFS there. We use js-ipfs in the browser, and that is a
distributed content store, I guess, aim to be a replacement for HTTP, where
you're not looking for the address something lives at, you're asking for what's
not where. So I want this piece of data and anyone can send it to you. We have
been doing early experiments with WebAssembly, especially to speed up parts of
the cryptography and anything that we need to do that's custom, especially with
anything that's not in the Web Crypto API. Doing things directly in JavaScript
is great, but we were finding really incredible speed ups by using Rust compiled
down to WebAssembly, to the order of like 130 X speed up, which was pretty
fantastic, taking things from being a second or two down to imperceptible. It
always feels good.

**David:** Yeah, it makes a big difference for the user experience. Okay, great.
Well, before we wrap up, I have two lightning questions for you. The first is,
are there any interesting dev tools that you're playing around with at the
moment?

**Brooklyn:** Nothing that spectacular since the last time I was on here. Myself
and the team are still really enjoying Nix. So we have Nix across all of our
projects, our production services are running NixOS. it's fantastic. The
consistency's amazing. Highly recommend. And then esbuild, I think, has been
taking the world by storm recently. So enjoying having fewer bundler headaches,
because that's a whole thing.

**David:** And then what is your current tech setup? What hardware and software
are you using.

**Brooklyn:** So I have really two setups. I have a M1 Mac, MacBook Air, and on
that I run obviously MacOS, EMACS, Doom EMACS. I have a VIM clutch, which is
foot pedal, because I'm using VIM bindings. So I press the pedal down, it's in
insert mode, I lift the pedal up and it stops typing. And then I also use an
iPad pro I dial in to a Digital Ocean server over Tailscale using Mosh, use a
mechanical keyboard, so I now have two. I have an Anne Pro 2. I'm not actually
sure how to say the name of the brand AZIO, just arrived, which was a
Kickstarter mechanical keyboard.

**David:** And where can people find you online?

**Brooklyn:** So you can find me anywhere as Expede. That's my username,
E-X-P-E-D-E. So Twitter, GitHub. We have a Discord and a Discourse for FISSION,
so if you go to fission.codes, there's links to all of that. And yeah,
definitely drop into the Discord. We've had a bunch of people join recently
because I was just giving a talk at ElixirConf, and it's a really nice
supportive community, lots of links, maybe too many links, lots to discuss and
learn over there.

**David:** Excellent. Well that's all we've got time for today. Thanks for
joining us, Brooklyn.

**Brooklyn:** Great, thank you.

**David:** Thanks for listening to the Console Dev Tools Podcast. Please let us
know what you think on Twitter. I'm @DavidMytton, and you can follow
@consoledotdev. Don't forget to subscribe and rate us in your podcast player.
And if you are playing around with or building any interesting dev tools, please
get in touch. Our email's in the show notes. See you next time.

{{</ box-collapsible >}}
