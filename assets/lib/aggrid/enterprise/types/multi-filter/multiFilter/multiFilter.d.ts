import type { BeanCollection, IAfterGuiAttachedParams, IDoesFilterPassParams, IFilterComp, IMultiFilter, IMultiFilterDef, IMultiFilterModel, MultiFilterParams, ProvidedFilterModel } from 'ag-grid-community';
import { AgPromise, TabGuardComp } from 'ag-grid-community';
export declare class MultiFilter extends TabGuardComp implements IFilterComp, IMultiFilter {
    private filterManager?;
    private userComponentFactory;
    private focusService;
    wireBeans(beans: BeanCollection): void;
    private params;
    private filterDefs;
    private filters;
    private guiDestroyFuncs;
    private filterGuis;
    private column;
    private filterChangedCallback;
    private lastOpenedInContainer?;
    private activeFilterIndices;
    private lastActivatedMenuItem;
    private hidePopup?;
    private afterFiltersReadyFuncs;
    constructor();
    postConstruct(): void;
    static getFilterDefs(params: MultiFilterParams): IMultiFilterDef[];
    init(params: MultiFilterParams): AgPromise<void>;
    private refreshGui;
    private getFilterTitle;
    private destroyChildren;
    private insertFilterMenu;
    private insertFilterGroup;
    isFilterActive(): boolean;
    getLastActiveFilterIndex(): number | null;
    doesFilterPass(params: IDoesFilterPassParams, filterToSkip?: IFilterComp): boolean;
    private getFilterType;
    getModelFromUi(): IMultiFilterModel | null;
    getModel(): ProvidedFilterModel | null;
    setModel(model: IMultiFilterModel | null): AgPromise<void>;
    applyModel(source?: 'api' | 'ui' | 'rowDataUpdated'): boolean;
    getChildFilterInstance(index: number): IFilterComp | undefined;
    afterGuiAttached(params?: IAfterGuiAttachedParams): void;
    afterGuiDetached(): void;
    onAnyFilterChanged(): void;
    onNewRowsLoaded(): void;
    destroy(): void;
    private executeFunctionIfExists;
    private executeFunctionIfExistsOnFilter;
    private createFilter;
    private executeWhenAllFiltersReady;
    private updateActiveList;
    private filterChanged;
    protected onFocusIn(e: FocusEvent): void;
    getModelAsString(model: IMultiFilterModel): string;
}
