import "./style.css";

const toggles = document.querySelectorAll(
  ".toggle"
) as NodeListOf<HTMLInputElement>;
const good = document.querySelector("#good") as HTMLInputElement;
const cheap = document.querySelector("#cheap") as HTMLInputElement;
const fast = document.querySelector("#fast") as HTMLInputElement;

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e: Event) => {
    const target = e.target as HTMLInputElement;
    doTheTick(target);
  })
);

function doTheTick(theClickedOne: HTMLInputElement) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
    } else if (cheap === theClickedOne) {
      good.checked = false;
    } else if (fast === theClickedOne) {
      cheap.checked = false;
    }
  }
}
