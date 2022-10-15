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
    title: "Title Name",
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
