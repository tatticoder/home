---
title: VR
who: Elena Kokkinara
whoLink: https://twitter.com/redarahel
org: Inflight VR
orgLink: https://inflight-vr.com/
what:
  We discuss how VR has developed over the last decade, how the body ownership
  illusion can make you feel like you have an entirely different physical body,
  whether developers can code in VR environments, and whether AR is in
  competition with VR.
season: 3
episode: 8
date: 2022-07-28T06:00:00Z
duration: 26:27
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/6c0e5167-086f-4733-93d9-b3c911d16a1b/audio/b2b4c668-7d3b-4857-b769-7a3b26ac79ff/default_tc.mp3
draft: false
summary:
  VR - a devtools discussion with Elena Kokkinara (Inflight VR). Episode 8
  (Season 3) of the Console DevTools Podcast.
metaDescription:
  VR - a devtools discussion with Elena Kokkinara (Inflight VR). Episode 8
  (Season 3) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/podcast/inflight-vr-elena-kokkinara-profile.jpg
topImg2Src: /img/favicons/inflight-vr.com.svg
ogImg: /img/podcast/podcast-cover.jpeg
twitterCard: https://player.simplecast.com/6c0e5167-086f-4733-93d9-b3c911d16a1b
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

In this episode we speak to Elena Kokkinara, CTO at
[Inflight VR](https://inflight-vr.com/), a VR platform developer for in-flight
entertainment. We discuss how VR has developed over the last decade, how the
body ownership illusion can make you feel like you have an entirely different
physical body, whether developers can code in VR environments, and whether AR is
in competition with VR.

Things mentioned:

- [Inflight VR](https://inflight-vr.com/)
- [Unity](https://unity.com/)
- [Unreal Engine](https://www.unrealengine.com/)
- [Oculus](https://www.oculus.com/)
- [Cave](https://en.wikipedia.org/wiki/Cave_automatic_virtual_environment)
- [HTC Flow](https://www.vive.com/)
- [Pico](https://www.pico-interactive.com/)

{{< rich-title-5 icon="future-head" >}}About Elena
Kokkinara{{</ rich-title-5 >}}

Elena Kokkinara is CTO at Inflight VR, the first company that provides a VR
entertainment solution for airplane passengers. Having completed a PhD in VR and
published numerous papers on VR and computer vision, she is passionate about
creating new experiences for Virtual Reality users and gamers. Her scientific
interest is to explore the necessary parameters to design a flight-specific VR
ecosystem.

### Highlights

{{< podcast-episode/clipping time="05:51" >}}

**Elena Kokkinara:** The essence of VR is this sense that you are immersed, and
you forget the real world and you feel like you are somewhere else. You feel
like you are really there. That's also the sense of presence as we call it. The
way this works, it's very similar to the real world, right. So we feel and we
understand the virtual word in the same way as in the real world with our
senses. Vision, hearing, touch, even movements of our own body, right, and the
trick is that these senses, they are contingent between one with the other. If
we see something and we see something touching us, this has to be consistent in
order to believe that it's real. Okay, that's what makes us believe it's real.
Or if we move our body and then we have a virtual body, the body needs to move
in a similar way in order to feel believable. We call this a sensory motor
contingencies, and this is essential to make this perception feel realistic.

{{</ podcast-episode/clipping >}}

{{< podcast-episode/clipping time="19:58" >}}

**Elena Kokkinara:** There are people that want to escape reality and that's
what VR is for. Some people have this need more than others. See the pandemic,
and with all the lockdowns, people need it to be somewhere else in their house
and VR helped. Or think of having to be in for a long time in an unpleasant
space or very constrained space, like an airplane, you want something to escape
this reality and VR it's super good for that, it's a good tool. But do you
really want to be in VR long term in VR and they prefer reality from VR. I'm not
sure, I prefer reality, to be honest. I could use VR for experiencing something
special or learning something I couldn't learn in the real world, but I don't
want to replace my reality for VR in the long term.

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David Mytton** (00:05): Welcome to the Console podcast. I'm David Mytton,
co-founder of console.dev, a free weekly newsletter highlighting the best and
most interesting tools for developers. In this episode, I speak with Elena
Kokkinara, CTO at Inflight VR, a virtual reality platform developer for inflight
entertainment systems. We discuss how VR has developed over the last decade. How
the body ownership illusion can make you feel like you have an entirely
different physical body, whether developers can code in VR environments and
whether AR is in competition with VR. We're keeping this to 30 minutes. So let's
get started. I'm here with Elena Kokkinara. Elena, thanks for joining the
Console podcast.

**Elena Kokkinara** (00:50): Thank you for inviting me.

**David Mytton** (00:52): Let's start with a brief background. Tell us a little
bit about what you're currently doing and how you got here.

**Elena Kokkinara** (00:58): Right. So I'm currently the CTO of Inflight VR.
It's a company where it makes entertainment solutions for inflight, for
airplanes, basically, using VR technology. My background is on virtual reality.
Basically I did a PhD on virtual reality and I come from computer science. I
studied computer science and computer graphics in a master's degree.

**David Mytton** (01:23): Let's start with the use cases for VR then. Is it
primarily gaming? Is that what everyone always thinks of?

**Elena Kokkinara** (01:30): Not at all. VR, it's been around for 20 years and I
think it's only the last five years or so that it has become popular with the
gaming community. Health and education have been benefiting from it and they
have a lot to gain from there and other sections too, other sorts of
entertainment, a lot of use cases really and less.

**David Mytton** (01:53): So how have things changed over the last decade?

**Elena Kokkinara** (01:57): It's a funny question. I've been there for a little
bit more than a decade and I've seen a huge growth. At the beginning, it was
mainly used for research, very expensive and bulky equipment, and really very
limited people had access to it, right. You had to have a lot of funding to get
it and use it and there were really few real world applications. I think at the
beginning, it was mostly health related or in the U.S. military related fundings
that you could find to power this type of research. But then one day the
consumerware headsets appeared with the Oculus DK1 and everything changed,
right. Actually, I have an anecdote to share with you that in my academic
career, I was working on a project that was, how could you bring VR in an
airplane in the future aiming for 2050.

In the middle of the project, of the three year project, the DK1 appeared, and
we could try already, actually within the same project, we could try VR in an
airplane. So it was all very fast. Now everything became smaller with very,
let's say, low visual quality at the beginning compared to these very expensive
equipment, but it was very affordable, right. So it became a trend. Slowly, the
quality became much better. We have lighter headsets also now, more comfortable,
less equipment. Now we have the inside out cameras. So you don't have to have
all these external cameras to track the system and everything. So it's still
very expensive, I would say for the consumers. Then we have also the standalone
ones that make everything super much easier and portable and everything. Yeah,
everybody wanted to develop in VR. So unity and unreal, the game engines, they
were creating a lot of support along the years, right. So it was easy also for
the people to develop, but it's been there for more than 20 years and it has
been developed only the last five to seven years quite a lot.

**David Mytton** (04:14): Right, and that was triggered by the release of the
Oculus.

**Elena Kokkinara** (04:20): Yeah. Definitely. I would say. Yeah.

**David Mytton** (04:23): What was it about Oculus that was so revolutionary?

**Elena Kokkinara** (04:25): I guess the chip equipment, chip materials, the
tracking was good. It's the main challenge for VR and everybody could use it for
one very small percentage of the price of what there was there before.

**David Mytton** (04:40): Yeah. Okay. So the headset and the Oculus, that's what
everyone thinks of when they think of VR. Is that still the primary user
interface?

**Elena Kokkinara** (04:51): I would say yes. I mean, at the beginning there
were other type of VR, like The Cave, I don't know if you've heard about, it was
a room that you had the projectors in all the sides of the room and you could
wear glasses and then you could see in 3D and you felt you were inside the 3D
space, but I think nobody's using this anymore. It's very expensive still. But
yeah, it is this type of headsets, really. They're getting smaller with less
cables, as I said, more comfortable. They now start becoming, having these more
sunglasses like style, the smaller we manage to make the processing power
hardware. We need the smaller devices we get and I think this trend will keep
going. I don't know. Maybe one day we will arrive at these contact lenses, black
mirror vision that many people have.

**David Mytton** (05:43): Yeah. Okay. So when you go into a VR environment, how
does our perception change?

**Elena Kokkinara** (05:51): Well, basically the essence of VR is this sense
that you are immersed, right, and you forget the real world and you feel like
you are somewhere else. You feel like you are really there. That's also the
sense of presence as we call it. The way this works, it's very similar to the
real world, right. So we feel and we understand the virtual word in the same way
as in the real world with our senses. Vision, hearing, touch, even movements of
our own body, right, and the trick is that these senses, they are contingent
between one with the other. If we see something and we see something touching
us, this has to be consistent in order to believe that it's real. Okay, that's
what makes us believe it's real. Or if we move our body and then we have a
virtual body, the body needs to move in a similar way in order to feel
believable.

We call this a sensory motor contingencies, and this is essential to make this
perception feel realistic. Now there is another parameter there, which is the
adaptivity and the plasticity, let's say of our brain, and we can play around
with this because our brain learns to adapt to small inconsistencies, right. So
we can bend reality. Think of the mouse movements, for example, right. You do
very small movements, but you see in your screen much bigger movements and you
still understand that it is you that is doing this. It's similar in the virtual
world, you can play around with small inconsistencies and you can still believe
it's real, but you change the perception, right. So you can think things are
further away or your environment is bigger or your body is different or you can
make people believe they're flying. So we play with the plasticity of the brain
in order to change perception and this is what makes VR special, because if you
just want to replicate reality, what's the value of it?

**David Mytton** (07:54): There are a few challenges that people probably have
experienced with this around motion sickness and using devices for long periods
of time. How's that changed and what do you see as the solutions to that?

**Elena Kokkinara** (08:11): This is always going to be a challenge, right. So
motion sickness, it's mainly the content creator's responsibility to avoid. I
think that the hardware it's good enough to provide everything we need. We have
good processing power. The field of view is getting bigger and bigger,
resolution is almost now we can even have 8K resolution. So all these hardware
components are more or less there, but then if the content creators make it
wrong, you are going to feel sick, right. So if there is movement, fast
movement, sideways movement, up and down because your brain basically is not
able to adapt to these big changes, right. Your balance system knows you're not
moving, but then your eyes tell you you're moving then you get sick. So there
are good practices to follow. If we follow them, we are good. Then there are
also the graphical components. So we cannot make too heavy graphics because this
will cause latency on the rendering.

So we need to be careful there too. Well, that was always the case also with
video games. You couldn't make something super expensive procedurally, because
it will have latency. So there, we have more limitations with VR because there
are two cameras that trend there at the same time, in the same environment. So
double the processing power we need. In terms of eye strain, which is this
tiredness you feel in the eyes after using it for a long period of time, it's
going to be there. This is not going to change. It's like your computer screen.
You need to take breaks after 20-30 minutes and look far away because your eyes
basically converge in something that 's a few centimeters away from your eyes,
right. So the muscles don't don't work and you get tired. I don't think this is
going to change unless we go into this lens' vision again and then it allows you
to look in and out whenever you want.

**David Mytton** (10:24): Yeah. Okay. You mentioned the resolution as being an
important factor and you can get to 8K. Now, is that sufficient, is that
realistic enough, or do you think it'll go further?

**Elena Kokkinara** (10:35): I think that's good enough, as long as you don't
see the pixels, is good enough. But yeah, I mean, if we talk about realism in
general for graphics and so on, if the resolution is good enough, then you've
solved most of the issues. But in terms of graphical realism, I mean, there is
research that suggests that it's not that important. I bring video games as an
example all the time, because things are very similar. It was never important
realism. Unless you look for it, unless you want these impressive environments,
but it's the engagement that makes things feel wow, and it's the sensory input
that makes it believable as I explained before, the way you combine your senses.
So yeah, realism is important if you are looking for it.

**David Mytton** (11:24): Yeah. So I suppose it depends on the use case, games
like Minecraft, they're not realistic, but that's all part of the aesthetic of
the game, isn't it?

**Elena Kokkinara** (11:32): Exactly. Yes exactly.

**David Mytton** (11:34): Yeah. What about peripheral vision? How important is
that?

**Elena Kokkinara** (11:39): This is important. If there is not a big field of
view, you can also feel uncomfortable after a certain period of time. So right
now we can simulate good enough with the most popular headsets, whatever the
human eye can cut. It's not there yet, 100% of course, but it's good enough. I
think with 110-115 degrees of horizontal field of view, it's good enough. When
you get less than 100, then you have this window effect. You feel like you're
looking at the word through a window, which makes everything less realistic
also.

**David Mytton** (12:21): Yeah. Is that a computational challenge? Is it like
additional screens essentially on the side, or do they use curve projections?
How does it actually work?

**Elena Kokkinara** (12:32): It's mainly a hardware issue, I would say. It's not
that much of a rendering problem. Nowadays, we have these pancake lenses that
they try to wrap. Let's say what you see a little bit. So even though the screen
is smaller, it somehow amplifies what you see. Okay. It's like a lens in front
of the screen that somehow amplifies the view and then you can do some tricks on
the rendering to make it look stereoscopic and correct. We have achieved a few
things with that, but then there are other challenges, like how do you make it
look okay for every type of facial features, right? So you have to correct for
interpupillary distance. There are challenges and until we get into this
rounded, let's say, screens where basically you can allow for covering more of
your vision, I don't know if we are that close technically, but I hope we get
there at some point.

**David Mytton** (13:38): Okay. Makes sense. You've written in the past about
this concept of body ownership, illusion. What can you tell me about that?

**Elena Kokkinara** (13:48): This is, again, related to what I talked earlier,
the sensorimotor contingencies, right. It's like how you trick the brain to make
them believe that what you see it's realistic. The idea basically comes from
1998, I think, from some cognitive scientists, Botvinick and Cohen, that they
came up with this rubber hand delusion, right, that was not related with VR. It
was basically that you would put a person's hand in front of them and then you
had a rubber hand and you would hide the real hand from the participant, like
with the experiment, but the person would only see the rubber hand. The
experimenter would touch, synchronously, your real hand in the rubber hand. So
after a few seconds of touching in random places the hand, you would feel that
this hand is your hand, the rubber hand, you felt it was your hand.

It's a very, very strong illusion and it works most of the time. What they would
do at the end is that they would go to stab with a knife, the rubber hand, and
you would move away your real hand because you thought it was yours. That's the
way they measured that you felt it was yours. So a few years later we took this
concept and we tried it in VR with synchronous touch of what you would see, like
something would touch you in the VR, like a digital ball and then in the real
world, a tennis ball would touch you. The ball was tracked and you could see it.
It was synchronous. The illusion of this hand, this virtual hand, it's yours,
really and if something hurts, it can affect you. It was very strong. So then
this virtual hand illusion was transferred into the whole body illusion.

You could play around not only with stats, but also with movement. So if you see
the movement of the virtual body being synchronous with yours, you feel it's
yours. Whereas if the movements are not synchronous or if the stats are not
synchronous with the ball, you don't feel this, right. So extremely strong. Then
you can do all sorts of things like change the perception of your body, like
showing that you have a bigger body with a very, let's say long hand or a very
big belly. Then if you have synchronous stats or movements with this virtual
body, you would feel that, oh, I suddenly have a very long hand or a very big
body, or I'm a child or whatever. There are so many things you can do with this
idea and it's very, very powerful.

**David Mytton** (16:29): That does actually work then, so you've tried that in
real applications?

**Elena Kokkinara** (16:33): I've tried it with thousands of participants in my
experiments and it always works, always. Almost always, let's say 95% of the
time it works.

**David Mytton** (16:44): Excellent. So you can become different characters and
completely change your appearance in the virtual world.

**Elena Kokkinara** (16:50): Yeah. Not only you can change the perception of
your appearance, but with [inaudible 00:16:56] so that you can change behaviors.
So for example, you would put yourself in a body of a different color and your
racial bias would change.

Or I don't know, nowadays there are other experiments, like they put you in the
body of Freud and then you can give advice on yourself, better advice on
yourself and play with these types of concepts. Crazy.

**David Mytton** (17:23): So all of these interesting concepts, how would
someone actually go about putting them into use in an application? If you are a
developer, where do you start with building VR applications?

**Elena Kokkinara** (17:36): I think that most of the people come from a gaming
background, right. Gaming development, because it's all very, very similar
unless you don't play so much with graphics and you go directly with, I don't
know, 360 videos, which is another category altogether. But yeah, mainly it's
similar to developing games, you need design, you need art, then development
testing. The user experience, it's a little bit different, the user experience
design, because there's the whole concept of immersion and presence that you
need to consider and these are different from, let's say, gaming design or
website design, right.

It's a completely different thing, different dimension also. So yeah, user
experience designers need to kind of educate themselves around virtual reality
specifically. Then in terms of art and development, if we want to again with
video games, the only thing is that you need to learn how to optimize for VR,
both VR and the development, right. Everything needs to be lighter. The
graphics, the geometry, the textures need to be good for VR, and there are best
practices to follow by Unity by Oculus. There are very, very good tools out
there and instructions on how to go about it.

**David Mytton** (19:03): Okay. How much is coding versus graphical design?

**Elena Kokkinara** (19:08): Well, I guess it depends on the experience in the
use case. As I told you, for me, interaction and engagement are more important
in order to create a good experience than very impressive graphics. But of
course you go nowhere without a good artist, right. So it depends a little bit
on what you're aiming for.

**David Mytton** (19:29): Right. So we've seen some examples of software
engineers moving all of their development work into VR environments and there's
a good blog post about someone who's doing this almost full time where they've
got their editor in VR and they have loads of different windows open. You can
kind of move around rather than having a big display or two displays. You could
have eight or 16 in VR. What's your take on this approach?

**Elena Kokkinara** (19:58): There are people that want to escape reality and
that's what VR is for. Some people have this need more than others. See the
pandemic, and with all the lockdowns, people need it to be somewhere else in
their house and VR helped. Or think of having to be in for a long time in an
unpleasant space or very constrained space, like an airplane, you want something
to escape this reality and VR it's super good for that, it's a good tool. But do
you really want to be in VR long term in VR and they prefer reality from VR. I'm
not sure, I prefer reality, to be honest. I could use VR for experiencing
something special or learning something I couldn't learn in the real world, but
I don't want to replace my reality for VR in the long term, let's say, right. In
terms of the developers, yeah, I mean, maybe some people want to develop being
by the beach for a few hours, but the entire day I'm doubtful they could even
handle the tiredness in the eye and all these things.

**David Mytton** (21:09): Right. I suppose that's where graphical resolution
becomes really important if you are dealing with text, which is what code is. If
you've got a 4k monitor in front of you, you've got a high quality display and
it can be, I suppose, quite challenging moving into a 3D world would rendering
the quality that you need for the text.

**Elena Kokkinara** (21:27): Yeah. I don't think this would be really a problem
soon. I mean, this will be solved if it's not already solved with the 8K
headsets.

**David Mytton** (21:37): Okay. So it's more about just existing in the
environment and how that is from a lifestyle perspective.

**Elena Kokkinara** (21:44): Yeah, definitely.

**David Mytton** (21:46): Yeah. Okay, and what about machine vision and image
processing? Is that related to VR at all?

**Elena Kokkinara** (21:53): I think this is more relevant for AR so far, but
the newest headsets, they come with depth cameras and see through cameras where
they use them to blend, let's say reality with virtual reality. I can think of
cool applications that you can do with these cameras using machine learning and
image processing. I don't know, some sort of simulation of the real world by
seeing the cameras in VR in a fun way, or they have been using it also for,
let's say, recognizing obstacles in the real world, so you can avoid injuries
and protect you somehow from bumping into things. I can think of other use cases
also, but yeah, it wasn't ever a major technology to consider when working with
VR, but it could be if you want to do fun applications.

**David Mytton** (22:45): Okay. What do you see the relationship with AR being?
Do you say it's in competition with VR or the application's just very different.

**Elena Kokkinara** (22:54): I never saw them as competitors, to be honest. I
think the use cases are different. The VR, you want to use it to completely
forget the real world, right, whereas AR is more to augment your real world as
the name suggests. So I think maybe the competition might come more on the
business level in terms of who gets investment first. So do the investors prefer
to put their money in AR or in VR? I guess this is where the competition comes
in, but in terms of use, I think they're different.

**David Mytton** (23:30): Right. We've seen companies like Apple put a lot of
time into their AR technologies and the APIs and everything over the last few
years. Do you think that is the right direction? Is it constrained on a mobile
device?

**Elena Kokkinara** (23:45): If Apple does it, it will become mainstream. So
there is no way around it, to be honest and for sure they're going to do
something very impressive and different than others. So, I mean, we're looking
forward to it also.

**David Mytton** (24:04): Excellent. Before we wrap up, I have two lightning
questions for you. So the first one is what interesting tools or dev tools are
you playing around with at the moment?

**Elena Kokkinara** (24:15): We're playing around with some new headsets that to
be honest, are very cool. There are some prototypes, they are ultra thin.
They're more towards these sunglasses form factor that I said earlier. They're
super cool. I mean they're prototypes still, but if the headsets go towards that
direction, I think they would become much more attractive for the users.

**David Mytton** (24:47): And the innovation there is about how light it is and
makes it just a lot easier to engage?

**Elena Kokkinara** (24:54): It's easier to wear, basically. It's easier to
carry around.

**David Mytton** (24:59): Yeah. Then the second question is what is your current
tech setup? What hardware and software are you using on a daily basis?

**Elena Kokkinara** (25:06): Mainly work with Pico devices, Pico hardware for
our operations on a daily basis. Then in development, we do everything with
Unity and we have some, also some applications in native Android. I mean, we
have a very sophisticated backend also. So we play with JavaScript React and we
have analytics, we use Python for that. So we blend a lot of different
technologies. In the hardware side also, I mean, as I told you, we play with
everything that comes out but for the moment the Pico hardware is the one that
wins for our operations.

**David Mytton** (25:48): Excellent. Well, unfortunately that's all we've got
time for. Thanks for joining us, Elena.

**Elena Kokkinara** (25:53): Thank you so much.

**David Mytton** (25:55): Thanks for listening to the Console DevTools podcast.
Please let us know what you think on Twitter. I'm @davidmytton and you can
follow @consoledotdev. Don't forget to subscribe and rate us in your podcast
player. If you are playing around with or building any interesting dev tools,
please get in touch. Our email is in the show notes. See you next time.

{{</ box-collapsible >}}
