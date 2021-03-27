export default function isStatelessComponent(type) {
  return typeof type.render !== 'function';
}
