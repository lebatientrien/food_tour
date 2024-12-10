import type { VisibleColsService } from '../../columns/visibleColsService';
import type { AgColumn } from '../../entities/agColumn';
import type { AgColumnGroup } from '../../entities/agColumnGroup';
import type { AgProvidedColumnGroup } from '../../entities/agProvidedColumnGroup';
import type { AbstractColDef } from '../../entities/colDef';
import type { GridOptionsService } from '../../gridOptionsService';
import type { ICellComp } from '../../rendering/cell/cellCtrl';
import type { IAbstractHeaderCellComp } from './abstractCell/abstractHeaderCellCtrl';
export declare function _getHeaderClassesFromColDef(abstractColDef: AbstractColDef | null, gos: GridOptionsService, column: AgColumn | null, columnGroup: AgColumnGroup | null): string[];
export declare function _getToolPanelClassesFromColDef(abstractColDef: AbstractColDef | null, gos: GridOptionsService, column: AgColumn | null, columnGroup: AgProvidedColumnGroup | null): string[];
export declare function refreshFirstAndLastStyles(comp: IAbstractHeaderCellComp | ICellComp, column: AgColumn | AgColumnGroup, presentedColsService: VisibleColsService): void;
