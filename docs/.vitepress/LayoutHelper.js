import LabelList from "./LabelList";

export function formatSideBarItem(sideBarItem) {
  const index = sideBarItem.index;
  const label = sideBarItem.label;
  const indexHtml = index ? `<span class="sodoc-sidebar-index">${ index }</span>` : '';
  let labelHtml = label ? `<span class="sodoc-sidebar-label">${ label }</span>` : '';

  if (LabelList[label]) {
    labelHtml = label ? `<span class="sodoc-sidebar-label" style="background-color: ${ LabelList[label].color }">${ LabelList[label].text }</span>` : '';
  }

  const item = structuredClone(sideBarItem);
  item.items = [];

  item.text = `
    <span class="sodoc-sidebar-item">
      ${ indexHtml } ${ labelHtml } ${ sideBarItem.text }
    </span>`;
  
  if (sideBarItem.items && sideBarItem.items.length) {
    for (let i = 0; i < sideBarItem.items.length; i += 1) {
      item.items.push(formatSideBarItem(sideBarItem.items[i]))
    }
  }
  
  return item;
}

export function sidebarFormater(sidebar) {
  const items = [];
  for (let r = 0; r < sidebar.length; r += 1) {
    items.push(formatSideBarItem(sidebar[r]));
  }
  return items;
}

