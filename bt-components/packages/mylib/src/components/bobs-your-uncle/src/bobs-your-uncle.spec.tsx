import { render } from '@testing-library/react';

import BobsYourUncle from './bobs-your-uncle';

describe('BobsYourUncle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BobsYourUncle />);
    expect(baseElement).toBeTruthy();
  });
});
