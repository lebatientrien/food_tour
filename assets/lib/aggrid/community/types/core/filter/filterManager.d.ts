import type { UserCompDetails } from '../components/framework/userComponentFactory';
import type { NamedBean } from '../context/bean';
import { BeanStub } from '../context/beanStub';
import type { BeanCollection } from '../context/context';
import type { AgColumn } from '../entities/agColumn';
import type { ColDef } from '../entities/colDef';
import type { CoreDataTypeDefinition, DataTypeFormatValueFunc } from '../entities/dataType';
import type { RowNode } from '../entities/rowNode';
import type { FilterChangedEventSourceType } from '../events';
import type { AdvancedFilterModel } from '../interfaces/advancedFilterModel';
import type { FilterModel, IFilter, IFilterComp, IFilterParams } from '../interfaces/iFilter';
import type { FilterWrapper } from './columnFilterService';
export declare class FilterManager extends BeanStub implements NamedBean {
    beanName: "filterManager";
    private columnModel;
    private dataTypeService?;
    private quickFilterService?;
    private advancedFilterService;
    private columnFilterService?;
    wireBeans(beans: BeanCollection): void;
    private externalFilterPresent;
    private aggFiltering;
    private advancedFilterModelUpdateQueue;
    postConstruct(): void;
    private isExternalFilterPresentCallback;
    private doesExternalFilterPass;
    setFilterModel(model: FilterModel | null, source?: FilterChangedEventSourceType): void;
    getFilterModel(): FilterModel;
    isColumnFilterPresent(): boolean;
    isAggregateFilterPresent(): boolean;
    isExternalFilterPresent(): boolean;
    isChildFilterPresent(): boolean;
    private isAdvancedFilterPresent;
    private onAdvancedFilterEnabledChanged;
    isAdvancedFilterEnabled(): boolean;
    isAdvancedFilterHeaderActive(): boolean;
    isAnyFilterPresent(): boolean;
    resetQuickFilterCache(): void;
    private refreshFiltersForAggregations;
    onFilterChanged(params?: {
        source?: FilterChangedEventSourceType;
        filterInstance?: IFilterComp;
        additionalEventAttributes?: any;
        columns?: AgColumn[];
    }): void;
    isSuppressFlashingCellsBecauseFiltering(): boolean;
    isQuickFilterPresent(): boolean;
    private updateAggFiltering;
    isAggregateQuickFilterPresent(): boolean;
    private isNonAggregateQuickFilterPresent;
    private shouldApplyQuickFilterAfterAgg;
    doesRowPassOtherFilters(filterToSkip: IFilterComp, node: any): boolean;
    doesRowPassAggregateFilters(params: {
        rowNode: RowNode;
        filterInstanceToSkip?: IFilterComp;
    }): boolean;
    doesRowPassFilter(params: {
        rowNode: RowNode;
        filterInstanceToSkip?: IFilterComp;
    }): boolean;
    isFilterActive(column: AgColumn): boolean;
    getOrCreateFilterWrapper(column: AgColumn): FilterWrapper | null;
    getDefaultFloatingFilter(column: AgColumn): string;
    createFilterParams(column: AgColumn, colDef: ColDef): IFilterParams;
    isFilterAllowed(column: AgColumn): boolean;
    getFloatingFilterCompDetails(column: AgColumn, showParentFilter: () => void): UserCompDetails | undefined;
    getCurrentFloatingFilterParentModel(column: AgColumn): any;
    destroyFilter(column: AgColumn, source?: 'api' | 'columnChanged' | 'paramsUpdated'): void;
    areFilterCompsDifferent(oldCompDetails: UserCompDetails | null, newCompDetails: UserCompDetails | null): boolean;
    getAdvancedFilterModel(): AdvancedFilterModel | null;
    setAdvancedFilterModel(expression: AdvancedFilterModel | null | undefined): void;
    toggleAdvancedFilterBuilder(show: boolean, source: 'api' | 'ui'): void;
    private updateAdvancedFilterColumns;
    hasFloatingFilters(): boolean;
    getFilterInstance<TFilter extends IFilter>(key: string | AgColumn, callback?: (filter: TFilter | null) => void): undefined;
    getColumnFilterInstance<TFilter extends IFilter>(key: string | AgColumn): Promise<TFilter | null | undefined>;
    private warnAdvancedFilters;
    setupAdvancedFilterHeaderComp(eCompToInsertBefore: HTMLElement): void;
    getHeaderRowCount(): number;
    getHeaderHeight(): number;
    private processFilterModelUpdateQueue;
    getColumnFilterModel(key: string | AgColumn): any;
    setColumnFilterModel(key: string | AgColumn, model: any): Promise<void>;
    setColDefPropertiesForDataType(colDef: ColDef, dataTypeDefinition: CoreDataTypeDefinition, formatValue: DataTypeFormatValueFunc): void;
}