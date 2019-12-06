import { EOL } from "os";
import { readFile } from "../common/readFile";
import { Graph } from "@dagrejs/graphlib";
import Graphlib from "@dagrejs/graphlib";

export const part1 = (fileName: string) => {
  const graph = new Graph({ directed: true });
  graph.setNode("COM");
  readFile(fileName)
    .split(EOL)
    .map(e => e.split(")"))
    .forEach(e => graph.setEdge(e[0], e[1]));
  const dijkstra = Graphlib.alg.dijkstra(graph, "COM", e => 1);
  return Object.entries(dijkstra).reduce((acc, [key, value]) => {
    return acc + value["distance"];
  }, 0);
};

export const part2 = (fileName: string) => {
  const graph = new Graph({ directed: true });
  graph.setNode("COM");
  readFile(fileName)
    .split(EOL)
    .map(e => e.split(")"))
    .forEach(e => {
      graph.setEdge(e[0], e[1]);
      graph.setEdge(e[1], e[0]);
    });
  const dijkstra = Graphlib.alg.dijkstra(graph, "SAN", e => 1);
  return dijkstra["YOU"].distance - 2;
};
