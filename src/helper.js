import { v4 as uuid } from "uuid";

export const createNewCategoryField = (type = "text") => {
  const categoryId = uuid();
  return { name: "Title", type, categoryId };
};

export const createNewCategory = () => {
  const id = uuid();
  const newCategory = {
    id,
    categoryName: "New Category",
    categoryFields: [createNewCategoryField()],
  };
  return newCategory;
};
export const createNewCategoryItem = (categoryFields) => {
  //const categoryItemId = uuid();
  return categoryFields.map((item) => (item.value = ""));
};
export const prepareNewCategoryFieldsData = (category, categoryData) => {
  const indexToUpdate = category.findIndex(
    (item) => item.id === categoryData.id
  );
  const updateFieldsItem = createNewCategoryItem(categoryData.categoryFields);

  const updateMainCategory = {
    ...categoryData,
    categoryFieldsData: updateFieldsItem,
  };

  return { indexToUpdate, updateMainCategory };
};

export const getCategoryIndex = (category, categoryId) => {
  return category.findIndex((element) => element.id === categoryId);
};

export const getCategoryFieldIndex = (categoryField, categoryFieldId) => {
  return categoryField.findIndex(
    (categoryFieldItem) => categoryFieldItem.categoryId === categoryFieldId
  );
};
