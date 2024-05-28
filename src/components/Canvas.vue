<template>
  <div class="border border-border rounded flex-grow flex flex-col">
    <div
      v-show="qrValue"
      class="p-3 flex justify-end bg-white border-b border-border"
    >
      <CanvasButton text="下载" @click="downloadImage" />
      <PrintButton v-print ="'#printMe'" class="ml-5" text="打印"/>
    </div>

    <div id="printQr" class="flex justify-center items-center flex-grow text-center relative overflow-hidden p-5 md:p-0">
      <canvas v-show="false" ref="canvas" class="mx-auto" ></canvas>
      <img :src="dataUrl" id="printMe" width="3250" height="3250" class="size: 5cm 5cm"/>

      <p v-show="!qrValue">此处预览二维码</p>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode';
import CanvasButton from '@/components/CanvasButton.vue';
import PrintButton from '@/components/PrintButton.vue';

export default {
  name: 'Canvas',

  components: {
    CanvasButton,
    PrintButton,
  },

  data() {
    return {
      dataUrl: '',
    };
  },

  mounted() {
    this.generateQRCode();
    this.setDataUrl();
  },

  computed: {
    qrValue() {
      return this.$store.state.qrValue;
    },

    fileType() {
      return this.$store.state.fileType;
    },

    lightColor() {
      return this.$store.state.qrLightColor;
    },

    darkColor() {
      return this.$store.state.qrDarkColor;
    },

    propertiesToWatchForQRUpdate() {
      return `${this.qrValue} ${this.lightColor} ${this.darkColor}`;
    },
  },

  watch: {
    propertiesToWatchForQRUpdate() {
      this.generateQRCode();
      this.setDataUrl();
    },
  },

  methods: {
    generateQRCode() {
      if (!this.qrValue) return;

      QRCode.toCanvas(
        this.$refs.canvas,
        this.qrValue,
        {
          color: { light: this.lightColor, dark: this.darkColor },
          // width: 888;
          // height: 888;
          margin: 0,
        },
        (error) => {
          if (error) {
            console.log(error);
          }
        },
      );
    },

    setDataUrl() {
      this.dataUrl = this.$refs.canvas.toDataURL();
    },

    downloadImage() {
      const MIME_TYPE = `image/${this.fileType}`;
      const url = this.$refs.canvas.toDataURL(MIME_TYPE);
      const dlLink = document.createElement('a');

      dlLink.download = 'qrcode';
      dlLink.href = url;
      dlLink.dataset.downloadurl = `${MIME_TYPE}:${dlLink.download}:${dlLink.href}`;

      dlLink.click();
    },

  },
};
</script>
