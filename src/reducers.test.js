import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './contants';

import * as reducers from './reducers';


describe("search robots reducers", ()=>{
    it("should return initial state",() => {
        expect(reducers.searchRobots(undefined,{})).toEqual({searchField : ""})
    })

    it("should  initial state", () => {
        const initialStateSearch = {
            searchField : ""
        };
        expect(reducers.searchRobots(initialStateSearch ,
            {type : CHANGE_SEARCH_FIELD, payload:"hey"})).toEqual({searchField:"hey"})
    })
});


describe("request robot reducers", ()=>{
    it("should return initial state",()=>{
        expect(reducers.requestRobots(undefined,{})).toEqual({
            isPending: false,
            robots:[],
            error: ""
        })
    })
    it("should set isPending to true",()=>{
        const initialStateRobots = {
            isPending: false,
            robots:[],
            error: ""
        }
        expect(reducers.requestRobots(initialStateRobots,{type:REQUEST_ROBOTS_PENDING})).toEqual({
            isPending: true,
            robots:[],
            error: ""
        })
    })
    it("should set isPending to true on REQUEST_ROBOTS_PENDING action",()=>{
        const initialStateRobots = {
            isPending: false,
            robots:[],
            error: ""
        }
        expect(reducers.requestRobots(initialStateRobots,{type:REQUEST_ROBOTS_PENDING})).toEqual({
            isPending: true,
            robots:[],
            error: ""
        })
    })
    it("should return robots on REQUEST_ROBOTS_SUCCESS action",()=>{
        const initialStateRobots = {
            isPending: false,
            robots:[],
            error: ""
        }
        expect(reducers.requestRobots(initialStateRobots,{type:REQUEST_ROBOTS_SUCCESS, payload:"e"})).toEqual({
            isPending: false,
            robots:"e",
            error: ""
        })
    })
    it("should return error on REQUEST_ROBOTS_FAILED action",()=>{
        const initialStateRobots = {
            isPending: false,
            robots:[],
            error: ""
        }
        expect(reducers.requestRobots(initialStateRobots,{type:REQUEST_ROBOTS_FAILED, payload:"NOOOO"})).toEqual({
            isPending: false,
            robots:[],
            error: "NOOOO"
        })
    })
});