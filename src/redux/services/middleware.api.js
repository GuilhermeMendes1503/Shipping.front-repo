import { createListenerMiddleware } from "@reduxjs/toolkit";

import {
  requestTemplates,
  responseTemplates,
  requestPostEvent,
  responsePostEvent,
  requestEvents,
  responseEvents
} from "../api/api.reducer";
import { apiSlice } from "./rest";

export const apiMiddleware = createListenerMiddleware();

apiMiddleware.startListening({
  actionCreator: requestTemplates,
  effect: async (action, listener) => {
    const { dispatch, cancelActiveListeners } = listener;
    cancelActiveListeners(); // cancel other running instances
    try {
      const response = dispatch(apiSlice.endpoints.getTemplates.initiate({}));
      const unpackedResponse = await response.unwrap();
      dispatch(responseTemplates(unpackedResponse.result));
    } catch (error) {
    }
  },
});

apiMiddleware.startListening({
  actionCreator: requestPostEvent,
  effect: async (action, listener) => {
    const { dispatch, cancelActiveListeners } = listener;
    cancelActiveListeners(); // cancel other running instances
    try {
      const response = dispatch(apiSlice.endpoints.addEvent.initiate(action.payload));
      const unpackedResponse = await response.unwrap();
      dispatch(responsePostEvent(unpackedResponse.result));
    } catch (error) {
    }
  },
});

apiMiddleware.startListening({
  actionCreator: requestEvents,
  effect: async (action, listener) => {
    const { dispatch, cancelActiveListeners } = listener;
    cancelActiveListeners(); // cancel other running instances
    try {
      const response = dispatch(apiSlice.endpoints.getEvents.initiate({}));
      const unpackedResponse = await response.unwrap();
      dispatch(responseEvents(unpackedResponse.result));
    } catch (error) {
    }
  },
});