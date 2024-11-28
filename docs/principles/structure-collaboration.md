# Structuring & Collaboration of Components

## Table of Contents

1. [Introduction](#introduction)
2. [Component Library Structure](#component-library-structure)
3. [Component Branches: Content and Purpose](#component-branches-content-and-purpose)
4. [Collaboration Mechanisms](#collaboration-mechanisms)
5. [Integration of UI Principles](#integration-of-ui-principles)
6. [Examples of Component Interactions](#examples-of-component-interactions)

## Introduction

In modern UI development, the way components are structured and how they collaborate is crucial for creating efficient, scalable, and maintainable applications. This document explores the architecture of our UI components, their interactions, and how they embody the principles of Atomic UI, Mouldable UI, Domain-Driven UI, and our newly defined UI Principles.

## Component Library Structure

Our UI architecture is organized into a hierarchical structure that promotes modularity and reusability. The main categories of components are:

1. Atomic UI components

   - Atoms (e.g., Text, Image, Icon)
   - Molecules (e.g., Card, ListItem, Badge)
   - Organisms (e.g., List, Grid, Tabs)

2. Domain-Driven UI components

   - Entities (e.g., Customer, Order, OrderItem)
   - Aggregates (e.g., OrderedItems, Orders)
   - Contexts (e.g., Settings)

3. Mouldable UI components

   - Variants (e.g., Assembly, Behavior, Traits)
   - Mouldables (e.g., List, Form, Layout)
   - Principles (e.g., Typography, AccessibleColor, Locality)

4. Frame Queries
   - `is(nodeWith({parent, children, siblings}))`
   - `is(inViewportOf({mediaQuery, constraints}))`
   - `is(inContainerOf({mediaQuery, constraints, maxDepth}))`

This structure allows for a clear separation of concerns while enabling complex interactions and adaptations based on various frames of reference.

## Component Branches: Content and Purpose

Each branch in our component tree serves a specific purpose and contains particular types of components:

1. Atomic UI Components

   - Purpose: Provide reusable, foundational building blocks for the UI.
   - Content:

     - Atoms: Basic UI elements that cannot be broken down further (e.g., buttons, input fields, icons).
       Purpose: To serve as the most fundamental building blocks of the UI, ensuring consistency and reusability at the lowest level.
       Example use cases:

       - Creating a library of standardized button styles
       - Defining consistent input field appearances across the application
       - Establishing a set of commonly used icons

     - Molecules: Simple combinations of atoms that form common UI patterns (e.g., search bars, menu items).
       Purpose: To create reusable UI patterns that solve common design problems and maintain consistency across the application.
       Example use cases:

       - Designing a standard search bar component that combines an input field and a search button
       - Creating a menu item component that includes an icon, text, and optional badge

     - Organisms: Complex UI components composed of molecules and/or atoms (e.g., headers, footers, forms).
       Purpose: To build larger, more complex UI structures that can be reused across different pages or views.
       Example use cases:
       - Developing a consistent header component with navigation, search, and user profile elements
       - Creating a reusable form component with various input fields, validation, and submission handling

2. Domain-Driven UI Components

   - Purpose: Represent and encapsulate domain concepts in the UI.
   - Content:

     - Entities: UI representations of core domain objects (e.g., CustomerProfile, ProductCard).
       Purpose: To create UI components that directly represent key business entities, ensuring that the UI reflects the domain model.
       Example use cases:

       - Designing a CustomerProfile component that displays and allows editing of customer information
       - Creating a ProductCard component that shows product details and allows for quick actions like adding to cart

     - Aggregates: Components that group related entities and value objects (e.g., ShoppingCart, OrderSummary).
       Purpose: To compose multiple entity components into larger, meaningful units that represent complex domain concepts.
       Example use cases:

       - Building a ShoppingCart component that manages multiple ProductCard components and calculates totals
       - Developing an OrderSummary component that combines customer, product, and shipping information

     - Contexts: High-level components that encapsulate a specific subdomain of the application (e.g., AccountManagement, Inventory).
       Purpose: To create self-contained areas of the application that handle specific business capabilities, potentially with their own set of rules and components.
       Example use cases:
       - Implementing an AccountManagement context with its own set of components for user profile, security settings, and preferences
       - Creating an Inventory context with specialized components for stock management, reordering, and inventory reporting

3. Mouldable UI Components

   - Purpose: Enable flexibility, adaptability, and frame-awareness in the UI.
   - Content:

     - Variants: Primitive components that define core Mouldable behaviors:

       - Assembly: Selects and assembles different component implementations based on the current frame of reference.
         Purpose: To swap entire component implementations or layouts based on various factors such as device type, screen size, user preferences, or application state. This allows for significant changes in the UI structure or functionality without changing the overall component API.
         Example use cases:

         - Switching between a mobile and desktop version of a navigation component
         - Changing a data display component from a table to a chart based on data volume
         - Selecting between different form layouts based on the complexity of the input required

       - Behavior: Modifies component behavior (e.g., interaction patterns, event handlers) based on the current frame of reference.
         Purpose: To alter how a component responds to user interactions or system events without changing its visual representation. This allows for dynamic adjustment of component functionality based on the current frame of reference.
         Example use cases:

         - Changing the scroll behavior of a list component based on device capabilities
         - Modifying the validation rules of a form field based on user role or input context
         - Adjusting the drag-and-drop behavior of elements based on the current application mode

       - Traits: Alters component traits or characteristics based on the current frame of reference.
         Purpose: To fine-tune the appearance or minor functional aspects of a component without changing its core implementation or behavior. This allows for subtle adjustments that can significantly impact the user experience.
         Example use cases:
         - Adjusting the color scheme of a component based on the current theme or color mode
         - Modifying the font size or style based on user preferences or accessibility settings
         - Changing the spacing or padding of elements based on the available screen space

     - Mouldables: Components that combine variants and other components to create flexible, frame-aware UI elements that can be shaped to fit various scenarios (e.g., List, Form, Layout).
       Purpose: To create higher-level components that leverage the Mouldable behaviors defined by variants to adapt to different frames of reference and requirements.
       Example use cases:

       - Implementing a MouldableList component that can switch between grid and list views, adjust its scrolling behavior, and modify its item rendering based on the current frame of reference
       - Creating a MouldableForm component that can change its layout, field validation, and submission behavior based on user roles and device capabilities
       - Developing a MouldableLayout component that can adapt its structure and content organization based on screen size, user preferences, and application state

     - Principles: Systems that manage cross-cutting concerns based on specific standards or guidelines.
       Purpose: To provide overarching systems that influence the behavior and appearance of multiple components across the application, ensuring consistency and adaptability at a global level.
       Example use cases:
       - Implementing a TypographyPrinciple that manages typography styles and rules based on chosen typographic standards
       - Creating an AccessibleColorPrinciple that handles color schemes based on accessibility guidelines like WCAG
       - Developing a LocalityPrinciple that manages localization and internationalization based on specific cultural and linguistic standards

## Collaboration Mechanisms

Components collaborate through various mechanisms to create a cohesive and adaptive user interface:

1. Composition: Higher-level components are composed of lower-level components. For example, an EntityCustomerCard uses MoleculeCard, AtomText, AtomImage, and AtomIcon.

2. Adaptation: Components like AdaptiveSwitch select the appropriate component based on querying the current reference frame, allowing for frame-aware rendering.

3. Principle Integration: Components interact with principles like Typography and AccessibleColor to ensure consistent styling and accessibility across the application, based on chosen standards and guidelines and the current reference frame.

4. Aggregation: Aggregate components like AggregateOrderedItems use composites like CompositeList to render collections of entities.

5. Frame-based Rendering: Entities like EntityCustomer and EntityOrder use AdaptiveSwitch to render different views based on the current frame of reference (e.g., profile view, card view, or list item view).

## Integration of UI Principles

Our component structure and collaboration mechanisms integrate the principles of Atomic UI, Mouldable UI, and Domain-Driven UI:

1. Atomic UI: The base layer of our architecture consists of atomic components (atoms, molecules, organisms) that provide consistent, reusable building blocks.

2. Mouldable UI: Adaptive components and composites allow the UI to adjust based on the current frame of reference, which includes user context, device capabilities, and cognitive models. Principles provide global adaptations for typography, color, and localization based on specific standards and guidelines.

3. Domain-Driven UI: Entity and aggregate components directly represent domain concepts, ensuring that the UI aligns with the underlying business model.

These principles work together to create a flexible, domain-aligned UI that can adapt to various frames of reference while maintaining consistency and reusability.

## Examples of Component Interactions

1. Customer Entity Rendering:
   The EntityCustomer component uses Assembly, Behavior, and Traits to render different views based on querying the current reference frame, which includes screen size and other relevant factors. It can display as EntityCustomerProfile for detailed views, EntityCustomerCard for grid layouts, or EntityCustomerRow for table layouts. Each of these views uses atomic components like AtomText and AtomImage, while adhering to principle rules for typography and color.

2. Order List Rendering:
   The AggregateOrders component uses a MouldableList, which leverages Assembly and Behavior to render either an OrganismList or OrganismGrid based on the current reference frame. Each item in the list is an EntityOrder, which adapts its rendering based on the frame, such as displaying a summary, detailed view, or list item view.

3. Accessibility and Localization:
   The TypographyPrinciple and AccessibleColorPrinciple collaborate with atomic components like AtomText and MoleculeBadge to ensure proper styling and color contrast based on chosen standards. The LocalityPrinciple influences text rendering and layout direction for internationalization. These principles work together to provide a consistent and accessible user interface across different frames of reference and locales, adhering to specific guidelines and standards.

By leveraging these structured interactions and collaborations, our UI components create a flexible, consistent, and domain-aligned user interface that can adapt to various frames of reference and user needs.
