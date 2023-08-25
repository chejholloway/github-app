import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom'; // Update import here
import { ThemeProvider } from '@material-tailwind/react';
import configureMockStore from 'redux-mock-store';
import App from './app/App';
import store from './store/store';
import './index.css';

const mockStore = configureMockStore();

describe('App', () => {
  it('renders without crashing', () => {
    const app = document.createElement('div');
    app.id = 'root';
    document.body.appendChild(app);

    const root = createRoot(app);

    const initialState = {};
    const store = mockStore(initialState);

    root.render(
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    );
  });
});
