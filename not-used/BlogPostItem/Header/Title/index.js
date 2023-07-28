import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';
export default function BlogPostItemHeaderTitle({className}) {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {permalink, title} = metadata;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
  return (
    <TitleHeading className={clsx(styles.title, className)} itemProp="headline">
      
      {/* {metadata.frontMatter.talking && <h2>In conversation with {metadata.frontMatter.talking}</h2> } */}
      {isBlogPostPage ? (
        title
      ) : (
        <Link itemProp="url" to={permalink}>
          {title}
        </Link>
      )}
      <br />
      {metadata.frontMatter.descriptions &&
        <p className='text-xl pt-8'>{metadata.frontMatter.descriptions}</p>
      }
      <div className='flex py-4 gap-8 mb-32'>
        {/* {metadata.frontMatter.timeline.map((node, index) => (
          <div className='flex text-xl items-center justify-center gap-4 border border-solid border-neutral-700 p-4 rounded-xl bg-neutral-800'>
            <div className='flex rounded-full bg-neutral-300 h-[40px] w-[80px] content-center text-neutral-900 justify-center items-center' >{index + 1}</div>
            <div>{node}</div>
          </div>
        ))} */}
      </div>
    </TitleHeading>
  );
}
