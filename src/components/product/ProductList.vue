<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<table class="table table-striped">
					<thead>
						<tr>
							<th scope="col"> SKU </th>
							<th scope="col"> Title </th>
							<th scope="col"> Vendor </th>
							<th scope="col"> Quantity </th>
							<th scope="col"> Price </th>
							<th scope="col"> Cost </th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="product in products">
							<td>{{ product.SKU }}</td>
							<td>{{ product.Title }}</td>
							<td>{{ product.Vendor }}</td>
							<td>{{ product.Quantity }}</td>
							<td>{{ product.Cost }}</td>
							<td>{{ product.Price }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>


<script setup lang="ts">
	import { ref } from 'vue'
	import { ProductListComp } from './composables/ProductListComp'
	import { Product } from './models/Product'

	let productList = new ProductListComp();
	let products = productList.GetProducts(); 

</script>
