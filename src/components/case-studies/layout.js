import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';

export default function BlogLayout(props) {
    const { sidebar, toc, children, ...layoutProps } = props;
    const hasSidebar = sidebar && sidebar.items.length > 0;
    return (
        <Layout {...layoutProps}>
            {console.log("layotu")}
            {console.log(props)}
            <div
                className='py-12'
            // className="container margin-vert--lg"
            >
                {props.title &&
                    <div className='flex justify-center items-center text-center py-12'>
                        <h1 className='text-6xl'>{props.title}</h1>
                    </div>
                }
                <div className="flex">
                    {/* <BlogSidebar sidebar={sidebar} /> */}

                    <main
                        className='flex flex-wrap gap-8 px-10'
                        // className={clsx('col', {
                        //   'col--7': hasSidebar,
                        //   'col--9 col--offset-1': !hasSidebar,
                        // })}
                        itemScope
                        itemType="http://schema.org/Blog">

                        {children}
                    </main>
                    {toc && <div className="col col--2">{toc}</div>}
                </div>
            </div>
        </Layout>
    );
}
