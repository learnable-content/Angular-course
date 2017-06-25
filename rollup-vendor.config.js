import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';

export default {
    entry: 'app/vendor.ts',
    dest: 'dist/vendor.js',
    format: 'iife',
    plugins: [
        typescript(),
        nodeResolve({
            jsnext: true,
            main: true
        }),
        commonjs({
            include: ['node_modules/rxjs/**']
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
