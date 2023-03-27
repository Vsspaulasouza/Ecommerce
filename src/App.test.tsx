import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from './App';
import store from './store/store';

describe('App', () => {
  // it('Renders hello world', () => {
  //   // ARRANGE
  //   render(<WrappedApp />);
  //   // ACT
  //   // EXPECT
  //   expect(
  //     screen.getByRole('heading', {
  //       level: 1,
  //     })
  //   ).toHaveTextContent('Hello World');
  // });
  it('Renders not found if invalid path', () => {
    const client = new QueryClient();
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <QueryClientProvider client={client}>
          <ReduxProvider store={store}>
            <App />
          </ReduxProvider>
        </QueryClientProvider>
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Not Found');
  });
});
