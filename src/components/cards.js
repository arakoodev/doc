import React from 'react'
import {frontMatter} from "../markdown/pricing/cards.mdx"

const Cards = ({hero, start, head, desc, cta }) => {
  return (
    <div>
          <div className="overflow-hidden rounded-lg">
              <img className="w-full" src={`${hero}`} alt="Compute Addon" />
          </div>
          <div className="px-8 py-4">
              <p className="text-xs text-neutral-900 dark:text-neutral-500 m-0">
                  {start}
              </p>
              <div className="flex items-center gap-2 mt-2">
                  <img src={head.img} alt="Compute Upgrade" />
                  <span className="text-sm text-neutral-100">
                      {head.value}
                  </span>
              </div>
              <p className="mt-2 text-neutral-900 dark:text-neutral-400 text-xs min-h-[40px] lg:min-h-[50px] lg:max-w-[290px]">
                  {desc}
              </p>
              <div className="flex items-center justify-between mt-4 mb-4">
                  <a href={cta.link} className=''>

                      <button
                          className="text-neutral-200 bg-neutral-800 hover:bg-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-300 font-medium rounded px-2.5 py-1 mr-1 font-medium ring-[.5px] ring-neutral-500 border-0 text-xs dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:ring-neutral-500 dark:border-neutral-500 " type="button" >
                          <span className="truncate">
                              {cta.value}
                          </span>
                      </button>
                  </a>
                  <p className="text-emerald-500 text-xs hover:underline m-0"> {cta.desc}
                  </p>
              </div>
          </div>
    </div>
  )
}

export default Cards