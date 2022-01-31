<template>
  <div class="header">
    <div class="d-flex d-md-none">
      <v-app-bar flat color="white">
        <v-btn color="success" text>
          <span class="header_title">BLOG</span>
          <div
            class="ml-2 mr-2"
            style="border-left: 2px solid black; height: 20px;"
          ></div>
          <span class="header_title pink--text">PAGE</span>
        </v-btn>
        <v-spacer></v-spacer>
        <v-menu offset-y left transition="scale-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon large color="black">mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list width="200" dense>
            <v-list-item to="/" active-class="pink--text">
              <v-list-item-title>Trang chủ</v-list-item-title>
            </v-list-item>
            <v-list-item to="/archive" active-class="pink--text">
              <v-list-item-title>Lưu trữ</v-list-item-title>
            </v-list-item>
            <v-list-item to="/about" active-class="pink--text">
              <v-list-item-title>Về chúng tôi</v-list-item-title>
            </v-list-item>
            <v-list-item to="/contact" active-class="pink--text">
              <v-list-item-title>Liên hệ</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item to="/login" active-class="pink--text">
              <v-list-item-title>Đăng nhập</v-list-item-title>
            </v-list-item>
            <v-list-item to="/signup" active-class="pink--text">
              <v-list-item-title>Đăng ký</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>
    <div class="d-none d-md-flex">
      <v-app-bar color="white" height="250" flat prominent>
        <v-row justify="center" class="mt-10">
          <v-col cols="12" md="9">
            <v-row justify="space-between" align="center">
              <div class="icons">
                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  icon
                  class="mx-1"
                  small
                >
                  <v-icon color="black" size="20px">
                    {{ icon }}
                  </v-icon>
                </v-btn>
              </div>
              <div>
                <img src="../../assets/logo.jpeg" alt="logo" height="100" />
              </div>
              <div>
                <v-btn icon>
                  <v-icon color="black">mdi-magnify</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="black">mdi-heart</v-icon>
                </v-btn>

                <v-menu offset-y left transition="scale-transition">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon color="black">mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list width="200">
                    <v-list-item to="/login">
                      <v-list-item-title>Đăng nhập</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/signup">
                      <v-list-item-title>Đăng xuất</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-row>
          </v-col>
        </v-row>

        <template v-slot:extension>
          <v-app-bar flat color="white">
            <v-row justify="center">
              <v-btn color="success" text to="/">
                <span class="header_text">Trang chủ</span>
              </v-btn>
              <v-btn color="success" text to="/about">
                <span class="header_text">Về chúng tôi</span>
              </v-btn>
              <v-btn text>
                <span class="header_title">BLOG</span>
                <div
                  class="ml-2 mr-2"
                  style="border-left: 2px solid black; height: 20px;"
                ></div>
                <span class="header_title pink--text">PAGE</span>
              </v-btn>
              <v-btn color="success" text to="/archive">
                <span class="header_text">Lưu trữ</span>
              </v-btn>
              <v-btn color="success" text to="/contact">
                <span class="header_text">Liên hệ</span>
              </v-btn>
            </v-row>
          </v-app-bar>
        </template>
      </v-app-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
    };
  }
};
</script>

<style scooped lang="css">
.header_text {
  text-transform: capitalize;
  color: rgb(102, 102, 102);
}
.header_title {
  text-transform: capitalize;
  color: rgb(92, 91, 91);
  font-size: 20px;
}
</style>