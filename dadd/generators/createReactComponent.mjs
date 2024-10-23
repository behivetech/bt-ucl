export const createReactComponent = {
    description: 'Create a new React component',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Component name (in PascalCase):'
        },
        {
            type: 'input',
            name: 'directory',
            message: 'Directory to create the component (Current Directory Default):',
            default: './'
        }
    ],
    actions: [
        {
            type: 'add',
            path: '{{directory}}/{{kebabCase name}}/{{kebabCase name}}.tsx',
            templateFile: 'generators/plop-templates/createReactComponent/package.json.tsx.hbs'
        },
        {
            type: 'add',
            path: '{{directory}}/{{kebabCase name}}/src/{{kebabCase name}}.tsx',
            templateFile: 'generators/plop-templates/createReactComponent/component.tsx.hbs'
        },
        {
            type: 'add',
            path: '{{directory}}/{{kebabCase name}}/src/{{kebabCase name}}.module.scss',
            templateFile: 'generators/plop-templates/createReactComponent/styles.module.scss.hbs'
        },
        {
            type: 'add',
            path: '{{directory}}/{{kebabCase name}}/src/{{kebabCase name}}.docs.mdx',
            templateFile: 'generators/plop-templates/createReactComponent/docs.mdx.hbs'
        },
        {
            type: 'add',
            path: '{{directory}}/src/{{kebabCase name}}/{{kebabCase name}}.specs.tsx',
            templateFile: 'generators/plop-templates/createReactComponent/specs.tsx.hbs'
        },
        {
            type: 'add',
            path: '{{directory}}/src/{{kebabCase name}}/{{kebabCase name}}.composition.tsx',
            templateFile: 'generators/plop-templates/createReactComponent/composition.tsx.hbs'
        },
        {
            type: 'add',
            path: '{{directory}}/src/{{kebabCase name}}/index.ts',
            templateFile: 'generators/plop-templates/createReactComponent/index.ts.hbs'
        }
    ]
};
