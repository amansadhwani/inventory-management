import {
  ADD_CATEGORY,
  ADD_NEW_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  ADD_NEW_CATEGORY_FIELD,
  UPDATE_CATEGORY_FIELD,
  DELETE_CATEGORY_FIELD,
  ADD_NEW_CATEGORY_ITEM,
  DELETE_CATEGORY_ITEM,
  UPDATE_CATEGORY_SUB_ITEM,
} from "../actions/types";
import {
  createCategoryItemsData,
  createNewCategory,
  createNewCategoryField,
  createNewCategoryItem,
} from "../helper";

const initialState = {
  category: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CATEGORY: {
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
      const categoryFieldData = createNewCategoryField(payload.type);

      return {
        ...state,
        category: state.category.map((item) =>
          item.id === payload.categoryID
            ? {
                ...item,
                categoryFields: [...item.categoryFields, categoryFieldData],
                categoryItems: item.categoryItems.map((catItem) => {
                  return {
                    ...catItem,
                    categorySubItems: [
                      ...catItem.categorySubItems,
                      createNewCategoryItem(categoryFieldData),
                    ],
                  };
                }),
              }
            : item
        ),
      };
    }

    case UPDATE_CATEGORY_FIELD: {
      return {
        ...state,
        category: state.category.map((element) =>
          element.id === payload.categoryID
            ? {
                ...element,
                categoryFields: element.categoryFields.map((subElement) =>
                  subElement.categoryID === payload.categoryFieldId
                    ? { ...subElement, [payload.name]: payload.value }
                    : subElement
                ),
                categoryItems: element.categoryItems.map((catItem) => {
                  return {
                    ...catItem,
                    categorySubItems: catItem.categorySubItems.map(
                      (subCatItem) =>
                        subCatItem.categoryLinkID === payload.categoryFieldId
                          ? { ...subCatItem, [payload.name]: payload.value }
                          : subCatItem
                    ),
                  };
                }),
              }
            : element
        ),
      };
    }

    case DELETE_CATEGORY_FIELD: {
      return {
        ...state,
        category: state.category.map((element) => {
          return {
            ...element,
            categoryFields: element.categoryFields.filter(
              (subElement) => subElement.categoryID !== payload.categoryFieldId
            ),
            categoryItems: element.categoryItems.map((catItem) => {
              return {
                ...catItem,
                categorySubItems: catItem.categorySubItems.filter(
                  (subCatItem) =>
                    subCatItem.categoryLinkID !== payload.categoryFieldId
                ),
              };
            }),
          };
        }),
      };
    }

    case ADD_NEW_CATEGORY_ITEM: {
      const categoryFieldData = createCategoryItemsData(payload.categoryFields);

      return {
        ...state,
        category: state.category.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                categoryItems: [...item.categoryItems, categoryFieldData],
              }
            : item
        ),
      };
    }
    case DELETE_CATEGORY_ITEM: {
      return {
        ...state,
        category: state.category.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                categoryItems: item.categoryItems.filter(
                  (catItem) => catItem.categoryItemID !== payload.categoryItemID
                ),
              }
            : item
        ),
      };
    }

    case UPDATE_CATEGORY_SUB_ITEM: {
      return {
        ...state,
        category: state.category.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                categoryItems: item.categoryItems.map((catItem) =>
                  catItem.categoryItemID === payload.categoryItemID
                    ? {
                        ...catItem,
                        categorySubItems: catItem.categorySubItems.map(
                          (subCatItem) =>
                            subCatItem.categorySubItemsID ===
                            payload.categorySubItemsID
                              ? { ...subCatItem, value: payload.value }
                              : subCatItem
                        ),
                      }
                    : catItem
                ),
              }
            : item
        ),
      };
    }

    default:
      return state;
  }
}
