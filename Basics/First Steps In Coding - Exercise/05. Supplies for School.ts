function SuppliesForSchool(pens :number, markers :number, cleaner :number, procent :number) :void {
    let total :number = (pens * 5.80 + markers * 7.20 + cleaner * 1.20) * (1 - (procent / 100));
    console.log(total);
};
SuppliesForSchool(2, 3, 4, 25);