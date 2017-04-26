# Tuber

Sample Youtube player. Shows:

###  Routing using
* Simple routing with parameters and active route
* API-call based Routing with `Router` service
* Link-based route with `routerLink` directive

###  Http Service integration to fetch videos
* Calling an `Http`-based API for YouTube with an API key
* Key passed via environments and using a custom environment (not checked in) for `ken`

### Reactive search form with
* De-bounced, unique input triggering API call
* Input triggered via observing form field's `valueChanges` observable

### Components
* Simple flex-box based video list component with encapsulated style css
* Integration with external youtube player component(ng-youtube-player-mini) 

### Modules
* Four module layout
* `AppModule` - top-level module
* `RoutingModule` - encapsulates router and creates route instructions
* `VideoListModule` - encapsulates list and service to fetch videos from YouTube
* `PlayerModule` - encapsulates player


