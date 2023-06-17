import React from 'react';
import clsx from 'clsx';
export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer pt-16', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid flex flex-col">
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='md:w-1/2'>
            <h3 className='font-normal'>Arakoo</h3>
            <p>A human-centric platform for all ML, AI, and data apps.</p>
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
        <div className='flex flex-col-reverse md:flex-row  justify-between md:pt-16'>
          <p>Copyright © 2023 Arakoo Project</p>
          <div className='flex flex-col md:flex-row md:gap-4'>
            <p >Privacy Policy</p>
            <p >Terms of Use</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
