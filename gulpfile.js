var gulp = require("gulp");
var ts  = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", () => {
    let tsResult = gulp.src("app/**/*.ts")
         .pipe(tsProject());

    return tsResult.js
        .pipe(gulp.dest("build"));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", () => {
    return gulp.src(["app/**/*", "!**/*.ts"])
        .pipe(gulp.dest("build"));
});


/**
 * Copy all required libraries into ../ build / lib directory.
 */
gulp.task("copyTo:libs", () => {
    return gulp.src([
            'node_modules/typescript/lib/typescript.js',
            'node_modules/core-js/client/shim.min.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/rxjs/bundles/Rx.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/**/@angular/**/bundles/*.umd.js'
        ])
        .pipe(gulp.dest("build/lib"));
});
// gulp.task("libs", () => {
//     return gulp.src([
//             'typescript/lib/typescript.js',
//             'core-js/client/shim.min.js',
//             'reflect-metadata/Reflect.js',
//             'rxjs/bundles/Rx.js',
//             'zone.js/dist/zone.js',
//             '@angular/**/bundles/*.umd.js'
//         ], {cwd: "node_modules/**"}) /* Glob required here. */
//         .pipe(gulp.dest("build/lib"));
// });


/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(["app/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["app/**/*.html", "app/**/*.css"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});


/**
 * Build the project.
 */
gulp.task("default", ['compile', 'resources', 'copyTo:libs'], () => {
    console.log("Building the project ...");
});