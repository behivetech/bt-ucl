import {
    addProjectConfiguration,
    formatFiles,
    generateFiles,
    names,
    Tree,
} from '@nx/devkit';
// @ts-expect-error - path is a global Node library
import * as path from 'path';
import { ReactLibraryGeneratorSchema } from './schema';

export async function reactLibraryGenerator(
    tree: Tree,
    options: ReactLibraryGeneratorSchema
) {
    const basePath = `packages/mylib/src/components/${options.name}`
    const projectRoot = `${basePath }`;
    // {name: 'my-name', className: 'MyName', propertyName: 'myName', constantName: 'MY_NAME', fileName: 'my-name'}
    const { className, fileName, propertyName } = names(options.name);

    addProjectConfiguration(tree, options.name, {
        root: projectRoot,
        projectType: 'library',
        sourceRoot: `${projectRoot}`,
        targets: {},
    });

    // @ts-expect-error - __dirname is a global Node variable
    generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
        ...options,
        className,
        fileName,
        path: `${basePath}/src/${options.name}`,
        propertyName
    });
    await formatFiles(tree);
}

export default reactLibraryGenerator;
