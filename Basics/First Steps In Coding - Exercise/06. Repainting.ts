function Repainting(nylon :number, paint :number, thunner :number, hours :number) :void {
    let totalProductPrice :number = ((nylon + 2) * 1.50) + (paint * 1.10 * 14.50) + (thunner * 5.00) + 0.40;
    let workPrice :number = (totalProductPrice * 0.3) * hours;
    let total :number = totalProductPrice + workPrice;
    console.log(total);
}
Repainting(10, 11, 4, 8);