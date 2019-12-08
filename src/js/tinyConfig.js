import appConfig from "./appConfig";

let config = {
    selector: 'textarea',

    schema: "html5",

    plugins: [
        "advlist autolink autosave autoresize link image lists charmap hr anchor",
        "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime nonbreaking",
        "table template colorpicker paste textcolor importcss textpattern spellchecker"
    ],

    external_plugins: {
        'helloworld': '/dist/tiny/plugins/helloworld/plugin.js'
    },

    menubar: false
};

let editorType = {
    full: {
        toolbar: [
            'undo redo | bold italic underline strikethrough | alignleft aligncenter alignright  | blockquote | formatselect | spellchecker',
            'cut copy paste removeformat | searchreplace | bullist numlist | outdent indent | hr | link unlink anchor image code | inserttime',
            'table | subscript superscript | charmap | visualchars visualblocks nonbreaking | template | helloworld'
        ]
    },
    simple: {
        toolbar: [
            'undo redo | bold italic underline strikethrough | alignleft aligncenter alignright | blockquote | table | spellchecker',
            'cut copy paste removeformat | searchreplace | bullist numlist | code | charmap | visualblocks | link unlink'
        ],
    }
};


let tinyConfig = {
    getAPIKey: function () {
        return appConfig.get('tiny.key');
    },
    getConfig: function (key = 'full') {
        if (!key || !editorType.hasOwnProperty(key))
        {
            // default to full if there is a key, but it doesn't exist
            key = 'full';
        }
        return Object.assign({}, config, editorType[key]);
    }
};

Object.freeze(tinyConfig);

export default tinyConfig;