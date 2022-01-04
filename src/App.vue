<template>
  <div class="t">
    <Tooltip
      :text="{
        header: `${text}`,
        subtitle: `${text}`,
        body: `${text}`
      }"
      position="bottom"
    >
      <slot>
        <div>beyza erkan</div>
      </slot>
    </Tooltip>
  </div>
</template>
<script>
import Tooltip from '@/components/Tooltip.vue';
export default {
  name: 'App',
  components: {
    Tooltip,
  },
  data(){
    return {
      text: "beyza",
    }
  }
};
</script>
<style>
.t{
  margin-left: 45%;
  margin-top:20%;

}
</style>