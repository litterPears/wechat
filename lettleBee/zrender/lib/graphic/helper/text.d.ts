import * as textContain from '../../contain/text';
import { WILL_BE_RESTORED } from '../constant';
import { StyleOption } from '../Style';
import Displayable from '../Displayable';
import { RectLike } from '../../core/BoundingRect';
import { PropType } from '../../core/types';
import { PatternObject } from '../Pattern';
declare type CalculateTextPositionResult = ReturnType<typeof textContain.calculateTextPosition>;
declare type TextBoxPosition = CalculateTextPositionResult & {
    baseX: number;
    baseY: number;
};
export declare function normalizeTextStyle(style: StyleOption): StyleOption;
export declare function renderText(hostEl: Displayable, ctx: CanvasRenderingContext2D, text: string, style: StyleOption, rect: RectLike, prevEl?: Displayable | typeof WILL_BE_RESTORED): void;
export declare function getBoxPosition<T>(out: Partial<TextBoxPosition>, hostEl: Displayable<T>, style: StyleOption, rect: RectLike): Partial<TextBoxPosition>;
export declare function getStroke(stroke?: PropType<StyleOption, 'textStroke'>, lineWidth?: number): string | PatternObject | import("../LinearGradient").LinearGradientObject | import("../RadialGradient").RadialGradientObject;
export declare function getFill(fill?: PropType<StyleOption, 'textStroke'>): string | PatternObject | import("../LinearGradient").LinearGradientObject | import("../RadialGradient").RadialGradientObject;
export declare function parsePercent(value: number | string, maxValue: number): number;
export declare function needDrawText(text: string, style: StyleOption): boolean;
export {};
