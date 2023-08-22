// adding property exclude wont add the file to be compiled by ts
// "exclude":["node_modules"] is the default
// "include:["**/*.dev.ts"] if you added that you will need to list all the files you want to compile  and the path is any folder ** and any string ended by .dev.ts
// "files" : ["add path to different files to compile and want to include without overwriting all the default compiled files"]

// inside compilerOptions

// target is js language version it is set to old es to support older browser and includes defayult libraries so you dont have to modify lib array
// jsx is for react
// allowJs to make it compile .js files aswell as .ts if you have vanilla js files u can use
// checkJs it checks .js files for syntax errors and will show if any
//  you can set sourceMap to true if you went to source in inspect in browser you will be able to see .ts files now
// outDir : "./dist" will specify the location to output the js files after compiling ts files
// rootDir : "./users" will not replicate the folder
// removeComment will remove comments from .js generated files but not .ts
// downlevelIteration set it to true if the compiled loops behave differently that it should

// setting strict to true would specify all the below options to true so it is short for them
// noImplicitAny 
// any parameter of a function musnt have any type
function dataPrint(data) {
  console.log(data);
}
dataPrint("sd");

