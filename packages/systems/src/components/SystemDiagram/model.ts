import { ObjectData } from 'gojs';

export interface DiagramModel {
  nodes: Array<ObjectData>;
  links: Array<ObjectData>;
}

export interface SystemsModel {
  id: number | string;
  name: string;
  responsibility: string;
  status: string;
  date_created: string;
  last_updated: string;
}

export type PartialNavigateAction = 'down' | 'up';

export interface SystemFilterOption {
  label: string;
  value: string;
}

export interface CompositionFilterOption {
  show_temporary_systems: boolean;
  show_platforms: boolean;
  show_incoming_relationships: boolean;
  show_outgoing_relationships: boolean;
  show_microservices?: boolean;
}

export interface FilterOption {
  systems: SystemFilterOption[];
  excludeSystems: SystemFilterOption[];
  composition: CompositionFilterOption;
}

export interface EnvironmentFilterOption {
  primary: string;
  value: number;
}

export interface SystemCompositionOption {
  label: string;
  name: string;
  key: string;
  checked: boolean;
}

export interface FilterParamsRequest {
  environment_id: number;
  systems: string;
  exclude_systems: string;
  show_temporary_systems: boolean;
  show_platforms: boolean;
  show_incoming_relationships: boolean;
  show_outgoing_relationships: boolean;
  show_microservices?: boolean;
  show_subsystems?: boolean;
}

export interface FilterParamsToExport {
  systems?: [];
  exclude_systems?: [];
  environment_id: number;
  show_microservices?: boolean;
  show_subsystems?: boolean;
  show_platforms?: boolean;
  show_temporary_systems?: boolean;
  show_outgoing_relationships?: boolean;
  show_incoming_relationships?: boolean;
}
