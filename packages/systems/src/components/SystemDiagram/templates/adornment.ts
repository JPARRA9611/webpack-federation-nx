import * as go from 'gojs';
import { SYSTEM_TEMPLATES_COLOR } from '../constants';
import { $ } from '../object';

export const adornmentTemplate = (type: string): go.Adornment => {

  return $(
    go.Adornment,
    'Spot',
    $(
      go.Panel,
      'Auto',
      $(go.Shape, {
        stroke: SYSTEM_TEMPLATES_COLOR.ADORNMENT_TEMPLATE.STROKE,
        strokeWidth: 2,
        fill: null,
      }),
      $(go.Placeholder)
    ),
    $(
      go.Panel,
      'Horizontal',
      { alignment: go.Spot.Top, alignmentFocus: go.Spot.Bottom },
    )
  );
};
