---
title: Data science
who: Ines Montani
whoLink: https://twitter.com/_inesmontani
org: Explosion
orgLink: https://explosion.ai/
what:
  We discuss how ML and NLP work behind the scenes, how developers should think
  about applied NLP, the common languages and frameworks used to build ML and
  NLP applications, and the challenges that come with running them at scale.
season: 3
episode: 6
date: 2022-07-14T06:00:00Z
duration: 32:11
episodeURL: https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/60bbffbf-2e83-4246-aca2-1246628e7bc2/audio/098fae55-f768-4760-8a62-312a8c3359fd/default_tc.mp3
draft: false
summary:
  Data science - a devtools discussion with Ines Montani (Explosion). Episode 6
  (Season 3) of the Console DevTools Podcast.
metaDescription:
  Data science - a devtools discussion with Ines Montani (Explosion). Episode 6
  (Season 3) of the Console DevTools Podcast.
headerType: fixed
hideLines: true
hidePlanes: true
isSubpage: podcast-episode
pageType: podcast-episode
customPageStyle: true
xlViewport:
  largeText: true
topImg1Src: /img/podcast/explosion-ines-montani-profile.jpg
topImg2Src: /img/favicons/explosion.ai.svg
ogImg: /img/podcast/podcast-cover.jpeg
twitterCard: https://player.simplecast.com/60bbffbf-2e83-4246-aca2-1246628e7bc2
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

In this episode we speak to Ines Montani, co-founder and CEO of
[Explosion](https://explosion.ai/), a developer of Artificial Intelligence and
Natural Language Processing technologies. We discuss how ML and NLP work behind
the scenes, how developers should think about applied NLP, the common languages
and frameworks used to build ML and NLP applications, and the challenges that
come with running them at scale.

Things mentioned:

- [Explosion](https://explosion.ai/)
- [spaCy](https://spacy.io/)
- [Prodigy](https://prodi.gy/)
- [Tensorflow](https://www.tensorflow.org/)
- [Hugging Face ](https://huggingface.co/)
- [Python](https://www.python.org/)
- [Cypress](https://go.cypress.io/)
- [Hyper](https://hyper.is/)
- [Slack](https://slack.com/)

{{< rich-title-5 icon="future-head" >}}About Ines Montani{{</ rich-title-5 >}}

Ines Montani is co-founder and CEO of Explosion. A software developer working on
Artificial Intelligence and Natural Language Processing technologies, her
company Explosion are makers of spaCy, one of the leading open-source libraries
for Natural Language Processing in Python, and Prodigy, a modern annotation tool
for creating training data for machine learning models. In 2020, Montani became
a Fellow of the Python Software Foundation.

### Highlights

{{< podcast-episode/clipping time="01:39" >}}

**Ines Montani:** The general idea is that you want to teach a computer or an
algorithm or a system to make predictions about things. That's basically it. And
you usually do that by showing it examples. So you have an algorithm and then
you have a lot of examples. Here's for example, some text and some labels
attached to the text, and then you train your model. And at the end of it,
hopefully what you get out of it is a system that can make similar predictions
that generalize across stuff it hasn't seen before. That's basically machine
learning in a nutshell.

{{</ podcast-episode/clipping >}}

{{< podcast-episode/clipping time="27:10" >}}

**David Mytton:** Interesting. What kind of challenges do you see developers
facing as their applications scale with ML app type implementations?

**Ines Montani:** I think it definitely involves keeping an iterative machine
learning or ML ops flow. Your model is never static. You're not labelling some
data training a model, and then you're done with it forever … You have to
retrain, you want to run experiments. Maybe you have a great idea like, "Oh,
well I think maybe we can improve our model or add some capabilities to it with
this data."

And you want to try it out, and run some experiments. You want to look at the
numbers, does it improve things? Does it not improve things? If it improves
things, great! you want to be able to then ship your new data, run it. You want
to have enough test cases. You want to make sure that you're not making your
model worse in some ways. And then you want to retrain and store your model. You
want to version your model. You want to make sure that everything is organized
and then you want to go back to labeling some more data, training again. Keeping
that sort of life cycle alive.

{{</ podcast-episode/clipping >}}

{{< box-collapsible title="Full transcript" class="podcast-transcript is-expanded" >}}

**David Mytton** (00:05): Welcome to the Console Podcast. I'm David Mytton,
co-founder of Console.dev, a free weekly newsletter highlighting the best and
most interesting tools for developers. In this episode, I speak with Ines
Montani, co-founder and CEO of Explosion, a developer of artificial intelligence
and natural language processing technologies. We discuss how ML and NLP work
behind the scenes, how developers should think about applied NLP, the common
languages and frameworks used to build ML and NLP applications, and the
challenges that come with running them at scale. We're keeping this to 30
minutes. So let's get started. I'm here with Ines Montani. Ines, thanks for
joining the Console Podcast.

Ines Montani (00:50): Yeah. Thanks for having me.

**David Mytton** (00:51): Let's start with a brief background. Tell us a little
bit about what you are currently doing and how you got here.

**Ines Montani** (00:57): Yeah, I'm the co-founder of a company called Explosion
and we build developer tools for machine learning. We'd probably be best known
for open source library spaCy, which is a library for advanced natural language
processing in Python. And we also built Prodigy, which is an annotation tool for
creating training data for machine learning models. Because yeah, if you're
serious about machine learning, you almost always want to train your own model
and data is a big part of that, that we feel like deserves a lot more attention
than it currently gets. And yeah, that's basically what we're working on.

**David Mytton** (01:29): Let's start with the Theory of Machine Learning then,
and then we can get into NLP and how that can be applied. So how does ML
actually work behind the scenes?

**Ines Montani** (01:39): It's pretty complex and there are a lot of things to
talk about. You could do a whole podcast focusing on just that question, but… I
would say in a nutshell, for people listening to this who maybe don't have a
strong background in machine learning or only heard the term, the general idea
is that, well, you want to teach a computer or an algorithm or a system to make
predictions about things. That's basically it. And you usually do that by
showing it examples. So you have an algorithm and then you have a lot of
examples. Here's for example, some text and some labels attached to the text,
and then you train your model. And at the end of it, hopefully what you get out
of it is a system that can make similar predictions that generalize across stuff
it hasn't seen before. That's basically machine learning in a nutshell.

And as you can see, there are a lot of moving parts here. There's the data, if
your data is bad, the predictions you get out of it at the end are maybe also
bad. If your algorithm is bad or encodes some problems or bias, then the results
are also going to be equally as bad. And also, I think you can often maybe think
of it as sort of a slightly different paradigm to programming. So, in classical
programming, you write your code, you compile it and you get a program. In
machine learning, you have your data, you have your training algorithm and at
the end of it, you get a model.

**David Mytton** (02:55): Right. That makes sense. So would it be accurate to
say there's two steps? It's the training to build the model and then there's
what you do with it, like the inference and that kind of activity.

**Ines Montani** (03:05): Yeah, exactly. I would say, especially in applied
work. So, that's mostly what I can talk about. There's also of course research
and there's a lot of very active research that feeds into what people are doing
with the technology, but normally, in an applied setting, yeah. You usually
start off with a problem, like something you want to solve. You're getting a lot
of emails and you want to somehow categorize them to process them faster, or
you're getting chat messages, or you're getting images from some source and you
want to find something out.

Or you have a greater business problem. Often the business problem isn't as
simple as, "Predict X." The business problem is, "We are currently taking way
too long to answer support emails. How can we fix that?" And then, as the
developer, you have to think about, "Okay, what can we do here? How can I break
this problem down into something that maybe a machine learning model can
predict?" And then you can look at the data and what you already have, what you
can create, and what makes sense for the model to do. And then, at the end of
it, you still only have a model. So what really matters as well is the context
in which you use the model. If what you're trying to build makes no sense and is
a bad idea, then all amount of machine learning is probably not going to fix
that.

And often, also the model is only one component in your app. It might be one
component that initially groups new emails into categories. And then on top of
that, you might also have something much more basic. You might have a regular
expression or some really basic string matching. Like if your email starts with
the word invoice, that's a really strong signal that maybe you don't even need
machine learning to process that. And then at the end of it, maybe you have a UI
that you build specifically for your team to use. So definitely, I view machine
learning as one component in a developer's toolbox and also the models as one
component of an application.

**David Mytton** (04:46): Right. That makes sense. So how does a model get built
and trained?

**Ines Montani** (04:50): It's probably a lot less glamorous than it sounds. You
usually have a script talk process, you have a machine often, a more and more
powerful machine, and then you have your data and then you run the training
algorithm over the data. And then you check did the model get this right? Did
the model get this wrong? If the model guessed wrong, then you can update it in
a way that hopefully gets it right next time. And then you keep doing that until
you see a good, high enough satisfactory number at the end.

And then, you export your model and then you also want to evaluate it in ways
that actually check does that high number I'm seeing there actually translates
to something useful at the end? Because you can have a model that's 99%
accurate, well actually if your model's 99% accurate, the first thing I would
check is whether there's a bug somewhere in your code or data. But, you can have
a very highly accurate model. That's pretty useless. And vice versa, you can
have a rather mediocre model on the accuracy scale that's actually really
solving a problem for you.

**David Mytton** (05:51): Okay. So it's really down to understanding what you're
using the model, the machine learning, for as to whether it's actually useful?

**Ines Montani** (05:58): Yes, exactly. That's at least my view of the most
productive way of actually using machine learning.

**David Mytton** (06:03): You gave the example of using regular expressions just
for some simple subject matching. And then, I suppose on the other side of
things, there's some really complicated things that machine learning can do
around image recognition or translation. How should developers think about that
spectrum as to whether to use a rules-based implementation or to actually go
into machine learning?

**Ines Montani** (06:23): I think it always depends on the use case. I would
always recommend, "Hey, start off with a rule baseline." You kind of want to
know what you are up against. If your task is actually quite simple, training a
model can easily be overkill and you also end up with a situation that's a lot
less predictable. Like it becomes a lot harder to understand why your model is
making mistakes for example, a lot more work goes into that. Whereas, if you
write some regular expressions or some rules, or even some more complex rule
based logic, it's usually quite easy to understand what's going on and to fix
things.

So, it depends on the use case often, there are situations where, "Hey, nothing
can beat a simple rule based extraction logic because it's going to be faster.
It's going to be more interpretable. It's going to be easier to maintain." So,
that's great. So usually, if you're in a scenario, I would always say, "Hey, try
out the most basic approach, see where that gets you." And that's also, ideally,
what you want to beat with the machine learning model. And there are a lot of
things where yes, it makes sense where just matching for words in a text,
doesn't get you very far. And you also want to have more information. You want
to take the context into account. If this word is used in that context, then
it's more likely this, and that part is something where yeah machine learning
can be very helpful.

**David Mytton** (07:32): What about NLP then? What is that and what are the use
cases?

**Ines Montani** (07:36): Yeah. So NLP is about processing and ideally,
"understanding human language." So basically you start off with text and humans
produce a lot of texts these days, we produce more texts than we can read. So
you very easily end up in a situation where you have a lot of texts, you want to
find something out about it, and you want to find out things that go beyond just
keyword matching or searching for stuff. You want to find out what concepts like
persons, organizations, places are mentioned. You want to find out what a text
is about given some topics. You want to find out the relationships within the
text, like who does what to whom, is someone the object, is someone the subject?
How are things related in context? That's all something that NLP can help you
with. And that's also something we specifically designed our library, spaCy,
for.

And the applications are very broad and really span across all kinds of
industries because really, everyone has texts, no matter what you're doing. Most
industries and even things, you might not expect immediately everyone has texts.
And there's often actually where we see machine learning or NLP provides a lot
of value in even smaller tasks that previously had to be done manually and that
can now be automated. Or where in the automated system can assist a human to do
their job more effectively. That's often the applications. They might not sound
as glamorous or fancy as, "Oh, a computer can now magically do everything and
understand you and talk to you and bring you a coffee." And NLP is about in a
more practical applied context. It's often about stuff like, "Hey, we have a
bunch of documents here that we want to analyze, or we want to find potential
mistakes where maybe a human has done something wrong, or contracts that include
things that are potentially problematic or inconsistent." Stuff like that.
That's where currently the most value is basically provided in industry, I would
say.

**David Mytton** (09:27): Is that what you mean by applied NLP?

**Ines Montani** (09:30): Yeah.

**David Mytton** (09:30): Which you talked about a bit in the past. Yeah.

**Ines Montani** (09:32): Yeah. I think that's basically using the technology
for, ideally, something useful and often that happens within various industry
contexts. Yeah.

**David Mytton** (09:40): Yeah. Okay. So what steps would you advise developers
to take to decide whether NLP is relevant to the problem and how should they
then start exploring implementing it?

**Ines Montani** (09:54): Well, I try not to give too specific advice because it
really, really depends on the use case. I think, the more general advice is, I
think it's always with everything you're doing as a developer, you should always
reason about what are you trying to achieve? What do you want out at the end?
And how does this component fit into the larger application? And then you can
look at, "Hey, what can I cover with a more naive role based approach and where
does that fall short? Are there things where the structure of the language or
the more knowledge of the world and really understanding a bit more about what's
being said in the text is actually important to solving this task?" And then it
could be that yeah maybe training a model here is useful.

And then, for example, our library, spaCy, is a good starting point, especially
for people who come from a Python background, it's very easy to get productive
quickly, which is also one of the main goals for the library. And I do also
recommend getting at least a rough idea of how machine learning works, how NLP
works, how the models work. There are tons of resources about this, even for
someone who hasn't thought about this much. Because this really informs what you
do, how you interpret the results, or if things don't go well, if your model
doesn't give you the results you're looking for, and it predicts the stuff that
you didn't want it to predict, doesn't predict other things. That helps to think
about, "Okay, what's my model learning here? Oh, it's looking at like the
surrounding words. Does the context actually provide this information or does it
not?" What can the machine learning model do or what are things it might
struggle with for reasons that are related to how it works basically.

**David Mytton** (11:22): Do you think that developers need a deep understanding
of the math and the science behind it? Because there's often that impression
that you might need a PhD before you can get into that.

**Ines Montani** (11:30): No, I mean, I wouldn't say that. I do think it's kind
of important to know a bit about what's going on under the hood. You don't need
to be able to understand all the papers or really engage with all the formulas.
I think also, as a developer, I would say most developers have this very natural
curiosity about, "Oh, how does this stuff work? And why?" It's very unsatisfying
if you're just running a function and you have no idea what actually happens
there. So I do think a lot of this just comes naturally that as you start
engaging with this, you just learn a bit more about what it actually does. But
you definitely don't need a PhD to be productive with machine learning or
natural language processing, no. I don't have a PhD.

**David Mytton** (12:13): Obviously, there's a lot of reliance on the data that
you are feeding into the model. How much do you see that as being blockers in
getting any real use from a lot of these data sets?

**Ines Montani** (12:25): Data structuring problems and how to break down
problems into labeled data that can then be used for training is one of the
biggest problems we see in applied NLP. And I think one reason also this doesn't
always get as much attention or as much attention as, in my opinion, it should
get, is that a lot of the work comes from the research community. And that's
also very important, research focuses on problems that generalize well and
problems that are really hard and tries to discover new algorithms. And often,
the way you work in a research context is you also want to be able to compare
your results to others, you want to say, "Hey, I developed this new algorithm or
this new little technique or optimization hack and how does it compare?"

So everyone will evaluate the systems on the same data sets. And these data sets
aren't especially useful or awesome, they're just used for benchmarking. And
usually, you start off with a data set and then you try to improve performance
on it. And that's not necessarily an approach that you see in applied work. In
applied work, you often start with a problem. And your goal is to pick the right
tools and create the right data that a model can learn from. And there's a lot
of work that goes into that. You need to know about the domain you're working
with, if you're working with legal text and you understand absolutely nothing
about this and have no subject matter experts, you might make pretty bad
decisions for how you want to label the data and structure the problem and that
leads to things not working out.

Or often, I would say a common pitfall as well, is trying to model translate the
business requirements very, very directly into the model. This is not
necessarily, you might have a business goal, but that's not necessarily what
you're trying to predict. Maybe you want to analyze news texts and you want to
find out, "Are certain developments in my industry, good or bad for my company?"
Translating that into a label scheme and a machine learning task might not
actually be a great idea here because you could highlight sentences and say,
"Good for my company, bad for my company." But there's so much implied knowledge
that's not present in the text here that your model will likely not be very
productive and this is not a great way to approach this.

Whereas, instead you might decide, "Hey, I'm first analyzing this news and
finding out, extracting key events and then maybe relationships." I don't know,
"My competitor released a new product." Or I don't know, "A new law was passed
that makes these things easier in my field." And then that's something that
probably, yes, the machine learning model could be pretty good at. And on top of
that, you then define some other logic that then decides, "Oh, here are things
that we would consider as positive developments and here are things that we want
to pay close attention to because that could have a negative impact," for
example.

**David Mytton** (15:05): Yeah. And I suppose everyone assumes that structured
data is perfect and then you get into it and you find a lot of edge cases and
you've got to clean things up.

**Ines Montani** (15:13): Yeah, exactly. That's also why I think it's so
incredibly important to spend time with your data. Even as a developer, even if
you're building the machine learning models, you don't have to be the one to
create all of it, but you should get a feeling for what's in it. And then even
really basic things that might sound simple, like "Highlight all person names,"
even there, you may easily hit edge cases like, "Should doctor be included in
the person name?" Or, "Is Snoop Dogg a person?" Probably. I don't know. "Is
Super Mario?" Maybe. Depends! You also want to make sure that different people
are working on the data, that there is a consistent scheme, because if you end
up with inconsistent data where sometimes Super Mario as a person and sometimes
not what you are trying to teach the model, here's like, "Hey, there is a
distinction here. Learn it." And if the distinction there is not actually a real
distinction, because you just labeled your data inconsistently the model will
try to come up with some logic and some weighting that maybe leads to that
outcome that's actually completely wrong and not what you want. So, engaging
with your data is really important. And also defining what your label scheme
means for your application.

Another example is similarity, are two things similar or dissimilar. A great
example here is, "I love cats and I hate cats." Is that similar? Like it's two
sentences that express very different sentiments about cats. So in this context,
it'd be absolutely dissimilar, but out of all the things you could be saying in
the English language, these are two sentences that express a sentiment about
cats. They're incredibly similar. And these are two completely different
interpretations of it. And both are correct, depending on the context. If you're
building a dating app, you probably want to rank these as very dissimilar
because as someone hating cats, someone loving cats are probably not going to be
compatible. But if you're building something else, you might be like, "Oh yes,
sentiment about cats. Someone talks about cats here, this is essentially the
same thing." So for that, I think it's important to both engage with things on a
machine learning level, to engage with things on the subject level, and to
engage with things on a data level. And of course also, the pooled greater
application of things.

**David Mytton** (17:17): What are the common frameworks and libraries that
developers might use to build these types of applications?

**Ines Montani** (17:23): You mean the whole application or just like the
modeling?

**David Mytton** (17:26): I suppose. Yeah, that's a good point. There are two
steps. It's the modeling side of things. And then actually building that
internet application, maybe we can cover the first one or models first.

**Ines Montani** (17:34): So the fundamentals of it, obviously, they're
different libraries for machine learning. Some common libraries are PyTorch or
TensorFlow. But there's also, for example, for spaCy, we've written a lot of our
own implementations because we want to have this very standalone framework where
we can really build machine learning models because ultimately, you can also
build a lot of these things from scratch without using a library. So that's
like, "Okay, that's how we need the machine learning component to work."

And then of course you have frameworks around implementing, for example, the NLP
capabilities, different models, existing models. So for example, spaCy is one
library that was quite popular for my applied NLP and lets to really build these
pipelines. There are also very popular libraries and resources by Hugging Face,
which is also a company in our space and kind of who we've been collaborating
with. And they also provide a lot of models. They provide the libraries that can
be used to train specific types of models for different types of capabilities.
And also people can share models and data sets and things they're working on,
which especially also helps makes it easy for researchers, who've built
something new to kind of make that available for people to try out and test, see
what works and share their work.

There are also various different libraries for more specific applications like
in a chatbot conversational AI space, there's libraries for more working with
biomedical texts. So that's depending on how deep you go, there's a lot you can
choose from. And there's also a lot you can build yourself and put together
yourself. So then you have a model that you can run.

And then of course there's the whole other part of your application. Usually you
don't do machine learning for the sake of machine learning. There's always
something you want to do with these predictions at the end. You might want to
have some other logic that's written in Python that then extracts these
predictions and puts them into a structured format. And then you probably want
to run something like an API that you can query or that your app or your front
end, that you've built in some completely different technology can then access,
send texts to, process them, get something back that's then useful for whatever
you're doing. Or maybe you want to just run these really long running jobs on a
server and you don't actually have an application and you just want to find the
most efficient way in parallel to process millions of documents and write stuff
to a database at the end. That's all very flexible.

**David Mytton** (19:50): I suppose, even right at the very beginning, there's
all the data labeling as well?

**Ines Montani** (19:55): Yeah. You could be using a tool like Prodigy, which is
the tool we developed, which we really designed as a developer tool. So the idea
was people used to have this idea that you could just kind of outsource data
creation and labeling. And I do think we will probably look back at this the way
we now look at the idea of outsourcing programming in the 90s, this doesn't
really work. You can't just write a spec for it over the wall and then, that's
it. And also you need to iterate on your data.

Often, just like with programming, the first idea you have for how to solve
something is often not correct. And then you go back and iterate on your code.
Something doesn't work, you change your code. And the same goes for the data.
You might have one idea of like, "Oh, I'll structure it that way." And then you
start actually labeling and creating the data. And you're like, "Nah, this
scheme does not work at all because I'm constantly hitting these edge cases. My
annotators can't agree on what the right answer is. There's no way my model can
learn this." So you go back, revise and come back. And that's why it's very
important to have this sort of iterative workflow for both the programming,
which I think feels very natural to developers, but also to the data creation.

And that's also why we've built Prodigy as this developer tool, where you can
spin it up on your local machine, start a web server, you can label, you can
interact with it programmatically, you can write some scripts, you can automate
stuff. There's a lot that you don't always need to label by hand. You can put
your model in the loop, you can use your model to suggest what things should be
labeled. And then that gives you a great idea of how good your model is and
whether there are some interesting edge cases or whether you can get some more
ideas of what you could do to improve the model and make it better.

**David Mytton** (21:22): A lot of these tools are written in Python. Why do you
think that's become the most popular or one of the most popular languages for
implementing these types of problems?

**Ines Montani** (21:32): Python was lucky that it was in the right place at the
right time I would say. It was there and being able to use the extensions in
Python was another big advantage. And actually a lot of people might not realize
this, if you just, PIP install stuff that actually a lot of the libraries that
form the foundation for data science and other things are actually written in
Python using C extensions. That's what makes them fast. And that being possible
made Python a good choice.

And I think the other reason is that Python is an all around language. You can
do a lot of stuff in Python. Python used to be or still is a very popular choice
for web development. Anything you want to do, if you just want to write a
script, Python is a great language to go for. And so, I think that's also what
made it a good choice to adopt for people because you already, you kind of want
to work in the same language you might be coming into machine learning and you
previously did some web development. So it's great to stay in a language and use
what you already know. That's also, I think why languages that try to be very
specific for one use case have been less successful. We don't need a new
programming language for AI. We want one all around programming language that
people can work in and that feels good. And I think, yeah, that was a big
factor. And then just the right place, right time.

**David Mytton** (22:43): I suppose Python is also relatively easy to get
started with. And so you could build a product that allows a kind of point and
collect development of things. And then you can allow users to start writing a
little bit of code and as they get more advanced, they can get into Python and
then into the C extensions as well.

**Ines Montani** (22:59): I think that's definitely a good point. Yeah.

**David Mytton** (23:02): And you've talked about this as, I suppose, almost
like a product concept. I think you've called it, "Make your tools programmable
and then let your users write code". What do you mean by that?

**Ines Montani** (23:12): If you're building developer tools, one big thing
people like about open source libraries and using developer tools is that you
can program with them and you can modify them, you can change them and you don't
want to have one magical function you call for everything. If you want something
custom, you can do it by writing code. And I think that's very appealing to
developers because as a developer, what you do is you write code. And similarly,
I think one thing that can often go wrong in developer tools is introducing too
many abstractions because at some level an abstraction is always going to be
leaky and doesn't cover everything that a user might want to do. And it also
puts a lot of burden on the library to support every possible thing that a user
might want to do.

So for example, you might have a developer tool that integrates with some
databases out of the box. If you make your interfaces programmable and make it
easy for people to add their own adapters, to add their own databases, they're
going to be much happier than if they have to rely on you to support anything
that comes along. Your tools stay more dynamic and developers like helping
themselves, developers like programming. Nobody wants to file a support ticket
and wait two weeks until they can get something really basic. So, that's very
important. And even for people who are, I hate using the word like non-technical
because I think that it's weird to group people into technical and
non-technical, but even people who don't necessarily program can really benefit
from an open and extensible ecosystem because the people who can program are
able to develop against it and build new things. If you need something that is
custom, you can just do it. And I think that's very important.

And speaking of Python in general, what we try to do is there are a lot of basic
programming concepts that are already in the language and it's often not very
productive to try and completely reinvent the whole way you're doing things. And
it also makes it much harder for people to get started because you don't only
need to learn a programming language, you need to learn all the APIs of specific
libraries. If you can actually engage with the library in similar ways as you
are already used to in Python, that's going to help you a lot. Because even if
you get stuck, there are a lot of resources you can just read up on like, "Oh,
how do I iterate over something in Python?" That's really more helpful than,
"What's the iteration method of this one specific library called again?" That's
not great. And that's kind of what we mean by, "Let them write code."

**David Mytton** (25:31): Where does the cloud come into this in terms of
running the training side things? Is it true you need thousands and thousands of
CPUs to run training models? How does that work?

**Ines Montani** (25:42): Models do tend to get larger and depending on what you
want to do, it's often handy to have a GPU available, but it's also not true
that you need supercomputers in order to train these models. One thing that we
are quite passionate about as well is trying to make sure that our models run
and even can be trained on just the CPU or on a machine with resource
constraints because we think that's important and there's no reason that, "Oh,
everything can only run on a big machine."

But yeah, so the cloud, that's a very classic way of running compute jobs for
pretty much anything you're doing. But I think another thing in machine learning
that we see is also that things like data privacy is quite important. You want
to be in control of your data. You want to be in control of your models. For
many companies and many use cases. It's very important to, you want to have this
on your own cloud. You don't just want to have one magical AI in the cloud that
you send all of your stuff to and it gives you predictions. A lot of these
things are developed in house and we see more and more companies have
development teams that are working on their own in-house models, data assets,
solving their problems in really custom ways.

And that's also where I see the future of machine learning going. People,
individual developers, at lots of different companies, building these things and
not this kind of vision that people were talking about years ago of, "Who's
going to win at AI? Is it Google? Are we all going to buy our AI from the Google
AI store?" Like, no, it's software development and it's quite similar to a lot
of other types of software developments in that way. Like web development, for
example.

**David Mytton** (27:10): Interesting. What kind of challenges do you see
developers facing as their applications scale with ML app type implementations?

**Ines Montani** (27:19): Well, I think it's definitely keeping this iterative
machine learning or ML ops flow. And also, because your model is never static.
You're not labeling some data training a model, and then you're done with it
forever and call AI, check off the list. Done! and you never have to look at it
again. So there is like, "Okay, you start, you could spin it up, train it in the
cloud, then store your model somewhere nicely, have it all well integrated into
your app." But there's always this flow of you have to keep doing that. You have
to retrain, you want to run experiments. Maybe you have a great idea like, "Oh,
well I think maybe we can improve our model or add some capabilities to it with
this data."

And you want to try it out, you try it out, run some experiments. You want to
look at the numbers, does it improve things? Does it not improve things? If it
improves things, great! you want to be able to then ship your new data, run it.
You want to have enough test cases. You want to make sure that you're not making
your model worse in some ways. And then you want to retrain and store your
model. You want to version your model. You want to make sure that everything is
organized and then you want to go back to labeling some more data, training
again. Keeping that sort of life cycle alive. I think that's definitely
difficult, there are lots of parts of it. And then that also later, then touches
infrastructure as you might want to run lots and lots of training jobs. And you
want to make sure that if one of them dies, that you can maybe restart it and
your machines are not running out of memory or all kinds of things like that. So
it really touches into many different aspects of engineering.

**David Mytton** (28:45): They're very similar to any other software project,
really? Once it scales like coordination, understanding, tracking issues,
monitoring. The tooling might be specialized, but it's just another aspect of
building software.

**Ines Montani** (28:57): That's definitely what a lot of the reality looks like
with some added complexities. Oh you can't just read the code and look at what's
happening. This bay or pay model weights that make predictions and do they make
good predictions? How do you find that out? It's not as easy as just looking at
the numbers at the end. Or does your data model in cold biases or things that
lead to harmful results at the end? How are you evaluating that? There are like
a lot of these questions that maybe you already have in more traditional
software development, but maybe to a different extent or in a different form.

**David Mytton** (29:31): Right. OK. Well, before we wrap up then I have two
lightning questions for you. So the first one is what interesting tools are you
playing around with at the moment?

**Ines Montani** (29:41): I haven't really looked into many more newer
libraries. I haven't been super hands on programming things. Actually, one thing
that's kind of new to me is we've been doing a lot of end-to-end testing where
you're running the backend and front end and scripting different flows because
we want to... So we've been looking into Cypress, which was really cool. And
it's something, this sort of level of testing is something I haven't done. And
it's quite important if you're building products that consist of both the
backend and the UI that are both stateful. There's a lot of complexity there. So
that was actually quite exciting. That was very recently. Also, our team is
currently growing and we're having new people joining the team, so there's a lot
of more process and project management stuff that we haven't previously been
using. It's like, "Oh, how do you manage software acing communication?" Because
we're a distributed team, lots of different time zones from Australia to Europe.
How do you manage stuff like stand ups? You can't just all be on a call. It's
always night for someone. So how do we integrate that into our flow on Slack,
without it being too noisy, but also helpful? How do we manage the tickets? How
do we manage regular retros? Stuff like that, so that's also been an interesting
learning experience.

**David Mytton** (30:48): And then secondly, what's your current tech setup?
What hardware and software are you using on a daily basis?

**Ines Montani** (30:54): Actually, I'm mostly working on a MacBook Air that I
still have the one before they introduce the M1s. However, I really want to
upgrade to an M1. So I do everything on a relatively small screen, like a 13
inch, which some people find surprising, but I like the portable-ness of the
laptop and having this one machine that I can basically use everywhere. That's
my main death machine. I program in visual studio code. Like many people, I use
different terminals, but I really like Hyper as a terminal because you can
actually program it in JavaScript and it kind of looks stylish. So I like that.
I spend a lot of time in Slack, which is also unsurprising. And yeah.

**David Mytton** (31:31): Great. Well, unfortunately, that's all we've got time
for. Thanks for joining us.

**Ines Montani** (31:38): Yeah. Thanks again for having me. It was a lot of fun.

**David Mytton** (31:38): Thanks for listening to the Console Dev Tools podcast.
Please let us know what you think on Twitter. I'm @DavidMytton and you can
follow @consoledotdev. Don't forget to subscribe and rate us in your podcast
player. And if you are playing around with or building any interesting dev
tools, please get in touch. Our email is in the show notes. See you next time.

{{</ box-collapsible >}}
