import constant from './const.js';
import Viewer from './Viewer';

export default class Minimap {
  private mainElem: ShadowRoot;
  private viewer: any;
  private minimap: Element;
  private viewpoint: Element;
  private btnZoomIn: Element;
  private btnZoomOut: Element;
  private svgElem: SVGGraphicsElement;
  private tableMinimap: Map<any, any>;
  private viewBoxVals: any;

  onContainerMouseLeave: () => void;
  onContainerMouseUp: any;

  constructor(mainElem: ShadowRoot, viewer: Viewer, svgElem: SVGGraphicsElement) {
    this.mainElem = mainElem;
    this.viewer = viewer;
    this.minimap = this.mainElem.getElementById('minimap');
    this.viewpoint = this.mainElem.getElementById('viewpoint');
    this.btnZoomIn = this.mainElem.getElementById('btn-zoom-in');
    this.btnZoomOut = this.mainElem.getElementById('btn-zoom-out');
    this.svgElem = svgElem;
    this._setUpEvents();
    this.reset();
  }

  _setUpEvents() {
    this.btnZoomIn.addEventListener('click', this.viewer.zoomIn.bind(this.viewer));
    this.btnZoomOut.addEventListener('click', this.viewer.zoomOut.bind(this.viewer));

    const minimapMouseMove = this.minimapPositionFromMouse.bind(this);

    this.minimap.addEventListener('mousedown', (event: MouseEvent) => {
      if (event.button === 0) {
        minimapMouseMove(event);
        this.minimap.addEventListener('mousemove', minimapMouseMove);
      }
    });

    this.onContainerMouseLeave = () => {
      this.minimap.removeEventListener('mousemove', minimapMouseMove);
    };

    this.onContainerMouseUp = this.onContainerMouseLeave;
  }

  minimapPositionFromMouse(event: MouseEvent) {
    event.stopPropagation();
    const minimapBoundingClientRect = this.minimap.getBoundingClientRect();
    const x = event.clientX - minimapBoundingClientRect.left;
    const y = event.clientY - minimapBoundingClientRect.top;
    const svgElemBoundingClientRect = this.svgElem.getBoundingClientRect();
    const ratioX = svgElemBoundingClientRect.width / minimapBoundingClientRect.width;
    const ratioY = svgElemBoundingClientRect.height / minimapBoundingClientRect.height;
    const viewpointBoundingClientRect = this.viewpoint.getBoundingClientRect();
    const xCord = (x - viewpointBoundingClientRect.width / 2) * ratioX;
    const yCord = (y - viewpointBoundingClientRect.height / 2) * ratioY;

    this.viewer.setPanX(xCord);
    this.viewer.setPanY(yCord);
  }

  removeTables() {
    this.tableMinimap = new Map();
    this.minimap.querySelectorAll('.mini_table').forEach((miniTable) => miniTable.remove());
  }

  reset() {
    this.removeTables();
    this.minimap.setAttribute('viewBox', `0 0 ${constant.VIEWER_PAN_WIDTH} ${constant.VIEWER_PAN_HEIGHT}`);
  }

  setMinimapViewPoint(viewBoxVals) {
    this.viewBoxVals = viewBoxVals;
    this.viewpoint.setAttributeNS(null, 'x', viewBoxVals.x);
    this.viewpoint.setAttributeNS(null, 'y', viewBoxVals.y);
    this.viewpoint.setAttributeNS(null, 'width', viewBoxVals.width);
    this.viewpoint.setAttributeNS(null, 'height', viewBoxVals.height);
  }

  createTable(table) {
    const tableMini = document.createElementNS(constant.nsSvg, 'rect');
    tableMini.setAttributeNS(null, 'class', 'mini_table');
    this.tableMinimap.set(table, tableMini);
    this.minimap.appendChild(tableMini);
  }

  setTableDim(table, x, y) {
    const miniTable = this.tableMinimap.get(table);
    miniTable.setAttributeNS(null, 'width', x);
    miniTable.setAttributeNS(null, 'height', y);
  }

  onTableMove(table, deltaX, deltaY) {
    const minimapTableElem = this.tableMinimap.get(table);

    minimapTableElem.setAttributeNS(null, 'x', deltaX);
    minimapTableElem.setAttributeNS(null, 'y', deltaY);
  }
}
