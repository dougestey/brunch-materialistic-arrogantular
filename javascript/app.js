!function(){"use strict";function t(t,e){t.otherwise("/"),e.theme("default").primaryPalette("green").accentPalette("light-green")}function e(t,e,o){t.$state=e,t.$stateParams=o}var o=["ngMaterial","templates","app.home","app.posts","app.post"];angular.module("app",o).config(t).run(e),t.$inject=["$urlRouterProvider","$mdThemingProvider"],e.$inject=["$rootScope","$state","$stateParams"]}(),function(){"use strict";function t(t){t.state("home",{url:"/",views:{main:{controller:"HomeCtrl",controllerAs:"homeCtrl",templateUrl:"app/home/home.tpl.html"}},data:{pageTitle:"Home",viewClass:"home"}})}angular.module("app.home",["ui.router","app.services"]).config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t){t.state("posts.detail",{url:"/{id:[0-9]+}",views:{"main@":{controller:"PostCtrl",controllerAs:"postCtrl",templateUrl:"app/post/post.tpl.html"}},data:{pageTitle:"Post",viewClass:"post"}})}angular.module("app.post",["ui.router","app.services"]).config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t){t.state("posts",{url:"/posts",views:{main:{controller:"PostsCtrl",controllerAs:"postsCtrl",templateUrl:"app/posts/posts.tpl.html"}},data:{pageTitle:"Posts",viewClass:"posts"}})}angular.module("app.posts",["ui.router","app.services"]).config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";angular.module("app.services",["ngResource"])}(),function(){"use strict";function t(t){function e(){t.all().then(o)}function o(t){s.grid.length=0;for(var e=[{rs:2,cs:2},{rs:1,cs:2},{rs:1,cs:2}],o=0;o<t.length;o++){var r=t[o],i=e[o]?e[o]:{rs:1,cs:1},n=r.title.split(" ").slice(0,3).join(" "),a={rowSpan:i.rs,colSpan:i.cs,imageUrl:r.thumbnailUrl,title:n,id:r.id};s.grid.push(a)}}var s=this;s.grid=[],e()}angular.module("app.home").controller("HomeCtrl",t),t.$inject=["PhotoService"]}(),function(){"use strict";function t(t,e){var o=this;o.post=void 0,t.get(e.id).then(function(t){o.post=t})}angular.module("app.post").controller("PostCtrl",t),t.$inject=["PhotoService","$stateParams"]}(),function(){"use strict";function t(t){var e=this;e.posts=[],t.all().then(function(t){e.posts=t})}angular.module("app.posts").controller("PostsCtrl",t),t.$inject=["PhotoService"]}(),function(){"use strict";function t(t){function e(){return s.query({_limit:11}).$promise}function o(t){return s.get({id:t}).$promise}this.all=e,this.get=o;var s=t("http://jsonplaceholder.typicode.com/photos/:id")}angular.module("app.services").service("PhotoService",t),t.$inject=["$resource"]}();