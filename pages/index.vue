<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class PageIndex extends Vue {
  mounted() {
    this.$router.push(this.localePath({ name: "login" }));
  }
}
</script>

