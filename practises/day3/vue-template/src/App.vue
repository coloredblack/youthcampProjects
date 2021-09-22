<template>
  <div id="container">
    <div id="sidebar">
      <span @mousedown="dragRow">Row</span>
      <span @mousedown="dragCol">Col</span>
      <span @mousedown="dragBut">Button</span>
    </div>
    <div></div>
    <div class="row">
      <div class="col">
        <button>Test Button</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data:() => ({
    drag: {
      x0: 0,
      y0: 0,
      dx: 0,
      dy: 0,
      x: 0,
      y: 0,
      isDragging: false,
    },
    rows: {
      
    }
  }),
  components: {},
  methods: {
    dragStart(type) {
      this.drag.type = type;
      this.drag.isDragging = true;
      let move = e => {
        this.drag.x = e.clientX;
        this.drag.y = e.clientY;
      } 
      let up = e => {
        this.type.x = e.clientX;
        this.type.y = e.clientY;
        document.removeEventListener('mouseup', up);
        document.removeEventListener('mousedown',down)
      }

    },
    dragRow(){
      this.dragStart(row) 
    },
    dragCol(){
      this.dragStrat(col)
    },
    dragBtn(){
      this.dragStart(btn)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#sidebar {
  position: relative;
  width: 200px;
}
#col {
  color: green;
}
#row {
  height: 300px;
  width: 100%;
}
#btn {
  color: gray;
}
</style>
