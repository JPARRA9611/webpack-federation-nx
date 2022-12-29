import * as go from 'gojs';
import { PLATFORM_SERVICE_TYPES, SYSTEM_DIAGRAM, SYSTEM_TEMPLATES_COLOR, STYLE_TEMPLATE } from './constants';
import { $ } from './object';
import { groupTemplate } from './templates/group';
import { NodeTemplate } from './templates/node';
import { linkTemplate } from './templates/link';
import { grouperTemplate } from './templates/grouper';
import { microservicesTemplate } from './templates/microservices';
import { adornmentTemplate } from './templates/adornment';
import { systemTemplate } from './templates/system';
import { tempSystemTemplate } from './templates/temporary-system';
import { platformTemplate } from './templates/platform';
import { makeLayout } from './templates/layouts';

export const startDiagram = () => {
  const diagram = $(go.Diagram, {
    allowDelete: false,
    allowClipboard: false,
    allowZoom: true,
    padding: SYSTEM_DIAGRAM.PADDING,
    layout: makeLayout('grid'),
    'draggingTool.isEnabled': false,
    model: $(go.GraphLinksModel, {
      linkKeyProperty: 'key',
    }),
  });

  const templateMap = new go.Map<string, go.Node>();
  templateMap.add(SYSTEM_TEMPLATES_COLOR.SCOPE_TEMPLATE.KEY, NodeTemplate);
  for (const [key, value] of Object.entries(PLATFORM_SERVICE_TYPES)) {
    templateMap.add(value, platformTemplate(STYLE_TEMPLATE.SHAPES_STYLE[key]));
  }

  diagram.groupTemplate = groupTemplate;
  diagram.nodeTemplateMap = templateMap;
  diagram.linkTemplate = linkTemplate;
  diagram.groupTemplateMap.add('grouper', grouperTemplate);
  diagram.groupTemplateMap.add('group-services', grouperTemplate);
  diagram.groupTemplateMap.add('root', grouperTemplate);
  diagram.groupTemplateMap.add(
    SYSTEM_TEMPLATES_COLOR.MICROSERVICES_TEMPLATE.KEY,
    microservicesTemplate
  );
  diagram.groupTemplateMap.add(SYSTEM_TEMPLATES_COLOR.SYSTEM_TEMPLATE.KEY, systemTemplate);
  diagram.groupTemplateMap.add(
    SYSTEM_TEMPLATES_COLOR.TEMPORARY_SYSTEM_TEMPLATE.KEY,
    tempSystemTemplate
  );

  const allSystems = diagram.groupTemplateMap.get(
    SYSTEM_TEMPLATES_COLOR.SYSTEM_TEMPLATE.KEY
  ) as go.Group;
  allSystems.selectionAdornmentTemplate = adornmentTemplate(
    SYSTEM_TEMPLATES_COLOR.SYSTEM_TEMPLATE.KEY
  );
  const temporarySystems = diagram.groupTemplateMap.get(
    SYSTEM_TEMPLATES_COLOR.TEMPORARY_SYSTEM_TEMPLATE.KEY
  ) as go.Group;
  temporarySystems.selectionAdornmentTemplate = adornmentTemplate(
    SYSTEM_TEMPLATES_COLOR.TEMPORARY_SYSTEM_TEMPLATE.KEY
  );

  const allMicroservice = diagram.groupTemplateMap.get(
    SYSTEM_TEMPLATES_COLOR.MICROSERVICES_TEMPLATE.KEY
  ) as go.Group;
  allMicroservice.selectionAdornmentTemplate = adornmentTemplate(
    SYSTEM_TEMPLATES_COLOR.MICROSERVICES_TEMPLATE.KEY
  );

  const allScopes = diagram.nodeTemplateMap.get(
    SYSTEM_TEMPLATES_COLOR.SCOPE_TEMPLATE.KEY
  ) as go.Node;
  allScopes.selectionAdornmentTemplate = adornmentTemplate(
    SYSTEM_TEMPLATES_COLOR.SCOPE_TEMPLATE.KEY
  );
  return diagram;
};
