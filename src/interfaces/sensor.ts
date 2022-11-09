export interface sensor {
  getValue(): any;
}

export interface createSensor {
  brand: string;
  sendValue(): any;
}
