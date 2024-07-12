<template>
    <div class="container" style="display: flex; flex-direction: column; min-height: 60vh;">
		<div class="row flex-grow-1">
			<div class="col-8">
				<div class="border rounded border-secondary" style="height: 100%;">
					<DailyUpdates/>
				</div>
			</div>
			<div class="col">
				<div class="border rounded border-secondary" style="height: 100%; padding: 5px 5px;">
					<Anniversaries/>
				</div>
			</div>
		</div>
	</div>
	<br>
	<div class="container" style="display: flex; flex-direction: column; min-height: 20vh;">
		<div class="row flex-grow-1">
			<div class="col-12">
				<div class="border rounded border-secondary" style="height: 100%; padding: 5px 5px;">
					Box Three
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { Options, Vue } from 'vue-class-component'
	import DailyUpdates from '@/components/home/DailyUpdates.vue' // @ is an alias to /src
	import Anniversaries from '@/components/home/Anniversaries.vue'
</script>
