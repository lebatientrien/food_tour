import type { BeanCollection } from 'ag-grid-community';
import { BeanStub } from 'ag-grid-community';
import type { VirtualList } from 'ag-grid-enterprise';
import type { AgPrimaryColsList } from './agPrimaryColsList';
export declare class PrimaryColsListPanelItemDragFeature extends BeanStub {
    private readonly comp;
    private readonly virtualList;
    private columnMoveService;
    private columnModel;
    wireBeans(beans: BeanCollection): void;
    constructor(comp: AgPrimaryColsList, virtualList: VirtualList);
    postConstruct(): void;
    private getCurrentDragValue;
    private getCurrentColumnsBeingMoved;
    private isMoveBlocked;
    private moveItem;
    private getMoveTargetIndex;
    private getMoveDiff;
}