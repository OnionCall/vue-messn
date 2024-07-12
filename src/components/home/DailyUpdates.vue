<template>
	<div class="container">
		<h3 class="border-bottom border-success fw-bold" style="width: 100%">
			Daily Updates
		</h3>
		<br>
		<div class="col">
			<div class="list-group gap-3 text-start">
				<div class="border rounded border-secondary list-group-item-d-flex justify-content-between align-items-start" v-for="update in updates">
					<div class="ms-2 me-auto" style="padding: 2px 2px"> 
						<div class="fw-bold"> {{ update.Title }} </div>
						{{ update.Contents }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	interface Update 
	{
		Title: string,
		Contents: string
	}

	let updates = ref<Update[]>([
		{ Title: "1 Billion Dollars, new record", Contents: "See Title" },
		{ Title: "The Fish Are Gone", Contents: "Where are all the fish? Who knows" }
	])
</script>
