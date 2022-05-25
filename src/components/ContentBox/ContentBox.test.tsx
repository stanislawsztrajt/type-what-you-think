import { render } from '@testing-library/react';
import ContentBox from './ContentBox';

test('should render ContentBox with children prop', () => {
  const { getByText } = render(
    <ContentBox>
      <>
        <div>children 1</div>
        <div>children 2</div>
      </>
    </ContentBox>
  );

  expect(getByText('children 1')).toBeInTheDocument();
});
