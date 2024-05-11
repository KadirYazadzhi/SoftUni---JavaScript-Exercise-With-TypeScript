function BasketballEquipment(fee :number) :void {
    let sneakers :number = fee * 0.6;
    let kit :number = sneakers * 0.8;
    let balls :number = kit / 4;
    let accessories :number = balls / 5;
    let total :number = fee + sneakers + kit + balls + accessories;
    console.log(total);
}
BasketballEquipment(365);