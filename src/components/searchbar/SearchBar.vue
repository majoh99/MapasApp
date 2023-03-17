<script lang="ts" src="./SearchBar.ts" />

<template>
  <div class="searchbar-container">
    <input 
      class="form-control"
      type="text"
      placeholder="Buscar lugares..."
      v-model="searchTerm"
    >
    <SearchResults />
  </div>
</template>

<style scoped>
.searchbar-container{
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
  left: 30px;
  overflow: hidden;
  padding: 5px;
  position: fixed;
  top: 30px;
  width: 300px;
  z-index: 999,
}
</style>