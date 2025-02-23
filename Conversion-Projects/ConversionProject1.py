products = [{
    "name": "Milk",
    "price": 27,
    "description": "Regular milk."
},
{

    "name": "Nipple rings", 
    "price": 30,
    "description": "When someone is a little too kinky"
},
{
 
    "name": "Downbad Manga",
    "price": 19,
    "description": "18+ Dont let your wife see this."
}]

def get_product_sum(my_products_array):
    sum = 0
    for product in my_products_array:
        sum += product["price"]
    return sum
print(get_product_sum(products))
    

