function distance(p: {x:number,y:number}){
  return p.x*p.x + p.y*p.y
}
distance({x:1}) // error
distance({x:1, y:2}) // ok
distance({x:1,y:2,z:3}) // should ok, why?
