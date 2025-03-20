# docs.codevideo.io

The documentation site for CodeVideo.

### Installation

```
npm install
```

### Local Development

First generate the API documentation by running the following command:

```shell
npm run generate-api
```

Then start the local development server:

```shell
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```shell
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The site is deployed via Netlify. See the `netlify.toml` file for deployment settings.
