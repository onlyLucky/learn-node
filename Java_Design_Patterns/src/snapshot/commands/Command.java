package snapshot.commands;

public interface Command {
  String getName();
  void execute();
}
