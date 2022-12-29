import * as go from 'gojs';
import { STYLE_TEMPLATE, SYSTEM_TEMPLATES_COLOR } from '../constants';
import { $ } from '../object';
require('gojs/extensions/Figures');

interface PlatformTypeOptions {
  FILL: string;
  HOVER_FILL: string;
  STROKE: string;
  HOVER_STROKE: string;
  FIGURE: string;
}

export const platformTemplate = (
  platformType: PlatformTypeOptions = SYSTEM_TEMPLATES_COLOR.PLATFORM_TEMPLATE
) =>
  $(
    go.Node,
    'Auto',
    $(
      go.Shape,
      platformType.FIGURE,
      {
        fill: platformType.FILL,
        strokeWidth: 1,
        name: 'SHAPE',
        stroke: platformType.STROKE,
        width: SYSTEM_TEMPLATES_COLOR.PLATFORM_TEMPLATE.WIDTH,
        height: SYSTEM_TEMPLATES_COLOR.PLATFORM_TEMPLATE.HEIGHT,
      },
      new go.Binding('stroke', 'state', (state) => {
        return state === 'hover' ? platformType.HOVER_STROKE : platformType.STROKE;
      }),
      new go.Binding('fill', 'state', (state) => {
        return platformType.FILL;
      })
    ),
    $(
      go.Panel,
      'Vertical',
      $(
        go.Panel,
        'Horizontal',
        $(
          go.TextBlock,
          {
            margin: 20,
            height: 20,
            editable: false,
            font: STYLE_TEMPLATE.FONT.BOLD_13,
            opacity: 0.9,
            stroke: SYSTEM_TEMPLATES_COLOR.PLATFORM_TEMPLATE.COLOR,
            textAlign: 'center',
            isUnderline: false,
          },
          new go.Binding('text', 'text').makeTwoWay(),
          new go.Binding('isUnderline', 'state', (state) => state !== 'none')
        )
      )
    )
  );
