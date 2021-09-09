<template>
  <div>
    <div v-if="loading">Loading</div>
    <div v-if="error">{{ error }}</div>
    <ul>
      <li v-for="sensor in sensorsBySeconds" :key="sensor.id">
        {{ sensor }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from '@/store/sensors';

export default {
  computed: {
    ...mapState({
      sensorsBySeconds: (state) => state.sensorsBySeconds,
      loading: (state) => state.loadings.loadSensorsBySeconds,
      error: (state) => state.errors.loadSensorsBySeconds,
    }),
  },
  created() {
    // 애가 호출됐는지 테스트
    this.loadSensorsBySeconds({
      shipName: 'lp01',
      startDate: '2021-08-01',
      endDate: '2021-08-02',
    });
  },
  methods: {
    ...mapActions(['loadSensorsBySeconds']),
  },
};
</script>

<style>

</style>
