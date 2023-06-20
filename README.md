# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

<br/>
<div align="center">
  <img src="https://forthebadge.com/images/badges/built-with-love.svg" />
  <img src="https://forthebadge.com/images/badges/uses-brains.svg" />
  <img src="https://forthebadge.com/images/badges/powered-by-responsibility.svg" />
  <br/>
  <img src="https://img.shields.io/github/repo-size/arakoodev/doc?style=for-the-badge" />
  <img src="https://img.shields.io/github/license/arakoodev/doc?style=for-the-badge" />
  <img src="https://img.shields.io/github/issues-closed-raw/arakoodev/doc?style=for-the-badge" />
  <img src="https://img.shields.io/github/issues/arakoodev/doc?style=for-the-badge" />
  <img src="https://img.shields.io/github/stars/arakoodev/doc?style=for-the-badge" />
  <img src="https://img.shields.io/github/forks/arakoodev/doc?style=for-the-badge" />
  <img src="https://img.shields.io/github/issues-pr/arakoodev/doc?style=for-the-badge" />
  <img src="https://img.shields.io/github/last-commit/arakoodev/doc?style=for-the-badge" />
  <img src="https://img.shields.io/github/contributors/arakoodev/doc?style=for-the-badge" />
  <img src="https://img.shields.io/github/issues-pr-closed-raw/arakoodev/doc?style=for-the-badge" />
  
</div>
<br/>

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
