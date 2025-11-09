<template>
  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
    <div class="single-skill text-center">
      <div class="progress-circular">
        <svg class="circle" viewBox="0 0 120 120">
          <g>
            <circle
              class="bg"
              cx="60"
              cy="60"
              r="54"
              style="transform: rotate(-90deg); transform-origin: 60px 60px"
            />
            <circle
              class="progress"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="dashOffset"
              cx="60"
              cy="60"
              r="54"
              style="transform: rotate(-90deg); transform-origin: 60px 60px"
            />
          </g>
          <text x="60" y="68" text-anchor="middle" class="percentage">
            {{ displayedValue }}%
          </text>
        </svg>
        <h4 class="mt-15 text-center">{{ title }}</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  title: String,
  percentage: Number,
});

const displayedValue = ref(0);
const circumference = 2 * Math.PI * 54;
const dashOffset = ref(circumference);

const animate = () => {
  const duration = 2000; // 2 seconds
  const start = performance.now();

  const frame = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // smooth easing
    displayedValue.value = Math.round(eased * props.percentage);
    dashOffset.value = circumference * (1 - eased * (props.percentage / 100));
    if (progress < 1) requestAnimationFrame(frame);
  };

  requestAnimationFrame(frame);
};

onMounted(animate);
</script>

<style scoped>
.single-skill {
  margin-bottom: 32px;
  text-align: center;
  width: 190px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.progress-circular {
  position: relative;
  width: 190px;
  height: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 991px) {
  .single-skill,
  .progress-circular {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 575px) {
  .single-skill,
  .progress-circular {
    width: 120px;
    height: 120px;
  }
}
.bg {
  fill: none;
  stroke: #f1f2f6;
  stroke-width: 12;
}

.progress {
  fill: none;
  stroke: #9b9db1;
  stroke-width: 12;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.3s ease;
}

.percentage {
  fill: #2e2e37;
  font-size: 28px;
  font-weight: 600;
  dominant-baseline: middle;
}

/* Progress Circular h4 Styles */
.progress-circular h4 {
  font-size: 21px;
}

@media (max-width: 1199.98px) {
  .progress-circular h4 {
    font-size: 22px;
  }
}

@media (max-width: 991.98px) {
  .progress-circular h4 {
    font-size: 22px;
  }
}

@media (max-width: 767.98px) {
  .progress-circular h4 {
    font-size: 22px;
  }
}

@media (max-width: 575.98px) {
  .progress-circular h4 {
    font-size: 25px;
    line-height: 1.23;
  }
}
</style>
