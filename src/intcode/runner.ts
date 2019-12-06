import operations from "./operation";
import Context from "./context";

const runProgram = (
  data: Array<number>,
  noun: number,
  verb: number,
  input = 0
): Context => {
  const context = new Context();
  context.data = [...data];
  if (noun) {
    context.data[1] = noun;
  }
  if (verb) {
    context.data[2] = verb;
  }

  context.position = 0;
  context.input = input;
  while (context.getOpCode() != 99) {
    operations
      .filter(op => op.accept(context))
      .forEach(op => {
        op.process(context);
      });
  }
  return context;
};

export default runProgram;
