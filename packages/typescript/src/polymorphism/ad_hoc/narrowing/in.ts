interface Fish {
  swim():void;
}
interface Bird {
  fly():void;
}
function move(pet: Fish | Bird) {
    if ("swim" in pet) {
        return pet.swim();
    }
    return pet.fly();
}