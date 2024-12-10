import { HorizontalDirection, VerticalDirection } from '../constants/direction';
import type { NamedBean } from '../context/bean';
import { BeanStub } from '../context/beanStub';
import type { BeanCollection } from '../context/context';
import type { IAggFunc } from '../entities/colDef';
import type { RowDropZoneParams } from '../gridBodyComp/rowDragFeature';
import type { Column } from '../interfaces/iColumn';
import type { AgGridCommon } from '../interfaces/iCommon';
import type { IRowNode } from '../interfaces/iRowNode';
import type { DragAndDropImageComponent } from './dragAndDropImageComponent';
export interface DragItem<TValue = any> {
    /**
     * When dragging a row, this contains the row node being dragged
     * When dragging multiple rows, this contains the row that started the drag.
     */
    rowNode?: IRowNode;
    /** When dragging multiple rows, this contains all rows being dragged */
    rowNodes?: IRowNode[];
    /** When dragging columns, this contains the columns being dragged */
    columns?: Column[];
    /** When dragging column groups, this contains the columns in the current group split. */
    columnsInSplit?: Column[];
    /** When dragging columns, this contains the visible state of the columns */
    visibleState?: {
        [key: string]: boolean;
    };
    /** When dragging columns, this contains the pivot state of the columns. This is only populated/used in column tool panel */
    pivotState?: {
        [key: string]: {
            pivot?: boolean;
            rowGroup?: boolean;
            aggFunc?: string | IAggFunc | null;
        };
    };
    /** Additional state */
    value?: TValue;
}
export declare enum DragSourceType {
    ToolPanel = 0,
    HeaderCell = 1,
    RowDrag = 2,
    ChartPanel = 3,
    AdvancedFilterBuilder = 4
}
export interface DragSource {
    /**
     * The type of the drag source, used by the drop target to know where the
     * drag originated from.
     */
    type: DragSourceType;
    /** Can be used to identify a specific component as the source */
    sourceId?: string;
    /**
     * Element which, when dragged, will kick off the DnD process
     */
    eElement: Element;
    /**
     * If eElement is dragged, then the dragItem is the object that gets passed around.
     */
    getDragItem: () => DragItem;
    /**
     * This name appears in the drag and drop image component when dragging.
     */
    dragItemName: string | (() => string) | null;
    /**
     * Icon to show when not over a drop zone
     */
    getDefaultIconName?: () => DragAndDropIcon;
    /**
     * The drag source DOM Data Key, this is useful to detect if the origin grid is the same
     * as the target grid.
     */
    dragSourceDomDataKey?: string;
    /**
     * After how many pixels of dragging should the drag operation start. Default is 4.
     */
    dragStartPixels?: number;
    /**
     * Callback for drag started
     */
    onDragStarted?: () => void;
    /**
     * Callback for drag stopped
     */
    onDragStopped?: () => void;
    /**
     * Callback for drag cancelled
     */
    onDragCancelled?: () => void;
    /**
     * Callback for entering the grid
     */
    onGridEnter?: (dragItem: DragItem | null) => void;
    /**
     * Callback for exiting the grid
     */
    onGridExit?: (dragItem: DragItem | null) => void;
}
export interface DropTarget {
    /** The main container that will get the drop. */
    getContainer(): HTMLElement;
    /** If any secondary containers. For example when moving columns in AG Grid, we listen for drops
     * in the header as well as the body (main rows and pinned rows) of the grid. */
    getSecondaryContainers?(): HTMLElement[][];
    /** Icon to show when drag is over */
    getIconName?(): DragAndDropIcon | null;
    isInterestedIn(type: DragSourceType, el: Element): boolean;
    /**
     * If `true`, the DragSources will only be allowed to be dragged within the DragTarget that contains them.
     * This is useful for changing order of items within a container, and not moving items across containers.
     * @default false
     */
    targetContainsSource?: boolean;
    /** Callback for when drag enters */
    onDragEnter?(params: DraggingEvent): void;
    /** Callback for when drag leaves */
    onDragLeave?(params: DraggingEvent): void;
    /** Callback for when dragging */
    onDragging?(params: DraggingEvent): void;
    /** Callback for when drag stops */
    onDragStop?(params: DraggingEvent): void;
    /** Callback for when the drag is cancelled */
    onDragCancel?(params: DraggingEvent): void;
    external?: boolean;
}
export interface DraggingEvent<TData = any, TContext = any> extends AgGridCommon<TData, TContext> {
    event: MouseEvent;
    x: number;
    y: number;
    vDirection: VerticalDirection | null;
    hDirection: HorizontalDirection | null;
    dragSource: DragSource;
    dragItem: DragItem;
    fromNudge: boolean;
    dropZoneTarget: HTMLElement;
}
export type DragAndDropIcon = 'pinned' | 'move' | 'left' | 'right' | 'group' | 'aggregate' | 'pivot' | 'notAllowed' | 'hide';
export declare class DragAndDropService extends BeanStub implements NamedBean {
    beanName: "dragAndDropService";
    private ctrlsService;
    private dragService;
    private mouseEventService;
    private environment;
    private userComponentFactory;
    wireBeans(beans: BeanCollection): void;
    private dragSourceAndParamsList;
    private dragItem;
    private eventLastTime;
    private dragSource;
    private dragging;
    private dragAndDropImageComp;
    private dragAndDropImageParent;
    private dropTargets;
    private lastDropTarget;
    addDragSource(dragSource: DragSource, allowTouch?: boolean): void;
    getDragAndDropImageComponent(): DragAndDropImageComponent | null;
    removeDragSource(dragSource: DragSource): void;
    destroy(): void;
    nudge(): void;
    private onDragStart;
    private onDragStop;
    private onDragCancel;
    private clearDragAndDropProperties;
    private onDragging;
    private getAllContainersFromDropTarget;
    private allContainersIntersect;
    private isMouseOnDropTarget;
    private findCurrentDropTarget;
    private enterDragTargetIfExists;
    private leaveLastTargetIfExists;
    addDropTarget(dropTarget: DropTarget): void;
    removeDropTarget(dropTarget: DropTarget): void;
    hasExternalDropZones(): boolean;
    findExternalZone(params: RowDropZoneParams): DropTarget | null;
    isDropZoneWithinThisGrid(draggingEvent: DraggingEvent): boolean;
    getHorizontalDirection(event: MouseEvent): HorizontalDirection | null;
    getVerticalDirection(event: MouseEvent): VerticalDirection | null;
    createDropTargetEvent(dropTarget: DropTarget, event: MouseEvent, hDirection: HorizontalDirection | null, vDirection: VerticalDirection | null, fromNudge: boolean): DraggingEvent;
    private positionDragAndDropImageComp;
    private removeDragAndDropImageComponent;
    private createDragAndDropImageComponent;
    private processDragAndDropImageComponent;
}
