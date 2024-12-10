import type { BeanCollection, ComponentSelector, IAfterGuiAttachedParams, IDoesFilterPassParams, ISetFilter, SetFilterModel, SetFilterModelValue, SetFilterParams } from 'ag-grid-community';
import { AgPromise, ProvidedFilter } from 'ag-grid-community';
import { SetValueModel } from './setValueModel';
/** @param V type of value in the Set Filter */
export declare class SetFilter<V = string> extends ProvidedFilter<SetFilterModel, V> implements ISetFilter<V> {
    private funcColsService;
    private valueService;
    private dataTypeService?;
    wireBeans(beans: BeanCollection): void;
    private readonly eMiniFilter;
    private readonly eFilterLoading;
    private readonly eSetFilterList;
    private readonly eFilterNoMatches;
    private valueModel;
    private setFilterParams;
    private virtualList;
    private caseSensitive;
    private treeDataTreeList;
    private getDataPath?;
    private groupingTreeList;
    private hardRefreshVirtualList;
    private noValueFormatterSupplied;
    private createKey;
    private valueFormatter?;
    private readonly filterModelFormatter;
    constructor();
    postConstruct(): void;
    protected updateUiVisibility(): void;
    protected createBodyTemplate(): string;
    protected getAgComponents(): ComponentSelector[];
    protected handleKeyDown(e: KeyboardEvent): void;
    private handleKeySpace;
    private handleKeyEnter;
    private handleKeyLeft;
    private handleKeyRight;
    private getComponentForKeyEvent;
    protected getCssIdentifier(): string;
    setModel(model: SetFilterModel | null): AgPromise<void>;
    refresh(params: SetFilterParams<any, V>): boolean;
    private haveColDefParamsChanged;
    private setModelAndRefresh;
    protected resetUiToDefaults(): AgPromise<void>;
    protected setModelIntoUi(model: SetFilterModel | null): AgPromise<void>;
    getModelFromUi(): SetFilterModel | null;
    getFilterType(): 'set';
    getValueModel(): SetValueModel<V> | null;
    protected areModelsEqual(a: SetFilterModel, b: SetFilterModel): boolean;
    private updateSetFilterOnParamsChange;
    setParams(params: SetFilterParams<any, V>): void;
    private onAddCurrentSelectionToFilterChange;
    private setValueFormatter;
    private generateCreateKey;
    getFormattedValue(key: string | null): string | null;
    private applyExcelModeOptions;
    private addEventListenersForDataChanges;
    private syncAfterDataChange;
    private setIsLoading;
    private initialiseFilterBodyUi;
    private initVirtualList;
    private createVirtualListModel;
    private getSelectAllLabel;
    private getAddSelectionToFilterLabel;
    private createSetListItem;
    private newSetTreeItemAttributes;
    private newSetListItemAttributes;
    private updateSetListItem;
    private isSelectedExpanded;
    private isSetFilterModelTreeItem;
    private initMiniFilter;
    private updateMiniFilter;
    afterGuiAttached(params?: IAfterGuiAttachedParams): void;
    afterGuiDetached(): void;
    applyModel(source?: 'api' | 'ui' | 'rowDataUpdated'): boolean;
    protected isModelValid(model: SetFilterModel): boolean;
    doesFilterPass(params: IDoesFilterPassParams): boolean;
    private doesFilterPassForTreeData;
    private doesFilterPassForGrouping;
    private isInAppliedModel;
    private getValueFromNode;
    private getKeyCreatorParams;
    onNewRowsLoaded(): void;
    private isValuesTakenFromGrid;
    /**
     * Public method provided so the user can change the value of the filter once
     * the filter has been already started
     * @param values The values to use.
     */
    setFilterValues(values: (V | null)[]): void;
    /**
     * Public method provided so the user can reset the values of the filter once that it has started.
     */
    resetFilterValues(): void;
    refreshFilterValues(): void;
    onAnyFilterChanged(): void;
    private onMiniFilterInput;
    private updateUiAfterMiniFilterChange;
    private showOrHideResults;
    private resetMiniFilter;
    protected resetUiToActiveModel(currentModel: SetFilterModel | null, afterUiUpdatedFunc?: () => void): void;
    protected handleCancelEnd(e: Event): void;
    private onMiniFilterKeyDown;
    private filterOnAllVisibleValues;
    private focusRowIfAlive;
    private onSelectAll;
    private onGroupItemSelected;
    private onItemSelected;
    private selectItem;
    private onExpandAll;
    private onExpandedChanged;
    private refreshAfterExpansion;
    private refreshAfterSelection;
    setMiniFilter(newMiniFilter: string | null): void;
    getMiniFilter(): string | null;
    private checkAndRefreshVirtualList;
    getFilterKeys(): SetFilterModelValue;
    getFilterValues(): (V | null)[];
    getValues(): SetFilterModelValue;
    refreshVirtualList(): void;
    private translateForSetFilter;
    private isSelectAllSelected;
    private areAllChildrenSelected;
    destroy(): void;
    private caseFormat;
    private resetExpansion;
    getModelAsString(model: SetFilterModel): string;
    protected getPositionableElement(): HTMLElement;
}
