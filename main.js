function descendingOrder(n){
    let points = String(n).split("")
    let f = points.sort(function(a, b){return b - a});
    let g=f.toString().replaceAll(",", "")
    return +g
  }