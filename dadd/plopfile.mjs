import { createRepo } from './generators/createRepo.mjs';
import { createReactComponent } from './generators/createReactComponent.mjs';
import { kebabCase } from 'lodash';

export default function (plop) {
    plop.setGenerator('create repo', createRepo);
    plop.setGenerator('create react-component', createReactComponent);
    plop.setHelper('kebabCase', text => kebabCase(text));
};
