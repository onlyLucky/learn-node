package builder.builders;

import builder.cars.CarType;
import builder.components.*;

public interface Builder {
  void setCarType(CarType type);
  void setSeats(int seats);
  void setEngine(Engine engine);

  void setTransmission(Transmission transmission);
  void setTripComputer(TripComputer tripComputer);
  void setGPSNavigator(GPSNavigator gpsNavigator);
}
