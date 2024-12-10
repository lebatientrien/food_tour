import type { NamedBean } from '../context/bean';
import { BeanStub } from '../context/beanStub';
import type { BeanCollection } from '../context/context';
import type { AgColumn } from '../entities/agColumn';
import type { IAggFunc } from '../entities/colDef';
import type { ColumnEventType } from '../events';
import type { ColumnState, ModifyColumnsNoEventsCallbacks } from './columnApplyStateService';
import type { ColKey, Maybe } from './columnModel';
export declare class FuncColsService extends BeanStub implements NamedBean {
    beanName: "funcColsService";
    private columnModel;
    private eventDispatcher;
    private aggFuncService?;
    private visibleColsService;
    wireBeans(beans: BeanCollection): void;
    private rowGroupCols;
    private valueCols;
    private pivotCols;
    getModifyColumnsNoEventsCallbacks(): ModifyColumnsNoEventsCallbacks;
    getSourceColumnsForGroupColumn(groupCol: AgColumn): AgColumn[] | null;
    sortRowGroupColumns(compareFn?: (a: AgColumn, b: AgColumn) => number): void;
    sortPivotColumns(compareFn?: (a: AgColumn, b: AgColumn) => number): void;
    getValueColumns(): AgColumn[];
    getPivotColumns(): AgColumn[];
    getRowGroupColumns(): AgColumn[];
    isRowGroupEmpty(): boolean;
    setColumnAggFunc(key: Maybe<ColKey>, aggFunc: string | IAggFunc | null | undefined, source: ColumnEventType): void;
    setRowGroupColumns(colKeys: ColKey[], source: ColumnEventType): void;
    private setRowGroupActive;
    addRowGroupColumns(keys: Maybe<ColKey>[], source: ColumnEventType): void;
    removeRowGroupColumns(keys: Maybe<ColKey>[] | null, source: ColumnEventType): void;
    addPivotColumns(keys: ColKey[], source: ColumnEventType): void;
    setPivotColumns(colKeys: ColKey[], source: ColumnEventType): void;
    removePivotColumns(keys: ColKey[], source: ColumnEventType): void;
    setValueColumns(colKeys: ColKey[], source: ColumnEventType): void;
    private setValueActive;
    addValueColumns(keys: ColKey[], source: ColumnEventType): void;
    removeValueColumns(keys: ColKey[], source: ColumnEventType): void;
    moveRowGroupColumn(fromIndex: number, toIndex: number, source: ColumnEventType): void;
    private setColList;
    private updateColList;
    extractCols(source: ColumnEventType, oldProvidedCols: AgColumn[] | undefined): void;
    private extractValueCols;
    private extractRowGroupCols;
    private extractPivotCols;
    private extractColsCommon;
    generateColumnStateForRowGroupAndPivotIndexes(updatedRowGroupColumnState: {
        [colId: string]: ColumnState;
    }, updatedPivotColumnState: {
        [colId: string]: ColumnState;
    }): ColumnState[];
}