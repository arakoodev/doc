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
            {items.map(node => (
                <Card key={node} props={node.content} />
            ))}
            {console.log(metadata)}
            {/* <BlogPostItems items={items} /> */}
            <BlogListPaginator metadata={metadata} />
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
