type Draggable = {
  drag: () => void
};

type Resiable = {
  resize: () => void
}

type UIWidget = Draggable & Resiable;

let textBox: UIWidget = {
  drag: () => { },
  resize: () => { }
}