# Frames and Principles in Mouldable UI

## Frames (Reference Frames)

### Definition

In Mouldable UI, a Frame, more precisely termed a Reference Frame, is a comprehensive, queryable representation of the state of affairs at a specific location within a document and its corresponding position on the screen. It serves as a positional source of truth, enabling spatial reasoning and relational queries about UI elements.

### Key Characteristics

1. Position-Specificity: Each Reference Frame is intrinsically tied to a specific point in the document and on the screen.
2. Comprehensive State Representation: It captures all relevant information about UI elements and their relationships at its specific position.
3. Queryability: Reference Frames can be queried to retrieve specific information, particularly for spatial and relational inquiries.
4. Immutability: Reference Frames are immutable. Any operation that would change a Reference Frame creates a new one instead.
5. Transformability: As the point of reference changes, a new Reference Frame is generated, allowing for dynamic understanding of the interface state.

### Operational Semantics

1. empty: A value representing an empty Reference Frame
2. enter(frame, facts): Extends the given Reference Frame with new facts, creating a new Reference Frame

### Reference Frame Derivation

Reference Frames can be derived from various sources:

1. Document structure and content
2. Screen layout and element positioning
3. User interactions and view state
4. Component lifecycle events
5. Server-side rendering (SSR) responses
6. Device and window states

### Usage in Spatial Reasoning

Reference Frames are crucial for spatial queries such as:

1. Containment: Determining if one element is contained within another
2. Alignment: Checking the alignment of elements relative to each other
3. Proximity: Assessing the closeness of elements
4. Visibility: Determining if an element is visible within the current viewport

### Performance Considerations

To optimize performance, not all possible information needs to be included in every Reference Frame. Instead, a set of relevant attributes can be defined based on the Principles in use and the specific requirements of the application.

### Representation

Reference Frames can be represented as sets of facts with anonymous identifiers, which is equivalent to using maps. This representation allows for efficient querying and manipulation.

## Principles

### Definition

Principles in Mouldable UI represent the chosen standards or guidelines for various aspects of the UI. They are implemented as sets of rules that can be applied to any context.

### Key Characteristics

1. Domain-Specific: Each Principle focuses on a specific aspect of the UI (e.g., typography, accessibility, localization).
2. Standard-Based: Principles are derived from established standards or guidelines in their respective domains.
3. Configurable: Users can choose which standards or guidelines to follow, allowing for flexibility in UI design.
4. Composable: Principles can be combined to create presets, allowing for reusable configurations across different parts of the UI or different projects.

### Types of Principles

1. TypographyPrinciple: Applies chosen typographic standards
2. AccessibilityPrinciple: Applies chosen accessibility guidelines
3. LocalizationPrinciple: Applies chosen localization standards

### Principle Operations

Principles provide operations that can be applied to contexts:

1. Validation: Check if a proposed context extension is valid according to the principle's rules.
2. Mapping: Apply rules to map potential contexts to unique values (design tokens).
3. Conflict Resolution: Use preferences or heuristics to resolve conflicts between multiple possible contexts.

## Interaction between Frames and Principles

Principles in Mouldable UI don't own or maintain separate frames but instead interpret the shared Reference Frame according to their specific rules and standards. This interaction allows for a flexible and adaptable UI system where components can make decisions based on both the current Reference Frame and the applied principles.

### Usage in Components

Components can access and use Reference Frames through various means, such as:

1. Props drilling
2. Vue's provide/inject API
3. Composable functions
4. Custom plugins

The choice of method depends on the specific needs of the application and the desired balance between simplicity and flexibility.

Components interact with Principles by querying them with Reference Frame information. The Principles then interpret this information and provide appropriate responses, allowing components to adapt their behavior or appearance based on the current Reference Frame and applied standards.

## Frame Queries

- **nodeWith**
  - Query to find a node with specific attributes within the current Reference Frame.
- **inViewportOf**
  - Query to check if a component is within the viewport of another component in the current Reference Frame.
- **inContainerOf**
  - Query to determine if a component is within a specific container in the current Reference Frame.

## UI Manifold and Component Gravity

In our Mouldable UI system, we introduce the concept of a UI Manifold, which represents the overall structure of our UI space. This manifold is shaped by Component Gravity, a measure of a component's importance or influence on the UI.

### Key Concepts

1. UI Manifold: The underlying structure of our UI space, incorporating both Frames and Principles.

2. Component Gravity: A measure of a component's influence on the UI, analogous to mass in physics. Factors affecting Component Gravity include:

   - User focus and interaction frequency
   - Business process importance
   - Data density and complexity
   - Visual prominence

3. UI Curvature: The cumulative effect of Component Gravity on the UI Manifold. Areas of high curvature indicate regions of the UI that demand more attention or resources.

4. Geodesic Paths: The most natural paths for user interaction or information flow in the UI, influenced by UI Curvature.

### Relations and Measures

1. gravity(component): A measure of a component's influence on the UI Manifold.
2. curvature(point): A measure of the UI Manifold's shape at a given point.
3. geodesic(start, end): The most efficient path between two points on the UI Manifold.

### Principle Invariance

UI Principles remain invariant across the UI Manifold, similar to how physical laws remain constant in General Relativity. This ensures consistency in UI behavior and appearance, regardless of local UI Curvature.

### Component Interactions

Components interact by influencing the UI Manifold through their Component Gravity. This influence affects:

1. Rendering priority and resource allocation
2. Layout and positioning decisions
3. User interaction patterns and flow

Example:
Consider a critical alert in a complex dashboard interface. This alert would have high Gravity, causing increased Curvature in its vicinity on the UI Manifold. The effects of this could include:

- Visual Prominence: Less critical elements might be visually de-emphasized or repositioned to the periphery of the interface.
- Attention Direction: The UI could guide the user's focus towards the alert through visual cues or layout adjustments.
- Interaction Priority: The Geodesic for user interactions might be altered to prioritize addressing the alert before other actions.

It's important to note that Component Gravity is primarily an analytical concept rather than a direct implementation choice. It serves as a tool for understanding and reasoning about the importance and influence of different UI elements within the overall interface. This concept can inform design decisions and help prioritise development efforts, but it doesn't necessarily translate into specific code structures or component hierarchies. Instead, it provides a framework for thinking about how different components interact and influence the user experience within the Mouldable UI system.
