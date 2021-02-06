import { render, cleanup } from './test-utils-providers';
import App from './App';

afterEach(cleanup);

describe('<App />', () => {
  it("renders with redux", () => {
    const {getByTestId} = render(<App />);
    expect(getByTestId("app")).not.toBeNull()
  })
})

