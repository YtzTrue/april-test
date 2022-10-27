<template>
  <div>
    <h1>Houston, we have a problem:(</h1>
    <router-link :to="{name: 'main'}">Back to main</router-link>
  </div>
  </template>

  <style scoped>
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  </style>
