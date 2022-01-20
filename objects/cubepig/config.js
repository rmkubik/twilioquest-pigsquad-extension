const conversationOnInteract = require("../../scripts/conversationOnInteract");

module.exports = {
  animations: {},
  spriteSheets: {
    tq_cubepig: {
      fileName: "cubepig overworld.png",
      frameDimensions: {
        width: 32,
        height: 32,
      },
    },
  },
  events: {
    onPlayerDidInteract: conversationOnInteract,
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "tq_cubepig",
      layers: [],
    },
  },
};
