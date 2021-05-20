var simplemaps_countrymap_mapdata = {
    main_settings: {
        //General settings
        width: "responsive", //'700' or 'responsive'
        background_color: "#FFFFFF",
        background_transparent: "yes",
        border_color: "#gray",

        //State defaults
        state_description: "",
        state_color: "#88A4BC",
        state_hover_color: "#3B729F",
        state_url: "",
        border_size: 1.5,
        all_states_inactive: "no",
        all_states_zoomable: "yes",

        //Location defaults
        location_url: "",
        location_color: "#FF0067",
        location_opacity: 0.8,
        location_hover_opacity: 1,
        location_size: 25,
        location_type: "image",
        location_image_source: "branch-buxoro.jpg",
        location_border_color: "#FFFFFF",
        location_border: 2,
        location_hover_border: 2.5,
        all_locations_inactive: "no",
        all_locations_hidden: "no",

        //Label defaults
        label_color: "#d5ddec",
        label_hover_color: "#d5ddec",
        label_size: 22,
        label_font: "Arial",
        hide_labels: "no",
        hide_eastern_labels: "no",

        //Zoom settings
        zoom: "yes",
        manual_zoom: "no",
        back_image: "no",
        initial_back: "no",
        initial_zoom: "-1",
        initial_zoom_solo: "no",
        region_opacity: 1,
        region_hover_opacity: 0.6,
        zoom_out_incrementally: "yes",
        zoom_percentage: 0.99,
        zoom_time: 0.5,

        //Popup settings
        popup_color: "white",
        popup_opacity: 0.9,
        popup_shadow: 1,
        popup_corners: 5,
        popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
        popup_nocss: "no",

        //Advanced settings
        div: "map",

        auto_load: "yes",
        url_new_tab: "no",
        images_directory: "default",
        fade_time: 0.1,
        link_text: "View Website",
        popups: "detect",
        state_image_url: "",
        state_image_position: "",
        location_image_url: "pin.svg",
        location_image_hover_url: "pin-hover.svg",
    },
    state_specific: {
        UZB354: {
            name: "Букҳоро",

        },
        UZB355: {
            name: "Хоразм",

        },
        UZB356: {
            name: "Қарақалпоғистон",
        },
        UZB357: {
            name: "Навои"
        },
        UZB358: {
            name: "Самарқанд"
        },
        UZB361: {
            name: "Қашқадарё"
        },
        UZB362: {
            name: "Сурҳандарё"
        },
        UZB363: {
            name: "Aндижон"
        },
        UZB364: {
            name: "Фарғона"
        },
        UZB365: {
            name: "Наманган"
        },
        UZB370: {
            name: "Жиззаҳ"
        },
        UZB371: {
            name: "Сирдарё"
        },
        UZB372: {
            name: "Ташкент"
        },
        UZB4828: {
            name: "Ташкент"
        }
    },
    locations: {
        "0": {
            lat: "41.3166677",
            lng: "69.25",
            name: '<img  style=" margin: 0 50px; " src="img/map_logo.png" width="100px" />',
            description: '<div class"map"><div id="buxoro"><p style="display: block; font-size: 18px;">“Ўқитувчилар ассоциацияси”</p></div></div>',
        }
    },
    labels: {
        name: 'pin',
    },
    legend: {
        entries: []
    },
    regions: {}
};