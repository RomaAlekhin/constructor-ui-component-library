import { directives } from './directives.ts';
import { widgets } from './widgets.ts';
import { composables } from './composables.ts';

// eslint-disable-next-line node/prefer-global/process
const isProd = process.env.NODE_ENV === 'production';

const componentsList = [
  { text: 'Accordion', link: '/components/accordion/accordion.md' },
  { text: 'Alert', link: '/components/alert/alert.md', readyForReview: true },
  { text: 'Autocomplete', link: '/components/autocomplete/autocomplete.md' },
  { text: 'Breadcrumbs', link: '/components/breadcrumbs/breadcrumbs.md' },
  { text: 'Button Group', link: '/components/button-group/buttonGroup.md' },
  { text: 'Button', link: '/components/button/button.md', readyForReview: true },
  { text: 'Card', link: '/components/card/card.md' },
  { text: 'Carousel', link: '/components/carousel/carousel.md' },
  { text: 'Cascader', link: '/components/cascader/cascader.md' },
  { text: 'Chart', link: '/components/chart/chart.md' },
  { text: 'Checkbox', link: '/components/checkbox/checkbox.md', readyForReview: true },
  { text: 'Chip', link: '/components/chip/chip.md', readyForReview: true },
  { text: 'Code', link: '/components/code/code.md' },
  { text: 'Column', link: '/components/column/column.md' },
  { text: 'Combobox', link: '/components/combobox/combobox.md' },
  { text: 'Config Provider', link: '/components/config-provider/configProvider.md' },
  { text: 'Confirm Dialog', link: '/components/confirm-dialog/confirmDialog.md' },
  { text: 'Container', link: '/components/container/container.md' },
  { text: 'Counter', link: '/components/counter/counter.md' },
  { text: 'Data Table', link: '/components/table/table.md' },
  { text: 'Date Picker', link: '/components/date-picker/datePicker.md' },
  { text: 'Dialog', link: '/components/dialog/dialog.md' },
  { text: 'Disclosure', link: '/components/disclosure/disclosure.md' },
  { text: 'Divider', link: '/components/divider/divider.md', readyForReview: true },
  { text: 'Drawer', link: '/components/drawer/drawer.md' },
  { text: 'Dropdown', link: '/components/dropdown/dropdown.md' },
  { text: 'File Browser', link: '/components/file-browser/fileBrowser.md' },
  { text: 'File Picker', link: '/components/file-picker/filePicker.md' },
  { text: 'File Upload', link: '/components/file-upload/fileUpload.md' },
  { text: 'Filter', link: '/components/filter/filter.md' },
  { text: 'Footer', link: '/components/footer/footer.md', readyForReview: true },
  { text: 'Form Dialog', link: '/components/form-dialog/formDialog.md' },
  { text: 'Form Error', link: '/components/form-error/formError.md' },
  { text: 'Form Item', link: '/components/form-item/formItem.md' },
  { text: 'Form Label', link: '/components/form-label/formLabel.md' },
  { text: 'Form', link: '/components/form/form.md' },
  { text: 'Grid', link: '/components/grid/grid.md' },
  { text: 'Header', link: '/components/header/header.md' },
  { text: 'Icon', link: '/components/icon/icon.md' },
  { text: 'Infinite Scroll', link: '/components/infinite-scroll/infiniteScroll.md' },
  { text: 'Input Base', link: '/components/input-base/inputBase.md' },
  { text: 'Input Number', link: '/components/input-number/inputNumber.md' },
  { text: 'Input', link: '/components/input/input.md' },
  { text: 'Link', link: '/components/link/link.md', readyForReview: true },
  { text: 'List', link: '/components/list/list.md' },
  { text: 'ListItem', link: '/components/list-item/listItem.md' },
  { text: 'Loading', link: '/components/loading/loading.md' },
  { text: 'Main', link: '/components/main/main.md' },
  { text: 'Map', link: '/components/map/map.md' },
  { text: 'Markdown Editor', link: '/components/markdown-editor/markdownEditor.md', readyForReview: true },
  { text: 'Markup Table', link: '/components/markup-table/markupTable.md' },
  { text: 'Menu Group', link: '/components/menu-group/menuGroup.md' },
  { text: 'Menu Item', link: '/components/menu-item/menuItem.md' },
  { text: 'Menu', link: '/components/menu/menu.md' },
  { text: 'Modal', link: '/components/modal/modal.md' },
  { text: 'Notification', link: '/components/notification.md' },
  { text: 'Num Picker', link: '/components/num-picker/numPicker.md' },
  { text: 'Option Group', link: '/components/option-group/optionGroup.md' },
  { text: 'Option', link: '/components/option/option.md' },
  { text: 'Pagination', link: '/components/pagination/pagination.md' },
  { text: 'Password', link: '/components/password/password.md' },
  { text: 'Popover', link: '/components/popover/popover.md' },
  { text: 'Popper', link: '/components/popper/popper.md' },
  { text: 'Progress', link: '/components/progress/progress.md' },
  { text: 'Radio', link: '/components/radio/radio.md', readyForReview: true },
  { text: 'Ribbon', link: '/components/ribbon/ribbon.md' },
  { text: 'Row', link: '/components/row/row.md' },
  { text: 'Script Editor', link: '/components/script-editor/scriptEditor.md' },
  { text: 'Search', link: '/components/search/search.md' },
  { text: 'Select', link: '/components/select/select.md' },
  { text: 'Skeleton', link: '/components/skeleton/skeleton.md' },
  { text: 'Slider', link: '/components/slider/slider.md' },
  { text: 'Spinner', link: '/components/spinner/spinner.md', readyForReview: true },
  { text: 'Split Button', link: '/components/split-button/splitButton.md' },
  { text: 'Stepper Item', link: '/components/stepper-item/stepperItem.md' },
  { text: 'Stepper', link: '/components/stepper/stepper.md' },
  { text: 'Submenu', link: '/components/submenu/submenu.md' },
  { text: 'Switch', link: '/components/switch/switch.md', readyForReview: true },
  { text: 'Table Column', link: '/components/table-column/tableColumn.md' },
  { text: 'Tabs', link: '/components/tabs/tabs.md' },
  { text: 'Tag', link: '/components/tag/tag.md' },
  { text: 'TextArea', link: '/components/textarea/textarea.md' },
  { text: 'Theme Provider', link: '/components/theme-provider/themeProvider.md' },
  { text: 'Tiles', link: '/components/tiles/tiles.md' },
  { text: 'Time Picker', link: '/components/time-picker/timePicker.md' },
  { text: 'Toolbar', link: '/components/toolbar/toolbar.md' },
  { text: 'Tooltip', link: '/components/tooltip/tooltip.md', readyForReview: true },
  { text: 'Tree', link: '/components/tree/tree.md' },
  { text: 'Typography', link: '/components/typography/typography.md' },
  { text: 'Upload', link: '/components/upload/upload.md' },
  { text: 'Virtual Scroll', link: '/components/virtual-scroll/virtualScroll.md' },
  {
    text: 'Directives',
    items: directives,
    readyForReview: true
  },
  {
    text: 'Widgets',
    items: widgets
  },
  {
    text: 'Composables',
    items: composables
  }
];

export const enComponents = [
  ...componentsList.filter(c => (isProd && c.readyForReview) || !isProd),
];
