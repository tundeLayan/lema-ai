# React.js Project Structure and Coding Guidelines (Iteration 1)

This document outlines a standardized approach to organizing OUR codebase and writing maintainable, scalable code for our React.js projects. By adhering to these guidelines, we can ensure consistency across projects, improve collaboration, and reduce technical debt.

## Why Structure Matters

A well-organized project structure is not just about aesthetics; it's a critical factor in the long-term success of a project. It:

- **Improves Readability:** Makes it easier for developers to find the code they need.
- **Enhances Maintainability:** Simplifies the process of making changes and fixing bugs.
- **Promotes Scalability:** Helps the project grow gracefully as new features are added.
- **Facilitates Collaboration:** Ensures that all team members understand the codebase and can contribute effectively.

## Guiding Principles

Our project structure is based on three fundamental principles:

1.  **Modules:** We organize our code into modules, where each module encapsulates a specific feature or set of related functionalities. For example, in a fintech dashboard, we might have a "Transactions" module that contains components, types, and utilities related to transaction listing, details, refunds, and disputes.

2.  **Colocation:** Keeping related components, types, hooks, and utilities together within a module's `_module` folder. This improves code locality and makes it easier to understand how different parts of a feature work together.

3.  **Single Responsibility Principle (SRP):** Each file and folder should have a single, well-defined purpose. This reduces complexity, improves testability, and makes code more reusable.

## What to Expect in This Guide

In the following sections, we'll dive into the details of our project structure, including:

- **Folder Structure:** A detailed breakdown of the folders and their purpose.
- **Naming Conventions:** Clear guidelines for naming files and folders.
- **Tooling Recommendations:** Suggestions for tools like ESLint and Prettier to enforce our standards.
- **Best Practices:** Additional tips for writing clean and maintainable React.js code.

By adhering to these principles and guidelines, we can create a codebase that is not only functional but also a pleasure to work with.

## Folder Structure Deep Dive (v3)

### 1. `src/`

- **Purpose:** The heart of your React.js application. Contains all the components, pages, and modules that define your application's UI and routing.
- **Contents:**
    - `module-name/`: Folders for each module in your application (e.g., `auth`, `dashboard`, `products`).
    - `_module/`: A special module for shared components, hooks, types, and utilities that can be used across multiple modules. Note the underscore prefix, which prevents Next.js from recognizing this as a routable module.
        - `components/`
            - `Button.tsx`
            - `LoadingSpinner.tsx`
            - ...
        - `hooks/`
            - `useFetch.ts`
            - ...
        - `types/`
            - `standard-api-response-type.ts`
            - ...
        - `utils/`
            - `format-amount-util.ts`
            - `format-date-util.ts`
            - ...
    - `global.css`
        - Global stylesheets that apply to the entire application.
    - `layout.tsx`
        - The default layout component for your application (optional).
    - `page.tsx`
        - The root page component that is rendered at the `/` route.

### 2. `module-name/_module/` (Example: `auth/_module/`, `products/_module/`)

- **Purpose:** Contains all the components, types, hooks, and utilities specific to a particular module. The underscore prefix (`_`) prevents Next.js from recognizing this as a routable segment.
- **Contents (not all folders are mandatory):**
    - `components/`
        - Contains reusable React components specific to the module. Use nested subfolders to organize components by type or purpose (e.g., `forms`, `modals`).
    - `constants/`
        - Stores constant values related to the module (e.g., API endpoints, error codes, configuration options).
    - `hooks/`
        - Contains custom React hooks specific to the module.
    - `providers/`
        - Houses React Context providers that manage state or data relevant to the module.
    - `services/`
        - Contains functions or classes that handle data fetching, business logic, and interactions with external APIs or services related to the module.
    - `types/`
        - Defines TypeScript types, interfaces, and enums specific to the module.
    - `utils/`
        - Holds utility functions specific to the module.

### Example Application Directory Tree

```markdown
- app/
    - \_module/
        - components/
            - Button.tsx
            - LoadingSpinner.tsx
            - ...
        - hooks/
            - useFetch.ts
            - ...
        - types/
            - standard-api-response-type.ts
            - ...
        - utils/
            - format-amount-util.ts
            - format-date-util.ts
            - ...
        - api/
            - get-task/
                - route.ts
            - ...
    - products/
        - \_module/
            - components/
                - ProductCard.tsx
                - ProductList.tsx
                - forms/
                    - AddProductForm.tsx
                    - EditProductForm.tsx
                - modals/
                    - ProductDetailsModal.tsx
                    - ...
            - constants/
                - product-endpoints.ts
                - product-error-codes.ts
                - ...
            - hooks/
                - useProductSearch.ts
                - ...
            - providers/
                - ProductProvider.tsx
                - ...
            - services/
                - product-service.ts
                - product-api.ts
                - ...
            - types/
                - product-type.ts
                - ...
            - utils/
                - format-product-price-util.ts
                - ...
            - api/
                - get-product/
                    - route.ts
                - ...
        - page.tsx
        - layout.tsx
    - global.css
    - layout.tsx
    - page.tsx
```

## Naming Conventions

Clear and consistent naming conventions are essential for maintaining a readable and maintainable codebase. Here are our recommended naming guidelines:

| File/Folder Type      | Convention                 | Examples                                                                                               |
| :-------------------- | :------------------------- | :----------------------------------------------------------------------------------------------------- |
| Components            | PascalCase                 | `ProductCard.tsx`, `LoginForm.tsx`, `AppLayout.tsx`                                                    |
| Constants             | kebab-case                 | `auth-endpoints.ts`, `product-constants.ts`, `module-name-error-codes.ts`                              |
| Hooks                 | camelCase                  | `useFetch.ts`, `useLocalStorage.ts`, `useProductSearch.ts`                                             |
| Types (Files)         | kebab-case + `-type.ts`    | `auth-user-type.ts`, `product-filter-options-type.ts`                                                  |
| Types (Definitions)   | `TPascalCase`              | `type TProduct = { id: number; name: string };`, `type TAPIResponse<T> = { data: T; error?: string };` |
| Utils                 | kebab-case + `-util.ts`    | `format-amount-util.ts`, `get-current-user-util.ts`, `module-name-util-name-util.ts`                   |
| Api                   | kebab-case / `route.ts`    | `get-products/route.ts`, `get-tasks/route.ts`,                                                         |
| Services              | kebab-case + `-service.ts` | `auth-service.ts`, `product-service.ts`                                                                |
| API Clients (if used) | kebab-case                 | `auth-api.ts`, `product-api.ts`                                                                        |

**Explanation:**

- **Components:** PascalCase (e.g., `ComponentName.tsx`) for clarity and consistency with React component naming.
- **Constants:** kebab-case for all constant files within a module. Include the module name to avoid naming conflicts.
- **Hooks:** `use-` prefix with camelCase (e.g., `useFetch.ts`) for easy identification as custom hooks.
- **Types (Files):**
    - kebab-case with `-type.ts` suffix (e.g., `auth-user-type.ts`) to clearly indicate type definitions.
- **Types (Definitions):**
    - `TPascalCase` (e.g., `type TProduct = ...`) for type definitions within type files.
    - The "T" prefix distinguishes types from other variables or functions.
    - PascalCase makes it easier to identify and use the types in your code.
- **Utils:** kebab-case with `-util.ts` suffix for all utility files. Include the module name to avoid naming conflicts. (e.g., `products/utils/format-product-price-util.ts`)
- **Api:** kebab-case as folder with `route.ts` as constant file name (e.g., `products/api/get-products/route.ts`)
- **Services:** kebab-case with `-service.ts` suffix for all service files. (e.g., `products/services/product-service.ts`)
- **API Clients (if used):** kebab-case to centralize API interactions for the module.

**Key Points:**

- Files within folders like `constants`, `utils`, and `services` should use kebab-case file names, with the specified suffixes where applicable.
- For modules, include the module name as a prefix in file names to prevent collisions when importing across modules.

**The Importance of `_module`**

The `_module` convention is a strategic decision that brings several benefits:

1.  **Routing Exclusion:** Since Next js is a framework built ontop of React which handles a lot of Challenges experienced in the Vanilla React app, there is a possibility that this application might be converted to a Next Js app in the future, the underscore used here is taking Next Js' route exclusion into consideration. The underscore (`_`) prefix signals to Next.js that this folder should not be treated as a route. This prevents potential routing conflicts and keeps your application's URL structure clean.

2.  **Clear Separation:** By nesting the module's core implementation details within `_module`, we create a clear separation between the module's public interface (the `page.tsx` file) and its internal workings.

3.  **Consistency:** Both shared code (in `app/_module/`) and module-specific code follow the same convention, enhancing predictability and ease of navigation throughout your project.

_PS: It is important to note that not everything can go in the `_module` folder. For one, the underscore prefix means it will never be recognised by the nextjs routing engine. This in turn means anything inside it will not be usable as part of url segments and or paths. In summary, any special file or nextjs directory documented [here](https://nextjs.org/docs/getting-started/project-structure) should never be put in the `_module` folder. Examples include page.tsx, loading.tsx, layout.tsx, error.tsx, not-found.tsx, template.tsx e.t.c. Refer to the documentation for more information._

## Conclusion

By adhering to the project structure, naming conventions, and coding guidelines outlined in this document, we can create React.js applications that are:

- **Organized:** A clear and consistent structure makes it easy to find and understand code.
- **Maintainable:** Well-named files and modules with single responsibilities simplify updates and bug fixes.
- **Scalable:** The modular approach allows our application to grow gracefully with new features.
- **Collaborative:** Consistent standards empower the entire team to contribute effectively.

Remember, these are guidelines, not rigid rules. Feel free to adapt them to your specific project needs, but always prioritize clarity, consistency, and the single responsibility principle. It's encouraged that you share your feedback and suggestions for improving these guidelines as you gain experience with them.

## Frequently Asked Questions (FAQ)

**Q1: Can I add more subfolders within a module if needed?**

A1: Absolutely! The provided structure is a guideline. You can add more subfolders within a module as your project grows and requires finer-grained organization. Just remember to adhere to the naming conventions and the single responsibility principle.

**Q2: What if a component is used in multiple modules?**

A2: If a component is truly shared across modules, move it to the `/app/_module/components` folder. This ensures reusability and avoids code duplication.

**Q3: How do I handle very large modules?**

A3: If a module becomes too large or complex, consider splitting it into smaller, more focused modules. This can improve maintainability and make your codebase more manageable.

**Q4: Why should I prefix type definitions with a "T"?**

A4: The "T" prefix serves as a visual cue to quickly identify type definitions within your code. It helps distinguish them from other variables and functions, improving code readability.

**Q5: Is it okay to use abbreviations in type names?**

A5: While abbreviations can sometimes be helpful for brevity, prioritize clarity and readability. If an abbreviation is not widely understood within your team, it's best to use the full term to avoid confusion. e.g. TTreasurySingleAccount instead of TTSA

**Q6: Can I deviate from the naming conventions for specific cases?**

A6: In general, consistency is key. However, there might be exceptions where deviating from the convention makes more sense. In such cases, document the reason for the deviation clearly in the code comments.

**Q7: What tools can help me enforce these guidelines?**

A7: ESLint and Prettier are excellent tools for enforcing naming conventions and code style. Configure them to match the guidelines outlined in this document, and they will automatically format your code and flag any violations.

**Q8: Where can I find more information about React.js best practices and TypeScript naming conventions?**

A8: The official React.js documentation and the TypeScript style guide are excellent resources for further guidance. You can also consult online tutorials and community forums for additional tips and best practices.

**Q9: Why is the shared module named `_module` instead of just `module`?**

A9: As earlier highlighted, we are taking into consideration that we might migrate to a Next Js App in the future. The underscore prefix (`_`) in `_module` is a convention used to prevent Next.js from recognizing this folder as a route. Since the `_module` folder contains shared components, hooks, types, and utilities that are not meant to be accessed directly through URLs, the underscore ensures that Next.js ignores it for routing purposes. This applies to both the main shared module (`app/_module/`) and the module-specific shared folders (`module-name/_module/`).

**Q10: Why not have a single `_module/types/index.ts` file that exports all types?**

A10: While having a single `index.ts` file might seem convenient, it can quickly become bloated, prone to git conflicts and difficult to manage as a project grows. By keeping each type in its own file with a descriptive name (e.g., `form-props-type.ts`, `select-props-type.ts`) and exporting them independently, we improve organization, maintainability, and discoverability. This approach aligns with the single responsibility principle, where each file has a focused purpose. Also, nextjs has a build-bundle step before code is shipped, so all related modules get bundled into a single ship-able transpiled javascript file.

## Appendix: File Content Examples

This section provides examples of the typical content you might find within each type of file, following our established naming conventions. These examples are intended to offer context and insights into the purpose and usage of different files within the project structure.

### Components (`ComponentName.tsx`)

```typescript
// products/_module/components/ProductCard.tsx

import React from 'react';
import type { TProductCardProps } from '../types/product-card-props-type'; // Import the type definition

const ProductCard: React.FC<TProductCardProps> = ({ product }) => (
  <div>
    <h3>{product.name}</h3>
    <p>{formatProductPrice(product.price)}</p>
    {/* ... additional product details */}
  </div>
);

export default ProductCard;
```

### Constants (module-name-constants.ts)

```typescript
// products/_module/constants/product-endpoints.ts

export const PRODUCT_ENDPOINTS = {
    GET_PRODUCTS: '/api/products',
    GET_PRODUCT_BY_ID: '/api/products/{id}',
    // ... other product-related endpoints
};
```

### Hooks (`use-hook-name.ts`)

```typescript
// _module/hooks/use-fetch.ts

import { useState, useEffect } from 'react';
import type { TAPIResponse } from '../types/standard-api-response-type';

export function useFetch<T>(url: string): TAPIResponse<T> {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result.data);
            } catch (err) {
                setError('An error occurred while fetching data.');
            }
        };

        fetchData();
    }, [url]);

    return { data, error };
}
```

### Types (`module-name-type-name-type.ts`)

```typescript
// products/_module/types/product-type.ts

export type TProduct = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    // ... other product properties
};
```

### Utils (`module-name-util-name-util.ts`)

```typescript
// products/_module/utils/format-product-price-util.ts

import { formatAmountUtil } from '_module/utils/format-amount-util';

export const formatProductPrice = (price: number) => {
    return formatAmountUtil(price, 'USD'); // Example formatting function
};
```

### Api (Server Call) (`api-name/route.ts`)

```typescript
// products/api/get-products/route.ts

export async function GET(req: NextRequest) {
    try {
        const response = await axios.get(`${PRODUCT_ENDPOINTS.GET_PRODUCTS}`);

        const data = reponse.data;
        return Response.json(data);
    } catch (err: any) {
        return Response.json(err?.response?.data);
    }
}
```

### Services (`module-name-service-name-service.ts`)

```typescript
// products/_module/services/product-service.ts

import { productApi } from './product-api';
import type { TProduct } from '../types/product-type';

export class ProductService {
    async getProducts(): Promise<TProduct[]> {
        const response = await productApi.get(PRODUCT_ENDPOINTS.GET_PRODUCTS);
        // ... (error handling and data transformation)
    }
    // ... (other product-related service methods)
}
```

### API Clients (if used) (`module-name-api.ts`)

```typescript
// products/_module/product-api.ts

import axios from 'axios';
import type { TProduct } from '../types/product-type';
import { PRODUCT_ENDPOINTS } from '../constants/product-endpoints';
import { TStandardApiResponse } from '_module/types/standard-api-response-type';

export async function getProducts(): Promise<TStandardApiResponse<TProduct[]>> {
    const response = await axios.get(PRODUCT_ENDPOINTS.GET_PRODUCTS);
    return response.data;
}
```
