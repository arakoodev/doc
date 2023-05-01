import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
    PageMetadata,
    HtmlClassNameProvider,
    ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import Layout from '../../components/case-studies/layout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import Card from "../../components/blog/card"
import { frontMatter as title } from "../../markdown/blogList/index.md"
function BlogListPageMetadata(props) {
    const { metadata } = props;
    const {
        siteConfig: { title: siteTitle },
    } = useDocusaurusContext();
    const { blogDescription, blogTitle, permalink } = metadata;
    const isBlogOnlyMode = permalink === '/';
    const title = isBlogOnlyMode ? siteTitle : blogTitle;
    return (
        <>
            <PageMetadata title={title} description={blogDescription} />
            <SearchMetadata tag="blog_posts_list" />
        </>
    );
}
function BlogListPageContent(props) {
    const { metadata, items, sidebar } = props;
    // if (metadata.blogTitle === 'Blog') {
    //   return (
    //     <BlogLayout sidebar={sidebar}>
    //       <BlogPostItems items={items} />
    //       <BlogListPaginator metadata={metadata} />
    //     </BlogLayout>
    //   );
    // } else {
    //   return (
    //     <Layout title={title.title} >
    //       {/* <BlogLayout  > */}
    //       {items.map(node => (
    //         <Card key={node} props={node.content} />
    //       ))}
    //       {/* <BlogPostItems items={items} /> */}
    //       <BlogListPaginator metadata={metadata} />
    //     </Layout>
    //   );
    // }
    return (
        <Layout title={title.title} >
            {/* <BlogLayout  > */}
           
            <div >
                <h3 className='px-4 md:px-0 flex uppercase text-2xl items-center '>
                    <div className='mr-2 stroke-emerald-400 w-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" fill="none" class="StyledIcon__StyledSVG-sc-7ki3wc-0 jcgqpk"><path d="M12 1L14.4697 8.60081H22.4616L15.996 13.2984L18.4656 20.8992L12 16.2016L5.53436 20.8992L8.00402 13.2984L1.53838 8.60081H9.53035L12 1Z" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path></svg>
                    </div>
                    <div className='mb-1'>Featured</div>
                </h3>
                <br />
                <div className='flex flex-wrap gap-8 mx-auto justify-center md:justify-start w-full'>
                    {items.map((node, index) => (
                         node.content.frontMatter.featured && <Card key={index} props={node.content} /> 
                    ))}
                </div>
                <br />
                <br />
                <h3 className='px-4 md:px-0 flex uppercase text-2xl items-center '>
                    <div className='mr-2 stroke-emerald-400 w-7'>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" class="StyledIcon__StyledSVG-sc-7ki3wc-0 jcgqpk"><path d="M23 12L17.5 21.5263L6.5 21.5263L1 12L6.5 2.47372L17.5 2.47372L23 12Z" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M6.5 2.5L17.5 21.5" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M17.4773 2.48682L6.52281 21.5131" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path><path d="M22.9773 11.9868L1.02281 12.0131" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path></svg>
                    </div>
                    <div className='mb-1'>ALL</div>
                </h3>
                <br />
                <div className='flex flex-wrap gap-8  mx-auto justify-center md:justify-start w-full'>
                    {items.map(node => (
                        <Card key={node} props={node.content} />
                    ))}
                </div>
            </div>
            {/* {console.log(metadata)} */}
            {/* <BlogPostItems items={items} /> */}
            {/* <BlogListPaginator metadata={metadata} /> */}
        </Layout>
    );
}
export default function BlogListPage(props) {
    return (
        <HtmlClassNameProvider
            className={clsx(
                ThemeClassNames.wrapper.blogPages,
                ThemeClassNames.page.blogListPage,
            )}>
            {console.log("v2")}
            <BlogListPageMetadata {...props} />
            <BlogListPageContent {...props} />
        </HtmlClassNameProvider>
    );
}
