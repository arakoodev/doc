// src/components/ResearchPaper.js
import React from 'react';


const ResearchPaper = () => {
    return (
        <div className="flex flex-col md:grid grid-cols-2 gap-14 py-10 px-4 lg:w-[85%]  mx-auto">
            <div className='w-full'>
                <p className='text-gray-700 font-bold uppercase'>[ &nbsp; The Research Paper &nbsp; ]</p>
                <h1 className="text-4xl font-bold mb-4">Prompting Is Programming: A Query Language For Large Language Models</h1>

               <div className='flex gap-4'>
                 <p className="font-semibold ">Accepted at ACM SIGPLAN PLDI'23</p>
                 <p className="font-semibold">SRIlab ETH Zurich, Switzerland</p>
               </div>
                <p className="font-semibold">by Luca Beurer Kellner Marc Fischer Martin Vechev</p>

                <p>
                    Large language models have demonstrated outstanding performance on a wide range of tasks such as question answering and code generation. On a high level, given an input, a language model can be used to automatically complete the sequence in a statistically-likely way. Based on this, users prompt these models with language instructions or examples, to implement a variety of downstream tasks. Advanced prompting methods can even imply interaction between the language model, a user, and external tools such as calculators. However, to obtain state-of-the-art performance or adapt language models for specific tasks, complex task- and model-specific programs have to be implemented, which may still require ad-hoc interaction.
                </p>
                <p>
                    Based on this, we present the novel idea of Language Model Programming (LMP). LMP generalizes language model prompting from pure text prompts to an intuitive combination of text prompting and scripting. Additionally, LMP allows constraints to be specified over the language model output. This enables easy adaption to many tasks, while abstracting language model internals and providing high-level semantics.
                </p>
                <p>
                    To enable LMP, we implement LMQL (short for Language Model Query Language), which leverages the constraints and control flow from an LMP prompt to generate an efficient inference procedure that minimizes the number of expensive calls to the underlying language model.
                </p>
            </div>
            <div className='w-full'>
                <h2 className="text-2xl font-semibold mb-4">Experimental Results</h2>
                <p>Compared to standard decoding using 🤗 Transformers' generate() function, LMQL allows for high-level control and requires less tokens to be processed.</p>
                <img src="/svg/research/cot.svg" alt="" />
                <p className='text-center'>Chain-Of-Thought reasoning with LMQL vs. standard decoding.</p>
                <img src="/svg/research/interactive.svg" alt="" />
                <p>Query statistics of using LMQL for interactive language model querying vs. standard decoding.</p>
                <a
                    href="https://example.com/full-paper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="text-blue-500 font-semibold hover:underline"
                >
                    <img src="/svg/research/read.svg" alt="" />
                    {/* Read full paper */}
                </a>
            </div>
            
          
        </div>
    );
};

export default ResearchPaper;
