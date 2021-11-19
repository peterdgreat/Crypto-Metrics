import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Crypto from '../components/Crypto';
import store from '../redux/configurestore';

describe('Crypto', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Crypto />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('test with jest snapshot', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Crypto />
          </Router>
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
