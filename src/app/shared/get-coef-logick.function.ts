export function getCoeffLogick(apiValue: number): number {
  return Math.floor(apiValue * 100000) / 100000;
}
