{
  "beam1": {
    "x": 0,
    "y": 300,
    "length": 1,
    "rotation": 0,
    "boundary conditions": {
      "clamp": 0
    }
  }
}

{
  "force1": {
    "touches": "beam1",
    "type": "point load",
    "size": 1,
    "location": {
      "x": 1,
      "y": 300,
      "direction": 270
    }
  }
}
