
const Home = {
  name: 'Home',

  components: {},

  data () {
    return {

    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  mounted () {

  },

  watch: {

  },

  computed: {

  },

  methods: {
    handleScroll (event) {
      
    },
  }
}

export default Home
