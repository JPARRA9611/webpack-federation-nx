import * as go from 'gojs';
import { $ } from '../object';
import { SYSTEM_TEMPLATES_COLOR } from '../constants';
import { STYLE_TEMPLATE } from '../constants';
import { makeLayout } from './layouts';


export const systemTemplate = $(
  go.Group,
  'Auto',
  {
    background: 'transparent',
    isSubGraphExpanded: false,
  },
  new go.Binding('layout', 'hasNodes', function (_v) {
    return makeLayout('grid');
  }),
  new go.Binding('isSubGraphExpanded', 'expanded'),
  $(
    go.Shape,
    SYSTEM_TEMPLATES_COLOR.SYSTEM_TEMPLATE.FIGURE,
    {
      fill: SYSTEM_TEMPLATES_COLOR.SYSTEM_TEMPLATE.PLACEHOLDER_FILL,
      stroke: SYSTEM_TEMPLATES_COLOR.SYSTEM_TEMPLATE.STROKE,
      strokeWidth: 2,
    },
    new go.Binding('stroke', 'state', (state) => {
      return state === 'hover'
        ? SYSTEM_TEMPLATES_COLOR.SYSTEM_TEMPLATE.HOVER_STROKE
        : SYSTEM_TEMPLATES_COLOR.SYSTEM_TEMPLATE.STROKE;
    })
  ),
  $(
    go.Panel,
    'Vertical',
    $(
      go.Panel,
      'Horizontal',
      {
        stretch: go.GraphObject.Horizontal,
        background: SYSTEM_TEMPLATES_COLOR.SYSTEM_TEMPLATE.FILL,
        name: 'system-name',
      },
      new go.Binding('background', 'state', () => SYSTEM_TEMPLATES_COLOR.SYSTEM_TEMPLATE.FILL),
      $(
        'SubGraphExpanderButton',
        { alignment: go.Spot.Right, margin: 5 },
        new go.Binding('isEnabled', 'isUpdatePartialNavigation', (v) => !v).ofModel()
      ),
      $(
        go.TextBlock,
        {
          textAlign: 'left',
          alignment: go.Spot.Center,
          editable: false,
          margin: 5,
          font: SYSTEM_TEMPLATES_COLOR.SYSTEM_TEMPLATE.FONT,
          opacity: 0.75,
          width: 500,
          stroke: '#404040',
          wrap: go.TextBlock.WrapDesiredSize,
          isUnderline: false,
        },
        new go.Binding('text', 'text').makeTwoWay(),
        new go.Binding('name', 'text').makeTwoWay(),
        new go.Binding('isUnderline', 'state', (state) => state !== 'none')
      )
    ),
    $(
      go.Panel,
      'Horizontal',
      {
        stretch: go.GraphObject.Horizontal,
        background: SYSTEM_TEMPLATES_COLOR.SYSTEM_TEMPLATE.FILL,
        name: 'system-type',
      },
      new go.Binding('background', 'state', () => SYSTEM_TEMPLATES_COLOR.SYSTEM_TEMPLATE.FILL),
      $(go.TextBlock, {
        text: 'System',
        font: STYLE_TEMPLATE.FONT.BOLD_10,
        opacity: 0.55,
        margin: 5,
        width: 500,
        verticalAlignment: go.Spot.Center,
        wrap: go.TextBlock.WrapDesiredSize,
      })
    ),
    $(
      go.Panel,
      'Auto',
      {
        stretch: go.GraphObject.Horizontal,
        background: SYSTEM_TEMPLATES_COLOR.SYSTEM_TEMPLATE.FILL,
        name: 'system-description',
      },
      new go.Binding('background', 'state', () => SYSTEM_TEMPLATES_COLOR.SYSTEM_TEMPLATE.FILL),
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
    $(go.Placeholder, { padding: 5, alignment: go.Spot.TopLeft })
  )
);
