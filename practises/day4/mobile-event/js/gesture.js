/**
 * - start move end
 */

function enableGesture(ele) {
  if (!("ontouchstart" in document)) {
    ele.addEventListener("mousedown", (event) => {
      let move = (event) => {
        console.log("move");
      }
      let end = (event) => {
        console.log("end");
        document.removeEventListener("mousemove", move);
      } 
      console.log("start");
      document.addEventListener("mousemove", move);
      document.addEventListener("mousedown", end);
     })
  }
  ele.addEventListener("touchstart", () => {
    console.log("start");
  });
  ele.addEventListener("touchmove", () => {
    console.log("move");
  });
  ele.addEventListener("touchend", () => {
    console.log("end");
  });
  let onStart = (e) => {
    ele.dispatchEvent(Object.assign(new CustomEvent("start")))
  }
}