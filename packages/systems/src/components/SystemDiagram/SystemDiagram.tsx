import { Diagram, DiagramEvent, Group, Overview, Point, Spot } from 'gojs';
import React, { FC, Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { ReactDiagram, ReactOverview } from 'gojs-react';
import { $ } from './object';
import { DiagramModel, SystemFilterOption } from './model';
import { ZoomSlider } from './zoom-slider';
import './styles.css';
import { startDiagram } from './canvasSetup';

interface DiagramProps {
  model: DiagramModel;
}

export const SystemsDiagram: FC<DiagramProps> = ({
  model
}) => {
  const ref = useRef<ReactDiagram>(null);

  const [diagram, setDiagram] = useState<Diagram>();

  useEffect(() => {
    let diag: go.Diagram;
    if (ref) {
      diag = (ref as React.MutableRefObject<ReactDiagram>).current.getDiagram() as Diagram;
      setDiagram(diag);
      (window as any).zoomSlider = new ZoomSlider(diag, {
        alignment: new Point(100, 10),
        alignmentFocus: Spot.BottomLeft,
        size: 200,
        buttonSize: 30,
        orientation: 'horizontal',
      });
    }
    return () => {
      if (!(window as any).zoomSlider) return;
      (window as any).zoomSlider.remove();
      (window as any).zoomSlider = null;
    };
  }, [ref]);

  const onLayoutComplete = useCallback(
    (e: DiagramEvent) => {
      const expandGroupContainers = (group: Group): void => {
        group.isSubGraphExpanded = true;
        group.wasSubGraphExpanded = true;
        const parent = group.containingGroup;
        if (parent) {
          expandGroupContainers(parent);
        }
      };
    },
    []
  );

  useEffect(() => {
    if (diagram) {
      diagram.addDiagramListener('InitialLayoutCompleted', onLayoutComplete);
    }
    return () => diagram?.removeDiagramListener('InitialLayoutCompleted', onLayoutComplete);
  }, [model, diagram, onLayoutComplete]);

  const initDiagram: () => Diagram = startDiagram;
  const initOverview = (): Overview => $(Overview, { contentAlignment: Spot.Center });

  return (
    <Fragment>
      <ReactDiagram
        nodeDataArray={model.nodes}
        linkDataArray={model.links}
        ref={ref}
        divClassName={'diagramComponent'}
        initDiagram={initDiagram}
      />

      <ReactOverview
        initOverview={initOverview}
        divClassName={'overviewComponent'}
        observedDiagram={diagram || null}
      />
    </Fragment>
  );
};
