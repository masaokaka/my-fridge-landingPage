import { render, screen } from '@testing-library/react';
import About from '..';
import '@testing-library/jest-dom';

describe('aboutページの描画をテスト', () => {
  test('「トップページに戻る」が描画されているか', () => {
    render(<About />);
    const text = screen.getByText('トップページに戻る');
    expect(text).toBeInTheDocument();
  });
});
