---
subtitle: ["[", "The Research Paper", "]"]
title: "Prompting Is Programming: A Query Language For Large Language Models"
authors: ["Luca Beurer Kellner,", "Marc Fischer,", "Martin Vechev"]
authorsImg: 
    - "/img/avatar1.png"
    - "/img/avatar2.png"
    - "/img/avatar3.png"
icon: /svg/research/flag.svg
conference: ["Accepted at","ACM SIGPLAN PLDI'23"]
location: ["fa-regular fa-flag","SRIlab","SRIlab ETH Zurich, Switzerland"]
experiment: 
    title: Experimental Results
    desc: Compared to standard decoding using 🤗 Transformers' `generate()` function, LMQL allows for high-level control and requires fewer tokens to be processed.
    img: ["/svg/research/cot.svg","/svg/research/interactive.svg", ]
    imgDesc: ["Chain-Of-Thought reasoning with LMQL vs. standard decoding.", "Query statistics of using LMQL for interactive language model querying vs. standard decoding."]
    readmore: 
        title: Read the full paper 
        icon: /svg/research/read.svg
        link: https://example.com/full-paper.pdf
---

Large language models have demonstrated outstanding performance on a wide range of tasks such as question answering and code generation. On a high level, given an input, a language model can be used to automatically complete the sequence in a statistically-likely way. Based on this, users prompt these models with language instructions or examples, to implement a variety of downstream tasks. Advanced prompting methods can even imply interaction between the language model, a user, and external tools such as calculators. However, to obtain state-of-the-art performance or adapt language models for specific tasks, complex task- and model-specific programs have to be implemented, which may still require ad-hoc interaction.

Based on this, we present the novel idea of Language Model Programming (LMP). LMP generalizes language model prompting from pure text prompts to an intuitive combination of text prompting and scripting. Additionally, LMP allows constraints to be specified over the language model output. This enables easy adaption to many tasks, while abstracting language model internals and providing high-level semantics.

To enable LMP, we implement LMQL (short for Language Model Query Language), which leverages the constraints and control flow from an LMP prompt to generate an efficient inference procedure that minimizes the number of expensive calls to the underlying language model.