<template>
  <div class="form">
    <v-card-actions class="mx-auto pa-0">
      <v-btn color="primary" text @click="createnewpost">
        <div class="form_title">Viết một tiêu đề</div>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="black" text @click="previewitem">
        <span style="text-transform: capitalize">Xem trước</span>
      </v-btn>
    </v-card-actions>
    <v-card
      min-height="550"
      max-height="550"
      elevation="5"
      style="overflow-y: auto; overflow-x: auto; border-radius: 5px;"
    >
      <v-card-text>
        <v-sheet width="100" v-if="item.content.src">
          <v-icon @click="removeupload">mdi-close</v-icon>
          <img :src="item.content.src" alt="article image" height="100" />
        </v-sheet>
        <v-textarea
          class="form_content_title"
          auto-grow
          flat
          solo
          name="input-7-4"
          rows="3"
          v-model="item.content.title"
        >
          <template v-slot:label>
            <h1 class="form_content_title">
              New title
            </h1>
          </template>
        </v-textarea>
        <v-sheet style="border: 2px dashed grey; border-radius: 10px;">
          <v-card-text>
            <input
              type="file"
              name="file_input"
              id="file_input"
              @input="uploadimage"
            />
          </v-card-text>
        </v-sheet>
        <v-textarea
          auto-grow
          solo
          label="Viết một tiêu đề...."
          name="input-7-4"
          rows="12"
          flat
          class="form_content_text"
          v-model="item.content.text"
        ></v-textarea>
      </v-card-text>
    </v-card>
    <v-card-actions class="mt-3">
      <v-btn
        style="border-radius: 10px"
        dark
        color="primary"
        class="pl-5 pr-5"
        large
        @click="publishitem"
      >
        <span style="text-transform: capitalize">Đăng bài</span>
      </v-btn>
      <v-btn
        style="border-radius: 10px"
        color="#e0e0e0"
        class="ml-2 pl-5 pr-5"
        large
        @click="savedraft"
      >
        <span style="text-transform: capitalize">Lưu</span>
        <span style="text-transform: lowercase" class="ml-1">bản nháp</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        style="border-radius: 10px"
        class="pl-5 pr-5"
        dark
        color="error"
        large
        @click="deleteitem"
      >
        <span style="text-transform: capitalize">Xóa</span>
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: ["item", "isEdited"],
  data() {
    return {
      url: null
    };
  },
  // methods
  methods: {
    // upload image
    uploadimage(e) {
      this.$emit("saveupload", e.target.files[0]);
    },
    // remove upload
    removeupload() {
      this.$emit("removeupload");
    },
    // create new post
    createnewpost() {
      this.$emit("createnewpost");
    },
    // preview item
    previewitem() {
      this.$emit("previewitem");
    },
    // save item
    savedraft() {
      this.$emit("savedraft");
    },
    // publish item
    publishitem() {
      this.$emit("publishitem");
    },
    // delete item
    deleteitem() {
      this.$emit("deletepost");
    }
  }
};
</script>

<style scooped lang="css">
.form_title {
  font-family: "Montserrat", sans-serif;
  text-transform: capitalize;
}
.form_content_title {
  font-family: "Montserrat", sans-serif;
  color: #616161;
  font-size: 1.5rem;
}
.form_content_text {
  font-family: "Montserrat", sans-serif;
  color: #616161;
  font-size: 1.25rem;
}
</style>