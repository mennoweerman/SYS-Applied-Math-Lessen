class LinearFunction{
    constructor(slope,intercept){
    this.slope = slope; 
    this.intercept = intercept;
}
    y(x){
        return this.slope * x + this.intercept
    }
}
