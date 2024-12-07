# Frames of Reference

## Core Concepts

Frames of Reference provide contextual snapshots of design observables, allowing for relative and contextual design decisions. Each property defines a field - a space of possible observables and their potential states. Fields establish both the set of possible observables and the relationships between them.

## Temporal Model

### Observation-Driven Time
Time in the system advances through observations rather than wall clock time. Each observation creates a temporal boundary, marking potential state changes in the system.

### Temporal Boundaries
At each temporal boundary, only observables affected by the observation need collapse to definite states. Other observables can maintain their superposition, preserving flexibility for future observations.

### External Observations
The system acknowledges that some observations occur outside its control. These external observations can force state changes, potentially moving the system from definite to indefinite states.

### Implicit Observation
Observations may be implicit through interaction rather than explicit queries. The system must track these implicit observations as they create temporal boundaries and affect observable states.

## Frame Structure

### Immutable Snapshots
Frames are immutable snapshots of field values at a particular temporal boundary. Like a photograph captures light at a moment, a frame captures the state of affected fields at observation. This immutability ensures consistent measurement within a frame.

### Hierarchical Structure
Frames can be organized hierarchically, with child frames inheriting and potentially overriding field values from their parents. This allows for contextual refinement of values while maintaining a clear relationship to parent contexts.

### Lazy Evaluation
Frames are lazy by design - they don't collapse observable states until measurement is required. This makes frame creation lightweight and allows for complex hierarchical structures without immediate computational cost.

### Universal Inheritance
All frames are extensions of a parent frame, transformed through their frame of reference. This creates a complete hierarchy of frames, each attenuating and transforming the possibilities defined by its parent.

### Root Frame
The system requires a single root frame that contains all observables in complete superposition - every possible state as defined by the current frame of reference. All other frames are derived from this root, each adding constraints and transformations that restrict or modify the possible states.

### State Tracking
As observations occur, frames track which observables have collapsed to definite states and which remain in superposition. This tracking helps maintain consistency and indicates potential for future state resolution.

## Frame Creation

### Reference Creation
Frames are created from a FrameOfReference, which provides the context and rules for measurement within the frame. Creation is cheap as no state collapse occurs until measurement. This ensures consistent creation patterns and value resolution.

### Frame Extension
New frames can extend existing ones, inheriting their context and values while allowing for specific modifications. This supports incremental refinement of design decisions.

### Context Determination
The creation context determines the initial values of fields within the frame, establishing the baseline for all measurements.

## Value Resolution

### Hierarchical Resolution
Values resolve through the frame hierarchy, allowing for progressive refinement and override of values while maintaining a clear chain of inheritance.

### Contextual Resolution
Resolution of values depends on the specific context of measurement, ensuring that values are appropriate for their usage context.

### Temporal Effects
The temporal boundary at which an observation occurs affects which observables collapse and which maintain superposition. This selective collapse ensures minimal state determination.

### Entanglement Effects
Measuring one observable may affect the resolution of related observables due to entanglement relationships defined by their field. The frame maintains these relationships during resolution.

## Fields and Properties

### Field Definition
Fields define spaces of possible properties. Each field establishes both the domain of properties that may be observed and the relationships between them. Fields are fundamental to measurement and observation.

### Observable Properties
Within a field, properties may be observed. These observations respect both individual constraints and relationships between properties, affecting how measurements propagate through the system.

### Field Existence
Fields exist throughout the entire frame, even where not explicitly measured. This ensures consistent behavior across the frame.

### Observable Determination
Fields determine what observables are possible within them and define the state space these observables may occupy. This includes both individual value constraints and relationship constraints between observables, affecting how measurements propagate through the system.

### Field Transformation
Fields can transform between frames while preserving their essential relationships and constraints. This allows measurements to be meaningful across different contexts while maintaining the fundamental properties of the field.

### State Space Constraints
Fields can be attenuated by invariants, restricting the state space that their observables may occupy. These constraints are maintained during frame transformations and measurements.

## Observable Measurement

### Value Containment
Fields contain all possible values that might be observed, establishing the bounds of valid measurements and the relationships between different measurements.

### Observable Production
Measurement within a field produces observables, converting potential values into specific measurements while respecting field constraints and relationships.

### Frame Dependence
The specific values observed depend on the frame of reference, ensuring context-appropriate measurements while maintaining field-defined relationships.

### Explicit Uncertainty
Uncertainty in measurement is explicitly represented, acknowledging the inherent variability in design systems and the effects of entanglement.

## Assumptions

### Usage Patterns
Most interactions with frames involve simple field measurements, with complex operations being rare. This guides the design of the measurement interface.

### Performance Considerations
While frame creation might be expensive, measurement operations should be fast. Implementation-specific caching strategies can optimize common cases.

### Framework Integration
Framework-specific plugins handle the details of integration, while the frame lifecycle is managed by the framework itself. This preserves opportunities for optimization.

## Plugin System

### Field Implementation
Implementing fields through plugins should be straightforward, though the implementations themselves might be complex to handle framework-specific optimizations.

### Query Interface
The query interface remains simple and ergonomic, with type safety where possible and efficient handling of common measurement patterns.
