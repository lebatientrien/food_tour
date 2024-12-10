import type { AgColumn, BeanCollection, IAfterGuiAttachedParams, IFilterComp, IFilterParams } from 'ag-grid-community';
import { AgPromise, TabGuardComp } from 'ag-grid-community';
export type GroupFilterEvent = 'columnRowGroupChanged' | 'selectedColumnChanged';
export declare class GroupFilter extends TabGuardComp<GroupFilterEvent> implements IFilterComp {
    private filterManager?;
    private columnNameService;
    private funcColsService;
    wireBeans(beans: BeanCollection): void;
    private readonly eGroupField;
    private readonly eUnderlyingFilter;
    private params;
    private groupColumn;
    private selectedColumn;
    private selectedFilter;
    private filterColumnPairs;
    private eGroupFieldSelect;
    private afterGuiAttachedParams;
    private filterWrapperComp?;
    constructor();
    postConstruct(): void;
    init(params: IFilterParams): AgPromise<void>;
    refresh(params: IFilterParams): boolean;
    private updateParams;
    private validateParams;
    private updateGroups;
    private getSourceColumns;
    private updateGroupField;
    private createGroupFieldSelectElement;
    private getUnderlyingFilters;
    private addUnderlyingFilterElement;
    private updateSelectedColumn;
    isFilterActive(): boolean;
    doesFilterPass(): boolean;
    getModel(): null;
    setModel(): AgPromise<void>;
    afterGuiAttached(params?: IAfterGuiAttachedParams): void;
    afterGuiDetached(): void;
    private onColumnRowGroupChanged;
    private onFilterDestroyed;
    private getFilterColumnPair;
    getSelectedFilter(): IFilterComp | undefined;
    getSelectedColumn(): AgColumn | undefined;
    isFilterAllowed(): boolean;
    destroy(): void;
}