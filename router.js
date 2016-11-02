module.exports = {
    /* components */
    Router: require("react-router/lib/Router"),
    Link: require("react-router/lib/Link"),
    IndexLink: require("react-router/lib/IndexLink"),
    withRouter: require("react-router/lib/withRouter"),
    /* components (configuration) */
    IndexRedirect: require("react-router/lib/IndexRedirect"),
    IndexRoute: require("react-router/lib/IndexRoute"),
    Redirect: require("react-router/lib/Redirect"),
    Route: require("react-router/lib/Route"),
    /* mixins */
    History: require("react-router/lib/History"),
    Lifecycle: require("react-router/lib/Lifecycle"),
    RouteContext: require("react-router/lib/RouteContext"),
    /* utils */
    useRoutes: require("react-router/lib/useRoutes"),
    createRoutes: require("react-router/lib/RouteUtils").createRoutes,
    RouterContext: require("react-router/lib/RouterContext"),
    RoutingContext: require("react-router/lib/RoutingContext"),
    PropTypes: require("react-router/lib/PropTypes"),
    locationShape: require("react-router/lib/PropTypes").locationShape,
    routerShape: require("react-router/lib/PropTypes").routerShape,
    match: require("react-router/lib/match"),
    useRouterHistory: require("react-router/lib/useRouterHistory"),
    formatPattern: require("react-router/lib/PatternUtils").formatPattern,
    applyRouterMiddleware: require("react-router/lib/applyRouterMiddleware"),
        /* histories */
    browserHistory: require("react-router/lib/browserHistory"),
    hashHistory: require("react-router/lib/hashHistory"),
    createMemoryHistory: require("react-router/lib/createMemoryHistory"),
}

module.exports.routerRedux = {
    syncHistoryWithStore: require('react-router-redux/lib/sync'),

    LOCATION_CHANGE: require('react-router-redux/lib/reducer').LOCATION_CHANGE,
    routerReducer: require('react-router-redux/lib/reducer').routerReducer,

    CALL_HISTORY_METHOD: require('react-router-redux/lib/actions').CALL_HISTORY_METHOD,
    push: require('react-router-redux/lib/actions').push,
    replace: require('react-router-redux/lib/actions').replace,
    go: require('react-router-redux/lib/actions').go,
    goBack: require('react-router-redux/lib/actions').goBack,
    goForward: require('react-router-redux/lib/actions').goForward,
    routerActions: require('react-router-redux/lib/actions').routerActions,

    routerMiddleware: require('react-router-redux/lib/middleware'),
}
