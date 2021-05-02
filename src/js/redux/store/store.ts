import { combineReducers , createStore } from "redux";

import { formMode } from "../reducer/formMode";

const rootReducer = combineReducers({
    formMode
});

const configStore = () => createStore(rootReducer);

export default configStore;