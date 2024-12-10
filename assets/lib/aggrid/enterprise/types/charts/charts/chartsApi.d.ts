import type { BeanCollection, ChartDownloadParams, ChartModel, ChartRef, CloseChartToolPanelParams, CreateCrossFilterChartParams, CreatePivotChartParams, CreateRangeChartParams, GetChartImageDataUrlParams, OpenChartToolPanelParams, UpdateChartParams } from 'ag-grid-community';
export declare function getChartModels(beans: BeanCollection): ChartModel[] | undefined;
export declare function getChartRef(beans: BeanCollection, chartId: string): ChartRef | undefined;
export declare function getChartImageDataURL(beans: BeanCollection, params: GetChartImageDataUrlParams): string | undefined;
export declare function downloadChart(beans: BeanCollection, params: ChartDownloadParams): void | undefined;
export declare function openChartToolPanel(beans: BeanCollection, params: OpenChartToolPanelParams): void | undefined;
export declare function closeChartToolPanel(beans: BeanCollection, params: CloseChartToolPanelParams): void | undefined;
export declare function createRangeChart(beans: BeanCollection, params: CreateRangeChartParams): ChartRef | undefined;
export declare function createPivotChart(beans: BeanCollection, params: CreatePivotChartParams): ChartRef | undefined;
export declare function createCrossFilterChart(beans: BeanCollection, params: CreateCrossFilterChartParams): ChartRef | undefined;
export declare function updateChart(beans: BeanCollection, params: UpdateChartParams): void;
export declare function restoreChart(beans: BeanCollection, chartModel: ChartModel, chartContainer?: HTMLElement): ChartRef | undefined;