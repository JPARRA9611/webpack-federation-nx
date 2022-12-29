import * as go from 'gojs';
import { STYLE_TEMPLATE } from '../constants';
import { SYSTEM_TEMPLATES_COLOR } from '../constants';
import { $ } from '../object';
import { makeLayout } from './layouts';


export const microservicesTemplate = $(
  go.Group,
  'Auto',
  {
    isSubGraphExpanded: false,
    background: 'transparent',
  },
  new go.Binding('layout', 'hasNodes', () => makeLayout('grid')),
  new go.Binding('background', 'isHighlighted', () => 'transparent').ofObject(),
  new go.Binding('isSubGraphExpanded', 'expanded'),

  $(
    go.Shape,
    SYSTEM_TEMPLATES_COLOR.MICROSERVICES_TEMPLATE.FIGURE,
    {
      fill: SYSTEM_TEMPLATES_COLOR.MICROSERVICES_TEMPLATE.PLACEHOLDER_FILL,
      stroke: SYSTEM_TEMPLATES_COLOR.MICROSERVICES_TEMPLATE.STROKE,
      strokeWidth: 2,
    },
    new go.Binding('stroke', 'state', (state) => {
      return state === 'hover'
        ? SYSTEM_TEMPLATES_COLOR.MICROSERVICES_TEMPLATE.HOVER_STROKE
        : SYSTEM_TEMPLATES_COLOR.MICROSERVICES_TEMPLATE.STROKE;
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
        background: SYSTEM_TEMPLATES_COLOR.MICROSERVICES_TEMPLATE.FILL,
        name: 'microservice-name',
      },
      new go.Binding('background', 'state', (state) => SYSTEM_TEMPLATES_COLOR.MICROSERVICES_TEMPLATE.FILL),
      $('SubGraphExpanderButton', { alignment: go.Spot.Right, margin: 5 }),
      $(
        go.TextBlock,
        {
          editable: false,
          margin: 5,
          font: SYSTEM_TEMPLATES_COLOR.MICROSERVICES_TEMPLATE.FONT,
          opacity: 1,
          stroke: '#404040',
          textAlign: 'center',
          isUnderline: false,
        },
        new go.Binding('text', 'text').makeTwoWay(),
        new go.Binding('name', 'text').makeTwoWay(),
        new go.Binding('isUnderline', 'state', (state) => state !== 'none')
      )
    ),
    $(
      go.Panel,
      'Auto',
      {
        stretch: go.GraphObject.Horizontal,
        background: SYSTEM_TEMPLATES_COLOR.MICROSERVICES_TEMPLATE.FILL,
        name: 'microservice-technology',
      },
      new go.Binding('background', 'state', (state) => SYSTEM_TEMPLATES_COLOR.MICROSERVICES_TEMPLATE.FILL),
      $(
        go.TextBlock,
        {
          editable: false,
          margin: 5,
          font: STYLE_TEMPLATE.FONT.NORMAL_10,
          opacity: 1,
          stroke: '#404040',
          textAlign: 'center',
          wrap: go.TextBlock.WrapDesiredSize,
        },
        new go.Binding('text', 'technology').makeTwoWay()
      )
    ),
    $(
      go.Panel,
      'Auto',
      {
        stretch: go.GraphObject.Horizontal,
        background: SYSTEM_TEMPLATES_COLOR.MICROSERVICES_TEMPLATE.FILL,
        name: 'microservice-description',
      },
      new go.Binding('background', 'state', (state) => SYSTEM_TEMPLATES_COLOR.MICROSERVICES_TEMPLATE.FILL),
      $(
        go.TextBlock,
        {
          editable: false,
          margin: 5,
          font: STYLE_TEMPLATE.FONT.NORMAL_10,
          opacity: 1,
          stroke: '#404040',
          textAlign: 'center',
          wrap: go.TextBlock.WrapDesiredSize,
          width: 200,
        },
        new go.Binding('text', 'description').makeTwoWay()
      )
    ),
    $(go.Placeholder, { padding: 20, alignment: go.Spot.Center })
  )
);
