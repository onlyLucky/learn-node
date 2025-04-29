package builder.builders;

import builder.cars.*;
import builder.components.*;

public class CarBuilder implements Builder {
  private CarType carType;
  private int seats;
  private Engine engine;
  private TripComputer tripComputer;
  private GPSNavigator gpsNavigator;
  private Transmission transmission;
  
  public void setCarType(CarType type) {
    this.carType = type;
  }

  @Override
  public void setSeats(int seats) {
    this.seats = seats;
  }
  @Override
  public void setEngine(Engine engine) {
    this.engine = engine;
  }
  @Override
  public void setTripComputer(TripComputer tripComputer) {
    this.tripComputer = tripComputer;
  }

  @Override
  public void setGPSNavigator(GPSNavigator gpsNavigator) {
    this.gpsNavigator = gpsNavigator;
  }

  @Override
  public void setTransmission(Transmission transmission) {
    this.transmission = transmission;
  }

  public Car getResult() {
    return new Car(carType, seats, engine, transmission, tripComputer, gpsNavigator);
  }

}
