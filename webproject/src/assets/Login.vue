<template lang="pug">
	
	#app
		form(method="post", action="#")
			.row.uniform
				div(class="6u 12u$(xsmall)")
					input(type="text", name="name", id="name", placeholder="Name")
				div(class="6u$ 12u$(xsmall)")
					input(type="password", name="password", id="password", placeholder="Password")
				div(class="12u$")
					input(type="text", name="email", id="email", placeholder="Email")

</template>

<script>
	
</script>

<style lang="css">
	
</style>