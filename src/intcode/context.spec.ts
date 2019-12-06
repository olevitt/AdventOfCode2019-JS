import Context from "./context";

it("should parse opCode", function() {
  const context = new Context();
  context.data = [99];
  context.position = 0;
  expect(context.getOpCode()).toEqual(99);
  context.data = [1102];
  expect(context.getOpCode()).toEqual(2);
  expect(context.getParameterMode(0)).toEqual(1);
  expect(context.getParameterMode(1)).toEqual(1);
  expect(context.getParameterMode(2)).toEqual(0);
});
