<template lang="pug">
#home(v-loading="loading")
    //- header
        kanban-tabs(:data="tabList" :fadeOut="true")
    body
        article-item(v-if="haveArticle" :data="articleList")
        no-data-search(v-else)
</template>

<script>
import { mapState } from "vuex";
import kanbanTabs from "@/components/kanban-tabs";
import articleItem from "@/components/article-item";
import noDataSearch from "@/components/no-data-search";

export default {
  name: "home",

  components: {
    kanbanTabs,
    articleItem,
    noDataSearch
  },

  data() {
    return {
      loading: false,
      articleList: []
    };
  },

  computed: {
    ...mapState(["tabList"]),

    haveArticle() {
      return this.articleList.length !== 0;
    }
  },

  created() {
    this.getArticle();
  },

  methods: {
    async getArticle() {
      this.loading = true;

      const allKanban = await this.$database.get("data");
      const result = [];
      if (allKanban === null) this.articleList = [];
      else {
        Object.keys(allKanban).forEach(key => result.push(...allKanban[key]));
        result.sort((a, b) => b.sortTime - a.sortTime);
        this.articleList = result;
      }

      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
