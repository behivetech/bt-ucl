export const createReactProvider = {
    description: 'Create a new React provider',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Provider name (in PascalCase ex. MyProvider):'
        }
    ],
    actions: [
        {
            type: 'add',
            path: '{{cwd}}/{{kebabCaseWithProvider name}}/{{kebabCaseWithProvider name}}.tsx',
            templateFile: 'generators/plop-templates/createReactProvider/component.tsx.hbs'
        },
        {
            type: 'add',
            path: '{{cwd}}/{{kebabCaseWithProvider name}}/{{kebabCaseWithProvider name}}.docs.mdx',
            templateFile: 'generators/plop-templates/createReactProvider/docs.mdx.hbs'
        },
        {
            type: 'add',
            path: '{{cwd}}/{{kebabCaseWithProvider name}}/{{kebabCaseWithProvider name}}.specs.tsx',
            templateFile: 'generators/plop-templates/createReactProvider/specs.tsx.hbs'
        },
        {
            type: 'add',
            path: '{{cwd}}/{{kebabCaseWithProvider name}}/{{kebabCaseWithProvider name}}.composition.tsx',
            templateFile: 'generators/plop-templates/createReactProvider/composition.tsx.hbs'
        },
        {
            type: 'add',
            path: '{{cwd}}/{{kebabCaseWithProvider name}}/index.ts',
            templateFile: 'generators/plop-templates/createReactProvider/index.ts.hbs'
        }
    ]
};
