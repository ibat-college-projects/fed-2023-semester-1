console.log('dogfoo is loading')

function HumanYearsToDogYears(humanYears) {
    const DOGYEARS_RATIO = 7;

    let dogyears = humanYears * DOGYEARS_RATIO;

    console.log(`Human years is ${humanYears} so the dog is ${dogyears} in dog years`)

}

function HumanYearsToCatYears(CatCurrentAge) {
    let CatFirstYear = 15;
    let CatOtherYear = 4;

    let CatRealYears = CatFirstYear + ((CatCurrentAge - 1) * CatOtherYear)
    message = `My cat is ${CatRealYears} Cat years`
    console.log(message)

}


HumanYearsToDogYears(7);
HumanYearsToDogYears(14);
HumanYearsToDogYears(21);

HumanYearsToCatYears(5);
HumanYearsToCatYears(6);
HumanYearsToCatYears(7);
HumanYearsToCatYears(8);
HumanYearsToCatYears(9);