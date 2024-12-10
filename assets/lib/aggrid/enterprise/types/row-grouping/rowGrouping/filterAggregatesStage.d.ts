import type { BeanCollection, IRowNodeStage, NamedBean, StageExecuteParams } from 'ag-grid-community';
import { BeanStub } from 'ag-grid-community';
export declare class FilterAggregatesStage extends BeanStub implements NamedBean, IRowNodeStage {
    beanName: "filterAggregatesStage";
    private filterManager?;
    private columnModel;
    wireBeans(beans: BeanCollection): void;
    execute(params: StageExecuteParams): void;
    /** for tree data, we include all children, groups and leafs */
    private setAllChildrenCountTreeData;
    private setAllChildrenCountGridGrouping;
    private setAllChildrenCount;
}