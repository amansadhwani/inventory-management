import {
  GET_CATEGORY,
  ADD_NEW_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  ADD_NEW_CATEGORY_FIELD,
  UPDATE_CATEGORY_FIELD,
  DELETE_CATEGORY_FIELD,
  ADD_NEW_CATEGORY_FIELDS_ITEM,
} from "../actions/types";
import { createNewCategory, createNewCategoryField } from "../helper";

const initialState = {
  category: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORY: {
      return {
        ...state,
        category: payload,
      };
    }

    case ADD_NEW_CATEGORY: {
      return {
        ...state,
        category: [...state.category, createNewCategory()],
      };
    }

    case DELETE_CATEGORY: {
      return {
        ...state,
        category: state.category.filter((item) => {
          return item.id !== payload;
        }),
      };
    }

    case UPDATE_CATEGORY: {
      return {
        ...state,
        category: state.category.map((item) =>
          item.id === payload.id
            ? { ...item, [payload.name]: payload.value }
            : item
        ),
      };
    }

    case ADD_NEW_CATEGORY_FIELD: {
      const newFieldData = createNewCategoryField(payload.type);
      return {
        ...state,
        category: state.category.map((item) =>
          item.id === payload.categoryId
            ? {
                ...item,
                categoryFields: [...item.categoryFields, newFieldData],
              }
            : item
        ),
      };
    }

    case UPDATE_CATEGORY_FIELD: {
      return {
        ...state,
        category: state.category.map((element) => {
          return {
            ...element,
            categoryFields: element.categoryFields.map((subElement) =>
              subElement.categoryId === payload.categoryFieldId
                ? { ...subElement, [payload.name]: payload.value }
                : subElement
            ),
          };
        }),
      };
    }

    case DELETE_CATEGORY_FIELD: {
      return {
        ...state,
        category: state.category.map((element) => {
          return {
            ...element,
            categoryFields: element.categoryFields.filter(
              (subElement) => subElement.categoryId !== payload.categoryFieldId
            ),
          };
        }),
      };
    }

    case ADD_NEW_CATEGORY_FIELDS_ITEM: {
      const updatedData = [...state.category];
      updatedData[payload.indexToUpdate] = payload.updateMainCategory;
      return {
        ...state,
        category: updatedData,
      };
    }

    default:
      return state;
  }
}
