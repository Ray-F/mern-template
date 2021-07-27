/**
 * Repository interface for encapsulating data persistence.
 */
interface IRepository<T> {
  list(): Promise<T[]>;

  save(item: T): Promise<T>;
}

export { IRepository };
