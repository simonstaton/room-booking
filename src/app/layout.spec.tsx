import { RenderResult, render, screen } from '@testing-library/react';
import RootLayout, { metadata } from './layout';

export const TEST_IDS = {
  child: 'Layout:child',
} as const;

describe('Layout', () => {
  let rerender: RenderResult['rerender'];

  beforeEach(() => {
    const wrapper = render(<RootLayout>{null}</RootLayout>);
    rerender = wrapper.rerender;
  });

  it('renders layout children', () => {
    rerender(
      <RootLayout>
        <h1 data-testid={TEST_IDS.child}>Child Content</h1>
      </RootLayout>,
    );
    const selectedText = screen.queryByTestId(TEST_IDS.child);

    expect(selectedText).toBeInTheDocument();
    expect(selectedText?.textContent).toBe('Child Content');
  });

  it('sets metadata', () => {
    expect(metadata.title).toBeDefined();
  });
});
