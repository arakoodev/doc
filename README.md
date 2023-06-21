# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

<br/>
<div align="center">
 <p>

[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)
![GitHub forks](https://img.shields.io/github/forks/arakoodev/doc?style=flat&logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/arakoodev/doc?style=flat&logo=github)
![GitHub contributors](https://img.shields.io/github/contributors/arakoodev/doc)
![GitHub last commit](https://img.shields.io/github/last-commit/arakoodev/doc)
![GitHub repo size](https://img.shields.io/github/repo-size/arakoodev/doc)
![Github](https://img.shields.io/github/license/arakoodev/doc)
![GitHub issues](https://img.shields.io/github/issues/arakoodev/doc)
![GitHub closed issues](https://img.shields.io/github/issues-closed/arakoodev/doc)
![GitHub pull requests](https://img.shields.io/github/issues-pr/arakoodev/doc)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/arakoodev/doc)
 </p>
 </div>
 <br>

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push it to the `gh-pages` branch.
