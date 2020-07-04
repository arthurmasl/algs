// Tony can send 5 texts and 3 nudes in 19 minutes
// He could also send 3 texts and 1 nude in 9 minutes
// How long would it take him to send 1 text and 1 nude

const determ = ([[a, b], [c, d]]) => a * d - b * c;

const delta = ([x1, y1, z1], [x2, y2, z2]) => [
  [x1, y1],
  [x2, y2],
];

const deltaX = ([x1, y1, z1], [x2, y2, z2]) => [
  [z1, y1],
  [z2, y2],
];

const deltaY = ([x1, y1, z1], [x2, y2, z2]) => [
  [x1, z1],
  [x2, z2],
];

const cramer = (m1, m2) => {
  const d = determ(delta(m1, m2));
  const dX = determ(deltaX(m1, m2));
  const dY = determ(deltaY(m1, m2));

  return {
    x: dX / d,
    y: dY / d,
  };
};

export { delta, deltaX, deltaY, determ, cramer };
