class Context {
  data: Array<number>;
  position: number;
  input: number;
  outputs: Array<number> = [];

  getOpCode = () => {
    return this.data[this.position] % 100;
  };

  getParameterMode = (paramPosition: number) => {
    const divideBy = 10 ** (paramPosition + 2);
    return Math.floor(this.data[this.position] / divideBy) % 10;
  };

  getParameterAt = (paramPosition: number) => {
    const paramMode = this.getParameterMode(paramPosition);
    if (paramMode === MODE_IMMEDIATE) {
      return this.data[this.position + paramPosition + 1];
    } else if (paramMode === MODE_POSITION) {
      return this.data[this.data[this.position + paramPosition + 1]];
    }
    return 0;
  };
}

export default Context;
export const MODE_IMMEDIATE = 1;
export const MODE_POSITION = 0;
