<template>
    <div class="container" style="display: flex; flex-direction: column; min-height: 50vh;">
		<div class="row flex-grow-1">
			<div class="col-4 border rounded border-secondary" style="height: 40px">
				<div class="input-group mb-3">
					<input type="text" class="form-control" placeholder="SKU" v-model="input">
					<div input="input-group-append">
						<button class="btn" type="button">Search</button>
					</div>
				</div>
			</div>
			<div class="col">
			</div>
		</div>
	</div>
	<br>
	<div class="container" style="display: flex; flex-direction: column; min-height: 20vh;">
		<div class="row flex-grow-1">
			<div class="col-12">
				<div class="overflow-auto p-3 bg-body-tertiary" style="border: 2px solid #ddd; max-height: 80%; border-radius: 5px; padding: 5px 5px;">
					<ProductList search="${ input }"></ProductList>	
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import DailyUpdates from '@/components/home/DailyUpdates.vue' // @ is an alias to /src
	import { ref } from 'vue'
	import ProductList from '@/components/product/ProductList.vue'

	let input = ref();
</script>
