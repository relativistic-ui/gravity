# Building UIs with Gravity

Gravity builds upon traditional UI frameworks by adding a layer that helps components understand and respond to intent. Rather than replacing existing solutions, Gravity enhances them by providing ways to encode, combine, and respond to different types of intent.

## Common UI Challenges

Traditional UI frameworks excel at component composition and lifecycle management, but often struggle with expressing and combining different types of intent:

### Design Intent
- Visual hierarchies that maintain relationships
- Component variations based on context
- Spatial and positional relationships
- Consistent application of design principles

### Interaction Intent
- Critical vs optional interactions
- Interruptible vs must-complete flows
- Sequential vs independent actions
- Context-appropriate input methods

### System Intent
- Accessibility requirements
- Performance constraints
- Device adaptations
- Error prevention patterns

## How Gravity Helps

### Creating New Hierarchies
Gravity allows you to define new hierarchical systems that components can participate in. For example:

- Typography hierarchies where text elements understand their role and relationship to other text
- Visual importance hierarchies that maintain consistent prominence across components
- Navigation hierarchies that express depth and relationship
- Validation hierarchies that combine form requirements with interaction patterns

### Understanding Position
Components can understand their context through questions like:
- "How much space do I have?"
- "Am I in a sequence? If so, what's my meta-position (first, last, odd, even)?"
- "What kind of container am I in?"

### Adapting to Context
Components can query their environment to determine the appropriate presentation based on both explicit developer intents and implicit contextual intents:

**Input Fields**
- Explicit: Validation rules, field roles, interaction requirements
- Implicit: Available space, container patterns, accessibility needs
- Query validation requirements and interaction patterns
- Determine display mode from available options based on context
- Extract appropriate interaction patterns from container
- Query accessibility requirements for current presentation

**Buttons**
- Explicit: Action type, importance level, semantic role
- Implicit: Background contrast, hierarchy position, spatial constraints
- Query action importance within current context
- Extract contrast requirements from background
- Query current visual hierarchy position
- Determine prominence based on contextual importance

### State-Space Mapping
Gravity allows mapping between different coordinate systems and design spaces:

**Grid Systems**
- Map UI coordinates onto grid-based spaces
- Components query position relative to grid
- Maintain relationships across coordinate transformations

**Design Language Mapping**
- Map design tokens to utility class frameworks
- Transform semantic design values to implementation classes
- Maintain consistent styling across different frameworks
- Bridge between design intent and technical implementation

For example, a component can:
- Query its position in different coordinate spaces
- Transform design tokens to utility classes
- Maintain consistent relationships across mappings

## Real-World Examples

### Typography System
- Define a hierarchical system of text relationships
- Text elements participate in this hierarchy
- Styling derives from both position and intent
- System maintains consistent relationships

### Form Inputs
- Adapt presentation based on validation requirements
- Choose appropriate input mode for context
- Maintain clear completion state
- Express interaction importance

### Collections
- Elements understand their sequential position
- Adapt spacing and styling based on position
- Maintain consistent visual patterns
- Express relationships between items

## Benefits

### For Designers
- Express intent through systematic rules
- Create new hierarchical systems
- Maintain consistent relationships
- Define clear interaction patterns

### For Developers
- Components understand their context
- Clear patterns for handling intent
- Reduced prop and state management
- Systematic approach to adaptations

### For Users
- Consistent interface behavior
- Clear interaction patterns
- Predictable adaptations
- Accessible presentations

## Conclusion

By building on traditional UI frameworks and adding tools for understanding and combining different types of intent, Gravity helps create interfaces that are more systematic, adaptable, and maintainable.
