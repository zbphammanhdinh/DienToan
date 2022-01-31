<template>
  <div class="contact">
    <Header />
    <div class="content">
      <v-sheet height="100vh">
        <v-container> </v-container>
      </v-sheet>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/parts/Footer";
import Header from "../components/parts/Header";
export default {
  name: "Contact",
  components: { Footer, Header },
  data() {
    return {
      //
    };
  }
};
</script>