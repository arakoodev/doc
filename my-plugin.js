module.exports = async function myPlugin(context, options) {
    // ...
    return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
            postcssOptions.plugins.push(require('tailwindcss'));
            postcssOptions.plugins.push(require('autoprefixer'));
            return postcssOptions;
        },
    };
};

// async function myPlugin(context, options) {
//     return {
//         name: 'docusaurus-tailwindcss',
//         configurePostCss(postcssOptions) {
//             postcssOptions.plugins.push(require('tailwindcss'));
//             postcssOptions.plugins.push(require('autoprefixer'));
//             return postcssOptions;
//         },
//     };
// },