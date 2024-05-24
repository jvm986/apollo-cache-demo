import { reactRouterParameters } from 'storybook-addon-remix-react-router';
import { BarDetailPageMock } from './Home.page.mock';
import { Home } from './Home.page';

export default {
  title: 'Pages/Home',
};

export const Usage = () => <Home />;

Usage.parameters = {
  apolloClient: {
    mocks: [BarDetailPageMock],
  },
  reactRouter: reactRouterParameters({
    routing: { path: '/' },
  }),
};
