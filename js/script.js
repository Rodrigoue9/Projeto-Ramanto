console.log("oi");
import TabNav from "./modules/tabnav.js";
import SlideNav from "./modules/slide.js";

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();
console.log(tabNav);

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addControl(".custom-controls");
console.log(slide);
