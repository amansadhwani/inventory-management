import { v4 as uuid } from "uuid";

export const createNewCategoryField = (type = "text") => {
  const categoryID = uuid();
  return { name: "Title", type, categoryID };
};

export const createNewCategoryItem = (item) => {
  return {
    categorySubItemsID: uuid(),
    value: "",
    name: item.name,
    type: item.type,
    categoryLinkID: item.categoryID,
  };
};

export const createNewCategory = () => {
  const id = uuid();
  const newCategory = {
    id,
    categoryName: "New Category",
    categoryFields: [createNewCategoryField()],
    categoryItems: [],
  };
  newCategory.titleID = newCategory.categoryFields[0].categoryID;
  return newCategory;
};

export const prepareDataForCategorySubItems = (categoryFields) => {
  const prepareData = categoryFields.map((item) => {
    return createNewCategoryItem(item);
  });
  return prepareData;
};

export const createCategoryItemsData = (categoryFields) => {
  const categoryItemID = uuid();
  const categorySubItems = prepareDataForCategorySubItems(categoryFields);
  return { categoryItemID, categorySubItems };
};

export const getTitleName = (item, categoryData) => {
  const extractTitleName = item.categorySubItems.find(
    (element) => element.categoryLinkID === categoryData.titleID
  );
  return extractTitleName?.value.toString();
};

export const setDefaultTitle = (categoryFields, categoryFieldId) => {
  const findElement = categoryFields.filter(
    (subElement) => subElement.categoryID !== categoryFieldId
  );
  return findElement[0].categoryID;
};
