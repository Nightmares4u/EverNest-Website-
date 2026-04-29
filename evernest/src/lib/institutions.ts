export function getInstitutionMonogram(name: string) {
  const skipWords = new Set(["of", "the", "for", "and"])

  return name
    .split(/[\s/]+/)
    .filter((part) => part.length > 0)
    .filter((part) => !skipWords.has(part.toLowerCase()))
    .slice(0, 3)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
}
