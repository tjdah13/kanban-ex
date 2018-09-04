<template>
  <div id="app">

    <div class="page-header">
      <h1>Kanban Board</h1>
      <p class="lead">An example of a Kanban board, written in Vue.js</p>
    </div>

    <div> 주석2 : App Component에서 에서 아래 router-view 호출 </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
  .page-header h1 {
    font-weight: 300;
  }
</style>
