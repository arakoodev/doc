import React from 'react'
import PricingCard from "./PricingCards";
import { DatabaseCaption, DatabaseHeader, FeatureTableRow } from "./DatabaseTable"
// import styles from "../../css/table.css"

const Plan = ({ monthlyPrice, description, features }) => {
  return (
      <div>
          <PricingCard monthlyPrice={monthlyPrice} description={description} />
          <table className="mt-8 tablecostum w-full table ">
              <DatabaseCaption title={features.Database.name}>
                  <svg className="h-5 w-5 stroke-white dark:stroke-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                  </svg>
              </DatabaseCaption>
              <DatabaseHeader />
              <tbody className="border-0 border-hidden bg-transparent divide-neutral-800 divide-y">
                  {features.Database.FeatureIncluded.map(feature => (
                      <FeatureTableRow
                          featureName={feature.name}
                          isIncluded={true}
                          value={feature.value}
                          key={feature.name}
                      />
                  ))}
              </tbody>
          </table>
          <table className="mt-8 tablecostum w-full table ">
              <DatabaseCaption title={features.Auth.name}>
                  <svg className="h-5 w-5 stroke-white dark:stroke-black " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                  </svg>
              </DatabaseCaption>
              <DatabaseHeader />
              <tbody className="border-0 border-hidden bg-transparent divide-neutral-800 divide-y">
                  {features.Auth.FeatureIncluded.map(feature => (
                      <FeatureTableRow
                          featureName={feature.name}
                          isIncluded={feature.proOnly}
                          value={feature.value}
                          key={feature.name}
                      />
                  ))}
              </tbody>
          </table>
          <table className="mt-8 tablecostum w-full table ">
              <DatabaseCaption title={features.Storage.name}>
                  <svg className="h-5 w-5 stroke-white dark:stroke-black " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                  </svg>
              </DatabaseCaption>

              <DatabaseHeader />

              <tbody className="border-0 border-hidden bg-transparent divide-neutral-800 divide-y">
                  {features.Storage.FeatureIncluded.map(feature => (
                      <FeatureTableRow
                          featureName={feature.name}
                          isIncluded={feature.proOnly}
                          value={feature.value}
                          key={feature.name}
                      />
                  ))}
              </tbody>
          </table>
          <table className="mt-8 tablecostum w-full table ">

              <DatabaseCaption title={features.Realtime.name}>
                  <svg className="h-5 w-5 stroke-white dark:stroke-black " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
              </DatabaseCaption>
              <DatabaseHeader />
              <tbody className="border-0 border-hidden bg-transparent divide-neutral-800 divide-y">
                  {features.Realtime.FeatureIncluded.map(feature => (
                      <FeatureTableRow
                          featureName={feature.name}
                          isIncluded={feature.proOnly}
                          value={feature.value}
                          key={feature.name}
                      />
                  ))}

              </tbody>
          </table>
          <table className="mt-8 tablecostum w-full table ">
              <DatabaseCaption title={features.EdgeFunctions.name}>
                  <svg className="h-5 w-5 stroke-white dark:stroke-black " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
              </DatabaseCaption>
              <DatabaseHeader />
              <tbody className="border-0 border-hidden bg-transparent divide-neutral-800 divide-y">
                  {features.EdgeFunctions.FeatureIncluded.map(feature => (
                      <FeatureTableRow
                          featureName={feature.name}
                          isIncluded={feature.proOnly}
                          value={feature.value}
                          key={feature.name}
                      />
                  ))}
              </tbody>
          </table>
          <table className="mt-8 tablecostum w-full table ">
              <DatabaseCaption title={features.Dashboard.name}>
                  <svg className="h-5 w-5 stroke-white dark:stroke-black" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                      </path>
                  </svg>
              </DatabaseCaption>

              <DatabaseHeader />
              <tbody className="border-0 border-hidden bg-transparent divide-neutral-800 divide-y">
                  {features.Dashboard.FeatureIncluded.map(feature => (
                      <FeatureTableRow
                          featureName={feature.name}
                          isIncluded={feature.proOnly}
                          value={feature.value}
                          key={feature.name}
                      />
                  ))}

              </tbody>
          </table>
          <table className="mt-8 tablecostum w-full table ">

              <DatabaseCaption title={features.Plafform.name}>
                  <svg className="h-5 w-5 stroke-white dark:stroke-black " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
                  </svg>
              </DatabaseCaption>
              <DatabaseHeader />
              <tbody className="border-0 border-hidden bg-transparent divide-neutral-800 divide-y">
                  {features.Plafform.FeatureIncluded.map(feature => (
                      <FeatureTableRow
                          featureName={feature.name}
                          isIncluded={feature.proOnly}
                          value={feature.value}
                          key={feature.name}
                      />
                  ))}

              </tbody>
          </table>
          <table className="mt-8 tablecostum w-full table ">

              <DatabaseCaption title={features.Support.name}>
                  <svg className="h-5 w-5 stroke-white dark:stroke-black " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
              </DatabaseCaption>
              <DatabaseHeader />
              <tbody className="border-0 border-hidden bg-transparent divide-neutral-800 divide-y">
                  {features.Support.FeatureIncluded.map(feature => (
                      <FeatureTableRow
                          featureName={feature.name}
                          isIncluded={feature.proOnly}
                          value={feature.value}
                          key={feature.name}
                      />
                  ))}
              </tbody>
          </table>
      </div>
  )
}

export default Plan