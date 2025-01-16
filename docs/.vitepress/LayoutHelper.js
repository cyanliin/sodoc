import LabelList from "./LabelList";

export function formatSideBarItem(sideBarItem) {
  const index = sideBarItem.index;
  const label = sideBarItem.label;
  const indexHtml = index ? `<span class="sodoc-sidebar-index">${ index }</span>` : '';
  let labelHtml = label ? `<span class="sodoc-sidebar-label">${ label }</span>` : '';

  if (LabelList[label]) {
    labelHtml = label ? `<span class="sodoc-sidebar-label" style="background-color: ${ LabelList[label].color }">${ LabelList[label].text }</span>` : '';
  }
  
  sideBarItem.text = `
    <div class="sodoc-sidebar-item">
      ${ indexHtml } ${ labelHtml } ${ sideBarItem.text }
    </div>`;
  

  if (sideBarItem.items && sideBarItem.items.length) {
    for (let i = 0; i < sideBarItem.items.length; i += 1) {
      formatSideBarItem( sideBarItem.items[i])
    }
  }
}

export function sidebarFormater(sidebar) {
  for (let r = 0; r < sidebar.length; r += 1) {
    formatSideBarItem(sidebar[r]);
  }
  return sidebar;
}

