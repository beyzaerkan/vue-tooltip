<template>
  <div :class="`tooltip-component ${position}`">
    <slot></slot>
    <span class="tooltip-text">
      <div class="text-left">
        <div class="head">
          <h3>
            <b>{{ text.header }}</b>
          </h3>
        </div>
        <div class="subtitle">
          <h5>
            {{ text.subtitle }}
          </h5>
        </div>
        <div class="body">
          <p>{{ text.body }}</p>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
  props: {
    text: Object,
    position: String,
  },
};
</script>

<style scoped>
.tooltip-component {
  position: relative;
  opacity: 5;
  display: inline-block;
}
.tooltip-component .tooltip-text {
  visibility: hidden;
  width: 300px;
  background-color: #f4f4f4;
  color: #000;
  text-align: left;
  border-radius: 6px;
  padding: 5px 5px;
  position: absolute;
  transition: opacity 0s;
  border: 5px solid #bcbec2;
  z-index: 1;
}
.tooltip-component .tooltip-text p {
  font-size: 0.875rem;
}

.tooltip-component .tooltip-text::after {
  content: "";
  position: absolute;
  border-style: solid;
  border-color: #bcbec2 transparent transparent transparent;
  content: "";
  position: absolute;
  border-width: 10px;
  border-style: solid;
}
.tooltip-component:hover .tooltip-text {
  visibility: visible;
  opacity: 0.9;
}

/* TOP*/
.top .tooltip-text {
  width: 120px;
  bottom: 150%;
  left: 50%;
  margin-left: -60px;
}
.top .tooltip-text::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -10px;
  border-width: 9px;
  border-style: solid;
  border-color: #bcbec2 transparent transparent transparent;
}

/* RIGHT*/
.right .tooltip-text {
  top: -60px;
  left: 120%;
}
.right .tooltip-text::after {
  content: " ";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -10px;
  border-width: 9px;
  border-style: solid;
  border-color: transparent #bcbec2 transparent transparent;
}

/* BOTTOM*/
.bottom .tooltip-text {
  width: 120px;
  top: 100%;
  left: 50%;
  margin-left: -60px;
}
.bottom .tooltip-text::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -10px;
  border-width: 9px;
  border-style: solid;
  border-color: transparent transparent #bcbec2 transparent;
}

/* LEFT*/
.left .tooltip-text {
  top: -60px;
  right: 120%;
}
.left .tooltip-text::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 100%;
  margin-top: -10px;
  border-width: 9px;
  border-style: solid;
  border-color: transparent transparent transparent #bcbec2;
}
</style>
