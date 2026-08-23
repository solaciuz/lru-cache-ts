export class LRUCache<K, V> {
  private map = new Map<K, V>();
  constructor(private cap: number) {}
  get(k: K): V | undefined {
    if (!this.map.has(k)) return undefined;
    const v = this.map.get(k)!; this.map.delete(k); this.map.set(k, v); return v;
  }
  set(k: K, v: V): void {
    if (this.map.has(k)) this.map.delete(k);
    else if (this.map.size >= this.cap) this.map.delete(this.map.keys().next().value!);
    this.map.set(k, v);
  }
}
