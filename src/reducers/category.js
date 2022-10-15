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
      const deleteCategory = [...state.category].filter((item) => {
        return item.id !== payload;
      });
      return {
        ...state,
        category: deleteCategory,
      };
    }

    case UPDATE_CATEGORY: {
      const updatedData = [...state.category];
      updatedData[payload.index][payload.name] = payload.value;
      return {
        ...state,
        category: updatedData,
      };
    }

    case ADD_NEW_CATEGORY_FIELD: {
      const addNewCategoryField = [...state.category];
      addNewCategoryField[payload.index].categoryFields.push(
        createNewCategoryField(payload.type)
      );
      return {
        ...state,
        category: addNewCategoryField,
      };
    }

    case UPDATE_CATEGORY_FIELD: {
      const updatedCategoryFieldData = [...state.category];
      updatedCategoryFieldData[payload.categoryIndex].categoryFields[
        payload.categoryFieldIndex
      ] = payload.data;
      return {
        ...state,
        category: updatedCategoryFieldData,
      };
    }

    case DELETE_CATEGORY_FIELD: {
      const deleteCategoryField = [...state.category];
      deleteCategoryField[payload.categoryIndex].categoryFields =
        payload.updateDeletedData;

      return {
        ...state,
        category: deleteCategoryField,
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
