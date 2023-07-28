```jsx title="code4.js"
return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
            postcssOptions.plugins.push(require('tailwindcss'));
            postcssOptions.plugins.push(require('autoprefixer'));
            return postcssOptions;
        },
    };
```