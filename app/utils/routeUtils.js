export function isChildRoute(parentRoute, currentRoute) {
  return currentRoute.startsWith(parentRoute) && currentRoute !== parentRoute;
}
