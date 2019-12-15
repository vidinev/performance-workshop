export class UtilsService {
  static calculatePI() {
    const iterations = 60000000;
    let pi = 0;
    let n = 1;
    for (let i = 0; i <= iterations; i++)
    {
      pi = pi + (4 / n) - (4 / (n + 2));
      n = n + 4
    }
    return pi;
  }
}
