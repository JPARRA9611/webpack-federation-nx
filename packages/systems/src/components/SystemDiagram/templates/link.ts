import * as go from 'gojs';
import { $ } from '../object';
import { SYSTEM_TEMPLATES_COLOR } from '../constants';

export const linkTemplate = $(
  go.Link,
  {
    corner: 10,
    layerName: 'Background',
    curve: go.Link.Bezier,
  },
  $(
    go.Shape,
    {
      name: 'LinkBody',
      strokeWidth: 1,
      isPanelMain: true,
      fill: SYSTEM_TEMPLATES_COLOR.LINK_TEMPLATE.COLOR,
      stroke: SYSTEM_TEMPLATES_COLOR.LINK_TEMPLATE.COLOR,
    },
    new go.Binding('fill', 'state', function (state) {
      return SYSTEM_TEMPLATES_COLOR.LINK_TEMPLATE.COLOR
    }),
    new go.Binding('stroke', 'state', function (state) {
      return SYSTEM_TEMPLATES_COLOR.LINK_TEMPLATE.COLOR
    })
  ),
  $(
    go.Shape,
    {
      name: 'LinkArrow',
      toArrow: 'Standard',
      strokeWidth: 1,
      scale: 1,
      fill: SYSTEM_TEMPLATES_COLOR.LINK_TEMPLATE.COLOR,
      stroke: SYSTEM_TEMPLATES_COLOR.LINK_TEMPLATE.COLOR,
    },
    new go.Binding('fill', 'state', function (state) {
      return SYSTEM_TEMPLATES_COLOR.LINK_TEMPLATE.COLOR
    }),
    new go.Binding('stroke', 'state', function (state) {
      return SYSTEM_TEMPLATES_COLOR.LINK_TEMPLATE.COLOR
    })
  )
);
