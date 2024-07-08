const tf = require('@tensorflow/tfjs-node');
const mobilenet = require('@tensorflow-models/mobilenet');
const { Image } = require('image-js');

const identifySpecies = async (base64Image) => {
  const buffer = Buffer.from(base64Image, 'base64');
  const image = await Image.load(buffer);
  const tensor = tf.browser.fromPixels(image.bitmap);
  const model = await mobilenet.load();
  const predictions = await model.classify(tensor);
  return predictions[0];
};

module.exports = identifySpecies;
