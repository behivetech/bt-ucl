import { render } from '@testing-library/react';

import Ucl from './ucl';

describe('Ucl', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ucl />);
    expect(baseElement).toBeTruthy();
  });
});
