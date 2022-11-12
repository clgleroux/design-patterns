export interface sensor {
  getValue(): { data: { value: number } };
}

export interface createSensor {
  brand: string;
  sendValue(): { data: { value: number } };
}
