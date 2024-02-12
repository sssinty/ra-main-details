import {createSlice } from "@reduxjs/toolkit";
import { IState } from "../interface/interface";
const initialState : IState = {loadingStatusState : 'idle', loadingStatusPost : 'idle', error : null, list: [], item : {}};

const stateSlicer = createSlice({
	name: 'state',
	initialState,
	reducers: {
		getStateRequest: (state) => {
			state.loadingStatusState = 'idle';
			state.error = null;
		},
		getStateSuccess: (state, action) => {
			state.loadingStatusState = 'loading';
			state.list = action.payload;
		},
		getStateFailure: (state, action) => {
      state.loadingStatusState = 'failed';
      state.error = action.payload;
    },
		
		getPostRequest: (state) => {
			console.log(state.loadingStatusPost)
			state.loadingStatusPost = 'idle';
			state.error = null;
		},
		getPostSuccess: (state, action) => {
			state.loadingStatusPost = 'loading';
			state.item = action.payload;
		},
		getPostFailure: (state, action) => {
			state.loadingStatusPost = 'failed';
      state.error = action.payload;
		},
	}
},
)

export const {
	getStateRequest,
	getStateSuccess,
	getStateFailure,
	getPostRequest,
	getPostSuccess,
	getPostFailure
} = stateSlicer.actions;
export default stateSlicer.reducer;