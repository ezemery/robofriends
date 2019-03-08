import * as actions from './action'; 
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './contants';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const mockStore = configureStore([thunk]);



it("should create an action to search robots", ()=>{
    const text = "text";
    const expectedAction = {
        type:CHANGE_SEARCH_FIELD,
        payload: text
    }
    expect(actions.changeSearchField(text)).toEqual(expectedAction);
});

it("should handle requesting robot API", ()=>{

    const store = mockStore();
    // Dispatch the action
    return store.dispatch(actions.requestRobots())
    .then(response=> response.json())
    .then(data => {
        const action = store.getActions()
        expect(action[0]).toEqual({type:REQUEST_ROBOTS_SUCCESS, payload:data})
      })
    // // Test if your store dispatched the expected actions
    // const action = store.getActions()

    // const expectedAction = {
    //     type:REQUEST_ROBOTS_PENDING,
    // }
    // expect(action).toEqual([expectedAction]);
});