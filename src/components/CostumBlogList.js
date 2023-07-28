import React from 'react';
import BlogPostItem from '@theme/BlogPostItem';

function CustomBlogList({ blogPosts }) {
    return (
        <div>
            {blogPosts.map((post, index) => (
                <BlogPostItem key={post.id} post={post}>
                    <p>Index: {index}</p>
                </BlogPostItem>
            ))}
        </div>
    );
}

export default CustomBlogList;
