import { createSlice } from "@reduxjs/toolkit";
// import { eventMock } from "../../mock/evento_mock";

const INITIAL_STATE = {
  isShown: false,
  Templates:"",
  Events:"",
  isRequesting: false,
  selectedDate: "",
  done: false,
  eventedit:{},
};

export const apiSlice = createSlice({
  name: "api",
  initialState: INITIAL_STATE,
  reducers: {
    firstRun(state,actions) {
      requestTemplates();
      requestEvents();
      state.done= true;
    },
    setIsShown(state,actions) {
      state.isShown = actions.payload;
    },
    requestTemplates() {
    },
    responseTemplates(state,actions){
      state.Templates = actions.payload;
    },
    requestPostEvent(state){
      state.isRequesting = true;
      state.isShown = false;
    },
    responsePostEvent(state,actions){
      state.isRequesting = false;
    },
    requestEvents() {
      // state.Events = eventMock()
    },
    responseEvents(state,actions){
      state.Events = actions.payload;
    },
    setSelectedDate(state,action){
      state.selectedDate = action.payload;

    },
    setEventedit(state,action){
      state.eventedit = action.payload;
    }
  },
});

export const {
  setIsShown,
  requestTemplates,
  responseTemplates,
  requestPostEvent,
  responsePostEvent,
  setSelectedDate,
  requestEvents,
  responseEvents,
  firstRun,
  setEventedit

} = apiSlice.actions;

export const apiReducer = apiSlice.reducer;
