import tippy from "tippy.js";
import type { Props as TippyProps } from "tippy.js";

const targetElements = document.querySelectorAll("[title]");

const optionsElements = document.querySelector("[tippy-init-options]");
let clientInitOptions: Partial<TippyProps> = {};
if (optionsElements) {
  try {
    clientInitOptions = JSON.parse(optionsElements?.innerHTML);
  } catch {
    throw new Error();
  }
}
const globalOptions: Partial<TippyProps> = {
  allowHTML: true,
  delay: [200, 200],
  placement: "right",
  interactive: true,
  ...clientInitOptions,
};

targetElements.forEach((element) => {
  const options = { ...globalOptions };

  // get tooltip title
  const title = element.getAttribute("title");
  if (typeof title === "string") options.content = title;

  // tippy create
  tippy(element, options);

  element.setAttribute("title", "");
});
