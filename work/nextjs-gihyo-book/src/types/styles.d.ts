/**
 * CSSプロパティをブレークポイントごとに設定できる
 * T:CSSプロパティの型
 */
export type ResponsiveProp<T> = {

  base?: T //default
  sm?: T // 640px以上
  md?: T // 768px以上
  lg?: T // 1024px以上
  xl?: T // 1280px以上
}

export type Responsive<T> = T | Responsive<T>

/**
 * flex
 */
type SelfPosition =
  | `center`
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'self-end'
  | 'self-start'
  | 'start'

type ContentPosision = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start'

type ContentDistribution =
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch'

type CSSPropertyGlobals =
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'

export type CSSPropertyAlignItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'normal'
  | 'stretch'
  // コードの自動補完
  | (string & {})

export type CSSPropertyAlignContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'start'
  | 'baseline'
  | 'normal'
  | (string & {})

export type CSSPropertyJustifyItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'left'
  | 'legacy'
  | 'normal'
  | 'right'
  | 'stretch'
  | (string & {})

export type CSSPropertyJustifyContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | ContentPosition
  | 'left'
  | 'normal'
  | 'right'
  | (string & {})

export type CSSPropertyFlexWrap =
  | CSSPropertyGlobals
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse'

export type CSSPropertyFlexDirection =
  | CSSPropertyGlobals
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse'

export type CSSPropertyJustifySelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'left'
  | 'normal'
  | 'right'
  | 'stretch'
  | (string & {})

export type CSSPropertyAlignSelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'normal'
  | 'stretch'
  | (string & {})

/**
 * Grid
 */
type GridLine = 'auto' | (string & {})

export type CSSPropertyGridColumn =

  | CSSPropertyGlobals
  | GridLine
  | (string & {})

export type CSSPropertyGridRow = CSSPropertyGlobals | GridLine | (string & {})

export type CSSPropertyGridAutoFlow =
  | CSSPropertyGlobals
  | 'column'
  | 'dense'
  | 'row'
  | (string & {})

export type CSSPropertyGridArea = CSSPropertyGlobals | GridLine | (string & {})

