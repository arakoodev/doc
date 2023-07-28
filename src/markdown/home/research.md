---
subtitle: ["[", "The Research behind EdgeChains", "]"]
title: "Jsonnet – A data templating language (used at Kubernetes, Tanka, Google and AllenNLP)"
authors: ["Luca Beurer Kellner,", "Marc Fischer,", "Martin Vechev"]

icon: /svg/research/flag.svg
conference: ["Born at","Google"]
location: ["fa-regular fa-flag","Google","Google, Mountain View"]
experiment: 
    title: How does it look ?
    desc: Being a superset of JSON, the syntax is very simila
    img: ["/svg/research/jsonnet1.png","/svg/research/jsonnet-conditional.png","/svg/research/jsonnet-functions.png" ]
    imgDesc: ["Simple Jsonnet syntax", "Jsonnet conditionals"]
    readmore: 
        title: Read the full documentation 
        icon: /svg/research/read.svg
        link: https://jsonnet.org/
---

The name Jsonnet is a portmanteau of JSON and sonnet, pronounced "jay sonnet". It began life early 2014 as a 20% project and was launched on Aug 6. The design is influenced by several configuration languages internal to Google, and embodies years of experience configuring some of the world's most complex IT systems. Jsonnet is now used by many companies and projects. 
Jsonnet is a functional lazy evaluated language that supports powerful referential concepts. Compared to Javascript, which on the other hand, is an imperative programming language. Jsonnet is going to allow you to write said DSL faster using functions and it's going to be simpler and less prone to errors.

Initially inspired by GCL (Generic/Google Config Language) - which is a language that uses dynamic scope. You can define a `template` object with a variable defined as `external`. This way you can create similar objects by providing a concrete value for those `external`s at the time of instantiating. GCL codebase at Google is about 180 Million lines of code.

Tools like Zapier, Customer.io's webhooks, etc. allow integration with arbitrary APIs and have become a standard part of many marketing/sales stacks. These apps use things like Jinja, Mustache, or Liquid which are great for text but not JSON templates. CloudFormation built function semantics on top of JSON/YAML twice: once in the form of templates and again in the form of its intrinsic functions. A more comprehensive comparison is in the official [documentation](https://jsonnet.org/articles/comparisons.html).
