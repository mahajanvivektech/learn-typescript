class Animal {
  // private readonly name: string;
  protected readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  public move(distanceInMeters: number): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

let cat = new Animal('Cat');
cat.move(10);

class Bird extends Animal {
  public fly(distanceInMeters: number): void {
    console.log(`${this.name} flew ${distanceInMeters}m.`)
  }
}