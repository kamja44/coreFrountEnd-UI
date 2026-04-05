export const deepCompare = <T extends Record<string, unknown>>(
  a: T,
  b: T,
): boolean =>
  Object.entries(a).every(([key, val]) =>
    val !== null && typeof val === "object"
      ? deepCompare(val as T, b[key] as T)
      : val === b[key],
  );
