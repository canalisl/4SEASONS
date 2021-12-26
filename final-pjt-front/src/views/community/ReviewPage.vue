<template>
  <div>
    <review-detail :reviews="reviews">

    </review-detail>
    <h2>review: {{ this.$route.params.review_id }}</h2>
  </div>
</template>

<script>
import ReviewDetail from '@/components/ReviewDetail.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ReviewPage',
  components: {
    ReviewDetail,
  },
  computed: {
    ...mapState([
      'reviews',
    ])
  },
  methods: {
    ...mapActions([
      'getReviewDetail',
    ])
  },
  created() {
    this.getReviewDetail({id: this.$route.params.id})
  }
}
</script>

<style>

</style>