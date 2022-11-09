import { sensor } from './interfaces/sensor';

abstract class CreatorSensor {
  public brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }

  public abstract factoryMethod(): sensor;

  public sendValue(): any {
    const sensor = this.factoryMethod();
    return sensor.getValue();
  }
}

export class CreatorHeatSensor extends CreatorSensor {
  public factoryMethod(): sensor {
    return new HeatSensor();
  }
}

class CreatorRadarSensor extends CreatorSensor {
  public factoryMethod(): sensor {
    return new RadarSensor();
  }
}

class HeatSensor implements sensor {
  public getValue(): any {
    // Return data of heat sensor
    return { data: { value: 38 } };
  }
}

class RadarSensor implements sensor {
  public getValue(): any {
    // Return data of radar sensor
    return { data: { value: 50 } };
  }
}
