from data.products import products
from data.categories import categories

# target_id = 1

# for cat in categories:
#      if cat.get('id') == target_id:
#            matching_products = [prod for prod in products if prod['categoryid'] == cat.get('id')]
# if matching_products:
#        for product in matching_products:
#             print(product['name'])         
# else:
#       print('Did not find matching product')

target_id = 3

for cat in categories:
      if cat.get('id') == target_id:
            matching_products = [prod for prod in products if prod['categoryid'] == cat.get('id') if prod['price'] <= 40]
if matching_products: 
      for product in matching_products:
            print(product['name'])
else:
      print('Did not find matching product.')