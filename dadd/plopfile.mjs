import { createRepo } from './generators/createRepo.mjs';
import { createReactComponent } from './generators/createReactComponent.mjs';
import kebabCase from 'lodash/kebabCase.js';

export default function (plop) {
    const pascalCase = plop.getHelper('pascalCase');

    plop.setHelper('kebabCase', text => kebabCase(text));
    /**
     * The helpers with Provider in the name for for react providers specifically.
     * This insures proper naming conventions so it removes Provider in the name if it exists
     * then adds it back if needed in the correct way. If "Provider" is not in the name it will
     * still add it anyway to keep naming conventions consistent.
    */
    plop.setHelper('kebabCaseNoProvider', text => kebabCase(text.replace('Provider', '')));
    plop.setHelper('kebabCaseWithProvider', text => `${kebabCase(text.replace('Provider', ''))}-provider`);
    plop.setHelper('pascalCaseNoProvider', text => pascalCase(text.replace('Provider', '')));
    plop.setHelper('pascalCaseWithProvider', text => `${pascalCase(text.replace('Provider', ''))}Provider`);
    plop.setHelper('cwd', () => process.cwd());
    plop.setGenerator('create repo', createRepo);
    plop.setGenerator('create react-component', createReactComponent);
};
