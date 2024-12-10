import { BeanStub } from '../context/beanStub';
import type { BeanCollection } from '../context/context';
import type { RowContainerCtrl } from './rowContainer/rowContainerCtrl';
export declare class ViewportSizeFeature extends BeanStub {
    private ctrlsService;
    private pinnedWidthService;
    private columnModel;
    private visibleColsService;
    private columnSizeService;
    private scrollVisibleService;
    private columnViewportService;
    private animationFrameService;
    wireBeans(beans: BeanCollection): void;
    private centerContainerCtrl;
    private gridBodyCtrl;
    private centerWidth;
    private bodyHeight;
    constructor(centerContainerCtrl: RowContainerCtrl);
    postConstruct(): void;
    private listenForResize;
    private onScrollbarWidthChanged;
    private onCenterViewportResized;
    private keepPinnedColumnsNarrowerThanViewport;
    private getPinnedColumnsOverflowingViewport;
    private checkViewportAndScrolls;
    getBodyHeight(): number;
    private checkBodyHeight;
    private updateScrollVisibleService;
    private updateScrollVisibleServiceImpl;
    private isHorizontalScrollShowing;
    private onHorizontalViewportChanged;
}
