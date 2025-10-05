// src/components/MDXComponents.js
import React from 'react';
import CodeBlock from '@theme/CodeBlock';

const MDXComponents = {
  h1: (props) => <h1 className="custom-heading-1" {...props} />,
  h2: (props) => <h2 className="custom-heading-2" {...props} />,
  h3: (props) => <h3 className="custom-heading-3" {...props} />,
  p: (props) => <p className="custom-paragraph" {...props} />,
  ul: (props) => <ul className="custom-list" {...props} />,
  ol: (props) => <ol className="custom-list" {...props} />,
  li: (props) => <li className="custom-list-item" {...props} />,
  blockquote: (props) => <blockquote className="custom-blockquote" {...props} />,
  code: (props) => {
    const { children, className } = props;
    // If it's inline code (no language specified)
    if (!className) {
      return <code className="custom-inline-code" {...props} />;
    }
    // If it's a code block with language
    const language = className.replace(/language-/, '');
    return (
      <CodeBlock
        language={language}
        className="custom-code-block"
      >
        {children}
      </CodeBlock>
    );
  },
  table: (props) => <table className="custom-table" {...props} />,
  th: (props) => <th className="custom-table-header" {...props} />,
  td: (props) => <td className="custom-table-cell" {...props} />,
  img: (props) => <img className="custom-image" {...props} alt={props.alt || ''} />,
  hr: (props) => <hr className="custom-hr" {...props} />,
  strong: (props) => <strong className="custom-strong" {...props} />,
  em: (props) => <em className="custom-emphasis" {...props} />,
};

export default MDXComponents;