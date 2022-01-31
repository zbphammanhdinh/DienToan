<template>
  <div class="archive">
    <Header />
    <v-sheet class="mt-10">
      <v-row justify="center" style="margin-bottom: 10rem;">
        <v-col cols="11" md="9">
          <v-sheet
            style="margin-top: 5rem"
            v-for="(item, index) in published"
            :key="index"
          >
            <v-sheet height="400" v-if="JSON.parse(item.content).src">
              <v-img :src="JSON.parse(item.content).src" height="400"></v-img>
            </v-sheet>
            <div style="margin-top: -40px;">
              <v-btn color="white" large fab>
                <v-icon small>mdi-heart</v-icon>
                <div>48</div>
              </v-btn>
            </div>
            <h1
              class="content_title"
              v-text="JSON.parse(item.content).title"
            ></h1>
            <div class="mb-5 mt-5">
              <v-avatar>
                <img
                  src="../assets/admin.jpg"
                  alt="Dinh Pham"
                />
              </v-avatar>
              <span
                class="author_section"
                v-text="JSON.parse(item.author).name"
              ></span>
              <span class="ml-3 mr-2"><v-icon>mdi-minus</v-icon></span>
              <span class="author_section" v-text="item.createdAt"></span>
            </div>
            <div
              class="content_text"
              v-text="JSON.parse(item.content).text"
            ></div>
            <v-row align="center" class="mt-5">
              <v-btn v-for="icon in icons" :key="icon" icon class="mx-1" small>
                <v-icon color="black" size="17px">
                  {{ icon }}
                </v-icon>
              </v-btn>
              <div
                class="ml-5"
                style="border-top: 2px dashed #BDBDBD; width: 150px"
              ></div>
            </v-row>
          </v-sheet>
          <div class="text-center" style="margin-top: 4rem">
            <v-btn color="pink" dark tile class="mr-2" width="150">
              <div style="text-transform: capitalize">Previous</div>
            </v-btn>
            <v-btn color="pink" dark tile width="150">
              <div style="text-transform: capitalize">Next</div>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
    <Footer />
  </div>
</template>

<script>
import { retriveallblog } from "../components/postgreSQL-express-script";
import Footer from "../components/parts/Footer";
import Header from "../components/parts/Header";
export default {
  name: "Archive",
  components: { Footer, Header },
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
    };
  },
  // computed
  computed: {
    published() {
      return this.$store.getters.published;
    }
  },
  // mounted
  async mounted() {
    const response = await retriveallblog();
    this.$store.commit("updatearticle", response.data);
  }
};
</script>

<style scooped lang="css">
.carousel_title {
  font-family: "Montserrat", sans-serif;
  font-size: 1.65em;
  color: white;
  text-align: center;
}
.carousel_text {
  font-family: "Montserrat", sans-serif;
  font-size: 1.25em;
  margin-top: 10px;
  color: #616161;
}
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