<template>
  <div id="app" class="font-display">
    <Header />

    <div class="px-5 py-5 md:px-16 md:py-10" v-show="generateQRCodeStatus">
      <div class="max-w-7xl my-0 mx-auto">
        <div class="md:flex md:-mx-10">
          <div class="flex flex-col md:flex-1 md:px-10 mb-10 md:mb-0">
            <Canvas />

            <div
              class="flex items-center justify-center p-3 mt-4 rounded border border-border"
            >
              <div
                aria-hidden="true"
                class="h-8 w-8 mr-3 flex flex-shrink-0 items-center justify-center text-2xl font-bold rounded-full bg-primary"
              >
                !
              </div>
              <span>试一试扫描二维码</span>
            </div>
          </div>

          <div class="md:flex-1 md:px-10">
            <Settings />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Canvas from '@/components/Canvas.vue';
import Settings from '@/components/Settings.vue';

export default {
  name: 'App',
  components: {
    Header,
    Canvas,
    Settings
  },
  computed: {
    generateQRCodeStatus() {
      return this.$store.state.qrCodeContentIndex == 1;
    },
    decodeShowStatus() {
      return this.$store.state.qrCodeContentIndex == 2;
    }
  }
}
</script>


<style scoped title="index">
@media print {
  @page {
    /*  1in=96px */
    size: 88cm 88cm;  /* 有效 */
  } 
  body {
    margin: 0;
    color: #000;
    background-color: #fff;
  }

  #printQr {
    size: 88% 88%; 
    border: 2px solid red;
    color: red;
    /*display: block;*/
  }
}
</style>

