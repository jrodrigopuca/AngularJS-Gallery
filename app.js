(function () {
    
    //Definir mi módulo
    var app = angular.module("myApp", []);
    
    //Definir controlador

    app.controller("myController", ['$http', function ($http) {
        var store = this;
        store.products =
        [
            {
                "name": "Nyan JT",
                "description": "Ham turkey pig brisket. Pork chop tri-tip boudin biltong tenderloin short ribs ribeye tongue beef ribs flank beef meatball cow strip steak andouille.",
                "image": "https://store-images.s-microsoft.com/image/apps.39154.9007199266291358.535e92e7-c15f-48b3-9889-feff968ccb3c.42a657f4-1495-4ffb-8d5b-ddf9983b6f06?w=200&h=200",
                "link": "https://www.microsoft.com/es-ar/store/games/nyan-jt/9wzdncrdfhdz"
            },
            {
                "name": "Protege",
                "description": "Brisket beef ribs chuck porchetta jowl. Swine spare ribs tongue, beef ham hock shoulder venison drumstick kevin fatback salami. ",
                "image": "https://store-images.s-microsoft.com/image/apps.52025.9007199266291356.1e305048-e5e6-41b1-896d-db9daa5b91d0.4985831e-e2c1-437e-ab5f-373d7d4de379?w=200&h=200",
                "link": "https://www.microsoft.com/es-ar/store/games/protege/9wzdncrdfhf1"
            },
            {
                "name": "Rock Season",
                "description": "Ground round ham kielbasa, ribeye fatback brisket turducken salami capicola bacon chuck.",
                "image": "https://store-images.s-microsoft.com/image/apps.5641.13510798882339631.753d82cb-b0bf-4866-9899-e5a83a6a3b47.f6751693-716b-46c1-b599-c217a10758ee?w=200&h=200",
                "link": "https://www.microsoft.com/es-ar/store/games/rock-season/9nblggh0x440"
            },
            {
                "name": "Defensa",
                "description": "Corned beef hamburger alcatra jerky brisket, shank filet mignon swine. Pork landjaeger doner ground round corned beef.",
                "image": "https://store-images.s-microsoft.com/image/apps.42508.9007199266291359.60aefc81-2c9a-4b9f-b24b-102845c74630.d81b2a37-910a-46a0-8819-5c36ebd506b7?w=200&h=200",
                "link": "https://www.microsoft.com/es-ar/store/games/defensa/9wzdncrdfhdx"
            }
        ];
        
        
        //En caso de que necesite usar un .json para cargar los datos
        
        /*
        $http.get('source.json').success(function (data) {
           store.products=data;
        });
        */

    }]);

})();

