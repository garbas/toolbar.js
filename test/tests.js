$(document).ready(function() {  

    function teardown() {
        $.toolbar.remove();
    }

    module("toolbar.js", { teardown: teardown});

    test('testing default options', 2,  function() {
        $.toolbar.initialize();
        deepEqual($.toolbar.options, $.toolbar.default_options);
        deepEqual($.toolbar.options, {
            id: 'toolbar',
            name: 'toolbar',
            klass: 'toolbar',
            klass_category_prefix: 'toolbar-category-',
            buttons: []
        });
    });

    test('testing setting up custom options', 1, function() {
        $.toolbar.initialize({
            id: 'demo-toolbar',
            name: 'demo-toolbar',
            klass: 'demo-toolbar'
        });
        deepEqual($.toolbar.options, {
            id: 'demo-toolbar',
            name: 'demo-toolbar',
            klass: 'demo-toolbar',
            klass_category_prefix: 'toolbar-category-',
            buttons: []
        });
    });

    test('initialize with button', 2, function() {
        $.toolbar.initialize({
            buttons: [{ title: 'Button1' }]
        });
        equal($.toolbar.buttons.length, 1);
        equal($.toolbar.buttons.first().attributes.title, 'Button1');
    });

    test('add button after initialize', 2, function() {
        $.toolbar.initialize();
        $.toolbar.buttons.add({ title: 'Button2' });

        equal($.toolbar.buttons.length, 1);
        equal($.toolbar.buttons.first().attributes.title, 'Button2');
    });
});
