# electrode-native-website

[![ci][1]][2]

[Electrode Native][3]'s website, powered by [Docusaurus][4].

## Getting Started

In the `website` directory:

### Install dependencies

```sh
yarn
```

### Run the dev server

```sh
yarn start
```

A live reloading server will be started at [localhost:3000][8] (or the first
available port).

## Deployment

Updates to the website will be deployed to `gh-pages` automatically with every
merge to `master`. The static pages can also be generated locally:

```sh
yarn build
```

Open `build/electrode-native-website/index.html` to preview the website.

## Full Documentation

The [Docusaurus documentation][5] provide many useful guides, for example:

- Creating [Custom Pages][6]
- How [Navigation and Sidebars][7] work

[1]: https://github.com/electrode-io/electrode-native-website/workflows/ci/badge.svg
[2]: https://github.com/electrode-io/electrode-native-website/actions
[3]: https://www.electrodenative.dev/
[4]: https://docusaurus.io/
[5]: https://docusaurus.io/docs/en/installation
[6]: https://docusaurus.io/docs/en/custom-pages
[7]: https://docusaurus.io/docs/en/navigation
[8]: http://localhost:3000/
