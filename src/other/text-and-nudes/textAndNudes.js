// Tony can send 5 texts and 3 nudes in 19 minutes
// He could also send 3 texts and 1 nude in 9 minutes
// How long would it take him to send 1 text and 1 nude

const determ = ([[a, b], [c, d]]) => a * d - b * c;

const cramer = ([x1, y1, z1], [x2, y2, z2]) => {
  const delta = determ([
    [x1, y1],
    [x2, y2],
  ]);

  const deltaX = determ([
    [z1, y1],
    [z2, y2],
  ]);

  const deltaY = determ([
    [x1, z1],
    [x2, z2],
  ]);

  const x = deltaX / delta;
  const y = deltaY / delta;

  return { x, y };
};

export { determ, cramer };
