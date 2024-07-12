import { Product } from  '../models/Product' 

export class ProductListComp
{
	public GetProducts(input: string): Product[] 
	{
		console.log("success")
		// Pretend to get product info
		let mockProducts: Product[] = 
		[
			{ProductId: 1, SKU: "FUN1001", Title: "Grape Costume", Vendor: "Bayi", Quantity: 40, Cost: 14.99, Price: 59.99},
			{ProductId: 2, SKU: "FUN1002", Title: "Banana Costume", Vendor: "Bayi", Quantity: 40, Cost: 14.99, Price: 59.99},
			{ProductId: 3, SKU: "FUN1003", Title: "Apple Costume", Vendor: "Bayi", Quantity: 40, Cost: 14.99, Price: 59.99},
			{ProductId: 4, SKU: "FUN1004", Title: "Broccoli Costume", Vendor: "Bayi", Quantity: 40, Cost: 14.99, Price: 59.99},
			{ProductId: 5, SKU: "FUN1005", Title: "Tomato Costume", Vendor: "Bayi", Quantity: 40, Cost: 14.99, Price: 59.99},
		]

		let filteredProducts: Product[] = []; 

		for(let i = 0; i < mockProducts.length; i++)
		{
			if (mockProducts[i].SKU.startsWith(input)) 
			{
				filteredProducts.push(mockProducts[i])	
			}
		}

		return filteredProducts;
	}
}
