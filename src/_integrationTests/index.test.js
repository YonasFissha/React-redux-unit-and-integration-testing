import moxios from "moxios";
import { testStore } from "../../utils";
import { fetchPosts } from "../store/actions";

describe("fetch Posts action", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("Store is updated correctly", () => {
    const expectedState = [
      {
        title: "example 1",
        body: "body text",
      },
      {
        title: "example 2",
        body: "body text",
      },
      {
        title: "example 3",
        body: "body text",
      },
    ];
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.postsReducer).toBe(expectedState);
    });
  });
});
