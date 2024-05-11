function projectCreation(name :string, projects :number) :void {
    const HOURS_FOR_ONE_PROJECTS :number = 3;
    let needHours :number = projects * HOURS_FOR_ONE_PROJECTS;
    console.log(`The architect ${name} will need ${needHours} hours to complete ${projects} project/s.`);
}
projectCreation("Yoan", 5);