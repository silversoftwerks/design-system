export const navigationSelector = ({ pages /*navigationData*/ }) => ({
  pages,
  panels: pages.reduce((prevPanels, currPage, index, pages) => [...prevPanels, ...currPage.panels], []),
  panelIndextoPagePanelIndex: index => {
    let count = 0;
    pages.filter(({ panels }, pageIndex) => panels.filter((panel, panelIndex) => {
      const isSamePanel = count == index;
      coun++;
      return isSamePanel;
    }));
  }
});
