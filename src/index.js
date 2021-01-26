import Add from "./calc";
import Log from "./log";
import pic from "./../mountain.png";
const add = new Add();
const log = new Log();
log.log(add.add(5, 8, 9));
const el = document.createElement("img");
el.src = pic;
document.body.appendChild(el);
