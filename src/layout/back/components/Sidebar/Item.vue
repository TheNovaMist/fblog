<script>
import { h } from "vue";

export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    function render() {
      const { icon, title } = props;
      const vnodes = [];

      if (icon) {
        if (icon.includes("el-icon")) {
          vnodes.push(h("i", { class: [icon, "sub-el-icon"] }));
        } else {
          vnodes.push(h("svg-icon", { iconClass: icon }));
        }
      }

      if (title) {
        vnodes.push(h("span", { slot: title, innerHTML: title }));
      }
      return vnodes;
    }

    // 返回渲染函数
    return render;
  },
};
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
