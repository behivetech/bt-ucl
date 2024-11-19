export const createReactComponent = {
    description: 'Create a new React component',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Component name (in PascalCase ex. MyComponent):'
        },
    ],
    actions: [
        {
            type: 'add',
            path: '{{cwd}}/{{kebabCase name}}/src/{{kebabCase name}}.tsx',
            templateFile: 'generators/plop-templates/createReactComponent/component.tsx.hbs'
        },
        {
            type: 'add',
            path: '{{cwd}}/{{kebabCase name}}/src/{{kebabCase name}}.module.scss',
            templateFile: 'generators/plop-templates/createReactComponent/styles.module.scss.hbs'
        },
        {
            type: 'add',
            path: '{{cwd}}/{{kebabCase name}}/README.md',
            templateFile: 'generators/plop-templates/createReactComponent/README.md.hbs'
        },
        {
            type: 'add',
            path: '{{cwd}}/{{kebabCase name}}/src/{{kebabCase name}}.specs.tsx',
            templateFile: 'generators/plop-templates/createReactComponent/specs.tsx.hbs'
        },
        {
            type: 'add',
            path: '{{cwd}}/{{kebabCase name}}/src/{{kebabCase name}}.composition.tsx',
            templateFile: 'generators/plop-templates/createReactComponent/composition.tsx.hbs'
        },
        {
            type: 'add',
            path: '{{cwd}}/{{kebabCase name}}/index.ts',
            templateFile: 'generators/plop-templates/createReactComponent/index.ts.hbs'
        },
        {
            type: 'add',
            path: '{{cwd}}/{{kebabCase name}}/package.json',
            templateFile: 'generators/plop-templates/createReactComponent/package.json.hbs'
        }
    ]
};
