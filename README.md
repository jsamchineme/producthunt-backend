### Description
A product management system

### Features
- User Signup
- User Login
- Create new product
- Edit product
- Delete product
- Change product visibility
- Review a product
- Cart management
    - Add product to cart
    - remove product from cart
    - update an already added product in the cart
    - get checkout summary

### Resources / Models
- Product
- Review
- Cart
- Cart Item
- User

### REST API
- User Signup - POST "/signup"
- User Login - POST "/login"
- Create new product - POST "/products"
- Edit product - PUT "/products/:productId"
- Delete product - DELETE "/products/:productId"
- Change product visibility - PATCH "/products/:productId/visibility"
- Review a product - POST "/products:/productId/reviews" | "/reviews" - { comment: "awesome product!", productId: 1 }
- Delete a product review - DELETE "/products:/productId/reviews/:reviewId"
- Get reviews under a product - GET "/products:/productId/reviews"
- Cart management 
    - Add product to cart - A new cart is created when user selects the first product, subsequent products selected would be added into that cart - POST "products:/productId/cart"
    - remove product from cart - DELETE "products:/productId/cart"
    - update an already added product in the cart "PATCH "products:/productId/cart"
    - get checkout summary
