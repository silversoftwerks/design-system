import { navigateTo, incrementDown, incrementUp } from "./navigationFunctions";
export const navigationKeyHandler = setNavigation => {
  return ({ key }) => {
    if (key == "s") {
      setNavigation(navigationObj =>
        navigateTo(
          "page",
          incrementUp({
            index: navigationObj.index.page,
            array: navigationObj.pages
          }),
          navigationObj
        )
      );
    }
    if (key == "w") {
      setNavigation(navigationObj =>
        navigateTo(
          "page",
          incrementDown({
            index: navigationObj.index.page,
            array: navigationObj.pages
          }),
          navigationObj
        )
      );
    }
  };
};
