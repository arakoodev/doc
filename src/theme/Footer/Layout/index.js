import React from 'react';
import clsx from 'clsx';
export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer pt-16 font-Quicksand', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid flex flex-col">
        <div className='flex flex-col md:flex-row gap-4 mb-20'>
          <div className='md:w-10/12 font-sans'>
            <h3 className='font-normal'>Arakoo</h3>
            <p>Arakoo: Building chain & prompts through declarative orchestration </p>
          </div>
          {links}
        </div>
        {/* {logo} */}
        {/* {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )} */}
        <hr className='border-b border-solid border-[#8BA5B0] opacity-50 my-4 mb-8'/>
        <div className='flex flex-col-reverse md:flex-row  justify-between '>
          <p>Copyright © 2023 Sandeep Srinivasa (GSTIN 07AVPPS1240Q1ZW) </p>
          {/* <div className='flex flex-col md:flex-row md:gap-4'>
            <p >Privacy Policy</p>
            <p >Terms of Use</p>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
