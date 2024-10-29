import { build } from 'esbuild';
import { lessLoader } from "esbuild-plugin-less";
import progress from "@olton/esbuild-plugin-progress";
import autoprefixer from "@olton/esbuild-plugin-autoprefixer";
import unlink from "@olton/esbuild-plugin-unlink";
import { replace } from "esbuild-plugin-replace";
import pkg from "./package.json" assert {type: "json"};

const production = process.env.MODE === "production"
const version = pkg.version

const banner = `
/*!
 ███╗   ███╗███████╗████████╗██████╗  ██████╗     ██╗   ██╗██╗
 ████╗ ████║██╔════╝╚══██╔══╝██╔══██╗██╔═══██╗    ██║   ██║██║
 ██╔████╔██║█████╗     ██║   ██████╔╝██║   ██║    ██║   ██║██║
 ██║╚██╔╝██║██╔══╝     ██║   ██╔══██╗██║   ██║    ██║   ██║██║
 ██║ ╚═╝ ██║███████╗   ██║   ██║  ██║╚██████╔╝    ╚██████╔╝██║
 ╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝      ╚═════╝ ╚═╝                                                             

 * Metro UI v${version} Components Library  (https://metroui.org.ua)
 * Copyright 2012-${new Date().getFullYear()} by Serhii Pimenov
 * Licensed under MIT
 */
`

await build({
    entryPoints: ['./source/default.js'],
    outfile: './lib/metro.js',
    bundle: true,
    minify: production,
    sourcemap: false,
    banner: {
        js: banner
    },
    plugins: [
        progress({
            text: 'Building Metro UI...',
            succeedText: `Metro UI built successfully in %s ms!`
        }),
        lessLoader(),
        autoprefixer(),
        replace({
            '__BUILD_TIME__': new Date().toLocaleString(),
            '__VERSION__': version,
        })
    ],
})

await build({
    entryPoints: ['./source/index.js'],
    outfile: './lib/metro.all.js',
    bundle: true,
    minify: production,
    sourcemap: false,
    banner: {
        js: banner
    },
    plugins: [
        progress({
            text: 'Building Metro UI with icons...',
            succeedText: 'Metro UI with icons built successfully in %s ms!'
        }),
        lessLoader(),
        autoprefixer(),
        replace({
            '__BUILD_TIME__': new Date().toLocaleString(),
            '__VERSION__': version,
        })
    ],
})

await build({
    entryPoints: ['./source/icons.js'],
    outfile: './lib/icons.js',
    bundle: true,
    minify: production,
    sourcemap: false,
    plugins: [
        progress({
            text: 'Building Metro UI icons...',
            succeedText: 'Metro UI icons built successfully in %s ms!'
        }),
        lessLoader(),
        unlink({
            files: ['./lib/icons.js']
        })
    ],
})

