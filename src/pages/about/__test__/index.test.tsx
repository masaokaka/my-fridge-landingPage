import { render, screen } from '@testing-library/react';
import About from '..';
import '@testing-library/jest-dom';

describe('aboutページの描画をテスト', () => {
  test('「サービスについて」が描画されているか', () => {
    render(<About />);
    const text = screen.getByText('サービスについて');
    expect(text).toBeInTheDocument();
  });
});
