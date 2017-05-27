export class Greeter {
  private _name: string;

  constructor(name?: string) {
    this._name = name || 'World';
  }

  public greet(): string {
    return `Hello ${this._name}`;
  }
}