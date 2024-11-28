// UI Intent Types

export type ArrangeIntent = 'compare' | 'sequence' | 'relate' | 'focus'

export type PresentIntent = 'summarize' | 'detail' | 'highlight' | 'group'

export type InteractIntent = 'engage' | 'support' | 'act'

// User Affordance Types

export type ConsumeAffordance = 'view' | 'browse'

export type InputAffordance = 'select' | 'enter' | 'modify'

export type ActAffordance = 'trigger' | 'navigate'

// Combined types

export type AffordanceCategory = 'consume' | 'input' | 'action'

export type Affordance = ConsumeAffordance | InputAffordance | ActAffordance

export type AffordanceIntent =
  | `${AffordanceCategory}`
  | `consume:${ConsumeAffordance}`
  | `input:${InputAffordance}`
  | `action:${ActAffordance}`

export type IntentLabel = ArrangeIntent | PresentIntent | InteractIntent | AffordanceIntent

// Helper type for parsing string directive values
export interface Intent {
  arrange?: ArrangeIntent
  present?: PresentIntent
  interact?: InteractIntent
  affords?: AffordanceIntent
}

export type IntentPattern<T> = `${T & string}` | RegExp | boolean

export interface IntentQuery {
  arrange?: IntentPattern<ArrangeIntent>
  present?: IntentPattern<PresentIntent>
  interact?: IntentPattern<InteractIntent>
  affords?: IntentPattern<AffordanceIntent>
}
