/**
 * @license Highcharts JS v11.4.8 (2024-08-29)
 * @module highcharts/modules/textpath-support
 * @requires highcharts
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import TextPath from '../../Extensions/TextPath.js';
const G = Highcharts;
G.TextPath = TextPath;
G.TextPath.compose(G.SVGElement);
export default Highcharts;
