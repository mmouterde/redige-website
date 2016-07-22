'use strict';

module.exports = function (grunt) {

    require('jit-grunt')(grunt, {
        fileblocks: 'grunt-file-blocks',
        protractor: 'grunt-protractor-runner',
        libsass: 'grunt-contrib-sass',
        connect: 'grunt-contrib-connect',
        watch: 'grunt-contrib-watch',
        wiredep: 'grunt-wiredep'
    });
    require('time-grunt')(grunt);

    var mainTemplate = grunt.file.read('app/sections/main.template.html', {encoding: 'utf8'});
    var navbarTemplate = grunt.file.read('app/sections/navbar.template.html', {encoding: 'utf8'});
    var featuresTemplate = grunt.file.read('app/sections/features.template.html', {encoding: 'utf8'});
    var aboutTemplate = grunt.file.read('app/sections/about.template.html', {encoding: 'utf8'});
    var pricingTemplate = grunt.file.read('app/sections/pricing.template.html', {encoding: 'utf8'});
    var contactTemplate = grunt.file.read('app/sections/contact.template.html', {encoding: 'utf8'});
    var footerTemplate = grunt.file.read('app/sections/footer.template.html', {encoding: 'utf8'});

    grunt.initConfig({
        watch: {
            css: {
                files: ['app/styles/**/*.scss'],
                tasks: [
                    'sass:dev'
                ]
            },
            html: {
                files: ['app/sections/*.template.html'],
                tasks: [
                    'copy:index',
                    'wiredep:dev',
                    'fileblocks:dev',
                    'replace:dev'
                ],
                options: {
                    reload: true
                }
            }
        },
        sass: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'app/styles',
                    src: ['**/*.scss'],
                    dest: 'app/styles',
                    ext: '.css'
                }]
            }
        },
        replace: {
            options: {
                patterns: [
                    {
                        match: 'main',
                        replacement: '<!-- replace:main -->\n' + mainTemplate + '\n<!-- end-replace -->'
                    },
                    {
                        match: 'navbar',
                        replacement: '<!-- replace:navbar -->\n' + navbarTemplate + '\n<!-- end-replace -->'
                    },
                    {
                        match: 'about',
                        replacement: '<!-- replace:about -->\n' + aboutTemplate + '\n<!-- end-replace -->'
                    },
                    {
                        match: 'features',
                        replacement: '<!-- replace:features -->\n' + featuresTemplate + '\n<!-- end-replace -->'
                    },
                    {
                        match: 'pricing',
                        replacement: '<!-- replace:pricing -->\n' + pricingTemplate + '\n<!-- end-replace -->'
                    },
                    {
                        match: 'contact',
                        replacement: '<!-- replace:contact -->\n' + contactTemplate + '\n<!-- end-replace -->'
                    },
                    {
                        match: 'footer',
                        replacement: '<!-- replace:footer -->\n' + footerTemplate + '\n<!-- end-replace -->'
                    }
                ]
            },
            dev: {
                files: {
                    'index.html': 'index.html'
                }
            }
        },
        wiredep: {
            dev: {
                src: ['index.html'],
                "overrides": {
                    "smooth-scroll": {
                        "main": ["dist/js/smooth-scroll.js"]
                    }
                }
            }
        },
        fileblocks: {
            dev: {
                files: [
                    {
                        src: 'index.html',
                        blocks: {
                            'style': {
                                src: ['app/styles/main.css']
                            },
                            'script': {
                                src: ['app/scripts/main.js']
                            }
                        }
                    }
                ]
            }
        },
        copy: {
            index: {
                src: 'index.template.html',
                dest: 'index.html'
            }
        },
        connect: {
            all: {
                options: {
                    port: 9002,
                    hostname: 'localhost'

                }
            }
        }
    });

    grunt.registerTask('dev', [
        'copy:index',
        'sass:dev',
        'wiredep:dev',
        'fileblocks:dev',
        'replace:dev',
        'connect:all',
        'watch'
    ]);

    grunt.registerTask('default', [
        'dev'
    ]);

};
