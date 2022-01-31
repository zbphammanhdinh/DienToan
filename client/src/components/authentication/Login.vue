<template>
  <div class="login">
    <v-row justify="center" align="center" class="fill-height">
      <v-card width="350" style="border-radius: 10px" elevation="5">
        <v-card-text class="pa-5 mx-auto">
          <div class="auth_title">ĐĂNG NHẬP</div>
          <v-text-field
            name="email"
            label="Email"
            outlined
            dense
            single-line
            prepend-inner-icon="mdi-email"
          ></v-text-field>
          <div class="text-end mb-1">
            <router-link to="/login-help" style="text-decoration: none"
              >Quên mật khẩu</router-link
            >
          </div>
          <v-text-field
            name="password"
            label="Mật khẩu"
            outlined
            dense
            single-line
            prepend-inner-icon="mdi-lock"
          ></v-text-field>
          <v-btn color="pink" dark large block to="/login">
            <span style="text-transform: capitalize">Đăng nhập</span>
          </v-btn>
          <v-card-actions class="mx-auto pa-0 mt-5 mb-5">
            <v-divider></v-divider>
            <span class="mr-1 ml-1">HOẶC</span>
            <v-divider></v-divider>
          </v-card-actions>
          <v-btn color="#e0e0e0" large block to="/signup">
            <span style="text-transform: capitalize">Đăng</span>
            <span class="ml-1" style="text-transform: lowercase">ký</span>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      //
    };
  }
};
</script>

<style scooped lang="css">
.login {
  height: 100vh;
}
.auth_title {
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}
</style>