function calculateArea(shape: string, ...args: number[]): number | undefined {
        if (shape === "square")  {
            const side = args[0];
            return side * side;
        }
        else if (shape === "rectangle")  {
            const length = args[0];
            const width = args[1];
            return length * width;
        }
        else if (shape === "circle")  {
            const radius = args[0];
            return Math.PI * radius * radius;
        }
        else if (shape === "triangle")  {
            const base = args[0];
            const height = args[1];
            return (base * height) / 2;
        }
}
console.log(calculateArea('square', 5)); 
console.log(calculateArea('rectangle', 4, 6)); 
console.log(calculateArea('circle', 3)); 
console.log(calculateArea('triangle', 4, 5)); 
