import { c as contains } from './utils-934fcc35.js';

var Keymap;
(function (Keymap) {
  Keymap["TAB"] = "Tab";
  Keymap["COMMA"] = "Comma";
  Keymap["CTRL"] = "ControlLeft";
  Keymap["CTRLRIGHT"] = "ControlRight";
  Keymap["SHIFTLEFT"] = "ShiftLeft";
  Keymap["SHIFTRIGHT"] = "ShiftRight";
  Keymap["ENTER"] = "Enter";
  Keymap["BACKSPACE"] = "Backspace";
  Keymap["ALTLEFT"] = "AltLeft";
  Keymap["ALTRIGHT"] = "AltRight";
  Keymap["SPACE"] = " ";
  Keymap["OSLEFT"] = "OSLeft";
  Keymap["OSRIGHT"] = "OSRight";
  Keymap["UP"] = "ArrowUp";
  Keymap["DOWN"] = "ArrowDown";
  Keymap["LEFT"] = "ArrowLeft";
  Keymap["RIGHT"] = "ArrowRight";
  Keymap["ESC"] = "Escape";
  Keymap["DEL"] = "Delete";
  Keymap["F1"] = "F1";
  Keymap["F2"] = "F2";
  Keymap["F3"] = "F3";
  Keymap["F4"] = "F4";
  Keymap["F5"] = "F5";
  Keymap["F6"] = "F6";
  Keymap["F7"] = "F7";
  Keymap["F8"] = "F8";
  Keymap["F9"] = "F9";
  Keymap["F10"] = "F10";
  Keymap["F11"] = "F11";
  Keymap["F12"] = "F123";
})(Keymap || (Keymap = {}));
const ACTION_EVENTS = [
  Keymap.DOWN,
  Keymap.UP,
  Keymap.ENTER,
  Keymap.TAB,
  Keymap.SHIFTLEFT,
  Keymap.SHIFTRIGHT,
  Keymap.ESC
];
function isKeyboardKeyAction(keyboardEvent) {
  return contains(ACTION_EVENTS, keyboardEvent.key);
}

export { Keymap as K, isKeyboardKeyAction as i };

//# sourceMappingURL=Keymap-a4da2da6.js.map