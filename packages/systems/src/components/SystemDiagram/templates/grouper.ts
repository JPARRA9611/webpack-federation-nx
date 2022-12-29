import * as go from 'gojs';
import { $ } from '../object';
import { makeLayout } from './layouts';

export const grouperTemplate = $(
  go.Group,
  'Auto',
  {
    background: 'transparent',
    selectable: false,
  },
  new go.Binding('layout', 'hasNodes', () => makeLayout('tree')),
  $(
    go.Panel,
    'Vertical',
    $(go.Panel, 'Horizontal', { stretch: go.GraphObject.Horizontal, background: 'transparent' }),
    $(
      go.Panel,
      'Horizontal',
      { stretch: go.GraphObject.Horizontal, background: 'transparent' },
      new go.Binding('background', 'color')
    ),
    $(
      go.Panel,
      'Auto',
      { stretch: go.GraphObject.Horizontal, background: 'transparent' },
      new go.Binding('background', 'color')
    ),
    $(go.Placeholder, { padding: 20, alignment: go.Spot.TopLeft })
  )
);
