import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import angular from 'rollup-plugin-angular';
import uglify from 'rollup-plugin-uglify';

export default {
    entry: 'app/main.ts',
    dest: 'dist/build.js',
    format: 'iife',
    plugins: [
        angular(),
        typescript(),
        nodeResolve({
            jsnext: true,
            main: true
        }),
        commonjs({
            include: [
                'node_modules/rxjs/**',
                'node_modules/@swimlane/**'
            ],
            namedExports: {
                'node_modules/@swimlane/ngx-datatable/release/index.js': [
                    'NgxDatatableModule',
                    'DatatableComponent'
                ]
            }
        }),
        uglify()
    ],
    onwarn: function(warning) {
        if (warning.code === 'THIS_IS_UNDEFINED') {
            return;
        }
        console.warn(warning.message);
    }
};
