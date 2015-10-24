/**
 * Created by pierre on 20/09/15.
 */
'use strict';


angular.module('core').service('SearchModel', [

    function() {

        ///////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////  CONSTRUCTOR
        var SearchModel = function() {

            /**
             * Current Search Type ( May be 'bySlugName' or 'byMapBounds' )
             * @type {string}
             */
            this.searchType = SearchModel.SEARCH_BY_SLUGNAME;

            /**
             * The current slugName in the page
             * @type {string}
             */
            // Define the city by slugName ( {postcode}-{cityName}
            this.slugName = 'undefined-slugName';


            this.city = {};

            /**
             * The current mapBounds in the page
             * @type {array}
             */
            // Define the menus object
            this.mapBounds = [];

            /**
             * The current references to display
             * @type {array}
             */
            this.loadedClassifieds = [];

            this.id = Math.floor(Math.random() * 100);
        };

        SearchModel.SEARCH_BY_SLUGNAME    = 'bySlugName';
        SearchModel.SEARCH_BY_MAPBOUNDS   = 'byMapBounds';


        SearchModel.prototype.setMapBounds = function(value) {
            this.mapBounds = value.replace(/ /g, '');
        };

        return new SearchModel();

    }
]);
