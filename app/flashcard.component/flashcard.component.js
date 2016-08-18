System.register(['angular2/core', 'angular2/router', '../StopTimer/StopTimer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, StopTimer_1;
    var FlashcardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (StopTimer_1_1) {
                StopTimer_1 = StopTimer_1_1;
            }],
        execute: function() {
            FlashcardComponent = (function () {
                function FlashcardComponent(params) {
                    this.deck = {};
                    this.deckId = params.get("id");
                    console.log(this.deckId);
                }
                FlashcardComponent.prototype.loadPage = function () {
                    var _this = this;
                    console.log("hi tim");
                    $('#secret').hide();
                    $('#stop').show();
                    var url = "http://galvanize-cors-proxy.herokuapp.com/https://api.quizlet.com/2.0/sets/" + this.deckId + "?client_id=BGDhWP7Cth&whitespace=1";
                    $.get(url).done(function (data) {
                        _this.deck = data;
                        console.log(_this.deck);
                    });
                };
                FlashcardComponent.prototype.ngOnInit = function () {
                    $('#stop').hide();
                };
                FlashcardComponent = __decorate([
                    core_1.Component({
                        selector: 'flashcard',
                        directives: [StopTimer_1.StopTimer],
                        template: "\n        <main>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <a (click)=\"loadPage()\" (click)=\"timer.toggle()\" id=\"secret\"><button class=\"btn btn-primary btn-block\">Start Timer and Begin Studying</button></a>\n            <a id=\"stop\" (click)=\"timer.toggle()\"><button class=\"btn btn-primary btn-block\">Start / Stop Timer</button></a>\n          </div>\n        </div>\n            <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 hidden-sm hidden-xs well flashCardSidebar\">\n                <ul>\n                  <li *ngFor=\"#card of deck.terms\">{{card.term}}</li>\n                </ul>\n                </div>\n                <div class=\"col-lg-1 col-md-1 hidden-sm hidden-xs\"></div>\n                <div class=\"col-lg-8 col-md-8 well flashCardContainer\">\n                <h3>Deck: {{deck.title}}</h3>\n                <ul>\n        \n\n                </ul>\n                  <a><p>Click to Flip!</p></a>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-md-4\">\n                <stop-timer #timer>\n                      <div class=\"timer\">\n                        <div  class=\"time\" [innerHTML]=\"timer.timeString\"></div>\n                        <div class=\"controls\">\n                          <button class=\"btn\"(click)=\"timer.toggle()\">Toggle</button>\n                          <button class=\"btn\"(click)=\"timer.reset()\">Reset</button>\n                        </div>\n                      </div>\n                    </stop-timer>\n                </div>\n                <div class=\"col-sm-8 col-md-8 col-lg-8 text-center\">\n                  <button type=\"button\" class=\"btn btn-default btn-lg\">\n                  <span class=\"glyphicon glyphicon-menu-left\n                  \" aria-hidden=\"true\"></span> Last\n                  </button>\n                  <button type=\"button\" class=\"btn btn-default btn-lg\">\n                    <span class=\"glyphicon glyphicon-play\" aria-hidden=\"true\"></span> Flip\n                  </button>\n                  <button type=\"button\" class=\"btn btn-default btn-lg\">\n                    <span class=\"glyphicon glyphicon-menu-right\" aria-hidden=\"true\"></span> Next\n                  </button>\n                </div>\n            </div>\n        </main>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], FlashcardComponent);
                return FlashcardComponent;
            }());
            exports_1("FlashcardComponent", FlashcardComponent);
        }
    }
});
//# sourceMappingURL=flashcard.component.js.map