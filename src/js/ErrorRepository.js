export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(1, 'Error 1 description');
    this.errors.set(2, 'Error 2 description');
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
