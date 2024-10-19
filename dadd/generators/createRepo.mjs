export const createRepo = {
    description: 'Create a new repository folder with basic setup',
    prompts: [
        {
            type: 'input',
            name: 'repoName',
            message: 'What is the name of the repository?'
        },
        {
            type: 'input',
            name: 'destinationPath',
            message: 'Where would you like to create the repository? (Leave blank for current directory)',
            default: './'
        }
    ],
    actions: [
        // Create the folder named after the repoName inside the destination path
        {
            type: 'add',
            path: '{{ destinationPath }}/{{ repoName }}/.gitignore',
            templateFile: 'generators/plop-templates/createRepo/gitignore.hbs'
        },
        // Create the src folder and index.js inside the repo
        {
            type: 'add',
            path: '{{ destinationPath }}/{{ repoName }}/src/index.js',
            templateFile: 'generators/plop-templates/createRepo/index.hbs'
        }
    ]
}
