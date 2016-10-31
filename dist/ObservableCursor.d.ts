import { Observable } from 'rxjs';
export declare class ObservableCursor<T> extends Observable<T[]> {
    private _zone;
    private _data;
    private _cursor;
    private _hCursor;
    private _observers;
    private _countObserver;
    static create<T>(cursor: Mongo.Cursor<T>): ObservableCursor<T>;
    constructor(cursor: Mongo.Cursor<T>);
    readonly cursor: Mongo.Cursor<T>;
    collectionCount(): Observable<number>;
    stop(): void;
    dispose(): void;
    fetch(): Array<T>;
    observe(callbacks: Mongo.ObserveCallbacks): Meteor.LiveQueryHandle;
    observeChanges(callbacks: Mongo.ObserveChangesCallbacks): Meteor.LiveQueryHandle;
    _runComplete(): void;
    _runNext(data: Array<T>): void;
    _addedAt(doc: any, at: any, before: any): void;
    _changedAt(doc: any, old: any, at: any): void;
    _removedAt(doc: any, at: any): void;
    _movedTo(doc: any, fromIndex: any, toIndex: any): void;
    _handleChange(): void;
    _observeCursor(cursor: Mongo.Cursor<T>): any;
}
