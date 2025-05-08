package intermediary.components;

import intermediary.mediator.Mediator;

public interface Component {
  void setMediator(Mediator mediator);
  String getName();
}
