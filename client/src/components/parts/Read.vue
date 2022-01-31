<template>
  <div class="read">
    <Header />
    <div class="content">
      <v-sheet min-height="100vh" style="margin-bottom: 5rem;">
        <v-row justify="center">
          <v-col cols="11" md="8">
            <h1
              v-if="selected.content"
              class="content_title text-center"
              v-text="selected.content.title"
            ></h1>
            <div class="mb-5 mt-5 text-center">
              <v-avatar>
                <img
                  src="../../assets/admin.jpg"
                  alt="Dinh Pham"
                />
              </v-avatar>
              <span class="author_section" v-text="selected.author.name"></span>
              <span class="ml-3 mr-2"><v-icon>mdi-minus</v-icon></span>
              <span class="author_section" v-text="selected.createdAt"></span>
            </div>
            <v-sheet class="mt-4" height="400" v-if="selected.content.src">
              <v-img :src="selected.content.src" height="400"></v-img>
            </v-sheet>
            <v-card-actions class="mt-5">
              <v-row align="center">
                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  icon
                  class="mx-1"
                  small
                >
                  <v-icon color="black" size="17px">
                    {{ icon }}
                  </v-icon>
                </v-btn>
                <div
                  class="ml-5"
                  style="border-top: 2px dashed #BDBDBD; width: 150px"
                ></div>
              </v-row>
            </v-card-actions>
            <div
              v-if="selected"
              class="content_text mt-10"
              v-text="selected.content.text"
            ></div>
          </v-col>
        </v-row>
      </v-sheet>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer";
import Header from "./Header";
export default {
  name: "Read",
  components: { Footer, Header },
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
    };
  },
  // computed
  computed: {
    selected() {
      return this.$store.state.selected;
    }
  },
  // before destroy
  beforeDestroy() {
    this.$store.commit("updateselected", {});
  },
  // mounted
  mounted() {
    if (!this.selected) {
      this.$router.push("/");
    }
  }
};
</script>

<style scooped lang="css">
.content_title {
  font-family: "Montserrat", sans-serif;
  font-size: 1.5em;
  margin-top: 1.5rem;
  color: black;
}
.content_text {
  font-size: 1.1em;
  color: #757575;
  font-family: "Montserrat", sans-serif;
}
.author_section {
  font-family: "Montserrat", sans-serif;
  margin-left: 10px;
  color: #757575;
}
</style>