import { render } from '@testing-library/react';
import App, {generateBackgroundCSS} from './App';


test('renders app', () => {
  const app = render(<App />)
  expect(app).toBeTruthy()
});

test('generateBackgroundCSS generates correct"')

describe("generateBackgroundCSS creates correct CSS string", () => {

  test("it handles two colors", () => {
    const colors = ["#000000", "#ab4378"]
    const output = "background: linear-gradient(#000000,#ab4378);"
    expect(generateBackgroundCSS(colors)).toBe(output)
  })
  test("it handles multiple colors", () => {
    const colors = ["#000000", "#ab3498", "#bb5e3e"]
    const output = "background: linear-gradient(#000000,#ab4378,#bb5e3e);"
    expect(generateBackgroundCSS(colors)).toBe(output)
  })
})