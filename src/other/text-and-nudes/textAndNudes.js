// Tony can send 5 textx and 3 nudes in 19 minutes
// He could also send 3 texts and 1 nude in 9 minutes
// How long would it take him to send 1 text and 1 nude

const determ = ([[a, b], [c, d]]) => a * d - b * c;

const cramer = (m1, m2) => {
  const delta = determ([
    [m1[0], m1[1]],
    [m2[0], m2[1]],
  ]);

  const deltaX = determ([
    [m1[2], m1[1]],
    [m2[2], m2[1]],
  ]);

  const deltaY = determ([
    [m1[0], m1[2]],
    [m2[0], m2[2]],
  ]);

  const x = deltaX / delta;
  const y = deltaY / delta;

  return { x, y };
};

const textAndNudes = (t, n, m) => {};

export { determ, cramer, textAndNudes };
