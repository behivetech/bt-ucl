import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
    it('should render correctly', () => {
        const { container } = render(<Button />);
        expect(container).toMatchSnapshot();
    });
});
