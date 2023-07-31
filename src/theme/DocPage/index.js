import React from 'react';
import DocPage from '@theme-original/DocPage';

export default function DocPageWrapper(props) {
  return (
    <div className='pt-12'>
      <DocPage {...props} />
    </div>
  );
}
