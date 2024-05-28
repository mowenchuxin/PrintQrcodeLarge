<template>
    <div>
        <div id="printContent">
        ....
        打印内容
        </div>
        <a-button v-print="printObj" type="primary">打印</a-button>
    </div>
</template>

<script>
export default {
    name: "print",
    setup() {
        const printObj = {
            id: "printContent",
            popTitle: "页面打印",
        };
        return {
            printObj
        }
    }
}
</script>
<style>
/* 去掉页脚 */
@page {
  size: auto;
  margin: 15mm auto 5mm;
}