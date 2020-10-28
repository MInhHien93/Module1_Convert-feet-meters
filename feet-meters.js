function convert(value,str) {
    switch (str) {
        case "Feet":
            return 3.279 * value;
            break;
        case "Meters":
            return 0.305 * value;
            break;
    }

}
console.log(convert(2,"Feet"));
console.log(convert(2,"Meters"));
