import * as go from 'gojs';
import { $ } from '../object';

export const makeLayout = (type:string) => {
  switch (type) {
    case 'grid':
      return $(go.GridLayout, {
        wrappingColumn: 4,
        wrappingWidth: 5000,
        alignment: go.GridLayout.Position,
        cellSize: new go.Size(6, 6),
        spacing: new go.Size(50, 50),
        sorting: go.GridLayout.Ascending,
        comparer: (a: go.Part, b: go.Part) => (a.data.key < b.data.key ? -1 : 1),
      });
    case 'LayeredDigraphLayout':
      return $(go.LayeredDigraphLayout, {
        direction: 90,
        layerSpacing: 30,
        columnSpacing: 30,
        setsPortSpots: false,
      });
    case 'tree':
      return $(go.TreeLayout, {
        treeStyle: go.TreeLayout.StyleLayered,
        arrangement: go.TreeLayout.ArrangementHorizontal,
        // properties for most of the tree:
        angle: 90,
        layerSpacing: 60,
        // properties for the "last parents":
        alternateAngle: 90,
        alternateLayerSpacing: 60,
        alternateAlignment: go.TreeLayout.AlignmentBus,
        alternateNodeSpacing: 60,
        sorting: go.TreeLayout.SortingAscending,
        comparer: (a: go.TreeVertex, b: go.TreeVertex) =>
          a.node!.data.key < b.node!.data.key ? -1 : 1,
      });
    /*case "interactive":
        default:
            return $(ContinuousForceDirectedLayout, {
                defaultSpringLength: 200, defaultElectricalCharge: 10, maxIterations: 10000
            });*/
  }
};
