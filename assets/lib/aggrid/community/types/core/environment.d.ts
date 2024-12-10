import type { NamedBean } from './context/bean';
import { BeanStub } from './context/beanStub';
import type { BeanCollection } from './context/context';
export declare class Environment extends BeanStub implements NamedBean {
    beanName: "environment";
    private resizeObserverService;
    private eGridDiv;
    wireBeans(beans: BeanCollection): void;
    private sizeEls;
    private lastKnownValues;
    private ancestorThemeClasses;
    private eMeasurementContainer;
    private sizesMeasured;
    private gridTheme;
    postConstruct(): void;
    getDefaultRowHeight(): number;
    getDefaultHeaderHeight(): number;
    getDefaultColumnMinWidth(): number;
    getDefaultListItemHeight(): number;
    hasMeasuredSizes(): boolean;
    getGridThemeClass(): string | null;
    getThemeClasses(): readonly string[];
    applyThemeClasses(el: HTMLElement): void;
    refreshRowHeightVariable(): number;
    private getCSSVariablePixelValue;
    private measureSizeEl;
    private getSizeEl;
    private fireGridStylesChangedEvent;
    private setUpThemeClassObservers;
    private readAncestorThemeClasses;
    private handleThemeGridOptionChange;
    private stopUsingTheme;
}