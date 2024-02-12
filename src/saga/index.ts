import { PayloadAction, createAction } from "@reduxjs/toolkit";
import {
	getStateSuccess,
	getStateFailure,
	getPostSuccess,
	getPostFailure,
} from "../redux/stateData";

import { call, put, takeEvery } from "redux-saga/effects";
import { fetchItemID, fetchListApi } from "../api";

export const GET_STATE = 'state/getState';
export const getState = createAction(GET_STATE);

export const GET_POST = 'state/getPost';
export const getPost = createAction(GET_POST);

// worker
function* getStateSaga() : any {
	try {
		const payload = yield fetchListApi();
		yield put(getStateSuccess(payload));
	}catch (e) {
		yield put(getStateFailure(e.massage));
	}
}

function* getPostSaga({payload: id}: PayloadAction<string>) {
	try {
		const payload = yield call(fetchItemID, id);
		yield put(getPostSuccess(payload));
	}catch (e) {
		yield put(getPostFailure(e.massage));
	}
}
 

// watcher
export function* saga() {
yield takeEvery(GET_STATE, getStateSaga);
yield takeEvery(GET_POST, getPostSaga);
}