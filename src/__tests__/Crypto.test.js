import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

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

describe('test Crypto component', () => {
  test('should contain a search placeholder', () => {
    render(
      <Provider store={store}>
        <Router>
          <Crypto />
        </Router>
      </Provider>,
    );
    return expect(screen.getByPlaceholderText('search...')).toBeInTheDocument;
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
