function animalType(animal :string) :void {
    if (animal === "dog") {
        console.log("mammal");
    }
    else if (animal === "crocodile" || animal === "tortoise" || animal === "snake") {
        console.log("reptile");
    }
    else {
        console.log("unknown");
    }
}
animalType("cat");