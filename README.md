### Description
Product Hunt allows companies get customer reviews and insights on their products

### Features
- User Signup
- User Login
- Create new product
- Edit product
- Delete product
- Review a product

### Resources / Models
- Product
- Review
- User

### REST API
- User Signup - POST "/signup"
- User Login - POST "/login"
- Create new product - POST "/products"
- Edit product - PUT "/products/:productId"
- Delete product - DELETE "/products/:productId"
- Review a product - POST "/products:/productId/reviews" | "/reviews" - { comment: "awesome product!", rating: 5, productId: 1 }
- Delete a product review - DELETE "/products:/productId/reviews/:reviewId"
- Get reviews under a product - GET "/products:/productId/reviews"
