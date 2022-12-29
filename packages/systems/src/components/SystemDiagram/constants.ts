import * as go from 'gojs';


export const EXPORT_PUML_FILE = {
  DOWNLOADING_FILE: 'Downloading PlantUML file',
  DOWNLOAD_SUCCESS: 'PlantUML file has been downloaded',
  DOWNLOAD_ERROR: 'Error downloading PlantUML file',
  FILE_TYPE: 'puml',
};


export const SYSTEM_DIAGRAM = {
  PADDING: new go.Margin(280, 130, 280, 130),
};

const DEFAULT_FONT = 'sans-serif';

export const STYLE_TEMPLATE = {
  FONT:{
    BOLD_10: `bold 10px ${DEFAULT_FONT}`,
    BOLD_13: `bold 13px ${DEFAULT_FONT}`,
    BOLD_18: `bold 18px ${DEFAULT_FONT}`,
    NORMAL_10: `10px ${DEFAULT_FONT}`,
    NORMAL_13: `13px ${DEFAULT_FONT}`,
    COLOR: 'black',
  },
  LINKS: {
    COLOR: 'black',
    INBOUND: 'green',
    OUTBOUND: 'red',
  },
  SHAPES_STYLE:{
    MICROSERVICE:{
      FILL: 'white',
      HOVER_FILL: 'orange',
      STROKE: 'gray',
      HOVER_STROKE: 'orange',
      FIGURE: 'RoundedRectangle',
      PLACEHOLDER_FILL: 'transparent',
    },
    SYSTEM: {
      FILL: '#b2defc',
      HOVER_FILL: '#b2defc',
      STROKE: '#b2defc',
      HOVER_STROKE: '#b2defc',
      FIGURE: 'RoundedRectangle',
      PLACEHOLDER_FILL: 'transparent',
    },
    TEMPORARY_SYSTEM: {
      FILL: '#f9abda',
      HOVER_FILL: '#f9abda',
      STROKE: '#f9abda',
      HOVER_STROKE: '#f9abda',
      FIGURE: 'RoundedRectangle',
      PLACEHOLDER_FILL: 'transparent',
    },
    MYSQL: {
      FILL: '#feebb9',
      HOVER_FILL: '#feebb9',
      STROKE: '#e1ab3b',
      HOVER_STROKE: '#feebb9',
      FIGURE: 'Cylinder1',
    },
    KVS: {
      FILL: '#fcc7e6',
      HOVER_FILL: '#fcc7e6',
      STROKE: '#e06cad',
      HOVER_STROKE: '#fcc7e6',
      FIGURE: 'Cylinder1',
    },
    DS: {
      FILL: '#d1cdfc',
      HOVER_FILL: '#d1cdfc',
      STROKE: '#4742d6',
      HOVER_STROKE: '#d1cdfc',
      FIGURE: 'Cylinder1',
    },
    ORACLE: {
      FILL: '#feebb9',
      HOVER_FILL: '#feebb9',
      STROKE: '#e3af43',
      HOVER_STROKE: '#feebb9',
      FIGURE: 'Cylinder1',
    },
    BQ: {
      FILL: '#ffe1ba',
      HOVER_FILL: '#ffe1ba',
      STROKE: '#c27a35',
      HOVER_STROKE: '#ffe1ba',
      FIGURE: 'Cylinder3',
    },
    OBJECT_STORAGE: {
      FILL: '#c6e7fd',
      HOVER_FILL: '#c6e7fd',
      STROKE: '#2973bb',
      HOVER_STROKE: '#c6e7fd',
      FIGURE: 'ManualOperation',
    },
    STORAGE: {
      FILL: '#d1cdfc',
      HOVER_FILL: '#d1cdfc',
      STROKE: 'black',
      HOVER_STROKE: '#d1cdfc',
      FIGURE: 'ManualOperation',
    },
    CACHE: {
      FILL: '#c1f6f1',
      HOVER_FILL: '#c1f6f1',
      STROKE: '#20a297',
      HOVER_STROKE: '#c1f6f1',
      FIGURE: 'Cylinder1',
    },
  }
}

export const SYSTEM_TEMPLATES_COLOR = {
  GROUP_TEMPLATE: {
    FILL: '#FFDD33',
    BG_PLACEHOLDER: '#fff',
    FONT:'18px sans-serif'
  },
  SYSTEM_TEMPLATE: {
    ...STYLE_TEMPLATE.SHAPES_STYLE.SYSTEM,
    KEY: 'system',
    ADORNMENT_TEXT: 'Download YML',
    FONT: STYLE_TEMPLATE.FONT.BOLD_18,
  },
  TEMPORARY_SYSTEM_TEMPLATE: {
    ...STYLE_TEMPLATE.SHAPES_STYLE.TEMPORARY_SYSTEM,
    KEY: 'temporary-system',
    ADORNMENT_TEXT: 'Download YML',
    FONT: STYLE_TEMPLATE.FONT.BOLD_18,
  },
  PLATFORM_TEMPLATE: {
    ...STYLE_TEMPLATE.SHAPES_STYLE.MYSQL,
    COLOR: 'black',
    WIDTH: 116,
    HEIGHT: 60,
  },
  MICROSERVICES_TEMPLATE: {
    ...STYLE_TEMPLATE.SHAPES_STYLE.MICROSERVICE,
    KEY: 'microservice',
    FONT: STYLE_TEMPLATE.FONT.BOLD_18,
    ADORNMENT_TEXT: 'Promoted OAS',
    ADORNMENT_OPTIONS: {
      desiredSize: new go.Size(110, 15),
      textAlign: 'center',
    },
  },
  SCOPE_TEMPLATE: {
    KEY: 'scope',
    ADORNMENT_TEXT: 'OAS',
    ADORNMENT_OPTIONS: {
      width: 90,
      textAlign: 'center',
      overflow: go.TextBlock.OverflowClip,
      margin: 2,
    },
  },
  ADORNMENT_TEMPLATE: {
    STROKE: '#3483fa',
  },
  NODE_TEMPLATE: {
    ...STYLE_TEMPLATE.SHAPES_STYLE.MICROSERVICE,
    COLOR: STYLE_TEMPLATE.FONT.COLOR,
  },
  LINK_TEMPLATE: STYLE_TEMPLATE.LINKS,
};

export const PLANT_UML_BUTTON_TEMPLATE = {
  KEY: 'plant-uml',
  ADORNMENT_TEXT: 'Export to PlantUML',
  ADORNMENT_OPTIONS: {
    desiredSize: new go.Size(110, 15),
    textAlign: 'center',
  },
};

export const EXPORT_DESIGNER_BUTTON_TEMPLATE = {
  KEY: 'export-designer',
  ADORNMENT_TEXT: 'Export to Designer',
  ADORNMENT_OPTIONS: {
    desiredSize: new go.Size(110, 15),
    textAlign: 'center',
  },
};

export const DOWNLOAD_YAML_BUTTON_TEMPLATE = {
  KEY: 'download-yaml',
  ADORNMENT_TEXT: 'System association YML file',
};

export const PLATFORM_SERVICE_TYPES = {
  MYSQL: 'MySQL',
  KVS: 'KVS',
  DS: 'DS',
  ORACLE: 'Oracle',
  BQ: 'BQ',
  OBJECT_STORAGE: 'Object Storage',
  CACHE: 'Cache',
  STORAGE: 'storage',
};

export const REFERENCES_DIAGRAM_BUTTON = {
  SHOW_TEXT: 'Show References',
  HIDE_TEXT: 'Hide References',
};

export const MS_DOC_LINK = 'https://furydocs.io/meli-systems/guide/';

export const C4_DOC_LINK = 'https://c4model.com/';
