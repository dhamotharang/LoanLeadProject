export function log(...message: any): void {
  console.log(...message);
}

export function clone(data: any) {
  return JSON.parse(JSON.stringify(data));
}

export class Strings {
  public static isBlank(str): boolean {
    return (!str || /^\s*$/.test(str));
  }
}

export function removeWrapper(data: any[]): any[] {
  return data.map((e) => e[Object.keys(e)[0]]);
}
