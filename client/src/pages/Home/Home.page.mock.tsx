import { BarDetailPageDocument } from './Home.page.hook';
import fixture from './BarDetail.page.fixture.json';

export const BarDetailPageMock = {
  request: {
    query: BarDetailPageDocument,
  },
  variableMatcher: () => true,
  result: {
    data: fixture,
  },
};
