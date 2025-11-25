import { createRandomIdFromRangeGenerator, getRandomInteger } from './utils.js';
import { descriptions, commentsList, names } from './const.js';

const createRandomIdMsg = createRandomIdFromRangeGenerator(1, 1000);
const createRandomId = createRandomIdFromRangeGenerator(1, 25);
const createRandomUrl = createRandomIdFromRangeGenerator(1, 25);

const getComments = () => {
  const randomNameIndex = getRandomInteger(0, names.length - 1);
  const randomeMassageIndex = getRandomInteger(0, commentsList.length -1);

  return {
    id: createRandomIdMsg(),
    avatar: `mg/avatar-${getRandomInteger(1, 6)}.svg`,
    message: commentsList[randomeMassageIndex],
    name: names[randomNameIndex],
  };
};

const getImageDescription = () => ({
  id: createRandomId(),
  url: `photos/${createRandomUrl()}.jpg`,
  description: descriptions[getRandomInteger(0, descriptions.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(0, 30) }, getComments)
});

const createPhotos = (count) =>
  Array.from({ length: count }, getImageDescription);

export { createPhotos };

import { renderPictures } from './pictures.js';

function init() {
  const photos = createPhotos(25);
  renderPictures(photos);
}

init();
