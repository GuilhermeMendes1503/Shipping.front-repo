import { createSelector } from 'reselect';

const selectApiState = (state) => state.api;

export const selectIsShown = createSelector([selectApiState], (s) =>
  s ? s.isShown : ''
);

export const selectTemplates = createSelector([selectApiState], (s) =>
  s ? s.Templates : ''
);

export const selectDate = createSelector([selectApiState], (s) =>
  s ? s.selectedDate : ''
);

export const selectEvents = createSelector([selectApiState], (s) =>
  s ? s.Events : ''
);

export const selectEventEdit = createSelector([selectApiState], (s) =>
  s ? s.eventedit : ''
);
