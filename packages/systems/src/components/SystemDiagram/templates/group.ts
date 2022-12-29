import * as go from 'gojs';
import { $ } from '../object';
import { SYSTEM_TEMPLATES_COLOR } from '../constants';
import { STYLE_TEMPLATE } from '../constants';

export const groupTemplate = $(
  go.Group,
  'Auto',
  {
    background: 'transparent',
  },
  $(
    go.Shape,
    'Rectangle',
    { fill: null, stroke: SYSTEM_TEMPLATES_COLOR.GROUP_TEMPLATE.FILL, strokeWidth: 2 },
    new go.Binding('stroke', 'color')
  ),
  $(
    go.Panel,
    'Vertical',
    $(
      go.Panel,
      'Horizontal',
      {
        stretch: go.GraphObject.Horizontal,
        background: SYSTEM_TEMPLATES_COLOR.GROUP_TEMPLATE.FILL,
      },
      new go.Binding('background', 'color'),
      $('SubGraphExpanderButton', { alignment: go.Spot.Right, margin: 5 }),

      $(
        go.TextBlock,
        {
          textAlign: 'left',
          alignment: go.Spot.Center,
          editable: false,
          margin: 5,
          font: SYSTEM_TEMPLATES_COLOR.GROUP_TEMPLATE.FONT,
          opacity: 0.75,
          stroke: '#404040',
        },
        new go.Binding('text', 'text').makeTwoWay(),
        new go.Binding('name', 'text').makeTwoWay()
      )
    ),

    $(
      go.Panel,
      'Horizontal',
      {
        stretch: go.GraphObject.Horizontal,
        background: SYSTEM_TEMPLATES_COLOR.GROUP_TEMPLATE.FILL,
      },
      new go.Binding('background', 'color'),
      $(go.TextBlock, {
        text: 'System',
        font: STYLE_TEMPLATE.FONT.BOLD_10,
        opacity: 0.55,
        margin: 5,
        verticalAlignment: go.Spot.Center,
      })
    ),
    $(
      go.Panel,
      'Auto',
      {
        stretch: go.GraphObject.Horizontal,
        background: SYSTEM_TEMPLATES_COLOR.GROUP_TEMPLATE.FILL,
      },
      new go.Binding('background', 'color'),
      $(
        go.TextBlock,
        {
          editable: false,
          margin: 5,
          font: STYLE_TEMPLATE.FONT.NORMAL_10,
          opacity: 0.75,
          stroke: '#404040',
          width: 500,
          wrap: go.TextBlock.WrapDesiredSize,
        },
        new go.Binding('text', 'description').makeTwoWay()
      )
    ),
    $(go.Placeholder, { padding: 20, alignment: go.Spot.TopLeft })
  )
);
