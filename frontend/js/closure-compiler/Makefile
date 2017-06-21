compile:
	java -jar closure-compiler.jar \
	--js ../src/** \
	--js_output_file ../min/bundle.min.js \
	--only_closure_dependencies \
	--closure_entry_point=ngmaterial.module \
	--js ../../lib/google-closure-library/closure/goog/** \
	--angular_pass \
	--generate_exports \
	--create_source_map ../min/bundle.min.map \
	--source_map_format=V3 \
	--externs contrib/externs/angular-1.3.js \
	--externs contrib/externs/angular-material.js
