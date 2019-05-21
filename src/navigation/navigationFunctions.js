function navigationFunctions(setNavigation, index) {
  const navigateToPanel = panelIndex =>
    setNavigation(navigationObj => ({
      ...navigationObj,
      index: { ...navigationObj.index, panel: panelIndex }
    }));
  const navigateToContent = contentIndex =>
    setNavigation(navigationObj => ({
      ...navigationObj,
      index: { ...navigationObj.index, content: contentIndex }
    }));

  const pageUp = ({ index, pages }) =>
    navigateToPage(incrementUp({ index, array: pages }));

  const pageDown = ({ index, pages }) =>
    navigateToPage(incrementDown({ index, array: pages }));
  const panelUp = ({ panelIndex, panel }) =>
    navigateToPanel(incrementUp({ index, array: panel }));
  const panelDown = ({ panelIndex, panel }) =>
    navigateToPanel(incrementDown({ index, array: panel }));
  const contentUp = ({ contentIndex, content }) =>
    navigateToContent(incrementUp({ index, array: content }));
  const contentDown = ({ contentIndex, content }) =>
    navigateToContent(incrementDown({ index, array: content }));

  return { pageUp, pageDown };
}

const incrementUp = ({ index, array }) => Math.min(index + 1, array.length - 1);
const incrementDown = ({ index, array }) => Math.max(index - 1, 0);
const navigateTo = (indexName, index, navigationObj) => ({
  ...navigationObj,
  index: {
    ...navigationObj.index,
    [indexName]: index
  }
});
export { navigateTo, incrementDown, incrementUp };
