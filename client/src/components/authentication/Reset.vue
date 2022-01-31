<template>
  <div class="reset">
    <v-row justify="center" align="center" class="fill-height">
      <v-card width="350" style="border-radius: 10px" elevation="5">
        <v-card-text class="pa-5 mx-auto">
          <div class="auth_title">
            ĐẶT LẠI MẬT KHẨU
          </div>
          <v-text-field
            name="email"
            label="Email"
            outlined
            dense
            single-line
            prepend-inner-icon="mdi-email"
          ></v-text-field>
          <v-text-field
            name="new_password"
            label="Mật khẩu mới"
            outlined
            dense
            single-line
            prepend-inner-icon="mdi-lock"
          ></v-text-field>
          <v-btn color="pink" dark large block to="/login">
            <span style="text-transform: capitalize">Đặt lại</span>
            <span style="text-transform: lowercase" class="ml-1">Mật khẩu</span>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Reset",
  data() {
    return {
      //
    };
  }
};
</script>

<style scooped lang="css">
.reset {
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