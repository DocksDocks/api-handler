export function HASH_DECODE(hash: string, handlerHash: string) {
  if (hash === handlerHash) return true;
  return false;
}
