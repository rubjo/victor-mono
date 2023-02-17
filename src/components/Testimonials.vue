<template>
  <div class="content">
    <div
      id="testimonials"
      class="scroll-head"
    />
    <el-row>
      <el-col>
        <h1 class="centre">
          <em>What people are saying</em>
        </h1>
      </el-col>
    </el-row>
    <el-row
      justify="center"
      :gutter="20"
    >
      <el-col
        v-for="testimonial in selectedTestimonials"
        :key="testimonial + theme"
        :xs="24"
        :lg="6"
      >
        <Tweet
          :id="testimonial"
          :options="{ theme, conversation: 'none', align: 'center' }"
        />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Tweet } from 'vue-tweet-embed'

export default {
  name: 'Testimonials',
  components: { Tweet },
  props: {
    theme: {
      type: String,
      default: localStorage.getItem('theme') || 'dark'
    }
  },
  data () {
    return {
      testimonials: [
        '1142187688751071233',
        '1144627524078571521',
        '1148597430411235330',
        '1149023631835635713',
        '1159431742245261313',
        '1178698424109195265',
        '1188221984959676416',
        '1188916442902626304',
        '1201505985984110592',
        '1249238897994780672',
        '1292503834497974272',
        '1318345135588052993',
        '1339977743694499842',
        '1344488694804201472',
        '1359508666446094336',
        '1430565916815855624',
        '1454915035289972745',
        '1463246176652693504',
        '1491144649192648704',
        '1508433531365515265',
        '1515362218203881472',
        '1553400251842969600',
        '1625902148331470848'
      ],
      selectedTestimonials: []
    }
  },
  mounted () {
    // Shuffle array
    const shuffled = this.testimonials.sort(() => 0.5 - Math.random())
    // Get sub-array of first n elements after shuffled
    this.selectedTestimonials = shuffled.slice(0, 4)
  }
}
</script>

<style lang="scss" scoped>
  ::v-deep .twitter-tweet {
    min-height: 1px;
  }

  ::v-deep .twitter-tweet iframe {
    min-height: 1px !important;
  }
</style>
