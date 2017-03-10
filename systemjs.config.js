/**
	* System configuration for Angular 2 samples
	* Adjust as necessary for your application needs.
*/
(function (global) {
	var paths = {
            // paths serve as alias
            'npm:': './build/lib/'
	};
	// map tells the System loader where to look for things
	var map = {
		'app':                        	'./app', // 'dist',
		'tsconfig.json':				'./tsconfig.json',
		'typescript': 					'npm:typescript.js',
		'reflect-metadata':           	'npm:Reflect.js', // npm: means path of directory --> './build/lib/'
		'@angular':                   	'npm:@angular',
		'rxjs':                       	'./node_modules/rxjs'
	};
	// packages tells the System loader how to load when no filename and/or no extension
	var packages = {
		'app':                        	{ main: 'main.ts',  defaultExtension: 'ts' },
		'rxjs':                       	{ defaultExtension: 'js' },
		'reflect-metadata':				{ main: 'Reflect', defaultExtension: 'ts' }
	};
	var ngPackageNames = [
		'core',
		'common',
		'compiler',
		'platform-browser',
		'platform-browser-dynamic',
		'forms',
		'http',		
		'router'
	];
	// Individual files (~300 requests):
	function packIndex(pkgName) {
		packages['@angular/'+pkgName] = { main: 'index.ts', defaultExtension: 'ts' };
	}
	// Bundled (~40 requests):
	function packUmd(pkgName) {
		packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
	}
	// Most environments should use UMD; some (Karma) need the individual index files
	var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
	// Add package entries for angular packages
	ngPackageNames.forEach(setPackageConfig);
	
	var config = {
		transpiler: 'typescript',
		typescriptOptions: {
			emitDecoratorMetadata: true,
			tsconfig: true
		},
        meta: {
            'typescript': {
                "exports": "ts"
            }
		},
		paths: paths,
		map: map,
		packages: packages
	};

	System.config(config);
})(this);