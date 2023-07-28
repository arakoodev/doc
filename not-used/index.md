---
slug: pipe
title: How Pipe went from prototype to production in 11 days with Hasura
talking: Peter Downs
tags: [facebook, gagag, docusaurus]
image: "./image.svg"
descriptions: Pipe, a fintech startup, has achieved tremendous success in just a year - over 3,500 customers and over $1 Billion in ARR - and all this with just 11 engineers. Helping fuel this efficiency was Pipe’s decision early on to make Hasura an essential part of their technical architecture, which has provided tangible benefits to their dev processes and their bottom line.
timeline: [11 days from prototype to production, $600K USD saved annually (50% fewer devs), 90% reduction in time for new feature dev]
---

import SpeakerCard from '@site/src/components/blog/SpeakerCard';
import Quotes from '@site/src/components/blog/quotes';

<SpeakerCard
  quote="Hasura is a fantastic way to create a data fetching layer to our database. It’s ultra-stable and often better at planning queries than ones we were writing ourselves."
  name="Peter Downs"
  title="Director of Engineering, Pipe"
  image="/img/peter.png"
/>

<div className="flex gap-4 justify-between pt-8">
    <div className="w-1/3 flex flex-col justify-between ">
        <div>
            The Problem
            <h2>Pipe's Challenge</h2>
        </div>
        <Quotes> 
<h4>        “We needed 50% fewer frontend developers than we thought we needed. Hasura and GraphQL reduced the toil to build and iterate on the frontend.”</h4>
        <h4 className="m-0">Peter Downs </h4> 
        Director of Engineering, Pipe </Quotes>
    </div>
    <div className="w-1/2">
        <div className="right-section">
        <p className="head-info">Pipe’s development team needed to thread the needle balancing the immediate requirements of
        the business while also building for the future. Their technical architecture started with a
        Postgres database, Go as their backend language, REST APIs, and React for their web
        front-end running on Google Cloud. As they rapidly grew, they needed to consider additional
        concerns:</p><div className="content-data-row"><h4 className="info-headline">Fast Time to Market &amp; Feature Innovation</h4><p className="info-desc">  Pipe’s team needed to quickly create or change features based to gain new customers and
        respond to user feedback.</p></div><div className="content-data-row"><h4 className="info-headline">Flexible Architecture</h4><p className="info-desc"> One of Pipe’s architectural goals was to keep the architecture as agile as possible, where
        changes to the underlying database and frontend UX could happen rapidly.</p></div><div className="content-data-row"><h4 className="info-headline">Small Development Team</h4><p className="info-desc"> Pipe’s 11 engineers needed to stay agile and flexible - understanding all layers of their
        system - database, backend, integrations, and the frontend web UI</p>
        </div>
        <div className="content-data-row">
        <h4 className="info-headline">Flexible Web APIs</h4>
        <p className="info-desc">One of their early challenges was inflexibility of utilizing REST APIs, where they
        encountered multiple variations of similar request types, but each requiring its own REST
        endpoint because of differing requirements.</p>
        </div><div className="content-data-row">
        <h4 className="info-headline">Performance</h4>
        <p className="info-desc"> Pipe’s website needed to run quickly to provide a great user experience, and scale to meet
        the traffic of their rapidly growing customer base.</p>
        </div>
        <div className="content-data-row">
        <h4 className="info-headline">Security &amp; Authorization</h4>
        <p className="info-desc"> Pipe’s system stores sensitive financial and customer data of their customers and they
        needed to make sure that the data was secure and that users could only view data they were
        authorized to see.</p>
        </div>
        </div>
    </div>
</div>


<div className="bg-neutral-800 p-10 px-20 rounded-xl my-12">

<h2 className="mb-8 text-4xl">“… Basically, we’re seeing that it takes only about a tenth of the time to develop a new page in our application or a new component based on having adopted Hasura.”</h2><p className="m-0 ">Peter Downs</p><p className="m-0" >Director of Engineering, Pipe</p></div>

<div class="flex justify-between">
<div class="w-1/3">
<div class="left-head-section">
<p class="m-0">The Solution</p><h3>Why Pipe chose Hasura</h3></div></div>

<div class="right-sectio w-1/2"><p class="head-info"><span>As Pipe started investigating solutions to these challenges, they discovered Hasura and went into production with it within 11 days.</span></p></div></div>

(https://hasura.io/static/pipe_arch-8fa7fde158eefeed4f700072cc8b543d.png)