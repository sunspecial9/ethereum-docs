angular
    .module('ethdev')
    .directive('ethereumWikiTranslation', ethereumWikiTranslation);

function ethereumWikiTranslation($compile, $templateCache, $state) {

    return {
        restrict: 'E',
        scope: {
            page: '=',
            language: '=',
            url: '='
        },
        link: function (scope, element, attrs) {

            if (scope.page[scope.language]){
                scope.translation = scope.page[scope.language]
            } else {
                scope.message = true;
                scope.translation = scope.page['english'];
            }

            scope.language = scope.language.charAt(0).toUpperCase() + scope.language.slice(1);

            // If there is translation or English original
            if (scope.translation){
                element.append($compile(
                    $templateCache.get('client/modules/wiki/views/wiki.translation.ng.html')
                )(scope));
            }

        }
    };

}
