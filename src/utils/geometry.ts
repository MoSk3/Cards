type RectShape = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export const checkOverlap = (rect1: RectShape, rect2: RectShape): boolean => {
  return !(
    rect1.x + rect1.width < rect2.x ||
    rect1.x > rect2.x + rect2.width ||
    rect1.y + rect1.height < rect2.y ||
    rect1.y > rect2.y + rect2.height
  );
};

export const checkOverlaps = (
  rect: RectShape,
  elements: RectShape[]
): boolean => {
  return elements.some((el) => checkOverlap(rect, el));
};

export const getRandomPosition = (
  containerWidth: number,
  containerHeight: number,
  elementWidth: number,
  elementHeight: number
): { x: number; y: number } => {
  const x = Math.random() * (containerWidth - elementWidth);
  const y = Math.random() * (containerHeight - elementHeight);
  return { x, y };
};
