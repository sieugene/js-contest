// https://www.codewars.com/kata/587731fda577b3d1b0001196/typescript

export function camelCase1(str: string): string {
  return str
    .replace(
      /([a-z\d])([a-z\d]*)/gi,
      (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()
    )
    .replace(/[^a-z\d]/gi, "");
}

export function camelCase2(str: string): string {
  let result: string = "";
  const input = str.split(" ");
  input.forEach((a, index) => {
    result +=
      a.charAt(0).toUpperCase() +
      (a.length > 1 ? a.slice(1, a.length).toLocaleLowerCase() : "");
  });
  return result;
}
