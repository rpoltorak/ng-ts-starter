import directive from '../common/decorators/directive';

@directive('$rootScope')
export default class HomeBoxDirective implements ng.IDirective {
    
    public templateUrl: string;
    public restrict: string;
    public scope: Object;

    constructor(private $rootScope: ng.IScope) {
        this.templateUrl = './app/home/homeDirective.html';
        this.restrict = 'EA';
        this.scope = {
            type: '='
        };
        
        //dependencies test
        console.log('$inject', $rootScope);
    }

    public link(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void {
        //scope attrs test
        console.log(attrs);
    }
    
}