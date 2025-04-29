package builder.cars;

import builder.components.*;


public class Car {
  private CarType carType;
  private final int seats;
  private final Engine engine;
  private final TripComputer tripComputer;
  private final GPSNavigator gpsNavigator;
  private final Transmission transmission;
  private double fuel = 0;
  

  public Car(CarType carType,int seats,Engine engine, Transmission transmission,TripComputer tripComputer,GPSNavigator gpsNavigator) {
    this.engine = engine;
    this.carType = carType;
    this.seats = seats;
    this.transmission = transmission;
    this.tripComputer = tripComputer;
    if(this.tripComputer != null){
      this.tripComputer.setCar(this);
    }
    this.gpsNavigator = gpsNavigator;
  }

  public CarType getCarType() {
    return carType;
  }

  public double getFuel() {
    return fuel;
  }

  public void setFuel(double fuel) {
    this.fuel = fuel;
  }

  public int getSeats() {
    return seats;
  }

  public Transmission getTransmission() {
    return transmission;
  }

  public TripComputer getTripComputer() {
    return tripComputer;
  }

  public GPSNavigator getGpsNavigator() {
    return gpsNavigator;
  }

  public Engine getEngine() {
    return engine;
  }
}
