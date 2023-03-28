function init() {

    console.log({ fleetSalesObject });

    SetupCascadingList();

}

function SetupCascadingList() {

    const selectMf = document.querySelector("#selectMf");
    const selectModel = document.querySelector("#selectModel");
    const selectVersion = document.querySelector("#selectVersion");

    // Set up manufacturer

    for (const currentManufacturer in fleetSalesObject) {
        selectMf.options.add(new Option(currentManufacturer, currentManufacturer));
    }

    // Setting up the model - based on the manufacturer changing
    selectMf.onchange = () => {

        // console.log(`Changing to ${selectMf.value}`);

        selectModel.length = 0;
        selectVersion.length = 0;
        selectModel.options.add(new Option('Choose a model','0'))
        selectVersion.options.add(new Option('Choose a Version','0'))

        for (const model in fleetSalesObject[selectMf.value]) {

            selectModel.options.add(new Option(model, model));

        }

    }


    // Setting up the bodytype - based on the model changing

    selectModel.onchange = () => {
        console.log(`Changing to ${selectModel.value}`);

        selectVersion.length = 0;
      
        selectVersion.options.add(new Option('Choose a Version','0'))

        let versions = fleetSalesObject[selectMf.value][selectModel.value]


        for (const version of versions) {
          
            selectVersion.options.add(new Option(version, version));

        }

    }

}