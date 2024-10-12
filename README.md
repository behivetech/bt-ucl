# bt-ucl

This is a new monorepo architecture using Lerna for NPM packaging. This repository will serve as the core concept for building additional monorepos. Although this is designed to build monorepos, it should not be limited to just one repository. The idea is to use an [atomic design structure](https://atomicdesign.bradfrost.com/). They can be broken out as needed, but the soft format should be broken into slices (each slice is a different repository).

## Structuring of the Repositories
The repositories should be named syntactically to describe their contents. They don't necessarily need to be named by the atomic structure name. Repositories should be broken out as follows:

### Atoms & Molecules
These should be the simplest types of components that can be used in any repository created.

- **Atoms**: buttons, inputs, labels, icons, lists, menus, selects, etc.
- **Molecules**: input fields (inputs, labels, and messaging combined), search inputs, etc.

### Organisms
These should also be simple combinations of atoms and molecules, but Organisms are separated into their own repositories because they could vary depending on the application. Therefore, there may be multiple Organism-type repositories, and they should be named based on the applications that would use them. If they are very specific to one application, they could be part of that application's repository, combined with other components specific to that application.

- **Organisms**: data tables, login forms, headers, footers, carousels, cards, etc.

### Templates
Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure. These can be thought of as micro front-end applications (mini apps with API calls, when needed). They should be shared across multiple applications. There can also be multiple template repositories if there are application-specific repositories that share some templates but not others. Template components could also be part of the application repository if they are specific to that application.

- **Templates**: specific data tables, specific data forms, React providers, styled components such as a page component, etc.
- **Providers**: Global variables or React providers should also be created at this level, such as translations or user-specific data. If they require an API call, they should have an API gateway microservice file within that folder.
- **API Gateway microservices**: Different microservices for an API gateway should be created alongside any template components needing data. Ideally, they will live within the same folder as the template needing the microservice. On the front end, a React hook or service file should be created to connect to the microservice so they are separated from the component. This way, they can easily be moved into their own folder and shared across other components if needed.

### Pages
Pages are the most concrete level of the atomic design. They should be the level at which the server route points to, and they combine templates.

- **Pages**: user profile, dashboard, home, etc.

### Server
This is an additional layer beyond the Atomic Design Structure. This repository should contain the overarching architecture of how all the above components are served. Ideally, it should be generic so multiple servers can be created for scenarios like load balancing or separation where needed between applications and API gateway microservices. For instance, a server repository might include a Node Express server or Apollo GraphQL server (or multiple federated servers) and contain the functionality needed for the organization. This is where everything is integrated, such as routing to different page components, specific microservices, etc.

## More to come...

## Related Docs

### [Lerna](./docs/lerna.md)
This is an NPM package manager designed for monorepos. It manages multiple NPM packages within the same repository. It also has features such as caching for builds and testing, so only specific builds or tests will run based on what is modified within the monorepo.

### [How To's](./docs/how-to.md)
TBA
