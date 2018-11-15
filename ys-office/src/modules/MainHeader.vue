<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/img/logo.png" height="103" width="170"/>
    </div>
    <nav class="menu">
      <a href="/index.html">首页</a>
      <a href="/advantage.html">空间优势</a>
      <a href="/solution.html">租赁方案</a>
      <span class="phone">021-85693339</span>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "MainHeader"
  }
</script>

<style lang="scss">
  .header {
    display: flex;
    padding: 0 51px 0 74px;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.9);
    height: 122px;
    .menu {
      font-size: 22px;
      font-weight: 500;
      line-height: 30px;
      display: inline-flex;
      align-items: center;
      width: 610px;
      a {
        color: #666;
        &.a-active {
          color: #F27D00;
        }
      }
      justify-content: space-between;
      .phone {
        color: #F27D00;
        margin-left: 40px;
      }
    }
  }


</style>
