import * as go from 'gojs';
import { STYLE_TEMPLATE } from '../constants';
import { SYSTEM_TEMPLATES_COLOR } from '../constants';
import { $ } from '../object';

export const NodeTemplate = $(
  go.Node,
  'Auto',
  {
    fromLinkableDuplicates: true,
    toLinkableDuplicates: true,
  },
  $(
    go.Shape,
    'Rectangle',
    {
      fill: SYSTEM_TEMPLATES_COLOR.NODE_TEMPLATE.FILL,
      strokeWidth: 1,
      name: 'SHAPE',
    },
    new go.Binding('stroke', 'state', (state) => {
      return state === 'hover'
        ? SYSTEM_TEMPLATES_COLOR.NODE_TEMPLATE.HOVER_STROKE
        : SYSTEM_TEMPLATES_COLOR.NODE_TEMPLATE.STROKE;
    }),
    new go.Binding('fill', 'state', (state) => {
      return SYSTEM_TEMPLATES_COLOR.NODE_TEMPLATE.FILL
    })
  ),
  $(
    go.Panel,
    'Vertical', // button next to TextBlock
    $(
      go.Panel,
      'Horizontal', // button next to TextBlock
      $(
        go.TextBlock,
        {
          name: 'NodeName',
          margin: 5,
          editable: false,
          font: STYLE_TEMPLATE.FONT.BOLD_13,
          opacity: 0.9,
          stroke: SYSTEM_TEMPLATES_COLOR.NODE_TEMPLATE.COLOR,
          textAlign: 'center',
          isUnderline: false,
        },
        new go.Binding('text', 'text').makeTwoWay(),
        new go.Binding('isUnderline', 'state', (state) => state !== 'none')
      )
    ), // end Horizontal Panel
    $(
      go.Panel,
      'Horizontal',
      $(go.TextBlock, {
        name: 'NodeType',
        margin: 1,
        editable: false,
        font: STYLE_TEMPLATE.FONT.NORMAL_10,
        opacity: 0.9,
        stroke: SYSTEM_TEMPLATES_COLOR.NODE_TEMPLATE.COLOR,
        textAlign: 'center',
        text: '[Container Instance]',
      })
    ),
    $(
      go.Panel,
      'Horizontal',
      $(
        go.TextBlock,
        {
          name: 'NodeDescription',
          margin: 5,
          editable: false,
          font: STYLE_TEMPLATE.FONT.NORMAL_13,
          opacity: 0.9,
          stroke: SYSTEM_TEMPLATES_COLOR.NODE_TEMPLATE.COLOR,
          overflow: go.TextBlock.OverflowEllipsis,
          width: 150,
          textAlign: 'center',
        },
        new go.Binding('text', 'description', function (v) {
          return 'v.' + v;
        })
      )
    )
  )
);
