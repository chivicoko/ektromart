# Ektromart

Ektromart is a modern product listing/management web application developed with Next.js, TypeScript, and TailwindCSS. It provides robust functionality for managing products, including CRUD operations, filtering, and extra features such as fetching products from an external API.

## Features

- **CRUD Functionality:** Create, Read, Update, and Delete products.
- **Filter Products:** Filter products by category and price.
- **Delete All Products:** Option to bulk delete all products.
- **Modals:** User-friendly modals for displaying product details, forms, and delete prompts.
- **Validation:** Forms input states are all well validated and updated.
- **API Integration:** Fetch additional products from an external API (dummyjson.com).
- **Single Product View:** Dedicated route to view individual products fetched from the external API.
- **SEO Optimization:** Ektromart includes SEO optimization with 
    - meta tags for titles, descriptions, other meta tags
    - use of semantic html tags appropriately
    - use of sitemap configuration
    improving visibility on search engines, site management, search engine crawling and indexing, overall user experience.
- **Fast Loading:** Optimized for fast loading times, ensuring a smooth user experience.
- **Responsiveness:** Optimized for all devices and users, ensuring a wide range of users and platforms and a smooth user experience.
- **LocalStorage Usage:** Products managed through CRUD operations are persisted using localStorage, ensuring data is retained even after page reloads.

## Preview

You can preview the live application [here](https://ektromart.vercel.app/).
Add your products by clicking the 'Add Product' button. ...
Navigate to the extra products (fetched from dummyjson.com) page by clicking on the 'Extras' button on the navbar.

## API

Access the product API endpoint [here](https://ektromart.vercel.app/api/products).

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/chivicoko/ektromart.git
    cd ektromart
    ```

2. **Install Dependencies**

    Install the required npm packages:

    ```bash
    npm install
    ```

## Usage

To run the development server and view the application:

```bash
npm run dev
```

This will start the application locally, allowing you to view and interact with the product management features.
Add your products by clicking the 'Add Product' button. ...
Navigate to the extra products (fetched from dummyjson.com) page by clicking on the 'Extras' button on the navbar.


Happy Hacking!