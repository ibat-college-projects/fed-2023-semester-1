const flower = 'tulip';

switch (flower) {
    case 'rose':
        console.log("Roses are red");
        break;
    case 'sunflower':
        console.log("Sunflowers are yellow");
        break;
    case 'violet':
        console.log("Violets are blue");
        break;
    case 'daffodil':
    case 'tulip':
        console.log(`${flower} smells lovely`);
        break;
    default:
        console.log("choose another flower");

}
