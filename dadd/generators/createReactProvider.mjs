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
            path: '{{cwd}}/{{kebabCaseWithProvider name}}/src/{{kebabCaseWithProvider name}}.tsx',
            templateFile: 'generators/plop-templates/createReactProvider/component.tsx.hbs'
        },
        {
            type: 'add',
            path: '{{cwd}}/{{kebabCase name}}/README.md',
            templateFile: 'generators/plop-templates/createReactProvider/README.md.hbs'
        },
        {
            type: 'add',
            path: '{{cwd}}/{{kebabCaseWithProvider name}}/src/{{kebabCaseWithProvider name}}.specs.tsx',
            templateFile: 'generators/plop-templates/createReactProvider/specs.tsx.hbs'
        },
        {
            type: 'add',
            path: '{{cwd}}/{{kebabCaseWithProvider name}}/src/{{kebabCaseWithProvider name}}.composition.tsx',
            templateFile: 'generators/plop-templates/createReactProvider/composition.tsx.hbs'
        },
        {
            type: 'add',
            path: '{{cwd}}/{{kebabCaseWithProvider name}}/index.ts',
            templateFile: 'generators/plop-templates/createReactProvider/index.ts.hbs'
        },
        {
            type: 'add',
            path: '{{cwd}}/{{kebabCaseWithProvider name}}/package.json',
            templateFile: 'generators/plop-templates/createReactComponent/package.json.hbs'
        }
    ]
};
