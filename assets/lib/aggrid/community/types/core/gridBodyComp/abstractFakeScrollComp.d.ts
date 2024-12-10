import type { BeanCollection } from '../context/context';
import { Component } from '../widgets/component';
import type { ScrollPartner } from './gridBodyScrollFeature';
export declare abstract class AbstractFakeScrollComp extends Component implements ScrollPartner {
    private readonly direction;
    private animationFrameService;
    wireBeans(beans: BeanCollection): void;
    protected readonly eViewport: HTMLElement;
    protected readonly eContainer: HTMLElement;
    protected invisibleScrollbar: boolean;
    protected hideTimeout: number | null;
    protected abstract setScrollVisible(): void;
    abstract getScrollPosition(): number;
    abstract setScrollPosition(value: number): void;
    constructor(template: string, direction: 'horizontal' | 'vertical');
    postConstruct(): void;
    protected initialiseInvisibleScrollbar(): void;
    protected addActiveListenerToggles(): void;
    protected onScrollVisibilityChanged(): void;
    protected hideAndShowInvisibleScrollAsNeeded(): void;
    protected attemptSettingScrollPosition(value: number): void;
    getViewportElement(): HTMLElement;
    getContainer(): HTMLElement;
    onScrollCallback(fn: () => void): void;
}