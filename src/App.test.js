import store from './redux/store/store';

describe('Redux store', () => {
  it('gets todos', () => {
    const { todos } = store.getState();
    expect(todos).toEqual([]);
  });

  it('gets visibilityFilter', () => {
    const { visibilityFilter } = store.getState();
    expect(visibilityFilter).toEqual('ALL');
  });
});
