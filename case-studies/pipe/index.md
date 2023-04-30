---
slug: pipe
title: How Pipe went from prototype to production in 11 days with Hasura
talking: Peter Downs
tags: [facebook, gagag, docusaurus]
image: "./image.svg"
descriptions: Pipe, a fintech startup, has achieved tremendous success in just a year - over 3,500 customers and over $1 Billion in ARR - and all this with just 11 engineers. Helping fuel this efficiency was Pipe’s decision early on to make Hasura an essential part of their technical architecture, which has provided tangible benefits to their dev processes and their bottom line.
timeline: [11 days from prototype to production, $600K USD saved annually (50% fewer devs), 90% reduction in time for new feature dev]
featured: true
---

import SpeakerCard from '@site/src/components/blog/SpeakerCard';
import Quotes from '@site/src/components/blog/quotes';

<SpeakerCard
  quote="Hasura is a fantastic way to create a data fetching layer to our database. It’s ultra-stable and often better at planning queries than ones we were writing ourselves."
  name="Peter Downs"
  title="Director of Engineering, Pipe"
  image="/alekhaweb/img/peter.png"
/>





### The Problem
# Pipe's Challenge

        
“We needed 50% fewer frontend developers than we thought we needed. Hasura and GraphQL reduced the toil to build and iterate on the frontend.”
    
Peter Downs  
Director of Engineering, Pipe 
    
Pipe’s development team needed to thread the needle balancing the immediate requirements of the business while also building for the future. Their technical architecture started with a Postgres database, Go as their backend language, REST APIs, and React for their web front-end running on Google Cloud. As they rapidly grew, they needed to consider additional concerns:

Fast Time to Market &amp; Feature Innovation Pipe’s team needed to quickly create or change features based to gain new customers and respond to user feedback.Flexible ArchitectureOne of Pipe’s architectural goals was to keep the architecture as agile as possible, where changes to the underlying database and frontend UX could happen rapidly.Small Development TeamPipe’s 11 engineers needed to stay agile and flexible - understanding all layers of their system - database, backend, integrations, and the frontend web UI Flexible Web APIs

  
  One of their early challenges was inflexibility of utilizing REST APIs, where they encountered multiple variations of similar request types, but each requiring its own REST endpoint because of differing requirements.
        
### Performance

Pipe’s website needed to run quickly to provide a great user experience, and scale to meet the traffic of their rapidly growing customer base.
        
### Security &amp; Authorization
        
Pipe’s system stores sensitive financial and customer data of their customers and they needed to make sure that the data was secure and that users could only view data they were authorized to see.


<SpeakerCard
  quote="“… Basically, we’re seeing that it takes only about a tenth of the time to develop a new page in our application or a new component based on having adopted Hasura.”"
  name="Peter Downs"
  title="Director of Engineering, Pipe"
  image=""
/>

### The Solution
# Why Pipe chose Hasura

As Pipe started investigating solutions to these challenges, they discovered Hasura and went into production with it within 11 days.

![MarineGEO circle logo](https://hasura.io/static/pipe_arch-8fa7fde158eefeed4f700072cc8b543d.png)

<ImageExplained> Pipe architecture diagram </ImageExplained>
