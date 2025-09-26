import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [
    // {
    //   id: 4,
    //   date: "25 sept",
    //   todo: "hare krishna",
    //   isCompleted: false,
    //   completeData: undefined,
    // },
  ],
  briefData: {
    todo: {
      completed: 0,
      pending: 0,
    },
    todayVerse: "",
    notesWrittenToday: 0,
  },
  notesData: [],
  sadhnaData: [],

  verses: [],
};

const slice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todo = [...state.todo, action.payload];
    },

    removeTodo(state, action) {
      state.todo = state.todo.filter((el) => el.id !== action.payload);
    },
    calcBriefData(state, _) {
      state.briefData.todo.completed = state.todo.filter(
        (el) => el.isCompleted
      );
      state.briefData.todo.pending = state.todo.filter((el) => !el.isCompleted);
      state.briefData.todayVerse = state.verses[0];
      state.briefData.notesWrittenToday = state.notesData.filter(
        (el) => el.date === new Date().toLocaleDateString()
      );
    },

    addNotes(state, action) {
      state.notesData = [...state.notesData, action.payload];
    },

    removeNotes(state, action) {
      state.notesData = [
        ...state.notesData.filter((el) => el.id !== action.payload),
      ];
    },

    updateSadhna(state, action) {
      const today = action.payload.data.date;
      const todaySadhna = state.sadhnaData.find((el) => el.date === today);
      const otherSadhna = state.sadhnaData.filter((el) => el.date !== today);

      switch (action.payload.type) {
        case "toggleIsReading": {
          state.sadhnaData = [
            ...otherSadhna,
            {
              ...todaySadhna,
              isReadingDone: !todaySadhna.isReadingDone,
            },
          ];

          break;
        }
        case "toggleIsHearing": {
          state.sadhnaData = [
            ...otherSadhna,
            {
              ...todaySadhna,
              isHearingDone: !todaySadhna.isHearingDone,
            },
          ];

          break;
        }
        case "toggleIsChantingDone": {
          state.sadhnaData = [
            ...otherSadhna,
            {
              ...todaySadhna,
              isChantingDone: !todaySadhna.isChantingDone,
            },
          ];

          break;
        }
        case "typeHearingTopic": {
          state.sadhnaData = [
            ...otherSadhna,
            {
              ...todaySadhna,
              hearingTopic: action.payload.data.hearingTopic,
            },
          ];
          break;
        }
        case "typeReadingTopic": {
          state.sadhnaData = [
            ...otherSadhna,
            {
              ...todaySadhna,
              readingTopic: action.payload.data.readingTopic,
            },
          ];
          break;
        }
      }
    },

    updateVerseStatus(state, action) {
      // const otherVerses = state.verses.filter((el) => el.id !== action.payload);
      // const selectedVerse = state.verses.find((el) => el.id === action.payload);

      state.verses = [
        ...state.verses.map((el) => {
          if (el.id === action.payload) {
            return { ...el, isRemembered: !el.isRemembered };
          }
          if (el.id !== action.payload) {
            return { ...el };
          }
        }),
        // ...otherVerses,
        // { ...selectedVerse, isRemembered: !selectedVerse.isRemembered },
      ];
    },
    addVerse(state, action) {
      state.verses = [...state.verses, action.payload];
    },
    pasteData(state, action) {
      const { verses, todo, sadhnaData, notesData, briefData } = action.payload;

      state.verses = verses;
      state.todo = todo;
      state.sadhnaData = sadhnaData;
      state.notesData = notesData;
      state.briefData = briefData;
    },
    deleteVerse(state, action) {
      state.verses = [...state.verses.filter((el) => el.id !== action.payload)];
    },

    newDayReset(state, action) {
      state.sadhnaData = [
        ...state.sadhnaData,
        {
          date: action.payload,
          isChantingDone: false,
          isReadingDone: false,
          readingTopic: "",
          hearingTopic: "",
          isHearingDone: false,
        },
      ];
    },

    updateTodoStatus(state, action) {
      state.todo = [
        ...state.todo.map((el) => {
          if (el.id === action.payload) {
            return { ...el, isCompleted: !el.isCompleted };
          }
          if (el.id !== action.payload) {
            return { ...el };
          }
        }),
      ];
    },
  },
});

export const {
  addTodo,
  removeTodo,
  calcBriefData,
  addNotes,
  removeNotes,
  updateSadhna,
  updateVerseStatus,
  addVerse,
  deleteVerse,
  updateTodoStatus,
} = slice.actions;

export default slice.reducer;

export const saveData = function () {
  return function (_, getState) {
    const data = getState();
    localStorage.setItem("tracker-app", JSON.stringify(data));
  };
};

export const loadData = function () {
  return function (dispatch, getState) {
    const data = JSON.parse(localStorage.getItem("tracker-app"));
    data && dispatch({ type: "tracker/pasteData", payload: data });
    const today = new Date().toLocaleDateString();
    const state = getState();
    if (!state.sadhnaData.find((el) => el.date === today))
      dispatch({ type: "tracker/newDayReset", payload: today });
  };
};
