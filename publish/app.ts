import { SquareSlider } from "../src/Square-Slider";
import { EVENTS } from "../src/Events";
function container() {
  const container = document.createElement("div");
  container.className = "container";

  const title = document.createElement("h3");
  title.innerText = "Slider Controls";

  const squareSlider = SquareSlider({
    width: 200,
    height: 10,
    sliderColor: "#e6ce8e",
    handleColor: "#403e1d",
  });

  container.appendChild(title);
  container.appendChild(squareSlider);
  container.addEventListener(EVENTS.SLIDER_MOVE, (ev) => {
    console.log(ev);
  });

  return container;
}

const comp = container();
document.body.appendChild(comp);
