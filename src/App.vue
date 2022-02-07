<template>
  <div class="t">
    <vue-tooltip
      :text="{
        header: `${header}`,
        subtitle: `${subtitle}`,
        body: `${body}`
      }"
      position="left"
    >
      tooltip
    </vue-tooltip> 
  </div>
</template>
<script>
//import Tooltip from "@/components/Tooltip.vue";
export default {
  name: "App",
  components: {
    //Tooltip,
  },
  data() {
    return {
      header: "beyza",
      subtitle: "erkan",
      body: "here",
    };
  },
};
</script>
<style>
.t {
  margin-left: 45%;
  margin-top: 20%;
}
</style>
