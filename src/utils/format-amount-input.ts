// Formats a raw amount string with thousand separators as the user types,
// while preserving an in-progress decimal (e.g. "12,000.5" while still typing).
const formatAmountInput = (raw: string) => {
  let cleaned = raw.replace(/[^\d.]/g, "");

  const firstDot = cleaned.indexOf(".");
  if (firstDot !== -1) {
    cleaned =
      cleaned.slice(0, firstDot + 1) +
      cleaned.slice(firstDot + 1).replace(/\./g, "");
  }

  const [intPart, decPart] = cleaned.split(".");
  const formattedInt = intPart ? Number(intPart).toLocaleString("en-US") : "";

  return decPart !== undefined
    ? `${formattedInt}.${decPart.slice(0, 2)}`
    : formattedInt;
};
