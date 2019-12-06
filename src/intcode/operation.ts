import Context from "./context";
import { MODE_IMMEDIATE, MODE_POSITION } from "./context";

abstract class Operation {
  abstract accept(context: Context): boolean;
  abstract process(context: Context);
}

class Op1 extends Operation {
  accept(context: Context) {
    return context.getOpCode() === 1;
  }

  process(context: Context) {
    const data = context.data;
    const pointer = context.position;
    const input1 = context.getParameterAt(0);
    const input2 = context.getParameterAt(1);
    data[data[pointer + 3]] = input1 + input2;
    context.position += 4;
  }
}

class Op2 extends Operation {
  accept(context: Context) {
    return context.getOpCode() === 2;
  }

  process(context: Context) {
    const data = context.data;
    const pointer = context.position;
    const input1 = context.getParameterAt(0);
    const input2 = context.getParameterAt(1);
    data[data[pointer + 3]] = input1 * input2;
    context.position += 4;
  }
}

class Op3 extends Operation {
  accept(context: Context) {
    return context.getOpCode() === 3;
  }

  process(context: Context) {
    const target = context.data[context.position + 1];
    context.data[target] = context.input;
    context.position += 2;
  }
}

class Op4 extends Operation {
  accept(context: Context) {
    return context.getOpCode() === 4;
  }

  process(context: Context) {
    context.outputs.push(context.getParameterAt(0));
    context.position += 2;
  }
}

const getOperations = (): ReadonlyArray<Operation> => {
  return [new Op1(), new Op2(), new Op3(), new Op4()];
};

export default getOperations();
