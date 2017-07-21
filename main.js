function draw() {
  const canvas = document.getElementById('tutorial')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')
    //code here
    canvas.mousedown(function(e) {
      let mouseX = e.pageX - this.offsetLeft
      let mouseY = e.pageY - this.offsetTop

      paint = true
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop)
      redraw()
    })
    canvas.mousemove(function(e) {
      if (paint) {
        addClick(e.pageX = this.offsetLeft, e.pageY - this.offsetTop, true)
        redraw()
      }
    })
    canvas.mouseup(function(e) {
      paint = false
    })
    
  } else {
    //unsupported code
    console.log('canvas not supported');
  }
}
